(() => {
  "use strict";

  const BANK_KEY = "vietnamese-step-bank-v6";
  const PREVIOUS_BANK_KEYS = ["vietnamese-step-bank-v5", "vietnamese-step-bank-v4"];
  const PROGRESS_KEY = "vietnamese-step-progress-v1";
  const LAST_LEVEL_KEY = "vietnamese-step-last-level-v1";
  const app = document.querySelector("#app");

  let bank = loadBank();
  harmonizeQuestionMix(bank);
  let progress = load(PROGRESS_KEY, {});
  let screen = "home";
  let levelId = load(LAST_LEVEL_KEY, bank.levels[0]?.id || "");
  let activeLevel = null;
  let activeGroup = null;
  let quizQuestions = [];
  let remainingQuestions = new Set();
  let roundNumber = 1;
  let questionIndex = 0;
  let answer = "";
  let checked = false;
  let correct = false;
  let toneIssue = false;
  let characterIssue = false;
  let selfReview = false;
  let audioNotice = "";
  let score = 0;
  let notice = "";

  function load(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function loadBank() {
    const saved = load(BANK_KEY, null);
    if (saved) return saved;
    const fresh = JSON.parse(JSON.stringify(window.defaultQuestionBank));
    const previous = PREVIOUS_BANK_KEYS.map((key) => load(key, null)).find((item) => item?.levels);
    if (!previous?.levels) return fresh;
    const previousQuestions = new Map(
      previous.levels.flatMap((level) => level.groups || []).flatMap((group) => group.questions || []).map((question) => [question.id, question])
    );
    fresh.levels.flatMap((level) => level.groups).flatMap((group) => group.questions).forEach((question) => {
      const oldQuestion = previousQuestions.get(question.id);
      if (!Array.isArray(oldQuestion?.answers)) return;
      const merged = [...(question.answers || []), ...oldQuestion.answers];
      question.answers = merged.filter((item, index) => merged.findIndex((candidate) => normalize(candidate) === normalize(item)) === index);
    });
    return fresh;
  }

  function harmonizeQuestionMix(questionBank) {
    questionBank.levels.forEach((level) => {
      if (level.id === "typing") return;
      level.groups.forEach((group) => {
        if (level.id.startsWith("vocabulary")) {
          group.questions.forEach((question) => {
            if (question.type === "meaning-input") {
              const accepted = new Set((question.answers || []).map(normalize));
              const distractors = group.questions
                .filter((candidate) => candidate !== question && candidate.direction === question.direction)
                .map((candidate) => candidate.answers?.[0])
                .filter((candidate) => candidate && !accepted.has(normalize(candidate)));
              question.type = "meaning-choice";
              question.choices = shuffle([question.answers?.[0], ...shuffle([...new Set(distractors)]).slice(0, 3)]);
            } else if (Array.isArray(question.choices)) {
              question.choices = shuffle(question.choices);
            }
          });
          return;
        }
        const choiceQuestions = group.questions.filter((question) => question.type.endsWith("-choice"));
        const translationCount = group.questions.filter((question) => question.type === "translation").length;
        const targetChoiceCount = translationCount >= 3 ? 3 : translationCount > 0 ? 4 : choiceQuestions.length;
        choiceQuestions.slice(targetChoiceCount).forEach((question) => {
          question.type = question.type.replace("-choice", "-input");
          question.modelAnswer ||= question.answers?.[0] || "";
          delete question.choices;
        });
      });
    });
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function questionStage(question) {
    if (question.type === "typing") return 0;
    if (question.type.endsWith("-choice")) return 1;
    if (question.type === "translation") return 3;
    return 2;
  }

  function orderQuestions(questions, randomizeWithinStages) {
    const stages = new Map();
    questions.forEach((question) => {
      const stage = questionStage(question);
      if (!stages.has(stage)) stages.set(stage, []);
      stages.get(stage).push(question);
    });
    return [...stages.keys()].sort((a, b) => a - b).flatMap((stage) =>
      randomizeWithinStages ? shuffle(stages.get(stage)) : stages.get(stage)
    );
  }

  function save() {
    localStorage.setItem(BANK_KEY, JSON.stringify(bank));
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }

  function rememberLevel(level) {
    if (!level?.id) return;
    levelId = level.id;
    localStorage.setItem(LAST_LEVEL_KEY, level.id);
  }

  function centerActiveLevelTab() {
    requestAnimationFrame(() => {
      const tabs = document.querySelector(".tabs");
      const activeTab = tabs?.querySelector(".tab.active");
      if (!tabs || !activeTab) return;
      const left = activeTab.offsetLeft - (tabs.clientWidth - activeTab.offsetWidth) / 2;
      tabs.scrollTo({ left: Math.max(0, left), behavior: "auto" });
    });
  }

  function esc(value) {
    return String(value ?? "")
      .normalize("NFC")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(value) {
    const normalized = String(value ?? "")
      .normalize("NFKC")
      .replace(/[\u200B-\u200D\u2060\uFEFF]/gu, "")
      .trim()
      .toLocaleLowerCase()
      .replace(/[.!?。！？、，,]+$/u, "")
      .replace(/\s+/g, " ");
    return /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(normalized)
      ? normalized.replace(/\s+/g, "")
      : normalized;
  }

  function stripVietnameseMarks(value) {
    return normalize(value)
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .replaceAll("đ", "d");
  }

  function stripVietnameseTones(value) {
    return normalize(value)
      .normalize("NFD")
      .replace(/[\u0300\u0301\u0303\u0309\u0323]/gu, "")
      .normalize("NFC");
  }

  function requiresVietnameseLetters() {
    return activeLevel?.id === "vocabulary-b" || activeLevel?.id === "b1";
  }

  function allGroups() {
    return bank.levels.flatMap((level) => level.groups);
  }

  function isLevelUnlocked(level) {
    if (!level.requires) return true;
    if (progress[level.requires]?.completed) return true;
    return level.groups.some((group) => Boolean(progress[group.id]));
  }

  function isUnlocked(level, index) {
    if (!isLevelUnlocked(level)) return false;
    return index === 0 || Boolean(progress[level.groups[index - 1]?.id]?.completed);
  }

  function typeLabel(question) {
    if (question.type === "typing") return "タイピング";
    if (question.type === "meaning-choice") return "単語・選択";
    if (question.type === "meaning-input") return "単語・入力";
    if (question.type === "blank-choice") return "空欄・選択";
    if (question.type === "blank-input") return "空欄・入力";
    return question.partial ? "部分翻訳" : "翻訳・入力";
  }

  function instruction(question) {
    if (question.type === "typing") return "表示されたベトナム語を、そのまま入力してください。";
    if (question.type === "meaning-choice") {
      return question.direction === "vi-ja" ? "ベトナム語の意味を選んでください。" : "日本語に合うベトナム語を選んでください。";
    }
    if (question.type === "meaning-input") {
      return question.direction === "vi-ja" ? "ベトナム語の意味を日本語で入力してください。" : "日本語に合うベトナム語を入力してください。";
    }
    if (question.type === "blank-choice" || question.type === "blank-input") return "空欄に入る言葉を答えてください。";
    if (question.direction === "vi-ja") return question.partial ? "示された部分を日本語にしてください。" : "日本語に訳してください。";
    return question.partial ? "示された部分をベトナム語にしてください。" : "ベトナム語に訳してください。";
  }

  function hasVietnamesePrompt(question) {
    return (
      question.type === "typing" ||
      question.type.startsWith("blank-") ||
      (question.type === "meaning-choice" && question.direction === "vi-ja") ||
      (question.type === "meaning-input" && question.direction === "vi-ja") ||
      (question.type === "translation" && question.direction === "vi-ja")
    );
  }

  function vietnameseVoice() {
    if (!("speechSynthesis" in window)) return null;
    return window.speechSynthesis.getVoices().find((voice) => {
      const language = String(voice.lang || "").toLocaleLowerCase().replaceAll("_", "-");
      return language === "vi" || language.startsWith("vi-");
    }) || null;
  }

  function promptText(question) {
    return question.prompt ?? question.sentence ?? "";
  }

  function header(active = "home") {
    return `
      <header class="topbar">
        <button class="brand" data-action="home" aria-label="Vietnamese Step ホーム">
          <span class="brand-mark">VS</span>
          <span class="brand-copy"><strong>Vietnamese Step</strong><small>10問ずつ、声調もていねいに。</small></span>
        </button>
        <nav aria-label="メインメニュー">
          <button class="${active === "home" ? "active" : ""}" data-action="home">学習</button>
          <button class="${active === "data" ? "active" : ""}" data-action="data">データ管理</button>
        </nav>
      </header>
      ${notice ? `<div class="notice">${esc(notice)}</div>` : ""}
    `;
  }

  function footer() {
    return `<footer><strong>Vietnamese Step</strong><span>進捗はこのブラウザに保存されます。</span></footer>`;
  }

  function renderHome() {
    const groups = allGroups();
    const completed = groups.filter((group) => progress[group.id]?.completed).length;
    const attempts = Object.values(progress).reduce((sum, item) => sum + Number(item.attempts || 0), 0);
    const rememberedLevel = bank.levels.find((item) => item.id === levelId);
    const level = rememberedLevel && isLevelUnlocked(rememberedLevel) ? rememberedLevel : bank.levels[0];
    levelId = level.id;
    const nextGroupIndex = level.groups.findIndex((group, index) =>
      isUnlocked(level, index) && !progress[group.id]?.completed
    );

    app.innerHTML = `
      <main class="shell">
        ${header("home")}
        <section class="hero">
          <div>
            <span class="eyebrow">VIỆT NGỮ · MỖI NGÀY MỘT CHÚT</span>
            <h1>今日も、<br><em>10問</em>だけ進もう。</h1>
            <p>タイピングのあとにAレベルの語彙を学び、A1〜A2へ進みます。A2を終えるとBレベルの語彙が開き、その修了後にB1へ進めます。</p>
          </div>
          <div class="stats" aria-label="学習状況">
            <div><strong>${completed}</strong><span>クリア</span></div>
            <div><strong>${groups.length}</strong><span>全グループ</span></div>
            <div><strong>${attempts}</strong><span>挑戦回数</span></div>
          </div>
        </section>
        <section class="section">
          <div class="section-head">
            <div><span class="eyebrow">CHỌN TRÌNH ĐỘ</span><h2>レベルを選ぶ</h2></div>
            <span class="save">この端末に自動保存</span>
          </div>
          <div class="tabs" role="tablist">
            ${bank.levels.map((item) => {
              const unlocked = isLevelUnlocked(item);
              return `
              <button class="tab ${item.id === level.id ? "active" : ""} ${unlocked ? "" : "locked"}" data-level="${esc(item.id)}" role="tab" aria-selected="${item.id === level.id}" ${unlocked ? "" : "disabled"}>
                <span class="tab-code">${esc(item.label)}</span>
                <span class="tab-copy"><strong>${esc(item.name)}</strong><small>${esc(item.description)}${unlocked ? "" : "・前のコース修了で解放"}</small></span>
              </button>
            `;
            }).join("")}
          </div>
          ${level.id === "typing" ? `<div class="course-note"><strong>スマホではベトナム語キーボードを使います。</strong><span>このコースは練習のため、文字と声調記号まで正しく入力すると正解になります。</span></div>` : ""}
          ${level.id === "vocabulary" ? `<div class="course-note"><strong>Aレベルの語彙を選択式で練習します。</strong><span>10問すべて選択式です。タイピング修了後、A1と同時に開きます。</span></div>` : ""}
          ${level.id === "vocabulary-b" ? `<div class="course-note"><strong>Bレベルの語彙と表現を選択式で練習します。</strong><span>10問すべて選択式です。A2修了後に開き、この4グループを終えるとB1へ進めます。</span></div>` : ""}
          <div class="groups">
            ${level.groups.map((group, index) => {
              const unlocked = isUnlocked(level, index);
              const result = progress[group.id];
              const pendingCount = !result?.completed && Array.isArray(result?.pendingQuestionIds)
                ? result.pendingQuestionIds.length
                : 0;
              const isNext = index === nextGroupIndex;
              const formats = [...new Set(group.questions.map(typeLabel))].join("・");
              return `
                <article class="group ${result?.completed ? "clear" : ""} ${unlocked ? "" : "locked"} ${isNext ? "next" : ""}">
                  <div class="group-num">${String(index + 1).padStart(2, "0")}</div>
                  <div class="group-body">
                    <div class="group-top">
                      <div class="group-title"><small>${esc(group.title)}</small><h3>${esc(group.description)}</h3></div>
                      ${result?.completed ? `<span class="badge">✓ CLEAR</span>` : pendingCount ? `<span class="badge progress">↻ 次はここ・続きから</span>` : !unlocked ? `<span class="badge lock">🔒 LOCKED</span>` : isNext ? `<span class="badge progress">→ 次はここ</span>` : ""}
                    </div>
                    <div class="group-bottom">
                      <div class="details">
                        <span>${group.questions.length}問</span><span>${esc(formats)}</span>
                        ${pendingCount ? `<span>残り ${pendingCount}問</span>` : ""}
                        ${result ? `<span>最高 ${result.bestScore}/${group.questions.length}</span>` : ""}
                      </div>
                      <button class="${result?.completed ? "secondary" : "primary"}" ${unlocked ? "" : "disabled"}
                        data-start="${esc(group.id)}" data-level-id="${esc(level.id)}">
                        ${result?.completed ? "復習する" : pendingCount ? `残り ${pendingCount}問を解く` : "挑戦する"} →
                      </button>
                    </div>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </section>
        ${footer()}
      </main>
    `;
    centerActiveLevelTab();
  }

  function answerArea(question) {
    const choices = question.choices;
    if (Array.isArray(choices)) {
      return `
        <div class="choices">
          ${choices.map((choice, index) => `
            <button class="choice ${answer === choice ? "selected" : ""}" ${checked || selfReview ? "disabled" : ""} data-choice="${esc(choice)}">
              <span>${String.fromCharCode(65 + index)}</span>${esc(choice)}
            </button>
          `).join("")}
        </div>
      `;
    }
    const placeholder = question.answerLanguage === "vi" ? "ベトナム語で入力" : "日本語で入力";
    return `
      <label class="answer"><span>あなたの答え</span>
        <textarea id="answer-input" rows="3" autocomplete="off" placeholder="${placeholder}" ${checked || selfReview ? "disabled" : ""}>${esc(answer)}</textarea>
      </label>
    `;
  }

  function reviewPanel(question) {
    return `
      <div class="self-review">
        <span class="eyebrow">SELF CHECK</span>
        <h3>模範解答と比べてください</h3>
        <div class="answer-compare">
          <div><small>あなたの答え</small><p>${esc(answer)}</p></div>
          <div><small>模範解答の例</small><p>${esc(question.modelAnswer)}</p></div>
        </div>
        <p class="review-note">翻訳には複数の正しい言い方があります。意味が伝わっていれば「正解にする」を選んでください。</p>
        <div class="review-actions">
          <button class="primary" data-action="self-correct">正解にする</button>
          <button class="secondary" data-action="self-wrong">復習が必要</button>
        </div>
      </div>
    `;
  }

  function feedbackPanel(question) {
    const title = characterIssue
      ? correct ? "✓ 正解です。ベトナム語の文字と声調を確認しましょう" : "ベトナム語の文字を正しく入力しましょう"
      : toneIssue
      ? correct ? "✓ 正解です。声調記号を確認しましょう" : "声調記号まで入力しましょう"
      : correct ? "✓ 正解です！" : "もう一歩です";
    const explanation = characterIssue
      ? correct
        ? "Aレベルでは英字のつづりが合っているため正解です。ă・â・ê・ô・ơ・ư・đ と声調を含む正しい表記も確認しておきましょう。"
        : question.type === "typing"
          ? "タイピングコースでは、ベトナム語固有の文字と声調記号が見本と同じになるまで練習します。"
          : "Bレベルでは、ă・â・ê・ô・ơ・ư・đ を正しく区別して入力します。声調だけの違いは正解扱いになります。"
      : toneIssue
      ? correct
        ? "ローマ字の綴りが合っているため正解です。声調が変わると意味も変わるので、正しい表記も確認しておきましょう。"
        : "タイピングコースでは、文字と声調記号が見本と同じになるまで練習します。"
      : question.explanation;
    const canRegisterAlternative = !correct && ["translation", "meaning-input"].includes(question.type);
    return `
      <div class="feedback ${correct ? "ok" : ""} ${toneIssue || characterIssue ? "tone" : ""}">
        <h3>${title}</h3>
        ${!correct || toneIssue || characterIssue ? `<p><strong>正しい表記：</strong>${esc(question.modelAnswer || question.answers?.join(" / "))}</p>` : ""}
        <p>${esc(explanation)}</p>
        ${(toneIssue || characterIssue) && question.explanation ? `<small>${esc(question.explanation)}</small>` : ""}
        ${question.translation ? `<small>${esc(question.translation)}</small>` : ""}
        ${canRegisterAlternative ? `
          <div class="translation-override">
            <p>正解候補にない別の言い方もあります。意味が合っている場合は、この回答を正解候補としてこの端末に保存できます。</p>
            <button class="secondary wide" data-action="accept-answer">この回答も正解として登録</button>
          </div>
        ` : ""}
        <button class="primary wide" data-action="next">${questionIndex === quizQuestions.length - 1 ? "結果を見る" : "次の問題へ"} →</button>
      </div>
    `;
  }

  function renderQuiz() {
    const question = quizQuestions[questionIndex];
    const percentage = ((questionIndex + 1) / quizQuestions.length) * 100;
    app.innerHTML = `
      <main class="shell quiz">
        <header class="quiz-head">
          <button class="back" data-action="home">← 学習一覧</button>
          <div class="quiz-title"><span>${esc(activeLevel.label)}・${esc(activeGroup.title)}${roundNumber > 1 ? `・復習 ${roundNumber - 1}` : ""}</span><strong>${esc(activeGroup.description)}</strong></div>
          <span class="counter">${questionIndex + 1} / ${quizQuestions.length}</span>
        </header>
        <div class="track"><span style="width:${percentage}%"></span></div>
        <section class="question">
          <div class="question-meta">
            <span class="eyebrow">CÂU HỎI ${String(questionIndex + 1).padStart(2, "0")}</span>
            <span class="format">${esc(typeLabel(question))}</span>
          </div>
          <p class="instruction">${esc(instruction(question))}</p>
          <div class="prompt-row">
            <h1 class="sentence" lang="${question.direction === "ja-vi" ? "ja" : "vi"}">${esc(promptText(question))}</h1>
            ${hasVietnamesePrompt(question) ? `<button class="speak" data-action="speak" aria-label="ベトナム語音声を再生" title="ベトナム語音声を再生">音声</button>` : ""}
          </div>
          ${question.type.startsWith("blank-") && question.translation ? `
            <p class="prompt-translation"><span>日本語訳</span>${esc(question.translation)}</p>
          ` : ""}
          ${audioNotice ? `<div class="audio-notice" role="status">${esc(audioNotice)}</div>` : ""}
          ${answerArea(question)}
          ${selfReview ? reviewPanel(question) : checked ? feedbackPanel(question) : `
            <button class="primary wide" data-action="check" ${answer.trim() ? "" : "disabled"}>
              ${question.type === "translation" && question.grading === "self" ? "模範解答を見る" : "答えを確認する"}
            </button>
          `}
        </section>
      </main>
    `;
    if (!question.choices && !checked && !selfReview) {
      const input = document.querySelector("#answer-input");
      input?.focus();
      if (input) input.selectionStart = input.value.length;
    }
  }

  function renderResult() {
    const passed = remainingQuestions.size === 0;
    const remaining = remainingQuestions.size;
    app.innerHTML = `
      <main class="result-wrap">
        <section class="result ${passed ? "passed" : ""}">
          <div class="emblem">${passed ? "✓" : score}</div>
          <span class="eyebrow">${esc(activeLevel.label)}・${esc(activeGroup.title)}</span>
          <h1>${passed ? "グループクリア！" : `残り ${remaining} 問です`}</h1>
          <p class="score"><strong>${score}</strong> / ${activeGroup.questions.length} 正解</p>
          <p>${passed ? "すべての問題を正解しました。次のグループがある場合は解放されました。" : `次は間違えた ${remaining} 問だけを出題します。正解済みの問題をやり直す必要はありません。`}</p>
          <div class="result-actions">
            ${passed ? "" : `<button class="primary" data-action="retry-missed">間違えた ${remaining} 問に再挑戦</button>`}
            <button class="${passed ? "primary" : "secondary"}" data-action="home">学習一覧へ</button>
          </div>
        </section>
      </main>
    `;
  }

  function renderData() {
    const groups = allGroups();
    const completed = groups.filter((group) => progress[group.id]?.completed).length;
    const attempts = Object.values(progress).reduce((sum, item) => sum + Number(item.attempts || 0), 0);
    const total = groups.reduce((sum, group) => sum + group.questions.length, 0);
    app.innerHTML = `
      <main class="shell">
        ${header("data")}
        <section class="section">
          <div class="data-head">
            <span class="eyebrow">DATA LIBRARY</span>
            <h1>問題と学習記録</h1>
            <p>問題集と進捗を別々のJSONファイルとして保存・復元できます。自分で作った問題集もここから読み込めます。</p>
          </div>
          <div class="data-grid">
            <article class="data-card">
              <h2>問題データ</h2>
              <p>現在は ${bank.levels.length} レベル、${groups.length} グループ、${total} 問を収録しています。</p>
              <div class="data-actions">
                <button class="primary" data-action="import-questions">JSONを読み込む</button>
                <button class="secondary" data-action="export-questions">書き出す</button>
              </div>
              <input id="questions-file" type="file" accept=".json,application/json" hidden>
            </article>
            <article class="data-card">
              <h2>学習記録</h2>
              <p>${completed} グループをクリア、合計 ${attempts} 回挑戦しています。記録はこのブラウザに自動保存されます。</p>
              <div class="data-actions">
                <button class="primary" data-action="import-progress">記録を読み込む</button>
                <button class="secondary" data-action="export-progress">書き出す</button>
              </div>
              <input id="progress-file" type="file" accept=".json,application/json" hidden>
            </article>
          </div>
          <div class="data-note">
            問題形式は <code>typing</code>、<code>meaning-choice</code>、<code>meaning-input</code>、<code>blank-choice</code>、<code>blank-input</code>、<code>translation</code> の6種類です。タイピングでは声調記号まで一致させ、語彙入力と翻訳では複数の正解候補を照合できます。
          </div>
          <div class="reset-row"><button class="text-button" data-action="reset-defaults">最初の問題集に戻す</button></div>
        </section>
        ${footer()}
      </main>
    `;
  }

  function render() {
    if (screen === "quiz") renderQuiz();
    else if (screen === "result") renderResult();
    else if (screen === "data") renderData();
    else renderHome();
  }

  function questionKey(group, question, index) {
    return typeof question.id === "string" ? question.id : `${group.id}-${index}`;
  }

  function questionsFromIds(group, ids) {
    const wanted = new Set(ids);
    return group.questions.filter((question, index) => wanted.has(questionKey(group, question, index)));
  }

  function remainingQuestionIds() {
    return activeGroup.questions.flatMap((question, index) =>
      remainingQuestions.has(question) ? [questionKey(activeGroup, question, index)] : []
    );
  }

  function savePartialProgress() {
    const old = progress[activeGroup.id] || {};
    if (old.completed) return;
    progress[activeGroup.id] = {
      attempts: Number(old.attempts || 0),
      bestScore: Math.max(Number(old.bestScore || 0), score),
      completed: false,
      pendingQuestionIds: remainingQuestionIds(),
      lastPlayedAt: new Date().toISOString()
    };
    save();
  }

  function startGroup(level, group) {
    rememberLevel(level);
    activeLevel = level;
    activeGroup = group;
    const saved = progress[group.id];
    const savedQuestions = !saved?.completed && Array.isArray(saved?.pendingQuestionIds)
      ? questionsFromIds(group, saved.pendingQuestionIds)
      : [];
    quizQuestions = savedQuestions.length
      ? orderQuestions(savedQuestions, false)
      : orderQuestions(group.questions, activeLevel.id !== "typing");
    remainingQuestions = new Set(quizQuestions);
    roundNumber = 1;
    questionIndex = 0;
    score = group.questions.length - remainingQuestions.size;
    resetQuestion();
    screen = "quiz";
    render();
  }

  function resetQuestion() {
    answer = "";
    checked = false;
    correct = false;
    toneIssue = false;
    characterIssue = false;
    selfReview = false;
    audioNotice = "";
  }

  function evaluate(question) {
    const answers = Array.isArray(question.answers) ? question.answers : [];
    correct = answers.some((item) => normalize(item) === normalize(answer));
    toneIssue = false;
    characterIssue = false;
    if (!correct && question.answerLanguage === "vi" && answers.length) {
      const tonePlain = stripVietnameseTones(answer);
      toneIssue = answers.some((item) => stripVietnameseTones(item) === tonePlain);
      if (!toneIssue) {
        const plain = stripVietnameseMarks(answer);
        characterIssue = answers.some((item) => stripVietnameseMarks(item) === plain);
      }
    }
    if (toneIssue && !question.strictTone) correct = true;
    if (characterIssue && !question.strictTone && !requiresVietnameseLetters()) correct = true;
    checked = true;
    if (correct) remainingQuestions.delete(question);
    score = activeGroup.questions.length - remainingQuestions.size;
    savePartialProgress();
  }

  function finishGroup() {
    const passed = remainingQuestions.size === 0;
    if (!passed) {
      screen = "result";
      render();
      return;
    }
    const old = progress[activeGroup.id] || {};
    progress[activeGroup.id] = {
      attempts: Number(old.attempts || 0) + 1,
      bestScore: Math.max(Number(old.bestScore || 0), score),
      completed: Boolean(old.completed || passed),
      lastPlayedAt: new Date().toISOString()
    };
    save();
    screen = "result";
    render();
  }

  function retryMissed() {
    quizQuestions = orderQuestions(
      activeGroup.questions.filter((question) => remainingQuestions.has(question)),
      false
    );
    roundNumber += 1;
    questionIndex = 0;
    resetQuestion();
    screen = "quiz";
    render();
  }

  function download(name, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  }

  function validateBank(value) {
    return value && Array.isArray(value.levels) && value.levels.length > 0 && value.levels.every((level) =>
      typeof level.id === "string" && Array.isArray(level.groups) && level.groups.every((group) =>
        typeof group.id === "string" && Array.isArray(group.questions) && group.questions.length > 0
      )
    );
  }

  function readJson(input, kind) {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const value = JSON.parse(reader.result);
        if (kind === "bank") {
          if (!validateBank(value)) throw new Error("問題データの形式が違います。");
          bank = value;
          harmonizeQuestionMix(bank);
          levelId = bank.levels[0].id;
          localStorage.setItem(LAST_LEVEL_KEY, levelId);
          notice = "問題データを読み込みました。";
        } else {
          if (!value || Array.isArray(value) || typeof value !== "object") throw new Error("学習記録の形式が違います。");
          progress = value;
          notice = "学習記録を読み込みました。";
        }
        save();
        renderData();
      } catch (error) {
        notice = `読み込めませんでした：${error.message}`;
        renderData();
      }
    };
    reader.readAsText(file);
  }

  function speakVietnamese(question) {
    if (!("speechSynthesis" in window)) {
      audioNotice = "このブラウザは音声再生に対応していません。";
      renderQuiz();
      return;
    }
    const voice = vietnameseVoice();
    if (!voice) {
      audioNotice = "この端末にベトナム語音声がありません。端末の音声設定で「ベトナム語」を追加すると再生できます。";
      renderQuiz();
      return;
    }
    audioNotice = "";
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(promptText(question).replace("___", question.answers?.[0] || ""));
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = 0.78;
    window.speechSynthesis.speak(utterance);
  }

  app.addEventListener("input", (event) => {
    if (event.target.id !== "answer-input") return;
    answer = event.target.value;
    const check = document.querySelector('[data-action="check"]');
    if (check) check.disabled = !answer.trim();
  });

  app.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.target.id !== "answer-input") return;
    event.preventDefault();
    if (answer.trim() && !checked && !selfReview) document.querySelector('[data-action="check"]')?.click();
  });

  app.addEventListener("change", (event) => {
    if (event.target.id === "questions-file") readJson(event.target, "bank");
    if (event.target.id === "progress-file") readJson(event.target, "progress");
  });

  app.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    notice = "";

    if (button.dataset.level) {
      rememberLevel(bank.levels.find((item) => item.id === button.dataset.level));
      renderHome();
      return;
    }
    if (button.dataset.choice !== undefined) {
      answer = button.dataset.choice;
      renderQuiz();
      return;
    }
    if (button.dataset.start) {
      const level = bank.levels.find((item) => item.id === button.dataset.levelId);
      const groupIndex = level?.groups.findIndex((item) => item.id === button.dataset.start) ?? -1;
      if (level && groupIndex >= 0 && isUnlocked(level, groupIndex)) startGroup(level, level.groups[groupIndex]);
      return;
    }

    const action = button.dataset.action;
    if (action === "home") {
      window.speechSynthesis?.cancel?.();
      screen = "home";
      render();
    } else if (action === "data") {
      screen = "data";
      render();
    } else if (action === "speak") {
      speakVietnamese(quizQuestions[questionIndex]);
    } else if (action === "check") {
      const question = quizQuestions[questionIndex];
      if (!answer.trim()) return;
      if (question.type === "translation" && question.grading === "self") selfReview = true;
      else evaluate(question);
      renderQuiz();
    } else if (action === "self-correct" || action === "self-wrong") {
      correct = action === "self-correct";
      checked = true;
      selfReview = false;
      if (correct) remainingQuestions.delete(quizQuestions[questionIndex]);
      score = activeGroup.questions.length - remainingQuestions.size;
      savePartialProgress();
      renderQuiz();
    } else if (action === "accept-answer") {
      const question = quizQuestions[questionIndex];
      if (!["translation", "meaning-input"].includes(question.type) || correct || !answer.trim()) return;
      const accepted = Array.isArray(question.answers) ? question.answers : [];
      if (!accepted.some((item) => normalize(item) === normalize(answer))) {
        question.answers = [...accepted, answer.normalize("NFC").trim()];
      }
      correct = true;
      toneIssue = false;
      characterIssue = false;
      remainingQuestions.delete(question);
      score = activeGroup.questions.length - remainingQuestions.size;
      savePartialProgress();
      save();
      renderQuiz();
    } else if (action === "next") {
      if (questionIndex === quizQuestions.length - 1) finishGroup();
      else {
        questionIndex += 1;
        resetQuestion();
        renderQuiz();
      }
    } else if (action === "retry-missed") {
      retryMissed();
    } else if (action === "import-questions") {
      document.querySelector("#questions-file")?.click();
    } else if (action === "export-questions") {
      download("vietnamese-step-questions.json", bank);
    } else if (action === "import-progress") {
      document.querySelector("#progress-file")?.click();
    } else if (action === "export-progress") {
      download("vietnamese-step-progress.json", progress);
    } else if (action === "reset-defaults") {
      if (window.confirm("問題集を最初の内容に戻しますか？ 学習記録は残ります。")) {
        bank = window.defaultQuestionBank;
        harmonizeQuestionMix(bank);
        levelId = bank.levels[0]?.id || "";
        localStorage.setItem(LAST_LEVEL_KEY, levelId);
        notice = "最初の問題集に戻しました。";
        save();
        renderData();
      }
    }
  });

  render();
})();
