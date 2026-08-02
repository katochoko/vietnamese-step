window.defaultQuestionBank = {
  version: 2,
  language: "vi",
  title: "Vietnamese Step",
  levels: [
    {
      id: "typing",
      label: "⌨",
      name: "タイピング",
      description: "文字と声調を入力",
      groups: [
        {
          id: "typing-1",
          title: "GROUP 01",
          description: "ベトナム語固有の文字",
          questions: [
            { id: "t1-01", type: "typing", prompt: "ă", answers: ["ă"], explanation: "ă は短く発音する a です。", answerLanguage: "vi", strictTone: true },
            { id: "t1-02", type: "typing", prompt: "â", answers: ["â"], explanation: "â はベトナム語でよく使う母音です。", answerLanguage: "vi", strictTone: true },
            { id: "t1-03", type: "typing", prompt: "ê", answers: ["ê"], explanation: "ê は e と区別して入力します。", answerLanguage: "vi", strictTone: true },
            { id: "t1-04", type: "typing", prompt: "ô", answers: ["ô"], explanation: "ô は o と区別して入力します。", answerLanguage: "vi", strictTone: true },
            { id: "t1-05", type: "typing", prompt: "ơ", answers: ["ơ"], explanation: "ơ は角のような記号が付く母音です。", answerLanguage: "vi", strictTone: true },
            { id: "t1-06", type: "typing", prompt: "ư", answers: ["ư"], explanation: "ư は u と区別して入力します。", answerLanguage: "vi", strictTone: true },
            { id: "t1-07", type: "typing", prompt: "đ", answers: ["đ"], explanation: "đ は d に横線が付いた別の文字です。", answerLanguage: "vi", strictTone: true },
            { id: "t1-08", type: "typing", prompt: "ă â", answers: ["ă â"], explanation: "2つの a 系母音を続けて入力します。", answerLanguage: "vi", strictTone: true },
            { id: "t1-09", type: "typing", prompt: "ơ ư", answers: ["ơ ư"], explanation: "ơ と ư の記号の位置を確認しましょう。", answerLanguage: "vi", strictTone: true },
            { id: "t1-10", type: "typing", prompt: "đê", answers: ["đê"], explanation: "đ と ê を組み合わせて入力します。", answerLanguage: "vi", strictTone: true }
          ]
        },
        {
          id: "typing-2",
          title: "GROUP 02",
          description: "6つの声調",
          questions: [
            { id: "t2-01", type: "typing", prompt: "a", answers: ["a"], explanation: "記号なしは ngang（平らな声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-02", type: "typing", prompt: "á", answers: ["á"], explanation: "á は sắc（上がる声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-03", type: "typing", prompt: "à", answers: ["à"], explanation: "à は huyền（下がる声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-04", type: "typing", prompt: "ả", answers: ["ả"], explanation: "ả は hỏi（問いかけるような声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-05", type: "typing", prompt: "ã", answers: ["ã"], explanation: "ã は ngã（途中で上がる声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-06", type: "typing", prompt: "ạ", answers: ["ạ"], explanation: "ạ は nặng（重く短い声調）です。", answerLanguage: "vi", strictTone: true },
            { id: "t2-07", type: "typing", prompt: "má", answers: ["má"], explanation: "母音 a に sắc を付けます。", answerLanguage: "vi", strictTone: true },
            { id: "t2-08", type: "typing", prompt: "mà", answers: ["mà"], explanation: "母音 a に huyền を付けます。", answerLanguage: "vi", strictTone: true },
            { id: "t2-09", type: "typing", prompt: "mả", answers: ["mả"], explanation: "母音 a に hỏi を付けます。", answerLanguage: "vi", strictTone: true },
            { id: "t2-10", type: "typing", prompt: "mạ", answers: ["mạ"], explanation: "母音 a に nặng を付けます。", answerLanguage: "vi", strictTone: true }
          ]
        },
        {
          id: "typing-3",
          title: "GROUP 03",
          description: "基本単語と短い表現",
          questions: [
            { id: "t3-01", type: "typing", prompt: "tôi", answers: ["tôi"], explanation: "tôi は「私」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-02", type: "typing", prompt: "bạn", answers: ["bạn"], explanation: "bạn は「友達・あなた」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-03", type: "typing", prompt: "nước", answers: ["nước"], explanation: "nước は「水・国」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-04", type: "typing", prompt: "khỏe", answers: ["khỏe"], explanation: "khỏe は「元気な・健康な」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-05", type: "typing", prompt: "hiểu", answers: ["hiểu"], explanation: "hiểu は「分かる」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-06", type: "typing", prompt: "rất", answers: ["rất"], explanation: "rất は「とても」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-07", type: "typing", prompt: "nhỏ", answers: ["nhỏ"], explanation: "nhỏ は「小さい」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-08", type: "typing", prompt: "xin chào", answers: ["xin chào"], explanation: "xin chào は「こんにちは」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-09", type: "typing", prompt: "cảm ơn", answers: ["cảm ơn"], explanation: "cảm ơn は「ありがとう」です。", answerLanguage: "vi", strictTone: true },
            { id: "t3-10", type: "typing", prompt: "tiếng Việt", answers: ["tiếng Việt"], explanation: "tiếng Việt は「ベトナム語」です。", answerLanguage: "vi", strictTone: true }
          ]
        }
      ]
    },
    {
      id: "starter",
      label: "A1",
      name: "入門",
      description: "基本単語とあいさつ",
      requires: "typing-3",
      groups: [
        {
          id: "starter-1",
          title: "GROUP 01",
          description: "基本の単語",
          questions: [
            { id: "s1-01", type: "meaning-choice", direction: "vi-ja", prompt: "ăn", choices: ["食べる", "飲む", "行く", "見る"], answers: ["食べる"], explanation: "ăn は「食べる」という動詞です。" },
            { id: "s1-02", type: "meaning-choice", direction: "ja-vi", prompt: "飲む", choices: ["ăn", "uống", "đi", "đọc"], answers: ["uống"], explanation: "uống は「飲む」です。", answerLanguage: "vi" },
            { id: "s1-03", type: "meaning-choice", direction: "vi-ja", prompt: "đi", choices: ["来る", "行く", "帰る", "待つ"], answers: ["行く"], explanation: "đi は「行く」です。" },
            { id: "s1-04", type: "meaning-choice", direction: "ja-vi", prompt: "家", choices: ["nhà", "trường", "chợ", "phố"], answers: ["nhà"], explanation: "nhà は「家」です。", answerLanguage: "vi" },
            { id: "s1-05", type: "meaning-choice", direction: "vi-ja", prompt: "nước", choices: ["火", "水", "空", "土"], answers: ["水"], explanation: "nước はここでは「水」。文脈によって「国」の意味にもなります。" },
            { id: "s1-06", type: "meaning-choice", direction: "ja-vi", prompt: "友達", choices: ["bạn", "anh", "em", "thầy"], answers: ["bạn"], explanation: "bạn は「友達」または同年代への「あなた」です。", answerLanguage: "vi" },
            { id: "s1-07", type: "meaning-choice", direction: "vi-ja", prompt: "sách", choices: ["机", "椅子", "本", "鞄"], answers: ["本"], explanation: "sách は「本」です。" },
            { id: "s1-08", type: "meaning-choice", direction: "ja-vi", prompt: "美しい", choices: ["đẹp", "xấu", "mới", "cũ"], answers: ["đẹp"], explanation: "đẹp は「美しい・きれい」です。", answerLanguage: "vi" },
            { id: "s1-09", type: "meaning-choice", direction: "vi-ja", prompt: "lớn", choices: ["長い", "大きい", "高い", "多い"], answers: ["大きい"], explanation: "lớn は「大きい」です。" },
            { id: "s1-10", type: "meaning-choice", direction: "ja-vi", prompt: "小さい", choices: ["nhỏ", "ngắn", "thấp", "ít"], answers: ["nhỏ"], explanation: "nhỏ は「小さい」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "starter-2",
          title: "GROUP 02",
          description: "あいさつと基本文",
          questions: [
            { id: "s2-01", type: "blank-choice", sentence: "Xin ___!", choices: ["chào", "lỗi", "ơn", "lại"], answers: ["chào"], explanation: "Xin chào! で「こんにちは」です。", translation: "こんにちは！", answerLanguage: "vi" },
            { id: "s2-02", type: "blank-input", sentence: "Cảm ___ bạn.", answers: ["ơn"], explanation: "cảm ơn で「ありがとう」です。", translation: "ありがとうございます。", answerLanguage: "vi" },
            { id: "s2-03", type: "blank-choice", sentence: "Tôi ___ người Nhật.", choices: ["là", "có", "ở", "đi"], answers: ["là"], explanation: "A là B は「AはBです」。", translation: "私は日本人です。", answerLanguage: "vi" },
            { id: "s2-04", type: "blank-input", sentence: "Bạn ___ khỏe không?", answers: ["có"], explanation: "có ... không? で「〜ですか」と尋ねます。", translation: "お元気ですか？", answerLanguage: "vi" },
            { id: "s2-05", type: "blank-choice", sentence: "Tôi ___ khỏe.", choices: ["rất", "không", "chưa", "đang"], answers: ["rất"], explanation: "rất は「とても」です。", translation: "私はとても元気です。", answerLanguage: "vi" },
            { id: "s2-06", type: "blank-input", sentence: "Tôi tên ___ Mai.", answers: ["là"], explanation: "Tôi tên là ... で「私の名前は…です」。", translation: "私の名前はマイです。", answerLanguage: "vi" },
            { id: "s2-07", type: "blank-choice", sentence: "Hẹn gặp ___.", choices: ["lại", "đi", "đây", "này"], answers: ["lại"], explanation: "Hẹn gặp lại. は「また会いましょう」。", translation: "また会いましょう。", answerLanguage: "vi" },
            { id: "s2-08", type: "blank-input", sentence: "Xin ___.", answers: ["lỗi"], explanation: "Xin lỗi. は「すみません・ごめんなさい」。", translation: "すみません。", answerLanguage: "vi" },
            { id: "s2-09", type: "blank-choice", sentence: "Tôi không ___.", choices: ["hiểu", "khỏe", "tên", "lại"], answers: ["hiểu"], explanation: "không hiểu で「分かりません」。", translation: "私は分かりません。", answerLanguage: "vi" },
            { id: "s2-10", type: "blank-input", sentence: "___, cảm ơn.", answers: ["Vâng", "vâng"], explanation: "vâng は丁寧な「はい」です。", translation: "はい、ありがとうございます。", answerLanguage: "vi" }
          ]
        }
      ]
    },
    {
      id: "elementary",
      label: "A1+",
      name: "初級",
      description: "日常表現と翻訳",
      requires: "starter-2",
      groups: [
        {
          id: "elementary-1",
          title: "GROUP 01",
          description: "日常生活の表現",
          questions: [
            { id: "e1-01", type: "translation", direction: "vi-ja", prompt: "Tôi uống cà phê mỗi sáng.", modelAnswer: "私は毎朝コーヒーを飲みます。", grading: "self", explanation: "mỗi sáng は「毎朝」です。" },
            { id: "e1-02", type: "translation", direction: "ja-vi", prompt: "私はベトナム語を勉強しています。", answers: ["Tôi đang học tiếng Việt.", "Tôi học tiếng Việt."], modelAnswer: "Tôi đang học tiếng Việt.", grading: "accepted", answerLanguage: "vi", explanation: "đang は進行中の動作を表します。" },
            { id: "e1-03", type: "meaning-choice", direction: "vi-ja", prompt: "hôm nay", choices: ["昨日", "今日", "明日", "毎日"], answers: ["今日"], explanation: "hôm nay は「今日」です。" },
            { id: "e1-04", type: "meaning-choice", direction: "ja-vi", prompt: "市場", choices: ["chợ", "nhà", "trường", "bệnh viện"], answers: ["chợ"], explanation: "chợ は「市場」です。", answerLanguage: "vi" },
            { id: "e1-05", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "bằng xe buýt", answers: ["バスで", "バスを使って", "バスに乗って"], modelAnswer: "バスで", grading: "accepted", explanation: "bằng は交通手段を示すときに使います。" },
            { id: "e1-06", type: "translation", direction: "ja-vi", prompt: "明日は休みです。", modelAnswer: "Ngày mai tôi được nghỉ.", grading: "self", answerLanguage: "vi", explanation: "được nghỉ は「休みである・休める」です。" },
            { id: "e1-07", type: "translation", direction: "vi-ja", prompt: "Bạn sống ở đâu?", answers: ["どこに住んでいますか", "あなたはどこに住んでいますか"], modelAnswer: "あなたはどこに住んでいますか？", grading: "accepted", explanation: "ở đâu は「どこで・どこに」です。" },
            { id: "e1-08", type: "translation", direction: "ja-vi", prompt: "私は辛い食べ物が好きです。", answers: ["Tôi thích đồ ăn cay.", "Tôi thích thức ăn cay."], modelAnswer: "Tôi thích đồ ăn cay.", grading: "accepted", answerLanguage: "vi", explanation: "đồ ăn cay は「辛い食べ物」です。" },
            { id: "e1-09", type: "meaning-choice", direction: "vi-ja", prompt: "rẻ", choices: ["高い", "安い", "新しい", "古い"], answers: ["安い"], explanation: "rẻ は「安い」です。" },
            { id: "e1-10", type: "meaning-choice", direction: "ja-vi", prompt: "病院", choices: ["bệnh viện", "nhà hàng", "sân bay", "bưu điện"], answers: ["bệnh viện"], explanation: "bệnh viện は「病院」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "elementary-2",
          title: "GROUP 02",
          description: "時制・条件と翻訳",
          questions: [
            { id: "e2-01", type: "translation", direction: "vi-ja", prompt: "Tôi đã đi chợ hôm qua.", modelAnswer: "私は昨日、市場へ行きました。", grading: "self", explanation: "đã は完了・過去を示します。" },
            { id: "e2-02", type: "translation", direction: "ja-vi", prompt: "私はまだ朝ごはんを食べていません。", answers: ["Tôi chưa ăn sáng.", "Tôi vẫn chưa ăn sáng."], modelAnswer: "Tôi chưa ăn sáng.", grading: "accepted", answerLanguage: "vi", explanation: "chưa は「まだ〜していない」です。" },
            { id: "e2-03", type: "translation", direction: "vi-ja", prompt: "Chị ấy đang nấu ăn.", answers: ["彼女は料理しています", "彼女は料理をしています", "彼女は今料理しています"], modelAnswer: "彼女は料理をしています。", grading: "accepted", explanation: "đang は動作の進行を表します。" },
            { id: "e2-04", type: "meaning-choice", direction: "ja-vi", prompt: "まだ（〜していない）", choices: ["chưa", "đã", "đang", "sẽ"], answers: ["chưa"], explanation: "chưa は未完了の「まだ」です。", answerLanguage: "vi" },
            { id: "e2-05", type: "meaning-choice", direction: "ja-vi", prompt: "一緒に", choices: ["cùng", "riêng", "trước", "sau"], answers: ["cùng"], explanation: "cùng は「一緒に」です。", answerLanguage: "vi" },
            { id: "e2-06", type: "translation", direction: "vi-ja", prompt: "Nếu trời mưa, tôi sẽ ở nhà.", modelAnswer: "雨が降ったら、私は家にいます。", grading: "self", explanation: "Nếu ... は「もし〜なら」、sẽ は未来の表現です。" },
            { id: "e2-07", type: "translation", direction: "ja-vi", prompt: "時間があれば電話してください。", modelAnswer: "Nếu có thời gian, hãy gọi cho tôi.", grading: "self", answerLanguage: "vi", explanation: "hãy は依頼や勧めを表します。" },
            { id: "e2-08", type: "meaning-choice", direction: "vi-ja", prompt: "mặc dù", choices: ["もし", "〜なので", "〜にもかかわらず", "〜する前に"], answers: ["〜にもかかわらず"], explanation: "mặc dù は逆接の「〜にもかかわらず」です。" },
            { id: "e2-09", type: "translation", direction: "vi-ja", prompt: "Tôi muốn mua vé đi Hà Nội.", answers: ["私はハノイ行きの切符を買いたいです", "ハノイ行きのチケットを買いたいです"], modelAnswer: "私はハノイ行きの切符を買いたいです。", grading: "accepted", explanation: "vé は「切符・チケット」、muốn は「〜したい」です。" },
            { id: "e2-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "đi Hà Nội", answers: ["ハノイへ行く", "ハノイに行く", "ハノイ行き"], modelAnswer: "ハノイへ行く", grading: "accepted", explanation: "đi + 場所 で「〜へ行く」です。" }
          ]
        }
      ]
    }
  ]
};
