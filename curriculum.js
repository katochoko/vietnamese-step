// A1実践・B1実践と、既存コースの段階調整。
// 既存グループのIDは維持し、保存済みの進捗を壊さないようにする。
(() => {
  const bank = window.defaultQuestionBank;
  if (!bank?.levels) return;

  const mc = (id, direction, prompt, choices, answer, explanation) => ({
    id, type: "meaning-choice", direction, prompt, choices, answers: [answer], explanation,
    ...(direction === "ja-vi" ? { answerLanguage: "vi" } : {})
  });
  const bc = (id, sentence, choices, answer, translation, explanation) => ({
    id, type: "blank-choice", sentence, choices, answers: Array.isArray(answer) ? answer : [answer],
    translation, explanation, answerLanguage: "vi"
  });
  const bi = (id, sentence, answer, translation, explanation) => ({
    id, type: "blank-input", sentence, answers: Array.isArray(answer) ? answer : [answer],
    translation, explanation, answerLanguage: "vi"
  });
  const tr = (id, direction, prompt, modelAnswer, explanation, partial = false) => ({
    id, type: "translation", direction, prompt, modelAnswer, grading: "self", explanation,
    ...(direction === "ja-vi" ? { answerLanguage: "vi" } : {}),
    ...(partial ? { partial: "部分訳" } : {})
  });
  const group = (id, description, questions) => ({ id, title: "", description, questions });

  const replaceQuestion = (id, replacement) => {
    for (const level of bank.levels) {
      for (const currentGroup of level.groups || []) {
        const index = currentGroup.questions?.findIndex((question) => question.id === id) ?? -1;
        if (index >= 0) {
          currentGroup.questions[index] = replacement;
          return;
        }
      }
    }
  };

  // A1＋前半の翻訳集中を、同じ内容の選択・記入へ変えて段差を小さくする。
  replaceQuestion("e1-01", bc("e1-01", "Tôi ___ cà phê mỗi sáng.", ["uống", "ăn", "đi", "đọc"], "uống", "私は毎朝コーヒーを飲みます。", "uống cà phê は「コーヒーを飲む」です。"));
  replaceQuestion("e1-02", bi("e1-02", "Tôi đang ___ tiếng Việt.", "học", "私はベトナム語を勉強しています。", "đang + 動詞で現在進行中の動作を表します。"));
  replaceQuestion("e1-06", bc("e1-06", "Ngày mai tôi được ___.", ["nghỉ", "chợ", "rẻ", "sống"], "nghỉ", "明日は休みです。", "được nghỉ は「休みである・休むことができる」です。"));
  replaceQuestion("e2-01", bc("e2-01", "Hôm qua tôi ___ đi chợ.", ["đã", "đang", "sẽ", "sắp"], "đã", "私は昨日、市場へ行きました。", "đã は完了した動作を示します。"));
  replaceQuestion("e2-02", bi("e2-02", "Tôi ___ ăn sáng.", ["chưa", "vẫn chưa"], "私はまだ朝ごはんを食べていません。", "chưa／vẫn chưa は「まだ〜していない」です。"));
  replaceQuestion("e2-03", bi("e2-03", "Chị ấy đang ___ ăn.", "nấu", "彼女は料理しています。", "nấu ăn は「料理する」です。"));
  replaceQuestion("e2-07", bc("e2-07", "Nếu có thời gian, hãy ___ cho tôi.", ["gọi", "ăn", "mua", "nghỉ"], "gọi", "時間があれば電話してください。", "gọi cho tôi は「私に電話する」です。"));

  // A2で不足していた複数、許可、nếu ... thì ... を明示する。
  replaceQuestion("a26-06", bi("a26-06", "___ học sinh trong lớp đều có sách.", ["Các", "các"], "クラスの生徒たちはみな本を持っています。", "các は特定の複数の人・物をまとめて示します。"));
  replaceQuestion("a26-07", bi("a26-07", "Tôi đã đọc ___ cuốn sách bạn đưa.", ["những", "các"], "私はあなたが渡してくれた本を読みました。", "những／các は複数の名詞の前に置きます。"));
  replaceQuestion("a24-05", mc("a24-05", "ja-vi", "許可されている", ["được phép", "làm ơn", "bắt buộc", "không cần"], "được phép", "được phép は「許可されている」です。"));
  replaceQuestion("a25-04", bi("a25-04", "Nếu có thời gian, ___ tôi sẽ gọi cho bạn.", ["thì"], "時間があれば、あなたに電話します。", "nếu ... thì ... で条件とその結果をはっきり結びます。"));

  // A2＋とB1の重複は、B1側を一段高度な表現へ進める。
  replaceQuestion("b11-01", mc("b11-01", "vi-ja", "theo quan điểm của tôi", ["私の見方では", "その結果として", "一般的に", "反対に"], "私の見方では", "theo quan điểm của tôi は、意見をやや明示的に述べる表現です。"));
  replaceQuestion("b11-07", tr("b11-07", "vi-ja", "Tôi cho rằng đi xe buýt vừa tiết kiệm vừa thuận tiện.", "私は、バスで行くことは経済的で便利だと思います。", "tôi cho rằng ... で、自分の判断を理由とともに述べる準備をします。"));
  replaceQuestion("b16-01", mc("b16-01", "vi-ja", "những gì tôi đã học", ["私が学んだこと", "私を教えた人々", "私が学んだ場所", "私が学ぶ理由"], "私が学んだこと", "những gì + 節で「〜すること・もの」を表します。"));
  replaceQuestion("b16-02", mc("b16-02", "vi-ja", "điều mà tôi muốn nhấn mạnh", ["私が強調したいこと", "私が会いたい人", "私が行きたい場所", "私が待っている時間"], "私が強調したいこと", "điều mà ... は、後ろの節で内容を具体化します。"));

  // B1最終グループの10問連続翻訳を、理解から産出へ進む構成にする。
  replaceQuestion("b15-01", mc("b15-01", "vi-ja", "từ khi", ["〜して以来", "〜する前に", "〜する代わりに", "〜するたびに"], "〜して以来", "từ khi は、ある時点から現在までの期間を導きます。"));
  replaceQuestion("b15-02", mc("b15-02", "vi-ja", "dù ... vẫn ...", ["〜でも、それでも…", "〜なので…", "〜するほど…", "〜した直後に…"], "〜でも、それでも…", "dù ... vẫn ... は譲歩と変わらない結果を結びます。"));
  replaceQuestion("b15-03", bc("b15-03", "Điều quan trọng không phải là học thật nhanh ___ là duy trì thói quen đều đặn.", ["mà", "nên", "nếu", "vì"], "mà", "大切なのは速く学ぶことではなく、規則的な習慣を続けることです。", "không phải ... mà là ... は「〜ではなく…だ」です。"));
  replaceQuestion("b15-04", bi("b15-04", "Nếu có từ không hiểu, trước tiên tôi đoán nghĩa dựa ___ ngữ cảnh.", "vào", "分からない言葉があれば、まず文脈から意味を推測します。", "dựa vào ngữ cảnh は「文脈に基づいて」です。"));
  replaceQuestion("b15-05", bi("b15-05", "Mọi người hợp tác để hoàn thành công việc đúng ___.", "hạn", "皆は期限どおりに仕事を終えるため協力しました。", "đúng hạn は「期限どおりに」です。"));
  replaceQuestion("b15-06", bi("b15-06", "Nếu giao thông công cộng thuận tiện hơn, số người dùng ô tô sẽ ___.", "giảm", "公共交通機関が便利になれば、車を使う人は減るでしょう。", "条件の後に起こる変化を sẽ giảm で表します。"));
  replaceQuestion("b15-07", bi("b15-07", "Công việc này phù hợp ___ kinh nghiệm và mục tiêu của tôi.", "với", "この仕事は私の経験と目標に合っています。", "phù hợp với は「〜に適している」です。"));

  // 上位レベルに残っていた完全・近接重複を発展問題へ置き換える。
  replaceQuestion("b2g3-06", bi("b2g3-06", "Trước khi quyết định, cần tính ___ cả chi phí lẫn ảnh hưởng lâu dài.", "đến", "決定する前に、費用と長期的な影響の両方を考慮する必要があります。", "tính đến は、判断に必要な要素を考慮に入れる表現です。"));
  replaceQuestion("b2p1-01", mc("b2p1-01", "vi-ja", "xem ra", ["見たところ〜のようだ", "必ず〜である", "〜であってほしい", "〜する必要がない"], "見たところ〜のようだ", "xem ra は、状況から判断した話し手の見方を示します。"));

  const a1Practical = {
    id: "a1-practical", label: "A1実", name: "実践", description: "会話の土台・助詞・基本文をつなぐ", requires: "elementary-8",
    groups: [
      group("a1-practical-1", "人称と呼びかけを使い分ける", [
        mc("a1r1-01", "vi-ja", "anh", ["年上または同年代の男性への呼びかけ", "年下の女性だけ", "自分自身", "物の名前"], "年上または同年代の男性への呼びかけ", "anh は家族の「兄」のほか、男性への呼びかけにも使います。"),
        mc("a1r1-02", "vi-ja", "chị", ["年上または同年代の女性への呼びかけ", "年下の男性だけ", "先生だけ", "複数の人"], "年上または同年代の女性への呼びかけ", "chị は「姉」のほか、女性への呼びかけにも使います。"),
        bc("a1r1-03", "___ có khỏe không?", ["Anh", "Nhà", "Sách", "Nước"], "Anh", "お元気ですか。（男性に）", "相手との関係に合わせて人称語を選びます。"),
        bi("a1r1-04", "___ tên là gì?", ["Chị", "chị"], "お名前は何ですか。（女性に）", "chị を主語と呼びかけの両方に使えます。"),
        bi("a1r1-05", "Em cảm ___ anh.", "ơn", "ありがとうございます。（年上の男性に）", "話し手が em、相手が anh になる組み合わせです。"),
        bi("a1r1-06", "___ Lan là giáo viên của em.", ["Cô", "cô"], "ラン先生は私の先生です。", "女性教師の名前の前では cô を使えます。"),
        bi("a1r1-07", "Anh ấy là bạn của ___.", ["tôi", "mình"], "彼は私の友達です。", "tôi は中立的な「私」、mình は親しい会話でも使われます。"),
        tr("a1r1-08", "vi-ja", "Chị có rảnh không?", "お時間はありますか。", "chị を女性の相手に対する「あなた」として使っています。"),
        tr("a1r1-09", "ja-vi", "先生、私はまだ分かりません。", "Thưa cô, em vẫn chưa hiểu.", "thưa cô は女性教師への丁寧な呼びかけです。"),
        tr("a1r1-10", "vi-ja", "em của tôi", "私の弟・妹", "em は自分より年下のきょうだいを表します。", true)
      ]),
      group("a1-practical-2", "名詞・形容詞・複数を組み立てる", [
        mc("a1r2-01", "vi-ja", "một căn phòng rộng", ["広い部屋一室", "部屋の外", "狭い家一軒", "複数の広い部屋"], "広い部屋一室", "ベトナム語では形容詞 rộng を名詞 phòng の後ろに置きます。"),
        mc("a1r2-02", "vi-ja", "những người bạn mới", ["新しい友人たち", "一人の古い友人", "友人の新しい家", "新しい先生たち"], "新しい友人たち", "những + 名詞 + 形容詞の順を確認します。"),
        bc("a1r2-03", "Đây là một quyển sách ___.", ["hay", "đọc", "mua", "ở"], "hay", "これは面白い本です。", "性質を表す形容詞は通常、名詞の後ろです。"),
        bi("a1r2-04", "Tôi thích món ăn Việt ___.", "Nam", "私はベトナム料理が好きです。", "Việt Nam が món ăn を後ろから説明します。"),
        bi("a1r2-05", "___ sinh viên này học tiếng Nhật.", ["Các", "Những", "các", "những"], "この学生たちは日本語を勉強しています。", "các／những で複数を示せます。"),
        bi("a1r2-06", "Tôi mua hai ___ áo mới.", "chiếc", "私は新しい服を2着買います。", "衣類などには類別詞 chiếc を使えます。"),
        bi("a1r2-07", "Nhà tôi có một con mèo rất ___.", "nhỏ", "私の家にはとても小さい猫が一匹います。", "名詞、程度語、形容詞の順です。"),
        tr("a1r2-08", "vi-ja", "Tôi muốn mua cái áo màu xanh này.", "私はこの青い服を買いたいです。", "名詞の後ろに色と指示語を置いた語順です。"),
        tr("a1r2-09", "ja-vi", "あの大きな家は私の叔父の家です。", "Ngôi nhà lớn kia là nhà của chú tôi.", "形容詞 lớn と指示語 kia は名詞の後ろに置きます。"),
        tr("a1r2-10", "vi-ja", "ba người bạn Việt Nam", "3人のベトナム人の友達", "数＋類別詞＋名詞＋説明語の順です。", true)
      ]),
      group("a1-practical-3", "位置と場所を詳しく伝える", [
        mc("a1r3-01", "vi-ja", "ở trên bàn", ["机の上に", "机の下に", "机の中に", "机の外に"], "机の上に", "trên は「上」です。"),
        mc("a1r3-02", "vi-ja", "ở bên ngoài", ["外に", "中に", "隣に", "後ろに"], "外に", "bên ngoài は「外側・外」です。"),
        bc("a1r3-03", "Con mèo ở ___ bàn.", ["dưới", "trước", "ngoài", "giữa"], "dưới", "猫は机の下にいます。", "dưới は「下」です。"),
        bi("a1r3-04", "Sách ở ___ túi.", "trong", "本はかばんの中にあります。", "trong は「中」です。"),
        bi("a1r3-05", "Xe ở ___ nhà.", ["trước", "phía trước"], "車は家の前にあります。", "trước／phía trước は「前」です。"),
        bi("a1r3-06", "Vườn ở phía ___ nhà.", "sau", "庭は家の後ろにあります。", "phía sau は「後ろ」です。"),
        bi("a1r3-07", "Ngân hàng ở ___ bưu điện và siêu thị.", "giữa", "銀行は郵便局とスーパーの間にあります。", "giữa A và B は「AとBの間」です。"),
        tr("a1r3-08", "vi-ja", "Nhà vệ sinh ở bên trong nhà hàng.", "トイレはレストランの中にあります。", "bên trong で建物の内部を表します。"),
        tr("a1r3-09", "ja-vi", "ホテルの前にタクシーがあります。", "Có một chiếc taxi ở trước khách sạn.", "có ... ở ... で存在する場所を伝えます。"),
        tr("a1r3-10", "vi-ja", "ngay bên cạnh nhà ga", "駅のすぐ隣", "ngay は場所の近さを強調します。", true)
      ]),
      group("a1-practical-4", "疑問詞と会話の終助詞", [
        mc("a1r4-01", "vi-ja", "Bạn chọn cái nào?", ["どれを選びますか", "何個選びますか", "誰が選びますか", "なぜ選びますか"], "どれを選びますか", "nào は選択肢の中の「どれ」を尋ねます。"),
        mc("a1r4-02", "vi-ja", "Sao bạn về sớm?", ["どうして早く帰るのですか", "いつ早く帰りますか", "どこへ帰りますか", "誰と帰りますか"], "どうして早く帰るのですか", "sao は会話で理由を尋ねる「なぜ」です。"),
        bc("a1r4-03", "Bạn muốn uống loại ___?", ["nào", "ai", "đâu", "bao nhiêu"], "nào", "どの種類を飲みたいですか。", "名詞 + nào で「どの〜」です。"),
        bi("a1r4-04", "Bạn đi bằng cách ___?", "nào", "どのように行きますか。", "bằng cách nào は方法を尋ねます。"),
        bi("a1r4-05", "Sao hôm nay bạn ___ đi làm?", "không", "どうして今日は仕事へ行かないのですか。", "sao ... không ... で理由を尋ねます。"),
        bi("a1r4-06", "Bạn là người Nhật, phải không ___?", "ạ", "日本人ですよね。（丁寧）", "文末の ạ は相手への丁寧さを添えます。"),
        bi("a1r4-07", "Món này ngon ___?", "nhỉ", "この料理、おいしいですね。", "nhỉ は相手と感想を共有・確認する語です。"),
        tr("a1r4-08", "vi-ja", "Bạn khỏe chứ?", "元気ですよね。", "chứ は当然そうだと思いながら確認する響きを持ちます。"),
        tr("a1r4-09", "ja-vi", "一緒に行きましょうね。", "Chúng ta cùng đi nhé.", "nhé は提案を柔らかくします。"),
        tr("a1r4-10", "vi-ja", "Cái nào cũng được.", "どれでも大丈夫です。", "nào ... cũng ... で「どれでも」を表します。", true)
      ]),
      group("a1-practical-5", "丁寧に頼む・勧める・止める", [
        mc("a1r5-01", "vi-ja", "đừng + 動詞", ["〜しないでください", "〜してください", "〜してもよい", "〜するつもりだ"], "〜しないでください", "đừng は禁止や制止を表します。"),
        mc("a1r5-02", "vi-ja", "mời", ["どうぞ〜してください", "絶対に〜するな", "〜したことがある", "〜する必要がない"], "どうぞ〜してください", "mời は招待や丁寧な勧めに使います。"),
        bc("a1r5-03", "___ nói chậm hơn một chút.", ["Xin", "Đã", "Đang", "Rất"], "Xin", "もう少しゆっくり話してください。", "xin + 動詞で丁寧な依頼を作れます。"),
        bi("a1r5-04", "Làm ơn ___ lại.", "nói", "もう一度言ってください。", "nói lại は「もう一度言う」です。"),
        bi("a1r5-05", "___ lo, mọi việc sẽ ổn.", ["Đừng", "đừng"], "心配しないでください。大丈夫です。", "đừng + 動詞で相手を制止します。"),
        bi("a1r5-06", "___ bạn vào.", ["Mời", "mời"], "どうぞお入りください。", "mời ... vào は人を中へ招く表現です。"),
        bi("a1r5-07", "Bạn giúp tôi một chút được ___?", "không", "少し手伝ってもらえますか。", "... được không? は柔らかい依頼に使えます。"),
        tr("a1r5-08", "vi-ja", "Đừng quên mang theo hộ chiếu nhé.", "パスポートを持っていくのを忘れないでくださいね。", "đừng quên ... nhé で柔らかく注意します。"),
        tr("a1r5-09", "ja-vi", "どうぞこちらに座ってください。", "Mời bạn ngồi ở đây.", "mời bạn + 動詞は丁寧な勧めです。"),
        tr("a1r5-10", "vi-ja", "xin phép về trước", "先に帰る許可を求める", "xin phép は許可を丁寧に求める表現です。", true)
      ]),
      group("a1-practical-6", "thì で話題と条件をつなぐ", [
        mc("a1r6-01", "vi-ja", "Còn tôi thì ...", ["私はというと…", "私と一緒に…", "私のために…", "私の後ろに…"], "私はというと…", "thì は、ここでは話題を取り上げて対比します。"),
        mc("a1r6-02", "vi-ja", "Nếu ... thì ...", ["もし〜なら…", "〜した後で…", "〜にもかかわらず…", "〜するために…"], "もし〜なら…", "nếu と thì で条件と結果を結びます。"),
        bc("a1r6-03", "Lan thích trà. Còn tôi ___ thích cà phê.", ["thì", "vì", "để", "khi"], "thì", "ランはお茶が好きです。私はというとコーヒーが好きです。", "còn ... thì ... で二者を対比します。"),
        bi("a1r6-04", "Nếu trời mưa ___ tôi sẽ ở nhà.", "thì", "雨が降ったら、私は家にいます。", "条件節の後ろに thì を置けます。"),
        bi("a1r6-05", "Buổi sáng tôi đi làm, buổi tối ___ tôi học tiếng Việt.", "thì", "朝は仕事へ行き、夜はベトナム語を勉強します。", "二つの時間帯を対比しています。"),
        bi("a1r6-06", "Cái này rẻ, còn cái kia ___ đắt.", "thì", "これは安く、もう一方は高いです。", "còn A thì B で対照的な情報を示します。"),
        bi("a1r6-07", "Nếu không hiểu ___ hãy hỏi giáo viên.", "thì", "分からなければ先生に聞いてください。", "条件の結果を命令・助言にすることもできます。"),
        tr("a1r6-08", "vi-ja", "Nếu ngày mai rảnh thì chúng ta đi ăn nhé.", "明日暇なら、一緒に食事へ行きましょう。", "条件と提案を一文で結びます。"),
        tr("a1r6-09", "ja-vi", "母は料理し、父は掃除します。", "Mẹ tôi thì nấu ăn, còn bố tôi thì dọn dẹp.", "thì と còn を使って役割を対比します。"),
        tr("a1r6-10", "vi-ja", "còn cuối tuần thì sao", "では週末はどうですか", "còn ... thì sao? は別の案を尋ねる表現です。", true)
      ]),
      group("a1-practical-7", "動作の順序と時間を伝える", [
        mc("a1r7-01", "vi-ja", "vừa mới", ["たった今〜した", "もうすぐ〜する", "ずっと〜している", "まだ〜していない"], "たった今〜した", "vừa mới は直前に完了した動作です。"),
        mc("a1r7-02", "vi-ja", "sắp ... rồi", ["もうすぐ〜する", "〜したことがある", "〜している間", "〜し終えた"], "もうすぐ〜する", "sắp ... rồi は目前の変化を表します。"),
        bc("a1r7-03", "Tôi vừa ___ về nhà.", ["mới", "sắp", "đang", "sẽ"], "mới", "私はたった今帰宅しました。", "vừa mới + 動詞の形です。"),
        bi("a1r7-04", "Phim sắp bắt đầu ___.", "rồi", "映画がもうすぐ始まります。", "sắp ... rồi で目前であることを強調します。"),
        bi("a1r7-05", "Tôi ăn sáng ___ rồi đi làm.", "xong", "朝食を終えてから仕事へ行きます。", "動詞 + xong rồi ... で動作の順序を示します。"),
        bi("a1r7-06", "Khi tôi đến, cô ấy đang ___ ăn.", "nấu", "私が着いたとき、彼女は料理をしていました。", "khi と đang で、ある時点の進行中の動作を示します。"),
        bi("a1r7-07", "Tôi đã gọi cho anh ấy nhưng anh ấy chưa trả ___.", "lời", "電話しましたが、彼はまだ返事をしていません。", "đã と chưa を対比します。"),
        tr("a1r7-08", "vi-ja", "Tôi vừa mới ăn xong.", "私はたった今食べ終わったところです。", "vừa mới と xong を組み合わせています。"),
        tr("a1r7-09", "ja-vi", "もうすぐ雨が降りそうです。", "Trời sắp mưa rồi.", "sắp ... rồi で近い未来を表します。"),
        tr("a1r7-10", "vi-ja", "sau khi làm xong", "終えた後で", "sau khi と xong で完了後の順序を示します。", true)
      ]),
      group("a1-practical-8", "A1実践・短い会話の総合", [
        mc("a1r8-01", "vi-ja", "Bạn dùng cái này nhé.", ["これを使ってくださいね", "これは使わないでください", "どれを使いますか", "これは誰のものですか"], "これを使ってくださいね", "nhé が勧めを柔らかくしています。"),
        mc("a1r8-02", "vi-ja", "Còn thứ Bảy thì sao?", ["では土曜日はどうですか", "土曜日はどこですか", "土曜日まで待ちます", "土曜日はだめです"], "では土曜日はどうですか", "予定を相談するときの提案です。"),
        bc("a1r8-03", "A: Anh uống gì? B: Cho tôi cà phê ___.", ["nhé", "đâu", "nào", "chứ"], "nhé", "A：何を飲みますか。B：コーヒーをお願いします。", "注文を柔らかく伝える nhé です。"),
        bi("a1r8-04", "A: Sao chị đến muộn? B: ___ xe đông.", "Vì", "A：なぜ遅れたのですか。B：渋滞していたからです。", "sao で理由を尋ね、vì で答えます。"),
        bi("a1r8-05", "A: Cái nào của em? B: Cái màu xanh ___ của em.", "là", "A：どれがあなたのですか。B：青いものが私のです。", "話題となる名詞句を là で説明します。"),
        bi("a1r8-06", "Nếu chị không bận ___ chúng ta gặp nhau lúc ba giờ nhé.", "thì", "お忙しくなければ、3時に会いましょう。", "条件、時刻、提案を一つの文にまとめます。"),
        bi("a1r8-07", "Đừng đứng ở ___ cửa.", "trước", "ドアの前に立たないでください。", "禁止と場所表現を組み合わせます。"),
        tr("a1r8-08", "vi-ja", "Em chưa hiểu. Cô nói lại được không ạ?", "まだ分かりません。先生、もう一度言っていただけますか。", "ạ と được không を使った丁寧な依頼です。"),
        tr("a1r8-09", "ja-vi", "私はたった今着きました。あなたはどこにいますか。", "Tôi vừa mới đến. Bạn đang ở đâu?", "完了した動作と現在の場所の質問をつなげます。"),
        tr("a1r8-10", "vi-ja", "Nếu trời đẹp thì đi dạo nhé.", "天気がよければ散歩しましょう。", "条件と提案を自然な短文にしています。", true)
      ])
    ]
  };

  a1Practical.groups.forEach((item, index) => { item.title = `GROUP ${String(index + 1).padStart(2, "0")}`; });
  const elementaryIndex = bank.levels.findIndex((level) => level.id === "elementary");
  const a2 = bank.levels.find((level) => level.id === "a2");
  if (elementaryIndex >= 0 && !bank.levels.some((level) => level.id === a1Practical.id)) {
    bank.levels.splice(elementaryIndex + 1, 0, a1Practical);
  }
  if (a2) a2.requires = "a1-practical-8";

  const b1Practical = {
    id: "b1-practical", label: "B1実", name: "実践", description: "まとまりのある説明から抽象的な議論へ", requires: "b1-plus-8",
    groups: [
      group("b1-practical-1", "thì で話題・対比・判断を整理する", [
        mc("b1r1-01", "vi-ja", "Về vấn đề này thì ...", ["この問題については…", "この問題のために…", "この問題にもかかわらず…", "この問題が終わるまで…"], "この問題については…", "về ... thì ... は話題の範囲を示します。"),
        mc("b1r1-02", "vi-ja", "Ai đồng ý thì giơ tay.", ["賛成する人は手を挙げてください", "誰が賛成したのですか", "手を挙げれば必ず賛成です", "全員が手を挙げました"], "賛成する人は手を挙げてください", "該当する人と結果を thì で結びます。"),
        bc("b1r1-03", "Về chi phí ___ phương án A hợp lý hơn.", ["thì", "vì", "mặc", "để"], "thì", "費用については、A案の方が合理的です。", "話題を示してから判断を述べます。"),
        bi("b1r1-04", "Ai hoàn thành trước ___ có thể về sớm.", "thì", "先に終えた人は早く帰れます。", "該当者を示す節の後ろに thì を置きます。"),
        bi("b1r1-05", "Nếu xét về chất lượng ___ sản phẩm này tốt hơn.", "thì", "品質で判断すれば、この商品の方が優れています。", "条件と評価を明確にします。"),
        bi("b1r1-06", "Nói thì dễ, làm ___ khó.", "thì", "言うのは簡単ですが、実行するのは難しいです。", "同じ構造を繰り返して対比します。"),
        bi("b1r1-07", "Việc đó, để ngày mai giải quyết ___ tốt hơn.", "thì", "その件は、明日解決した方がよいでしょう。", "会話的な話題提示です。"),
        tr("b1r1-08", "vi-ja", "Nếu chỉ nhìn vào giá thì phương án này có vẻ hấp dẫn.", "価格だけを見れば、この案は魅力的に見えます。", "判断の条件を限定します。"),
        tr("b1r1-09", "ja-vi", "交通については、朝の方が混雑します。", "Về giao thông thì buổi sáng đông hơn.", "話題提示と比較を組み合わせます。"),
        tr("b1r1-10", "vi-ja", "có gì không rõ thì cứ hỏi", "分からないことがあれば遠慮なく尋ねる", "条件の thì と行動を促す cứ の組み合わせです。", true)
      ]),
      group("b1-practical-2", "継続・反復・変化のニュアンス", [
        mc("b1r2-01", "vi-ja", "cứ + 動詞", ["そのまま・繰り返し〜する", "〜したばかりだ", "〜する許可を得る", "〜し終える"], "そのまま・繰り返し〜する", "cứ は継続や反復などを表します。"),
        mc("b1r2-02", "vi-ja", "mãi mới", ["長い時間がかかってようやく", "もうすぐ", "以前からずっと", "たった今"], "長い時間がかかってようやく", "mãi mới は遅れて実現したことを示します。"),
        bc("b1r2-03", "Tôi đợi ___ mà anh ấy không đến.", ["mãi", "vừa", "sắp", "đã"], "mãi", "私はずっと待ちましたが、彼は来ませんでした。", "mãi は長い継続を強調します。"),
        bi("b1r2-04", "Trời ___ mưa từ sáng đến chiều.", "cứ", "朝から夕方まで雨が降り続きました。", "cứ + 動詞で継続を表します。"),
        bi("b1r2-05", "Tôi tìm mãi ___ thấy chìa khóa.", "mới", "長いこと探して、ようやく鍵を見つけました。", "mãi mới の形です。"),
        bi("b1r2-06", "Khả năng nghe của tôi đang tốt lên ___ dần.", "dần", "聞き取り能力は少しずつ向上しています。", "dần dần は段階的な変化です。"),
        bi("b1r2-07", "Giá cả ngày ___ tăng.", "càng", "物価はますます上がっています。", "ngày càng は時間とともに進む変化です。"),
        tr("b1r2-08", "vi-ja", "Anh ấy cứ hỏi đi hỏi lại cùng một câu.", "彼は同じ質問を何度も繰り返します。", "cứ と反復形を使っています。"),
        tr("b1r2-09", "ja-vi", "何度説明しても、彼はまだ理解しません。", "Giải thích mãi mà anh ấy vẫn chưa hiểu.", "mãi mà vẫn chưa ... で未達成を強調します。"),
        tr("b1r2-10", "vi-ja", "dần dần quen với cuộc sống mới", "新しい生活に徐々に慣れる", "dần dần と quen với の組み合わせです。", true)
      ]),
      group("b1-practical-3", "場面に合わせて丁寧さを変える", [
        mc("b1r3-01", "vi-ja", "Xin vui lòng ...", ["どうぞ〜してください", "絶対に〜しないでください", "〜かもしれません", "〜したことがあります"], "どうぞ〜してください", "案内や業務上の丁寧な依頼です。"),
        mc("b1r3-02", "vi-ja", "Bạn cứ tự nhiên nhé.", ["どうぞ遠慮なく", "必ず静かにしてください", "ここで待たないでください", "自分で決めないでください"], "どうぞ遠慮なく", "親しい場面で相手の遠慮を解きます。"),
        bc("b1r3-03", "Kính ___ quý khách giữ gìn hành lý.", ["đề nghị", "hy vọng", "quyết định", "giải thích"], "đề nghị", "お客様には手荷物の管理をお願いいたします。", "kính đề nghị は正式な案内です。"),
        bi("b1r3-04", "Xin vui lòng xác ___ thông tin trước khi gửi.", "nhận", "送信前に情報をご確認ください。", "xác nhận は正式・中立的な確認です。"),
        bi("b1r3-05", "Bạn cứ ngồi ___ nhé.", "đây", "どうぞここに座っていてくださいね。", "cứ ... nhé は柔らかい勧めです。"),
        bi("b1r3-06", "Tôi xin ___ được hỏi một câu.", "phép", "一つ質問させていただきます。", "xin phép được ... で許可を求めます。"),
        bi("b1r3-07", "Phiền anh gửi lại tài liệu ___ tôi.", "cho", "お手数ですが、資料を再送してください。", "phiền + 人 + 動詞で丁寧に頼みます。"),
        tr("b1r3-08", "vi-ja", "Đề nghị các bạn có mặt trước chín giờ.", "皆さんは9時前にお越しください。", "集団への正式な依頼です。"),
        tr("b1r3-09", "ja-vi", "お手数ですが、もう一度説明していただけますか。", "Phiền chị giải thích lại một lần nữa được không?", "phiền と được không を組み合わせています。"),
        tr("b1r3-10", "vi-ja", "mong anh thông cảm", "ご理解いただければ幸いです", "事情への理解を求める表現です。", true)
      ]),
      group("b1-practical-4", "原因から結果まで筋道を立てる", [
        mc("b1r4-01", "vi-ja", "sở dĩ ... là vì ...", ["〜なのは…だからだ", "〜であるにもかかわらず…", "〜すればするほど…", "〜する代わりに…"], "〜なのは…だからだ", "結果を先に示し、その原因を説明します。"),
        mc("b1r4-02", "vi-ja", "vì vậy", ["そのため", "それにもかかわらず", "例えば", "一方で"], "そのため", "前の文を原因として結果を導きます。"),
        bc("b1r4-03", "Đường bị ngập. ___ vậy, cuộc họp bắt đầu muộn.", ["Vì", "Mặc", "Nếu", "Trong"], "Vì", "道路が冠水しました。そのため会議は遅れて始まりました。", "vì vậy で文をつなぎます。"),
        bi("b1r4-04", "Sở dĩ tôi chọn cách này là ___ nó đơn giản hơn.", "vì", "この方法を選んだのは、より簡単だからです。", "sở dĩ ... là vì ... の形です。"),
        bi("b1r4-05", "Việc thiếu chuẩn bị đã dẫn ___ nhiều sai sót.", "đến", "準備不足が多くのミスにつながりました。", "dẫn đến は結果へのつながりです。"),
        bi("b1r4-06", "Giá tăng kéo ___ nhu cầu giảm.", "theo", "価格が上がり、それに伴って需要が減りました。", "kéo theo は連鎖的な結果です。"),
        bi("b1r4-07", "Nhờ được hỗ trợ kịp thời, vấn đề đã được giải ___.", "quyết", "適時の支援で問題は解決されました。", "nhờ は好ましい結果の原因です。"),
        tr("b1r4-08", "vi-ja", "Sở dĩ kết quả chưa tốt là vì chúng ta chưa có đủ thời gian chuẩn bị.", "結果がまだ良くないのは、十分な準備時間がなかったからです。", "結果、原因の順に説明しています。"),
        tr("b1r4-09", "ja-vi", "交通量が増えました。そのため、大気汚染も深刻になりました。", "Lượng xe tăng. Vì vậy, ô nhiễm không khí cũng trở nên nghiêm trọng hơn.", "二文を vì vậy でつなぎます。"),
        tr("b1r4-10", "vi-ja", "nguyên nhân chủ yếu dẫn đến sự thay đổi", "変化につながった主な原因", "原因と結果を一つの名詞句にします。", true)
      ]),
      group("b1-practical-5", "対比と譲歩を使って考えを深める", [
        mc("b1r5-01", "vi-ja", "tuy ... nhưng ...", ["〜だが…", "〜なので…", "〜するために…", "〜した直後に…"], "〜だが…", "予想に反する結果を示します。"),
        mc("b1r5-02", "vi-ja", "dù vậy", ["それでも", "したがって", "つまり", "例えば"], "それでも", "前の内容を認めながら異なる判断を続けます。"),
        bc("b1r5-03", "Tuy giá cao ___ sản phẩm vẫn bán chạy.", ["nhưng", "nên", "vì", "nếu"], "nhưng", "価格は高いですが、商品はよく売れています。", "tuy ... nhưng ... の対応です。"),
        bi("b1r5-04", "Kế hoạch còn hạn chế. Dù ___, nó vẫn đáng thử.", "vậy", "計画には制約があります。それでも試す価値があります。", "dù vậy は文を越えて譲歩を示します。"),
        bi("b1r5-05", "Mặc dù thiếu kinh nghiệm, cô ấy ___ hoàn thành tốt công việc.", "vẫn", "経験不足にもかかわらず、彼女は仕事をやり遂げました。", "mặc dù ... vẫn ... の形です。"),
        bi("b1r5-06", "Phương án A rẻ hơn, trong ___ phương án B an toàn hơn.", "khi", "A案は安い一方、B案はより安全です。", "trong khi は対比も表します。"),
        bi("b1r5-07", "Dù khó đến ___, chúng ta cũng không nên bỏ cuộc.", "đâu", "どんなに難しくても、諦めるべきではありません。", "dù ... đến đâu ... cũng ... の形です。"),
        tr("b1r5-08", "vi-ja", "Mặc dù làm việc từ xa rất tiện, nhưng không phải ai cũng dễ tập trung.", "在宅勤務は便利ですが、誰もが集中しやすいわけではありません。", "譲歩と部分否定を組み合わせます。"),
        tr("b1r5-09", "ja-vi", "費用は増えます。それでも、長期的には必要な投資です。", "Chi phí sẽ tăng. Dù vậy, về lâu dài đây là khoản đầu tư cần thiết.", "dù vậy で異なる評価を続けます。"),
        tr("b1r5-10", "vi-ja", "một mặt thuận tiện, mặt khác tốn kém", "一方では便利だが、他方では費用がかかる", "二つの側面を均等に提示します。", true)
      ]),
      group("b1-practical-6", "複数の文を順序よくつなげる", [
        mc("b1r6-01", "vi-ja", "trước hết", ["まず初めに", "最後に", "言い換えれば", "それにもかかわらず"], "まず初めに", "説明や手順の最初を示します。"),
        mc("b1r6-02", "vi-ja", "sau đó", ["その後", "その一方で", "そのため", "要するに"], "その後", "次の段階を示します。"),
        bc("b1r6-03", "Trước hết, cần xác định vấn đề. ___ đó, hãy tìm nguyên nhân.", ["Sau", "Mặc", "Do", "Thay"], "Sau", "まず問題を特定し、その後、原因を探します。", "sau đó で順序を示します。"),
        bi("b1r6-04", "Tiếp ___, chúng ta sẽ so sánh các phương án.", "theo", "次に、各案を比較します。", "tiếp theo は説明を次へ進めます。"),
        bi("b1r6-05", "Cuối ___, nhóm sẽ đưa ra kết luận.", "cùng", "最後に、グループは結論を出します。", "cuối cùng は最終段階です。"),
        bi("b1r6-06", "Nói cách ___, chúng ta phải thay đổi mục tiêu.", "khác", "言い換えれば、目標を変えなければなりません。", "nói cách khác で言い換えます。"),
        bi("b1r6-07", "Tóm ___, kế hoạch có thể thực hiện được.", "lại", "まとめると、計画は実行可能です。", "tóm lại で結論へ導きます。"),
        tr("b1r6-08", "vi-ja", "Trước hết, chúng ta thu thập thông tin. Sau đó, chúng ta mới đưa ra quyết định.", "まず情報を集め、その後で初めて決定を下します。", "順序語と mới で段階を示します。"),
        tr("b1r6-09", "ja-vi", "最初に現状を説明し、次に二つの案を比較してください。", "Trước hết, hãy giải thích tình hình hiện tại; tiếp theo, hãy so sánh hai phương án.", "二つの指示を順序よくつなげます。"),
        tr("b1r6-10", "vi-ja", "cuối cùng đi đến kết luận", "最終的に結論に至る", "cuối cùng と結論表現の組み合わせです。", true)
      ]),
      group("b1-practical-7", "意見を確認し、言い直し、応答する", [
        mc("b1r7-01", "vi-ja", "Ý bạn là ... phải không?", ["あなたの言いたいことは〜ですよね", "あなたは〜に反対ですか", "あなたはなぜ〜しましたか", "あなたは〜を知りません"], "あなたの言いたいことは〜ですよね", "相手の意図を言い換えて確認します。"),
        mc("b1r7-02", "vi-ja", "Tôi hiểu ý bạn, tuy nhiên ...", ["言いたいことは分かりますが…", "完全に賛成です", "もう一度説明してください", "話題を変えましょう"], "言いたいことは分かりますが…", "理解を示してから異なる意見を述べます。"),
        bc("b1r7-03", "Ý bạn ___ chúng ta nên hoãn cuộc họp, phải không?", ["là", "vì", "để", "nếu"], "là", "つまり会議を延期すべきだということですね。", "ý bạn là ... で理解を確認します。"),
        bi("b1r7-04", "Bạn có thể nói cụ ___ hơn được không?", "thể", "もう少し具体的に言ってもらえますか。", "cụ thể hơn は「より具体的に」です。"),
        bi("b1r7-05", "Theo tôi ___, vấn đề nằm ở cách thực hiện.", "hiểu", "私の理解では、問題は実施方法にあります。", "theo tôi hiểu は理解を控えめに示します。"),
        bi("b1r7-06", "Tôi đồng ý về cơ ___, nhưng cần sửa một vài điểm.", "bản", "基本的には賛成ですが、修正が必要です。", "về cơ bản で賛成の範囲を限定します。"),
        bi("b1r7-07", "Xin lỗi, tôi chưa hiểu anh muốn ___ gì.", "nói", "すみません、何をおっしゃりたいのか分かりません。", "muốn nói gì で意図を尋ねます。"),
        tr("b1r7-08", "vi-ja", "Nếu tôi hiểu đúng thì anh muốn thay đổi thời hạn.", "私の理解が正しければ、期限を変更したいということですね。", "条件の thì で控えめに確認します。"),
        tr("b1r7-09", "ja-vi", "ご意見は分かりますが、この点については同意できません。", "Tôi hiểu ý anh, nhưng tôi không thể đồng ý về điểm này.", "理解と不同意を丁寧に並べます。"),
        tr("b1r7-10", "vi-ja", "nói rõ hơn điều bạn muốn nhấn mạnh", "強調したいことをもっと明確に述べる", "nói rõ hơn と điều ... の組み合わせです。", true)
      ]),
      group("b1-practical-8", "B1実践・B2への橋渡し", [
        mc("b1r8-01", "vi-ja", "xét về lâu dài", ["長期的に考えると", "今すぐに", "一例として", "反対の立場では"], "長期的に考えると", "時間的な観点を限定します。"),
        mc("b1r8-02", "vi-ja", "không phải lúc nào cũng", ["いつも〜とは限らない", "決して〜しない", "必ず〜する", "たった今〜した"], "いつも〜とは限らない", "一般化を避ける部分否定です。"),
        bc("b1r8-03", "Giải pháp rẻ nhất không phải lúc nào ___ tốt nhất.", ["cũng", "đều", "vẫn", "mới"], "cũng", "最も安い案がいつも最善とは限りません。", "không phải lúc nào cũng ... の形です。"),
        bi("b1r8-04", "Xét về lâu dài ___ đầu tư vào đào tạo là cần thiết.", "thì", "長期的に考えれば、研修への投資は必要です。", "観点を thì で判断につなぎます。"),
        bi("b1r8-05", "Kết quả này cho ___ phương pháp mới có hiệu quả.", "thấy", "この結果は新しい方法が有効だと示しています。", "cho thấy で根拠から読み取れる内容を述べます。"),
        bi("b1r8-06", "Tuy nhiên, dữ liệu hiện tại chưa đủ để đưa ra kết ___.", "luận", "現在のデータは結論を出すには十分ではありません。", "根拠の限界を示します。"),
        bi("b1r8-07", "Cần xem xét vấn đề từ nhiều góc ___.", "độ", "問題を複数の観点から検討する必要があります。", "từ nhiều góc độ は多面的な検討です。"),
        tr("b1r8-08", "vi-ja", "Mặc dù biện pháp này có hiệu quả trước mắt, chúng ta vẫn cần đánh giá ảnh hưởng lâu dài.", "この対策は短期的には有効ですが、長期的な影響も評価する必要があります。", "短期と長期の評価を対比します。"),
        tr("b1r8-09", "ja-vi", "結果は改善を示していますが、原因を断定するには情報が不足しています。", "Kết quả cho thấy sự cải thiện, nhưng chưa có đủ thông tin để khẳng định nguyên nhân.", "根拠と限界を一文で示します。"),
        tr("b1r8-10", "vi-ja", "đánh giá vấn đề dựa trên nhiều nguồn thông tin", "複数の情報源に基づいて問題を評価する", "B2で扱う根拠評価への橋渡しです。", true)
      ])
    ]
  };

  b1Practical.groups.forEach((item, index) => { item.title = `GROUP ${String(index + 1).padStart(2, "0")}`; });
  const b1PlusIndex = bank.levels.findIndex((level) => level.id === "b1-plus");
  const b2 = bank.levels.find((level) => level.id === "b2");
  if (b1PlusIndex >= 0 && !bank.levels.some((level) => level.id === b1Practical.id)) {
    bank.levels.splice(b1PlusIndex + 1, 0, b1Practical);
  }
  if (b2) b2.requires = "b1-practical-8";
})();
