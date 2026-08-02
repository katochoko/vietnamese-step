(() => {
  "use strict";

  const BANK_KEY = "vietnamese-step-bank-v1";
  const PROGRESS_KEY = "vietnamese-step-progress-v1";
  const app = document.querySelector("#app");

  let bank = load(BANK_KEY, window.defaultQuestionBank);
  let progress = load(PROGRESS_KEY, {});
  let screen = "home";
  let levelId = bank.levels[0]?.id || "";
  let activeLevel = null;
  let activeGroup = null;
  let questionIndex = 0;
  let answer = "";
  let checked = false;
  let correct = false;
  let toneIssue = false;
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

  function save() {
    localStorage.setItem(BANK_KEY, JSON.stringify(bank));
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
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
    return String(value ?? "")
      .normalize("NFKC")
      .trim()
      .toLocaleLowerCase()
      .replace(/[.!?。！？、，,]+$/u, "")
      .replace(/\s+/g, " ");
  }

  function stripVietnameseMarks(value) {
    return normalize(value)
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .replaceAll("đ", "d");
  }

  function allGroups() {
    return bank.levels.flatMap((level) => level.groups);
  }

  function isUnlocked(level, index) {
    return index === 0 || Boolean(progress[level.groups[index - 1]?.id]?.completed);
  }

  function typeLabel(question) {
    if (question.type === "meaning-choice") return "単語・選択";
    if (question.type === "blank-choice") return "空欄・選択";
    if (question.type === "blank-input") return "空欄・入力";
    return question.partial ? "部分翻訳" : "翻訳・入力";
  }

  function instruction(question) {
    if (question.type === "meaning-choice") {
      return question.direction === "vi-ja" ? "ベトナム語の意味を選んでください。" : "日本語に合うベトナム語を選んでください。";
    }
    if (question.type === "blank-choice" || question.type === "blank-input") return "空欄に入る言葉を答えてください。";
    if (question.direction === "vi-ja") return question.partial ? "示された部分を日本語にしてください。" : "日本語に訳してください。";
    return question.partial ? "示された部分をベトナム語にしてください。" : "ベトナム語に訳してください。";
  }

  function hasVietnamesePrompt(question) {
    return (
      question.type.startsWith("blank-") ||
      (question.type === "meaning-choice" && question.direction === "vi-ja") ||
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
    const level = bank.levels.find((item) => item.id === levelId) || bank.levels[0];

    app.innerHTML = `
      <main class="shell">
        ${header("home")}
        <section class="hero">
          <div>
            <span class="eyebrow">VIỆT NGỮ · MỖI NGÀY MỘT CHÚT</span>
            <h1>今日も、<br><em>10問</em>だけ進もう。</h1>
            <p>日本語を手がかりに、ベトナム語の単語・空欄補充・翻訳を練習します。声調記号の違いも見逃さず、全問正解で次のグループへ進めます。</p>
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
            ${bank.levels.map((item) => `
              <button class="tab ${item.id === level.id ? "active" : ""}" data-level="${esc(item.id)}" role="tab" aria-selected="${item.id === level.id}">
                <span class="tab-code">${esc(item.label)}</span>
                <span class="tab-copy"><strong>${esc(item.name)}</strong><small>${esc(item.description)}</small></span>
              </button>
            `).join("")}
          </div>
          <div class="groups">
            ${level.groups.map((group, index) => {
              const unlocked = isUnlocked(level, index);
              const result = progress[group.id];
              const formats = [...new Set(group.questions.map(typeLabel))].join("・");
              return `
                <article class="group ${result?.completed ? "clear" : ""} ${unlocked ? "" : "locked"}">
                  <div class="group-num">${String(index + 1).padStart(2, "0")}</div>
                  <div class="group-body">
                    <div class="group-top">
                      <div class="group-title"><small>${esc(group.title)}</small><h3>${esc(group.description)}</h3></div>
                      ${result?.completed ? `<span class="badge">✓ CLEAR</span>` : !unlocked ? `<span class="badge lock">🔒 LOCKED</span>` : ""}
                    </div>
                    <div class="group-bottom">
                      <div class="details">
                        <span>${group.questions.length}問</span><span>${esc(formats)}</span>
                        ${result ? `<span>最高 ${result.bestScore}/${group.questions.length}</span>` : ""}
                      </div>
                      <button class="${result?.completed ? "secondary" : "primary"}" ${unlocked ? "" : "disabled"}
                        data-start="${esc(group.id)}" data-level-id="${esc(level.id)}">
                        ${result?.completed ? "復習する" : "挑戦する"} →
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
    const title = toneIssue ? "✓ 正解です。声調記号を確認しましょう" : correct ? "✓ 正解です！" : "もう一歩です";
    const explanation = toneIssue
      ? "ローマ字の綴りが合っているため正解です。声調が変わると意味も変わるので、正しい表記も確認しておきましょう。"
      : question.explanation;
    return `
      <div class="feedback ${correct ? "ok" : ""} ${toneIssue ? "tone" : ""}">
        <h3>${title}</h3>
        ${!correct || toneIssue ? `<p><strong>正しい表記：</strong>${esc(question.modelAnswer || question.answers?.join(" / "))}</p>` : ""}
        <p>${esc(explanation)}</p>
        ${toneIssue && question.explanation ? `<small>${esc(question.explanation)}</small>` : ""}
        ${question.translation ? `<small>${esc(question.translation)}</small>` : ""}
        <button class="primary wide" data-action="next">${questionIndex === activeGroup.questions.length - 1 ? "結果を見る" : "次の問題へ"} →</button>
      </div>
    `;
  }

  function renderQuiz() {
    const question = activeGroup.questions[questionIndex];
    const percentage = ((questionIndex + 1) / activeGroup.questions.length) * 100;
    app.innerHTML = `
      <main class="shell quiz">
        <header class="quiz-head">
          <button class="back" data-action="home">← 学習一覧</button>
          <div class="quiz-title"><span>${esc(activeLevel.label)}・${esc(activeGroup.title)}</span><strong>${esc(activeGroup.description)}</strong></div>
          <span class="counter">${questionIndex + 1} / ${activeGroup.questions.length}</span>
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
            ${hasVietnamesePrompt(question) ? `<button class="speak" data-action="speak" aria-label="ベトナム語音声を再生" title="ベトナム語音声を再生">越音声</button>` : ""}
          </div>
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
    const passed = score === activeGroup.questions.length;
    app.innerHTML = `
      <main class="result-wrap">
        <section class="result ${passed ? "passed" : ""}">
          <div class="emblem">${passed ? "✓" : score}</div>
          <span class="eyebrow">${esc(activeLevel.label)}・${esc(activeGroup.title)}</span>
          <h1>${passed ? "グループクリア！" : "あと少しです"}</h1>
          <p class="score"><strong>${score}</strong> / ${activeGroup.questions.length} 正解</p>
          <p>${passed ? "全問正解です。次のグループがある場合は解放されました。" : "次へ進むには全問正解が必要です。声調や訳し方を確認して、もう一度挑戦しましょう。"}</p>
          <div class="result-actions">
            ${passed ? "" : `<button class="primary" data-action="retry">もう一度挑戦</button>`}
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
            問題形式は <code>meaning-choice</code>、<code>blank-choice</code>、<code>blank-input</code>、<code>translation</code> の4種類です。翻訳は正解候補との自動照合と、自分で判定する方式の両方に対応します。
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

  function startGroup(level, group) {
    activeLevel = level;
    activeGroup = group;
    questionIndex = 0;
    score = 0;
    resetQuestion();
    screen = "quiz";
    render();
  }

  function resetQuestion() {
    answer = "";
    checked = false;
    correct = false;
    toneIssue = false;
    selfReview = false;
    audioNotice = "";
  }

  function evaluate(question) {
    const answers = Array.isArray(question.answers) ? question.answers : [];
    correct = answers.some((item) => normalize(item) === normalize(answer));
    toneIssue = false;
    if (!correct && question.answerLanguage === "vi" && answers.length) {
      const plain = stripVietnameseMarks(answer);
      toneIssue = answers.some((item) => stripVietnameseMarks(item) === plain);
    }
    if (toneIssue) correct = true;
    checked = true;
    if (correct) score += 1;
  }

  function finishGroup() {
    const passed = score === activeGroup.questions.length;
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
          levelId = bank.levels[0].id;
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
      levelId = button.dataset.level;
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
      speakVietnamese(activeGroup.questions[questionIndex]);
    } else if (action === "check") {
      const question = activeGroup.questions[questionIndex];
      if (!answer.trim()) return;
      if (question.type === "translation" && question.grading === "self") selfReview = true;
      else evaluate(question);
      renderQuiz();
    } else if (action === "self-correct" || action === "self-wrong") {
      correct = action === "self-correct";
      checked = true;
      selfReview = false;
      if (correct) score += 1;
      renderQuiz();
    } else if (action === "next") {
      if (questionIndex === activeGroup.questions.length - 1) finishGroup();
      else {
        questionIndex += 1;
        resetQuestion();
        renderQuiz();
      }
    } else if (action === "retry") {
      startGroup(activeLevel, activeGroup);
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
        levelId = bank.levels[0]?.id || "";
        notice = "最初の問題集に戻しました。";
        save();
        renderData();
      }
    }
  });

  render();
})();
