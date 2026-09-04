window.defaultQuestionBank = {
  version: 10,
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
      id: "vocabulary",
      label: "A語",
      name: "A語彙",
      description: "Aレベルの単語・表現",
      requires: "typing-3",
      groups: [
        {
          id: "vocabulary-1",
          title: "GROUP 01",
          description: "初級・基本動詞",
          questions: [
            { id: "v1-01", type: "meaning-choice", direction: "vi-ja", prompt: "ăn", choices: ["食べる", "飲む", "眠る", "歩く"], answers: ["食べる"], explanation: "ăn は「食べる」です。" },
            { id: "v1-02", type: "meaning-choice", direction: "ja-vi", prompt: "飲む", choices: ["uống", "ăn", "ngủ", "đọc"], answers: ["uống"], explanation: "uống は「飲む」です。", answerLanguage: "vi" },
            { id: "v1-03", type: "meaning-input", direction: "vi-ja", prompt: "đi", answers: ["行く"], modelAnswer: "行く", explanation: "đi は「行く」です。" },
            { id: "v1-04", type: "meaning-input", direction: "ja-vi", prompt: "来る", answers: ["đến", "tới"], modelAnswer: "đến", explanation: "đến と tới は、どちらも「来る・到着する」の意味で使えます。", answerLanguage: "vi" },
            { id: "v1-05", type: "meaning-choice", direction: "vi-ja", prompt: "ngủ", choices: ["寝る", "起きる", "働く", "話す"], answers: ["寝る"], explanation: "ngủ は「寝る・眠る」です。" },
            { id: "v1-06", type: "meaning-choice", direction: "ja-vi", prompt: "起きる", choices: ["thức dậy", "đi ngủ", "ngồi", "đứng"], answers: ["thức dậy"], explanation: "thức dậy は「起きる・目を覚ます」です。", answerLanguage: "vi" },
            { id: "v1-07", type: "meaning-input", direction: "vi-ja", prompt: "làm", answers: ["する", "働く", "作る"], modelAnswer: "する／働く", explanation: "làm は文脈によって「する・働く・作る」などを表します。" },
            { id: "v1-08", type: "meaning-input", direction: "ja-vi", prompt: "見る", answers: ["xem"], modelAnswer: "xem", explanation: "xem は「見る」です。", answerLanguage: "vi" },
            { id: "v1-09", type: "meaning-choice", direction: "vi-ja", prompt: "nói", choices: ["話す", "聞く", "読む", "書く"], answers: ["話す"], explanation: "nói は「話す・言う」です。" },
            { id: "v1-10", type: "meaning-choice", direction: "ja-vi", prompt: "聞く", choices: ["nghe", "nói", "xem", "viết"], answers: ["nghe"], explanation: "nghe は「聞く」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-2",
          title: "GROUP 02",
          description: "初級・人と家族",
          questions: [
            { id: "v2-01", type: "meaning-choice", direction: "vi-ja", prompt: "người", choices: ["人", "家", "名前", "国"], answers: ["人"], explanation: "người は「人」です。" },
            { id: "v2-02", type: "meaning-choice", direction: "ja-vi", prompt: "家族", choices: ["gia đình", "bạn bè", "hàng xóm", "trẻ em"], answers: ["gia đình"], explanation: "gia đình は「家族」です。", answerLanguage: "vi" },
            { id: "v2-03", type: "meaning-input", direction: "vi-ja", prompt: "mẹ", answers: ["母", "お母さん"], modelAnswer: "母", explanation: "mẹ は「母・お母さん」です。" },
            { id: "v2-04", type: "meaning-input", direction: "ja-vi", prompt: "父", answers: ["bố", "ba"], modelAnswer: "bố／ba", explanation: "bố は主に北部、ba は主に南部で使われる「父」です。", answerLanguage: "vi" },
            { id: "v2-05", type: "meaning-choice", direction: "vi-ja", prompt: "anh trai", choices: ["兄", "姉", "弟", "妹"], answers: ["兄"], explanation: "anh trai は「兄」です。" },
            { id: "v2-06", type: "meaning-choice", direction: "ja-vi", prompt: "姉", choices: ["chị gái", "anh trai", "em gái", "em trai"], answers: ["chị gái"], explanation: "chị gái は「姉」です。", answerLanguage: "vi" },
            { id: "v2-07", type: "meaning-input", direction: "vi-ja", prompt: "em", answers: ["弟", "妹", "年下の人"], modelAnswer: "弟／妹／年下の人", explanation: "em は「弟・妹」や、自分より年下の相手への呼び方です。" },
            { id: "v2-08", type: "meaning-input", direction: "ja-vi", prompt: "友達", answers: ["bạn", "bạn bè"], modelAnswer: "bạn", explanation: "bạn は一人の友達、bạn bè は友達全般を表せます。", answerLanguage: "vi" },
            { id: "v2-09", type: "meaning-choice", direction: "vi-ja", prompt: "con cái", choices: ["子どもたち", "両親", "夫婦", "親戚"], answers: ["子どもたち"], explanation: "con cái は集合的な「子どもたち」です。" },
            { id: "v2-10", type: "meaning-choice", direction: "ja-vi", prompt: "夫", choices: ["chồng", "vợ", "con trai", "bố"], answers: ["chồng"], explanation: "chồng は「夫」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-3",
          title: "GROUP 03",
          description: "初級・食事と買い物",
          questions: [
            { id: "v3-01", type: "meaning-choice", direction: "vi-ja", prompt: "cơm", choices: ["ご飯", "麺", "肉", "魚"], answers: ["ご飯"], explanation: "cơm は「ご飯・食事」です。" },
            { id: "v3-02", type: "meaning-choice", direction: "ja-vi", prompt: "フォー", choices: ["phở", "cơm", "bánh mì", "cháo"], answers: ["phở"], explanation: "phở は米麺を使ったベトナム料理です。", answerLanguage: "vi" },
            { id: "v3-03", type: "meaning-input", direction: "vi-ja", prompt: "rau", answers: ["野菜"], modelAnswer: "野菜", explanation: "rau は「野菜」です。" },
            { id: "v3-04", type: "meaning-input", direction: "ja-vi", prompt: "肉", answers: ["thịt"], modelAnswer: "thịt", explanation: "thịt は「肉」です。", answerLanguage: "vi" },
            { id: "v3-05", type: "meaning-choice", direction: "vi-ja", prompt: "trái cây", choices: ["果物", "野菜", "飲み物", "お菓子"], answers: ["果物"], explanation: "trái cây は主に南部で使われる「果物」です。北部では hoa quả もよく使います。" },
            { id: "v3-06", type: "meaning-choice", direction: "ja-vi", prompt: "水", choices: ["nước", "sữa", "trà", "cà phê"], answers: ["nước"], explanation: "nước はここでは「水」です。", answerLanguage: "vi" },
            { id: "v3-07", type: "meaning-input", direction: "vi-ja", prompt: "giá", answers: ["値段", "価格"], modelAnswer: "値段", explanation: "giá は「値段・価格」です。" },
            { id: "v3-08", type: "meaning-input", direction: "ja-vi", prompt: "安い", answers: ["rẻ"], modelAnswer: "rẻ", explanation: "rẻ は「安い」です。", answerLanguage: "vi" },
            { id: "v3-09", type: "meaning-choice", direction: "vi-ja", prompt: "đắt", choices: ["高い", "安い", "重い", "軽い"], answers: ["高い"], explanation: "đắt は「値段が高い」です。" },
            { id: "v3-10", type: "meaning-choice", direction: "ja-vi", prompt: "値引き", choices: ["giảm giá", "tăng giá", "trả tiền", "tiền thừa"], answers: ["giảm giá"], explanation: "giảm giá は「値引き・割引」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-4",
          title: "GROUP 04",
          description: "初級・場所と移動",
          questions: [
            { id: "v4-01", type: "meaning-choice", direction: "vi-ja", prompt: "nhà", choices: ["家", "学校", "店", "会社"], answers: ["家"], explanation: "nhà は「家」です。" },
            { id: "v4-02", type: "meaning-choice", direction: "ja-vi", prompt: "学校", choices: ["trường học", "bệnh viện", "nhà hàng", "khách sạn"], answers: ["trường học"], explanation: "trường học は「学校」です。", answerLanguage: "vi" },
            { id: "v4-03", type: "meaning-input", direction: "vi-ja", prompt: "bệnh viện", answers: ["病院"], modelAnswer: "病院", explanation: "bệnh viện は「病院」です。" },
            { id: "v4-04", type: "meaning-input", direction: "ja-vi", prompt: "市場", answers: ["chợ"], modelAnswer: "chợ", explanation: "chợ は「市場」です。", answerLanguage: "vi" },
            { id: "v4-05", type: "meaning-choice", direction: "vi-ja", prompt: "sân bay", choices: ["空港", "駅", "港", "駐車場"], answers: ["空港"], explanation: "sân bay は「空港」です。" },
            { id: "v4-06", type: "meaning-choice", direction: "ja-vi", prompt: "駅", choices: ["nhà ga", "sân bay", "bến xe", "bưu điện"], answers: ["nhà ga"], explanation: "nhà ga は「駅」です。", answerLanguage: "vi" },
            { id: "v4-07", type: "meaning-input", direction: "vi-ja", prompt: "xe buýt", answers: ["バス"], modelAnswer: "バス", explanation: "xe buýt は「バス」です。" },
            { id: "v4-08", type: "meaning-input", direction: "ja-vi", prompt: "バイク", answers: ["xe máy"], modelAnswer: "xe máy", explanation: "xe máy は「オートバイ・バイク」です。", answerLanguage: "vi" },
            { id: "v4-09", type: "meaning-choice", direction: "vi-ja", prompt: "đường", choices: ["道", "橋", "川", "建物"], answers: ["道"], explanation: "đường は「道・道路」です。文脈によって「砂糖」の意味にもなります。" },
            { id: "v4-10", type: "meaning-choice", direction: "ja-vi", prompt: "交差点", choices: ["ngã tư", "vỉa hè", "cầu", "đường hầm"], answers: ["ngã tư"], explanation: "ngã tư は「交差点・四つ角」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-5",
          title: "GROUP 05",
          description: "初級・時間と日常",
          questions: [
            { id: "v5-01", type: "meaning-choice", direction: "vi-ja", prompt: "hôm nay", choices: ["今日", "昨日", "明日", "毎日"], answers: ["今日"], explanation: "hôm nay は「今日」です。" },
            { id: "v5-02", type: "meaning-choice", direction: "ja-vi", prompt: "明日", choices: ["ngày mai", "hôm qua", "hôm nay", "ngày kia"], answers: ["ngày mai"], explanation: "ngày mai は「明日」です。", answerLanguage: "vi" },
            { id: "v5-03", type: "meaning-input", direction: "vi-ja", prompt: "hôm qua", answers: ["昨日"], modelAnswer: "昨日", explanation: "hôm qua は「昨日」です。" },
            { id: "v5-04", type: "meaning-input", direction: "ja-vi", prompt: "朝", answers: ["buổi sáng", "sáng"], modelAnswer: "buổi sáng", explanation: "buổi sáng は「朝・午前」です。", answerLanguage: "vi" },
            { id: "v5-05", type: "meaning-choice", direction: "vi-ja", prompt: "buổi tối", choices: ["夜", "朝", "昼", "午後"], answers: ["夜"], explanation: "buổi tối は「夜・晩」です。" },
            { id: "v5-06", type: "meaning-choice", direction: "ja-vi", prompt: "週", choices: ["tuần", "tháng", "năm", "ngày"], answers: ["tuần"], explanation: "tuần は「週」です。", answerLanguage: "vi" },
            { id: "v5-07", type: "meaning-input", direction: "vi-ja", prompt: "tháng", answers: ["月", "か月", "月間"], modelAnswer: "月／か月", explanation: "tháng は暦の「月」や期間の「〜か月」です。" },
            { id: "v5-08", type: "meaning-input", direction: "ja-vi", prompt: "年", answers: ["năm"], modelAnswer: "năm", explanation: "năm は「年」です。文脈によって数字の「五」にもなります。", answerLanguage: "vi" },
            { id: "v5-09", type: "meaning-choice", direction: "vi-ja", prompt: "thường xuyên", choices: ["頻繁に", "時々", "めったに〜ない", "突然"], answers: ["頻繁に"], explanation: "thường xuyên は「頻繁に・定期的に」です。" },
            { id: "v5-10", type: "meaning-choice", direction: "ja-vi", prompt: "時々", choices: ["thỉnh thoảng", "luôn luôn", "chưa bao giờ", "ngay lập tức"], answers: ["thỉnh thoảng"], explanation: "thỉnh thoảng は「時々」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-6",
          title: "GROUP 06",
          description: "初中級・感情と状態",
          questions: [
            { id: "v6-01", type: "meaning-choice", direction: "vi-ja", prompt: "vui", choices: ["うれしい", "悲しい", "心配な", "怒った"], answers: ["うれしい"], explanation: "vui は「うれしい・楽しい」です。" },
            { id: "v6-02", type: "meaning-choice", direction: "ja-vi", prompt: "悲しい", choices: ["buồn", "vui", "mệt", "khỏe"], answers: ["buồn"], explanation: "buồn は「悲しい」です。", answerLanguage: "vi" },
            { id: "v6-03", type: "meaning-input", direction: "vi-ja", prompt: "lo lắng", answers: ["心配する", "心配な", "不安な"], modelAnswer: "心配する／不安な", explanation: "lo lắng は「心配する・不安に思う」です。" },
            { id: "v6-04", type: "meaning-input", direction: "ja-vi", prompt: "疲れた", answers: ["mệt", "mệt mỏi"], modelAnswer: "mệt", explanation: "mệt は「疲れた」です。", answerLanguage: "vi" },
            { id: "v6-05", type: "meaning-choice", direction: "vi-ja", prompt: "đói", choices: ["空腹な", "喉が渇いた", "眠い", "痛い"], answers: ["空腹な"], explanation: "đói は「お腹が空いた」です。" },
            { id: "v6-06", type: "meaning-choice", direction: "ja-vi", prompt: "喉が渇いた", choices: ["khát", "đói", "mệt", "buồn ngủ"], answers: ["khát"], explanation: "khát は「喉が渇いた」です。", answerLanguage: "vi" },
            { id: "v6-07", type: "meaning-input", direction: "vi-ja", prompt: "khỏe", answers: ["元気な", "健康な", "丈夫な"], modelAnswer: "元気な／健康な", explanation: "khỏe は「元気な・健康な」です。" },
            { id: "v6-08", type: "meaning-input", direction: "ja-vi", prompt: "忙しい", answers: ["bận"], modelAnswer: "bận", explanation: "bận は「忙しい」です。", answerLanguage: "vi" },
            { id: "v6-09", type: "meaning-choice", direction: "vi-ja", prompt: "rảnh", choices: ["暇な", "忙しい", "難しい", "簡単な"], answers: ["暇な"], explanation: "rảnh は「暇な・時間がある」です。" },
            { id: "v6-10", type: "meaning-choice", direction: "ja-vi", prompt: "驚いた", choices: ["ngạc nhiên", "thất vọng", "hài lòng", "tự hào"], answers: ["ngạc nhiên"], explanation: "ngạc nhiên は「驚いた・驚く」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-7",
          title: "GROUP 07",
          description: "中級・学習と仕事",
          questions: [
            { id: "v7-01", type: "meaning-choice", direction: "vi-ja", prompt: "học", choices: ["学ぶ", "教える", "働く", "休む"], answers: ["学ぶ"], explanation: "học は「学ぶ・勉強する」です。" },
            { id: "v7-02", type: "meaning-choice", direction: "ja-vi", prompt: "教える", choices: ["dạy", "học", "hỏi", "trả lời"], answers: ["dạy"], explanation: "dạy は「教える」です。", answerLanguage: "vi" },
            { id: "v7-03", type: "meaning-input", direction: "vi-ja", prompt: "giáo viên", answers: ["教師", "先生"], modelAnswer: "教師／先生", explanation: "giáo viên は「教師・先生」です。" },
            { id: "v7-04", type: "meaning-input", direction: "ja-vi", prompt: "学生・生徒", answers: ["học sinh", "sinh viên"], modelAnswer: "học sinh／sinh viên", explanation: "học sinh は児童・生徒、sinh viên は大学生を表します。", answerLanguage: "vi" },
            { id: "v7-05", type: "meaning-choice", direction: "vi-ja", prompt: "công việc", choices: ["仕事", "休暇", "趣味", "授業"], answers: ["仕事"], explanation: "công việc は「仕事・作業」です。" },
            { id: "v7-06", type: "meaning-choice", direction: "ja-vi", prompt: "同僚", choices: ["đồng nghiệp", "khách hàng", "quản lý", "đối tác"], answers: ["đồng nghiệp"], explanation: "đồng nghiệp は「同僚」です。", answerLanguage: "vi" },
            { id: "v7-07", type: "meaning-input", direction: "vi-ja", prompt: "cuộc họp", answers: ["会議", "ミーティング"], modelAnswer: "会議", explanation: "cuộc họp は「会議」です。" },
            { id: "v7-08", type: "meaning-input", direction: "ja-vi", prompt: "報告・報告書", answers: ["báo cáo"], modelAnswer: "báo cáo", explanation: "báo cáo は名詞の「報告・報告書」、動詞の「報告する」です。", answerLanguage: "vi" },
            { id: "v7-09", type: "meaning-choice", direction: "vi-ja", prompt: "kinh nghiệm", choices: ["経験", "知識", "責任", "資格"], answers: ["経験"], explanation: "kinh nghiệm は「経験」です。" },
            { id: "v7-10", type: "meaning-choice", direction: "ja-vi", prompt: "技能・スキル", choices: ["kỹ năng", "kinh nghiệm", "kiến thức", "thói quen"], answers: ["kỹ năng"], explanation: "kỹ năng は「技能・スキル」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-8",
          title: "GROUP 08",
          description: "中級・社会と環境",
          questions: [
            { id: "v8-01", type: "meaning-choice", direction: "vi-ja", prompt: "môi trường", choices: ["環境", "社会", "経済", "政治"], answers: ["環境"], explanation: "môi trường は「環境」です。" },
            { id: "v8-02", type: "meaning-choice", direction: "ja-vi", prompt: "汚染", choices: ["ô nhiễm", "khí hậu", "thiên nhiên", "rác thải"], answers: ["ô nhiễm"], explanation: "ô nhiễm は「汚染」です。", answerLanguage: "vi" },
            { id: "v8-03", type: "meaning-input", direction: "vi-ja", prompt: "giao thông công cộng", answers: ["公共交通", "公共交通機関"], modelAnswer: "公共交通機関", explanation: "giao thông công cộng は「公共交通・公共交通機関」です。" },
            { id: "v8-04", type: "meaning-input", direction: "ja-vi", prompt: "リサイクルする", answers: ["tái chế"], modelAnswer: "tái chế", explanation: "tái chế は「リサイクルする・再生利用する」です。", answerLanguage: "vi" },
            { id: "v8-05", type: "meaning-choice", direction: "vi-ja", prompt: "tiết kiệm", choices: ["節約する", "浪費する", "消費する", "生産する"], answers: ["節約する"], explanation: "tiết kiệm は「節約する」です。" },
            { id: "v8-06", type: "meaning-choice", direction: "ja-vi", prompt: "地域社会", choices: ["cộng đồng", "dân số", "chính phủ", "tổ chức"], answers: ["cộng đồng"], explanation: "cộng đồng は「共同体・地域社会」です。", answerLanguage: "vi" },
            { id: "v8-07", type: "meaning-input", direction: "vi-ja", prompt: "văn hóa", answers: ["文化"], modelAnswer: "文化", explanation: "văn hóa は「文化」です。" },
            { id: "v8-08", type: "meaning-input", direction: "ja-vi", prompt: "経済", answers: ["kinh tế"], modelAnswer: "kinh tế", explanation: "kinh tế は「経済」です。", answerLanguage: "vi" },
            { id: "v8-09", type: "meaning-choice", direction: "vi-ja", prompt: "giáo dục", choices: ["教育", "医療", "法律", "科学"], answers: ["教育"], explanation: "giáo dục は「教育」です。" },
            { id: "v8-10", type: "meaning-choice", direction: "ja-vi", prompt: "健康", choices: ["sức khỏe", "an toàn", "hạnh phúc", "đời sống"], answers: ["sức khỏe"], explanation: "sức khỏe は「健康」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-9",
          title: "GROUP 09",
          description: "中上級・抽象的な語彙",
          questions: [
            { id: "v9-01", type: "meaning-choice", direction: "vi-ja", prompt: "ý kiến", choices: ["意見", "理由", "目的", "結果"], answers: ["意見"], explanation: "ý kiến は「意見」です。" },
            { id: "v9-02", type: "meaning-choice", direction: "ja-vi", prompt: "理由", choices: ["lý do", "kết quả", "mục tiêu", "cơ hội"], answers: ["lý do"], explanation: "lý do は「理由」です。", answerLanguage: "vi" },
            { id: "v9-03", type: "meaning-input", direction: "vi-ja", prompt: "mục tiêu", answers: ["目標", "目的"], modelAnswer: "目標／目的", explanation: "mục tiêu は「目標・目的」です。" },
            { id: "v9-04", type: "meaning-input", direction: "ja-vi", prompt: "結果", answers: ["kết quả"], modelAnswer: "kết quả", explanation: "kết quả は「結果」です。", answerLanguage: "vi" },
            { id: "v9-05", type: "meaning-choice", direction: "vi-ja", prompt: "cơ hội", choices: ["機会", "危険", "責任", "選択"], answers: ["機会"], explanation: "cơ hội は「機会・チャンス」です。" },
            { id: "v9-06", type: "meaning-choice", direction: "ja-vi", prompt: "責任", choices: ["trách nhiệm", "quyền lợi", "nghĩa vụ", "kinh nghiệm"], answers: ["trách nhiệm"], explanation: "trách nhiệm は「責任」です。", answerLanguage: "vi" },
            { id: "v9-07", type: "meaning-input", direction: "vi-ja", prompt: "thay đổi", answers: ["変化", "変更", "変える", "変わる"], modelAnswer: "変化／変更する", explanation: "thay đổi は名詞の「変化」、動詞の「変える・変わる」です。" },
            { id: "v9-08", type: "meaning-input", direction: "ja-vi", prompt: "発展する・開発する", answers: ["phát triển"], modelAnswer: "phát triển", explanation: "phát triển は「発展する・開発する」です。", answerLanguage: "vi" },
            { id: "v9-09", type: "meaning-choice", direction: "vi-ja", prompt: "giải pháp", choices: ["解決策", "問題", "条件", "方法論"], answers: ["解決策"], explanation: "giải pháp は「解決策」です。" },
            { id: "v9-10", type: "meaning-choice", direction: "ja-vi", prompt: "影響", choices: ["ảnh hưởng", "thay đổi", "phát triển", "quan hệ"], answers: ["ảnh hưởng"], explanation: "ảnh hưởng は「影響」、または「影響を与える」です。", answerLanguage: "vi" }
          ]
        },
        {
          id: "vocabulary-10",
          title: "GROUP 10",
          description: "上級・表現とイディオム",
          questions: [
            { id: "v10-01", type: "meaning-choice", direction: "vi-ja", prompt: "cố gắng", choices: ["努力する", "諦める", "注意する", "決定する"], answers: ["努力する"], explanation: "cố gắng は「努力する・頑張る」です。" },
            { id: "v10-02", type: "meaning-choice", direction: "ja-vi", prompt: "注意する", choices: ["chú ý", "đồng ý", "phản đối", "giải thích"], answers: ["chú ý"], explanation: "chú ý は「注意する・注目する」です。", answerLanguage: "vi" },
            { id: "v10-03", type: "meaning-input", direction: "vi-ja", prompt: "quen với", answers: ["慣れている", "〜に慣れている", "慣れる"], modelAnswer: "〜に慣れている", explanation: "quen với は「〜に慣れている」です。" },
            { id: "v10-04", type: "meaning-input", direction: "ja-vi", prompt: "決定する", answers: ["quyết định"], modelAnswer: "quyết định", explanation: "quyết định は「決定する」、または名詞の「決定」です。", answerLanguage: "vi" },
            { id: "v10-05", type: "meaning-choice", direction: "vi-ja", prompt: "phụ thuộc vào", choices: ["〜に依存する", "〜に反対する", "〜に参加する", "〜を避ける"], answers: ["〜に依存する"], explanation: "phụ thuộc vào は「〜に依存する・〜次第である」です。" },
            { id: "v10-06", type: "meaning-choice", direction: "ja-vi", prompt: "一般的に", choices: ["nói chung", "đặc biệt", "trái lại", "cuối cùng"], answers: ["nói chung"], explanation: "nói chung は「一般的に・概して」です。", answerLanguage: "vi" },
            { id: "v10-07", type: "meaning-input", direction: "vi-ja", prompt: "một công đôi việc", answers: ["一石二鳥", "一つの仕事で二つの成果を得る"], modelAnswer: "一石二鳥", explanation: "một công đôi việc は、一つの行動で二つの成果を得ることを表す慣用表現です。" },
            { id: "v10-08", type: "meaning-input", direction: "ja-vi", prompt: "隣の芝生は青い・目移りする", answers: ["đứng núi này trông núi nọ"], modelAnswer: "đứng núi này trông núi nọ", explanation: "đứng núi này trông núi nọ は、今あるものに満足せず他をよく思うことを表します。", answerLanguage: "vi" },
            { id: "v10-09", type: "meaning-choice", direction: "vi-ja", prompt: "nước đến chân mới nhảy", choices: ["切羽詰まるまで行動しない", "急がば回れ", "念には念を入れる", "失敗から学ぶ"], answers: ["切羽詰まるまで行動しない"], explanation: "nước đến chân mới nhảy は、事態が差し迫ってから初めて行動することを表します。" },
            { id: "v10-10", type: "meaning-choice", direction: "ja-vi", prompt: "努力を続ければ成功する", choices: ["có công mài sắt, có ngày nên kim", "nước đến chân mới nhảy", "một công đôi việc", "đứng núi này trông núi nọ"], answers: ["có công mài sắt, có ngày nên kim"], explanation: "có công mài sắt, có ngày nên kim は、努力を続ければいつか成功するということわざです。", answerLanguage: "vi" }
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
            { id: "s2-10", type: "blank-input", sentence: "___, cảm ơn.", answers: ["vâng", "dạ"], explanation: "vâng と dạ は、どちらも丁寧な「はい」として使えます。地域や相手との関係によって使い方が異なります。", translation: "はい、ありがとうございます。", answerLanguage: "vi" }
          ]
        }
      ]
    },
    {
      id: "elementary",
      label: "A1+",
      name: "初級",
      description: "日常表現と翻訳",
      requires: "starter-5",
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

// A1〜B1入門の追加問題。既存IDは変更せず、学習記録との互換性を保ちます。
(() => {
  const levels = window.defaultQuestionBank.levels;
  const starter = levels.find((level) => level.id === "starter");
  const elementary = levels.find((level) => level.id === "elementary");

  starter.groups.push(
    {
      id: "starter-3", title: "GROUP 03", description: "数字・曜日・時刻",
      questions: [
        { id: "s3-01", type: "meaning-choice", direction: "vi-ja", prompt: "một", choices: ["一", "二", "十", "百"], answers: ["一"], explanation: "một は「一」です。" },
        { id: "s3-02", type: "meaning-choice", direction: "ja-vi", prompt: "二十", choices: ["mười hai", "hai mươi", "hai trăm", "mười"], answers: ["hai mươi"], explanation: "hai mươi は「二十」です。", answerLanguage: "vi" },
        { id: "s3-03", type: "blank-choice", sentence: "Bây giờ là ___ giờ.", choices: ["ba", "bảy", "chín", "mười"], answers: ["ba"], translation: "今は3時です。", explanation: "ba giờ は「3時」です。", answerLanguage: "vi" },
        { id: "s3-04", type: "blank-input", sentence: "Hôm nay là thứ ___.", answers: ["Hai", "hai"], translation: "今日は月曜日です。", explanation: "thứ Hai は「月曜日」です。", answerLanguage: "vi" },
        { id: "s3-05", type: "meaning-choice", direction: "vi-ja", prompt: "buổi sáng", choices: ["朝", "昼", "夕方", "夜"], answers: ["朝"], explanation: "buổi sáng は「朝」です。" },
        { id: "s3-06", type: "meaning-choice", direction: "ja-vi", prompt: "明日", choices: ["hôm qua", "hôm nay", "ngày mai", "mỗi ngày"], answers: ["ngày mai"], explanation: "ngày mai は「明日」です。", answerLanguage: "vi" },
        { id: "s3-07", type: "blank-choice", sentence: "Tôi đi làm lúc ___ giờ.", choices: ["tám", "thứ", "ngày", "tuần"], answers: ["tám"], translation: "私は8時に仕事へ行きます。", explanation: "lúc tám giờ は「8時に」です。", answerLanguage: "vi" },
        { id: "s3-08", type: "blank-input", sentence: "Một tuần có ___ ngày.", answers: ["bảy"], translation: "1週間は7日あります。", explanation: "bảy は「七」です。", answerLanguage: "vi" },
        { id: "s3-09", type: "translation", direction: "vi-ja", prompt: "Bây giờ là chín giờ.", answers: ["今は9時です", "現在9時です"], modelAnswer: "今は9時です。", grading: "accepted", explanation: "chín giờ は「9時」です。" },
        { id: "s3-10", type: "translation", direction: "ja-vi", prompt: "今日は日曜日です。", answers: ["Hôm nay là Chủ nhật.", "Hôm nay là chủ nhật."], modelAnswer: "Hôm nay là Chủ nhật.", grading: "accepted", answerLanguage: "vi", explanation: "Chủ nhật は「日曜日」です。" }
      ]
    },
    {
      id: "starter-4", title: "GROUP 04", description: "家族・人・職業",
      questions: [
        { id: "s4-01", type: "meaning-choice", direction: "vi-ja", prompt: "mẹ", choices: ["母", "父", "姉", "弟"], answers: ["母"], explanation: "mẹ は「母」です。" },
        { id: "s4-02", type: "meaning-choice", direction: "ja-vi", prompt: "父", choices: ["mẹ", "bố", "chị", "em"], answers: ["bố"], explanation: "bố は主に北部で使う「父」です。南部では ba も使います。", answerLanguage: "vi" },
        { id: "s4-03", type: "meaning-choice", direction: "vi-ja", prompt: "anh trai", choices: ["兄", "姉", "弟", "妹"], answers: ["兄"], explanation: "anh trai は「兄」です。" },
        { id: "s4-04", type: "meaning-choice", direction: "ja-vi", prompt: "妹", choices: ["chị gái", "anh trai", "em gái", "em trai"], answers: ["em gái"], explanation: "em gái は「妹」です。", answerLanguage: "vi" },
        { id: "s4-05", type: "meaning-choice", direction: "vi-ja", prompt: "giáo viên", choices: ["先生", "学生", "医師", "会社員"], answers: ["先生"], explanation: "giáo viên は「教師・先生」です。" },
        { id: "s4-06", type: "meaning-choice", direction: "ja-vi", prompt: "学生", choices: ["học sinh", "bác sĩ", "nhân viên", "giáo viên"], answers: ["học sinh"], explanation: "học sinh は「児童・生徒」です。", answerLanguage: "vi" },
        { id: "s4-07", type: "blank-choice", sentence: "Đây là ___ của tôi.", choices: ["mẹ", "ăn", "đẹp", "ở"], answers: ["mẹ"], translation: "こちらは私の母です。", explanation: "của tôi は「私の」です。", answerLanguage: "vi" },
        { id: "s4-08", type: "blank-input", sentence: "Anh ấy là bác ___.", answers: ["sĩ"], translation: "彼は医師です。", explanation: "bác sĩ は「医師」です。", answerLanguage: "vi" },
        { id: "s4-09", type: "translation", direction: "vi-ja", prompt: "Gia đình tôi có bốn người.", answers: ["私の家族は4人です", "私の家族は四人です"], modelAnswer: "私の家族は4人です。", grading: "accepted", explanation: "gia đình は「家族」、bốn người は「4人」です。" },
        { id: "s4-10", type: "translation", direction: "ja-vi", prompt: "彼女は私の姉です。", answers: ["Chị ấy là chị gái của tôi.", "Cô ấy là chị gái của tôi."], modelAnswer: "Chị ấy là chị gái của tôi.", grading: "accepted", answerLanguage: "vi", explanation: "chị gái は「姉」です。" }
      ]
    },
    {
      id: "starter-5", title: "GROUP 05", description: "食事と毎日の動作",
      questions: [
        { id: "s5-01", type: "meaning-choice", direction: "vi-ja", prompt: "cơm", choices: ["ご飯", "パン", "麺", "肉"], answers: ["ご飯"], explanation: "cơm は「ご飯・食事」です。" },
        { id: "s5-02", type: "meaning-choice", direction: "ja-vi", prompt: "コーヒー", choices: ["cà phê", "nước", "trà", "sữa"], answers: ["cà phê"], explanation: "cà phê は「コーヒー」です。", answerLanguage: "vi" },
        { id: "s5-03", type: "meaning-choice", direction: "vi-ja", prompt: "trái cây", choices: ["野菜", "果物", "魚", "卵"], answers: ["果物"], explanation: "trái cây は「果物」です。" },
        { id: "s5-04", type: "meaning-choice", direction: "ja-vi", prompt: "朝食を食べる", choices: ["ăn sáng", "ăn trưa", "ăn tối", "đi ngủ"], answers: ["ăn sáng"], explanation: "ăn sáng は「朝食を食べる」です。", answerLanguage: "vi" },
        { id: "s5-05", type: "blank-choice", sentence: "Tôi ___ phở.", choices: ["thích", "tên", "là", "ở"], answers: ["thích"], translation: "私はフォーが好きです。", explanation: "thích は「好き」です。", answerLanguage: "vi" },
        { id: "s5-06", type: "blank-input", sentence: "Tôi muốn ___ nước.", answers: ["uống"], translation: "私は水を飲みたいです。", explanation: "muốn + 動詞 で「〜したい」です。", answerLanguage: "vi" },
        { id: "s5-07", type: "meaning-choice", direction: "vi-ja", prompt: "đói", choices: ["空腹な", "喉が渇いた", "疲れた", "眠い"], answers: ["空腹な"], explanation: "đói は「お腹が空いた」です。" },
        { id: "s5-08", type: "meaning-choice", direction: "ja-vi", prompt: "レストラン", choices: ["nhà hàng", "khách sạn", "cửa hàng", "nhà ga"], answers: ["nhà hàng"], explanation: "nhà hàng は「レストラン」です。", answerLanguage: "vi" },
        { id: "s5-09", type: "translation", direction: "vi-ja", prompt: "Tôi ăn sáng lúc bảy giờ.", answers: ["私は7時に朝食を食べます", "私は七時に朝ごはんを食べます"], modelAnswer: "私は7時に朝食を食べます。", grading: "accepted", explanation: "ăn sáng は「朝食を食べる」です。" },
        { id: "s5-10", type: "translation", direction: "ja-vi", prompt: "私はお茶を一杯ほしいです。", answers: ["Tôi muốn một cốc trà.", "Tôi muốn một ly trà."], modelAnswer: "Tôi muốn một cốc trà.", grading: "accepted", answerLanguage: "vi", explanation: "một cốc／một ly は飲み物の「一杯」です。" }
      ]
    }
  );

  elementary.groups.push(
    {
      id: "elementary-3", title: "GROUP 03", description: "場所と道案内",
      questions: [
        { id: "e3-01", type: "meaning-choice", direction: "vi-ja", prompt: "bên trái", choices: ["左側", "右側", "前", "後ろ"], answers: ["左側"], explanation: "bên trái は「左側」です。" },
        { id: "e3-02", type: "meaning-choice", direction: "ja-vi", prompt: "右へ曲がる", choices: ["rẽ phải", "rẽ trái", "đi thẳng", "quay lại"], answers: ["rẽ phải"], explanation: "rẽ phải は「右へ曲がる」です。", answerLanguage: "vi" },
        { id: "e3-03", type: "blank-choice", sentence: "Hãy đi ___ khoảng 200 mét.", choices: ["thẳng", "gần", "xa", "cạnh"], answers: ["thẳng"], translation: "約200メートルまっすぐ進んでください。", explanation: "đi thẳng は「まっすぐ進む」です。", answerLanguage: "vi" },
        { id: "e3-04", type: "blank-input", sentence: "Ngân hàng ở ___ bưu điện.", answers: ["cạnh", "bên cạnh"], translation: "銀行は郵便局の隣にあります。", explanation: "(bên) cạnh は「隣に」です。", answerLanguage: "vi" },
        { id: "e3-05", type: "meaning-choice", direction: "vi-ja", prompt: "gần", choices: ["近い", "遠い", "広い", "狭い"], answers: ["近い"], explanation: "gần は「近い」です。" },
        { id: "e3-06", type: "meaning-choice", direction: "ja-vi", prompt: "交差点", choices: ["ngã tư", "vỉa hè", "cầu", "đường"], answers: ["ngã tư"], explanation: "ngã tư は「交差点」です。", answerLanguage: "vi" },
        { id: "e3-07", type: "translation", direction: "vi-ja", prompt: "Nhà ga ở đâu?", answers: ["駅はどこですか", "鉄道駅はどこですか"], modelAnswer: "駅はどこですか？", grading: "accepted", explanation: "ở đâu は「どこに」です。" },
        { id: "e3-08", type: "translation", direction: "ja-vi", prompt: "ここから遠いですか。", answers: ["Có xa đây không?", "Có xa chỗ này không?", "Từ đây có xa không?"], modelAnswer: "Từ đây có xa không?", grading: "accepted", answerLanguage: "vi", explanation: "Từ đây は「ここから」です。" },
        { id: "e3-09", type: "blank-choice", sentence: "Siêu thị ở ___ khách sạn.", choices: ["đối diện", "trên", "trong", "giữa"], answers: ["đối diện"], translation: "スーパーはホテルの向かいにあります。", explanation: "đối diện は「向かいに」です。", answerLanguage: "vi" },
        { id: "e3-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "rẽ trái ở ngã tư", answers: ["交差点で左に曲がる", "交差点を左に曲がる"], modelAnswer: "交差点で左に曲がる", grading: "accepted", explanation: "rẽ trái は「左へ曲がる」です。" }
      ]
    },
    {
      id: "elementary-4", title: "GROUP 04", description: "買い物と値段",
      questions: [
        { id: "e4-01", type: "meaning-choice", direction: "vi-ja", prompt: "bao nhiêu tiền", choices: ["いくら", "いくつ", "いつ", "どこ"], answers: ["いくら"], explanation: "bao nhiêu tiền は「いくらですか」です。" },
        { id: "e4-02", type: "meaning-choice", direction: "ja-vi", prompt: "高い", choices: ["đắt", "rẻ", "nặng", "nhẹ"], answers: ["đắt"], explanation: "đắt は「値段が高い」です。", answerLanguage: "vi" },
        { id: "e4-03", type: "blank-choice", sentence: "Cái áo này ___ tiền?", choices: ["bao nhiêu", "bao giờ", "thế nào", "ở đâu"], answers: ["bao nhiêu"], translation: "このシャツはいくらですか。", explanation: "bao nhiêu tiền で値段を尋ねます。", answerLanguage: "vi" },
        { id: "e4-04", type: "blank-input", sentence: "Tôi muốn ___ cái này.", answers: ["mua"], translation: "私はこれを買いたいです。", explanation: "mua は「買う」です。", answerLanguage: "vi" },
        { id: "e4-05", type: "meaning-choice", direction: "vi-ja", prompt: "giảm giá", choices: ["値引き", "支払い", "お釣り", "領収書"], answers: ["値引き"], explanation: "giảm giá は「値引き・セール」です。" },
        { id: "e4-06", type: "meaning-choice", direction: "ja-vi", prompt: "1キロ", choices: ["một ký", "một cái", "một đôi", "một chai"], answers: ["một ký"], explanation: "một ký は「1キログラム」です。", answerLanguage: "vi" },
        { id: "e4-07", type: "translation", direction: "vi-ja", prompt: "Cho tôi xem cái màu xanh.", modelAnswer: "青いものを見せてください。", grading: "self", explanation: "Cho tôi xem ... は「〜を見せてください」です。" },
        { id: "e4-08", type: "translation", direction: "ja-vi", prompt: "もう少し安くできますか。", answers: ["Có thể bớt một chút không?", "Bớt một chút được không?"], modelAnswer: "Có thể bớt một chút không?", grading: "accepted", answerLanguage: "vi", explanation: "bớt は値段を「少しまける」です。" },
        { id: "e4-09", type: "blank-choice", sentence: "Tôi trả ___ thẻ.", choices: ["bằng", "với", "cho", "của"], answers: ["bằng"], translation: "私はカードで支払います。", explanation: "bằng thẻ は「カードで」です。", answerLanguage: "vi" },
        { id: "e4-10", type: "translation", direction: "vi-ja", prompt: "Tôi chỉ xem thôi.", answers: ["見ているだけです", "私は見るだけです"], modelAnswer: "見ているだけです。", grading: "accepted", explanation: "chỉ ... thôi は「ただ〜だけ」です。" }
      ]
    },
    {
      id: "elementary-5", title: "GROUP 05", description: "予定・誘い・会話",
      questions: [
        { id: "e5-01", type: "meaning-choice", direction: "vi-ja", prompt: "cuối tuần", choices: ["週末", "平日", "来週", "先週"], answers: ["週末"], explanation: "cuối tuần は「週末」です。" },
        { id: "e5-02", type: "meaning-choice", direction: "ja-vi", prompt: "一緒に", choices: ["cùng nhau", "một mình", "sau đó", "trước tiên"], answers: ["cùng nhau"], explanation: "cùng nhau は「一緒に」です。", answerLanguage: "vi" },
        { id: "e5-03", type: "blank-choice", sentence: "Ngày mai tôi ___ đi Huế.", choices: ["sẽ", "đã", "đang", "vừa"], answers: ["sẽ"], translation: "明日、私はフエへ行く予定です。", explanation: "sẽ は未来・予定を示します。", answerLanguage: "vi" },
        { id: "e5-04", type: "blank-input", sentence: "Bạn có muốn đi ___ tôi không?", answers: ["với", "cùng"], translation: "私と一緒に行きたいですか。", explanation: "đi với／đi cùng は「〜と行く」です。", answerLanguage: "vi" },
        { id: "e5-05", type: "meaning-choice", direction: "vi-ja", prompt: "bận", choices: ["忙しい", "暇な", "楽しい", "難しい"], answers: ["忙しい"], explanation: "bận は「忙しい」です。" },
        { id: "e5-06", type: "meaning-choice", direction: "ja-vi", prompt: "会う約束・予約", choices: ["cuộc hẹn", "kế hoạch", "ý kiến", "câu hỏi"], answers: ["cuộc hẹn"], explanation: "cuộc hẹn は「会う約束・予約」です。", answerLanguage: "vi" },
        { id: "e5-07", type: "translation", direction: "vi-ja", prompt: "Tối nay bạn có rảnh không?", answers: ["今夜は空いていますか", "今夜は暇ですか", "今晩は空いていますか", "今晩は暇ですか", "今夜空いていますか", "今夜暇ですか", "今晩空いていますか", "今晩暇ですか", "今夜は時間がありますか", "今晩は時間がありますか"], modelAnswer: "今夜は空いていますか？", grading: "accepted", explanation: "rảnh は「暇な・時間がある」です。" },
        { id: "e5-08", type: "translation", direction: "ja-vi", prompt: "土曜日に会いましょう。", answers: ["Chúng ta gặp nhau vào thứ Bảy nhé.", "Hẹn gặp bạn vào thứ Bảy."], modelAnswer: "Chúng ta gặp nhau vào thứ Bảy nhé.", grading: "accepted", answerLanguage: "vi", explanation: "nhé は親しい提案を柔らかくします。" },
        { id: "e5-09", type: "blank-choice", sentence: "Tôi muốn đi, ___ tôi phải làm việc.", choices: ["nhưng", "vì", "nên", "nếu"], answers: ["nhưng"], translation: "行きたいですが、仕事をしなければなりません。", explanation: "nhưng は「しかし」です。", answerLanguage: "vi" },
        { id: "e5-10", type: "translation", direction: "vi-ja", prompt: "Hãy gọi cho tôi trước khi bạn đến.", modelAnswer: "来る前に私へ電話してください。", grading: "self", explanation: "trước khi は「〜する前に」です。" }
      ]
    }
  );

  levels.push(
    {
      id: "a2", label: "A2", name: "初中級", description: "経験・比較・依頼・接続", requires: "elementary-5",
      groups: [
        {
          id: "a2-1", title: "GROUP 01", description: "旅行と交通",
          questions: [
            { id: "a21-01", type: "meaning-choice", direction: "vi-ja", prompt: "chuyến bay", choices: ["飛行便", "列車", "旅券", "荷物"], answers: ["飛行便"], explanation: "chuyến bay は「飛行便・フライト」です。" },
            { id: "a21-02", type: "meaning-choice", direction: "ja-vi", prompt: "予約する", choices: ["đặt", "hủy", "đổi", "mang"], answers: ["đặt"], explanation: "đặt vé／đặt phòng で「予約する」です。", answerLanguage: "vi" },
            { id: "a21-03", type: "blank-choice", sentence: "Tôi muốn ___ một phòng đôi.", choices: ["đặt", "đón", "mượn", "gửi"], answers: ["đặt"], translation: "ダブルルームを1室予約したいです。", explanation: "đặt phòng は「部屋を予約する」です。", answerLanguage: "vi" },
            { id: "a21-04", type: "blank-input", sentence: "Chuyến bay bị ___ hai tiếng.", answers: ["hoãn"], translation: "フライトは2時間遅延しました。", explanation: "bị hoãn は「延期・遅延される」です。", answerLanguage: "vi" },
            { id: "a21-05", type: "meaning-choice", direction: "vi-ja", prompt: "hành lý", choices: ["荷物", "切符", "座席", "地図"], answers: ["荷物"], explanation: "hành lý は旅行の「荷物」です。" },
            { id: "a21-06", type: "meaning-choice", direction: "ja-vi", prompt: "片道切符", choices: ["vé một chiều", "vé khứ hồi", "vé tháng", "vé điện tử"], answers: ["vé một chiều"], explanation: "vé một chiều は「片道切符」です。", answerLanguage: "vi" },
            { id: "a21-07", type: "translation", direction: "vi-ja", prompt: "Xe buýt này có đi qua sân bay không?", modelAnswer: "このバスは空港を通りますか？", grading: "self", explanation: "đi qua は「通る」です。" },
            { id: "a21-08", type: "translation", direction: "ja-vi", prompt: "ホテルまでどのくらいかかりますか。", answers: ["Đi đến khách sạn mất bao lâu?", "Đến khách sạn mất bao lâu?"], modelAnswer: "Đi đến khách sạn mất bao lâu?", grading: "accepted", answerLanguage: "vi", explanation: "mất bao lâu は所要時間を尋ねます。" },
            { id: "a21-09", type: "blank-choice", sentence: "Tàu sẽ ___ lúc sáu giờ.", choices: ["khởi hành", "đến nơi", "dừng", "đợi"], answers: ["khởi hành"], translation: "列車は6時に出発します。", explanation: "khởi hành は「出発する」です。", answerLanguage: "vi" },
            { id: "a21-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "đổi sang chuyến sớm hơn", modelAnswer: "もっと早い便に変更する", grading: "self", explanation: "đổi sang は「〜へ変更する」です。" }
          ]
        },
        {
          id: "a2-2", title: "GROUP 02", description: "経験と動作の段階",
          questions: [
            { id: "a22-01", type: "meaning-choice", direction: "vi-ja", prompt: "đã từng", choices: ["〜したことがある", "ちょうど〜した", "まだ〜しない", "もうすぐ〜する"], answers: ["〜したことがある"], explanation: "đã từng は経験を表します。" },
            { id: "a22-02", type: "meaning-choice", direction: "ja-vi", prompt: "一度も〜したことがない", choices: ["chưa bao giờ", "vừa mới", "đang", "sắp"], answers: ["chưa bao giờ"], explanation: "chưa bao giờ は「一度も〜したことがない」です。", answerLanguage: "vi" },
            { id: "a22-03", type: "blank-choice", sentence: "Tôi ___ từng đến Đà Nẵng.", choices: ["đã", "sẽ", "đang", "còn"], answers: ["đã"], translation: "私はダナンへ行ったことがあります。", explanation: "đã từng + 動詞 で経験を表します。", answerLanguage: "vi" },
            { id: "a22-04", type: "blank-input", sentence: "Tôi vừa ___ ăn trưa.", answers: ["mới"], translation: "私はちょうど昼食を食べたところです。", explanation: "vừa mới は「ちょうど〜したところ」です。", answerLanguage: "vi" },
            { id: "a22-05", type: "meaning-choice", direction: "vi-ja", prompt: "sắp", choices: ["もうすぐ", "すでに", "まだ", "いつも"], answers: ["もうすぐ"], explanation: "sắp は近い未来を表します。" },
            { id: "a22-06", type: "blank-choice", sentence: "Trời ___ mưa, nhớ mang ô nhé.", choices: ["sắp", "đã", "vừa", "từng"], answers: ["sắp"], translation: "もうすぐ雨が降りそうなので、傘を忘れないでください。", explanation: "sắp mưa は「もうすぐ雨が降る」です。", answerLanguage: "vi" },
            { id: "a22-07", type: "translation", direction: "vi-ja", prompt: "Bạn đã ăn món này bao giờ chưa?", modelAnswer: "この料理を食べたことがありますか？", grading: "self", explanation: "đã ... bao giờ chưa? は経験を尋ねます。" },
            { id: "a22-08", type: "translation", direction: "ja-vi", prompt: "私はまだ仕事を終えていません。", answers: ["Tôi vẫn chưa làm xong việc.", "Tôi chưa làm xong công việc."], modelAnswer: "Tôi vẫn chưa làm xong việc.", grading: "accepted", answerLanguage: "vi", explanation: "vẫn chưa は「まだ〜していない」です。" },
            { id: "a22-09", type: "blank-choice", sentence: "Anh ấy ___ còn sống ở Hà Nội.", choices: ["vẫn", "vừa", "đã", "sắp"], answers: ["vẫn"], translation: "彼は今もハノイに住んでいます。", explanation: "vẫn còn は状態の継続を表します。", answerLanguage: "vi" },
            { id: "a22-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "mới học được ba tháng", modelAnswer: "勉強を始めてまだ3か月だ", grading: "self", explanation: "mới ... được は「まだ〜だけ」です。" }
          ]
        },
        {
          id: "a2-3", title: "GROUP 03", description: "比較と程度",
          questions: [
            { id: "a23-01", type: "meaning-choice", direction: "vi-ja", prompt: "hơn", choices: ["〜より", "最も", "同じくらい", "十分に"], answers: ["〜より"], explanation: "hơn は比較級を作ります。" },
            { id: "a23-02", type: "meaning-choice", direction: "ja-vi", prompt: "最も", choices: ["nhất", "hơn", "bằng", "khá"], answers: ["nhất"], explanation: "nhất は最上級を作ります。", answerLanguage: "vi" },
            { id: "a23-03", type: "blank-choice", sentence: "Cái áo này rẻ ___ cái áo kia.", choices: ["hơn", "nhất", "bằng", "đủ"], answers: ["hơn"], translation: "このシャツはあのシャツより安いです。", explanation: "形容詞 + hơn + 比較対象 で比較します。", answerLanguage: "vi" },
            { id: "a23-04", type: "blank-input", sentence: "Hôm nay nóng ___ hôm qua.", answers: ["hơn"], translation: "今日は昨日より暑いです。", explanation: "nóng hơn は「より暑い」です。", answerLanguage: "vi" },
            { id: "a23-05", type: "meaning-choice", direction: "vi-ja", prompt: "bằng nhau", choices: ["同じである", "異なる", "十分である", "不足している"], answers: ["同じである"], explanation: "bằng nhau は「等しい・同じ」です。" },
            { id: "a23-06", type: "blank-choice", sentence: "Đây là món ngon ___ của quán.", choices: ["nhất", "hơn", "bằng", "đủ"], answers: ["nhất"], translation: "これは店で一番おいしい料理です。", explanation: "ngon nhất は「最もおいしい」です。", answerLanguage: "vi" },
            { id: "a23-07", type: "translation", direction: "vi-ja", prompt: "Em tôi cao bằng tôi.", answers: ["私の弟は私と同じくらい背が高い", "私の妹は私と同じくらい背が高い"], modelAnswer: "私の弟（妹）は私と同じくらい背が高いです。", grading: "accepted", explanation: "A + 形容詞 + bằng + B で同程度を表します。" },
            { id: "a23-08", type: "translation", direction: "ja-vi", prompt: "この部屋は3人には十分広いです。", modelAnswer: "Phòng này đủ rộng cho ba người.", grading: "self", answerLanguage: "vi", explanation: "đủ + 形容詞 で「十分〜だ」です。" },
            { id: "a23-09", type: "blank-choice", sentence: "Càng học, tôi ___ thấy tiếng Việt thú vị.", choices: ["càng", "rất", "đủ", "nhất"], answers: ["càng"], translation: "学べば学ぶほど、ベトナム語を面白いと感じます。", explanation: "càng ... càng ... は「〜すればするほど」です。", answerLanguage: "vi" },
            { id: "a23-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "không khó như tôi nghĩ", modelAnswer: "私が思ったほど難しくない", grading: "self", explanation: "không ... như ... は「〜ほど…ではない」です。" }
          ]
        },
        {
          id: "a2-4", title: "GROUP 04", description: "依頼・許可・義務",
          questions: [
            { id: "a24-01", type: "meaning-choice", direction: "vi-ja", prompt: "có thể", choices: ["〜できる", "〜すべき", "〜しなければならない", "〜してはいけない"], answers: ["〜できる"], explanation: "có thể は可能を表します。" },
            { id: "a24-02", type: "meaning-choice", direction: "ja-vi", prompt: "〜すべき", choices: ["nên", "phải", "được", "cần"], answers: ["nên"], explanation: "nên は助言の「〜すべき」です。", answerLanguage: "vi" },
            { id: "a24-03", type: "blank-choice", sentence: "Bạn ___ mang theo hộ chiếu.", choices: ["phải", "được", "muốn", "thích"], answers: ["phải"], translation: "パスポートを携帯しなければなりません。", explanation: "phải は義務を表します。", answerLanguage: "vi" },
            { id: "a24-04", type: "blank-input", sentence: "Bạn không ___ hút thuốc ở đây.", answers: ["được"], translation: "ここでたばこを吸ってはいけません。", explanation: "không được + 動詞 は禁止です。", answerLanguage: "vi" },
            { id: "a24-05", type: "meaning-choice", direction: "vi-ja", prompt: "làm ơn", choices: ["どうか・お願いします", "もちろん", "たぶん", "残念ながら"], answers: ["どうか・お願いします"], explanation: "làm ơn は丁寧な依頼に使います。" },
            { id: "a24-06", type: "blank-choice", sentence: "Làm ơn ___ tôi chụp ảnh.", choices: ["giúp", "cho", "bắt", "đợi"], answers: ["giúp"], translation: "写真を撮るのを手伝ってください。", explanation: "giúp tôi + 動詞 は「私が〜するのを助ける」です。", answerLanguage: "vi" },
            { id: "a24-07", type: "translation", direction: "vi-ja", prompt: "Tôi có thể ngồi ở đây không?", answers: ["ここに座ってもいいですか", "私はここに座れますか"], modelAnswer: "ここに座ってもいいですか？", grading: "accepted", explanation: "có thể ... không? で許可・可能を尋ねます。" },
            { id: "a24-08", type: "translation", direction: "ja-vi", prompt: "もっと休んだ方がいいですよ。", answers: ["Bạn nên nghỉ ngơi nhiều hơn.", "Bạn nên nghỉ nhiều hơn."], modelAnswer: "Bạn nên nghỉ ngơi nhiều hơn.", grading: "accepted", answerLanguage: "vi", explanation: "nên は助言に使います。" },
            { id: "a24-09", type: "blank-choice", sentence: "Tôi ___ bạn chỉ đường giúp.", choices: ["nhờ", "bắt", "cấm", "quên"], answers: ["nhờ"], translation: "道を教えていただきたいです。", explanation: "nhờ + 人 + 動詞 giúp は人に頼む表現です。", answerLanguage: "vi" },
            { id: "a24-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "không cần phải vội", modelAnswer: "急ぐ必要はない", grading: "self", explanation: "không cần phải は「〜する必要はない」です。" }
          ]
        },
        {
          id: "a2-5", title: "GROUP 05", description: "理由・条件・時間の接続",
          questions: [
            { id: "a25-01", type: "meaning-choice", direction: "vi-ja", prompt: "vì ... nên ...", choices: ["〜なので…", "〜なら…", "〜だが…", "〜する間…"], answers: ["〜なので…"], explanation: "vì は理由、nên は結果を導きます。" },
            { id: "a25-02", type: "meaning-choice", direction: "ja-vi", prompt: "〜にもかかわらず", choices: ["mặc dù", "nếu", "sau khi", "trong khi"], answers: ["mặc dù"], explanation: "mặc dù は譲歩を表します。", answerLanguage: "vi" },
            { id: "a25-03", type: "blank-choice", sentence: "___ trời mưa nên chúng tôi ở nhà.", choices: ["Vì", "Nếu", "Khi", "Mặc dù"], answers: ["Vì"], translation: "雨が降ったので、私たちは家にいました。", explanation: "Vì ... nên ... で理由と結果を結びます。", answerLanguage: "vi" },
            { id: "a25-04", type: "blank-input", sentence: "___ có thời gian, tôi sẽ gọi cho bạn.", answers: ["Nếu", "nếu"], translation: "時間があれば、あなたに電話します。", explanation: "nếu は「もし〜なら」です。", answerLanguage: "vi" },
            { id: "a25-05", type: "meaning-choice", direction: "vi-ja", prompt: "sau khi", choices: ["〜した後で", "〜する前に", "〜している間", "〜するまで"], answers: ["〜した後で"], explanation: "sau khi は「〜した後で」です。" },
            { id: "a25-06", type: "blank-choice", sentence: "Tôi rửa tay ___ khi ăn.", choices: ["trước", "sau", "trong", "đến"], answers: ["trước"], translation: "私は食べる前に手を洗います。", explanation: "trước khi は「〜する前に」です。", answerLanguage: "vi" },
            { id: "a25-07", type: "translation", direction: "vi-ja", prompt: "Mặc dù mệt, cô ấy vẫn tiếp tục làm việc.", modelAnswer: "疲れているにもかかわらず、彼女は仕事を続けました。", grading: "self", explanation: "mặc dù ... vẫn ... は譲歩と継続を表します。" },
            { id: "a25-08", type: "translation", direction: "ja-vi", prompt: "私が料理している間、弟はテレビを見ていました。", modelAnswer: "Trong khi tôi nấu ăn, em trai tôi xem ti vi.", grading: "self", answerLanguage: "vi", explanation: "trong khi は同時進行の「〜する間」です。" },
            { id: "a25-09", type: "blank-choice", sentence: "Khi đến nơi, hãy ___ cho tôi biết.", choices: ["báo", "nói chuyện", "hỏi", "nghe"], answers: ["báo"], translation: "着いたら、私に知らせてください。", explanation: "báo cho ... biết は「〜に知らせる」です。", answerLanguage: "vi" },
            { id: "a25-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "cho đến khi trời tối", modelAnswer: "暗くなるまで", grading: "self", explanation: "cho đến khi は「〜するまで」です。" }
          ]
        }
      ]
    },
    {
      id: "b1", label: "B1", name: "入門", description: "意見・仕事・社会・条件表現", requires: "a2-5",
      groups: [
        {
          id: "b1-1", title: "GROUP 01", description: "意見と理由",
          questions: [
            { id: "b11-01", type: "meaning-choice", direction: "vi-ja", prompt: "theo tôi", choices: ["私の考えでは", "そのため", "例えば", "一方で"], answers: ["私の考えでは"], explanation: "theo tôi は意見を述べる導入表現です。" },
            { id: "b11-02", type: "meaning-choice", direction: "ja-vi", prompt: "同意する", choices: ["đồng ý", "phản đối", "giải thích", "so sánh"], answers: ["đồng ý"], explanation: "đồng ý は「同意する」です。", answerLanguage: "vi" },
            { id: "b11-03", type: "blank-choice", sentence: "Tôi nghĩ ___ học ngoại ngữ rất cần thiết.", choices: ["rằng", "nếu", "vì", "nhưng"], answers: ["rằng"], translation: "外国語を学ぶことはとても必要だと思います。", explanation: "nghĩ rằng ... は「〜だと思う」です。", answerLanguage: "vi" },
            { id: "b11-04", type: "blank-input", sentence: "Lý do chính ___ tôi muốn học là để làm việc.", answers: ["mà"], translation: "私が学びたい主な理由は仕事のためです。", explanation: "lý do ... mà ... は理由を説明する形です。", answerLanguage: "vi" },
            { id: "b11-05", type: "meaning-choice", direction: "vi-ja", prompt: "lợi ích", choices: ["利点", "欠点", "原因", "結果"], answers: ["利点"], explanation: "lợi ích は「利益・利点」です。" },
            { id: "b11-06", type: "meaning-choice", direction: "ja-vi", prompt: "欠点・制約", choices: ["hạn chế", "lợi ích", "mục đích", "kết quả"], answers: ["hạn chế"], explanation: "hạn chế は「制約・欠点」です。", answerLanguage: "vi" },
            { id: "b11-07", type: "translation", direction: "vi-ja", prompt: "Theo tôi, đi xe buýt vừa rẻ vừa tiện.", modelAnswer: "私の考えでは、バスで行くのは安くて便利です。", grading: "self", explanation: "vừa ... vừa ... は「〜でもあり…でもある」です。" },
            { id: "b11-08", type: "translation", direction: "ja-vi", prompt: "私はその意見に完全には同意しません。", modelAnswer: "Tôi không hoàn toàn đồng ý với ý kiến đó.", grading: "self", answerLanguage: "vi", explanation: "không hoàn toàn は「完全には〜ない」です。" },
            { id: "b11-09", type: "blank-choice", sentence: "Ví dụ, làm việc ở nhà giúp tiết kiệm ___.", choices: ["thời gian", "ý kiến", "lý do", "kinh nghiệm"], answers: ["thời gian"], translation: "例えば、在宅勤務は時間の節約になります。", explanation: "tiết kiệm thời gian は「時間を節約する」です。", answerLanguage: "vi" },
            { id: "b11-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "nêu lý do cho ý kiến của mình", modelAnswer: "自分の意見の理由を述べる", grading: "self", explanation: "nêu lý do は「理由を述べる」です。" }
          ]
        },
        {
          id: "b1-2", title: "GROUP 02", description: "仕事と学習",
          questions: [
            { id: "b12-01", type: "meaning-choice", direction: "vi-ja", prompt: "kinh nghiệm", choices: ["経験", "能力", "責任", "給料"], answers: ["経験"], explanation: "kinh nghiệm は「経験」です。" },
            { id: "b12-02", type: "meaning-choice", direction: "ja-vi", prompt: "面接", choices: ["phỏng vấn", "cuộc họp", "báo cáo", "hợp đồng"], answers: ["phỏng vấn"], explanation: "phỏng vấn は「面接・インタビュー」です。", answerLanguage: "vi" },
            { id: "b12-03", type: "blank-choice", sentence: "Công việc này yêu cầu kỹ năng giao ___.", choices: ["tiếp", "thông", "dịch", "đổi"], answers: ["tiếp"], translation: "この仕事にはコミュニケーション能力が必要です。", explanation: "kỹ năng giao tiếp は「コミュニケーション能力」です。", answerLanguage: "vi" },
            { id: "b12-04", type: "blank-input", sentence: "Tôi chịu trách ___ về dự án này.", answers: ["nhiệm"], translation: "私はこのプロジェクトに責任を負っています。", explanation: "chịu trách nhiệm về は「〜に責任を負う」です。", answerLanguage: "vi" },
            { id: "b12-05", type: "meaning-choice", direction: "vi-ja", prompt: "hạn chót", choices: ["締め切り", "予定", "休暇", "残業"], answers: ["締め切り"], explanation: "hạn chót は「締め切り」です。" },
            { id: "b12-06", type: "meaning-choice", direction: "ja-vi", prompt: "研修・訓練", choices: ["đào tạo", "tuyển dụng", "thăng chức", "nghỉ việc"], answers: ["đào tạo"], explanation: "đào tạo は「教育・研修する」です。", answerLanguage: "vi" },
            { id: "b12-07", type: "translation", direction: "vi-ja", prompt: "Tôi đã làm việc trong lĩnh vực này được ba năm.", modelAnswer: "私はこの分野で3年間働いています。", grading: "self", explanation: "đã ... được ba năm は継続期間を表します。" },
            { id: "b12-08", type: "translation", direction: "ja-vi", prompt: "会議の前に報告書を提出してください。", modelAnswer: "Hãy nộp báo cáo trước cuộc họp.", grading: "self", answerLanguage: "vi", explanation: "nộp báo cáo は「報告書を提出する」です。" },
            { id: "b12-09", type: "blank-choice", sentence: "Để tiến bộ, tôi cố gắng luyện tập ___.", choices: ["thường xuyên", "hiếm khi", "tình cờ", "đột nhiên"], answers: ["thường xuyên"], translation: "上達するために、私は定期的に練習するよう努めています。", explanation: "thường xuyên は「定期的に」です。", answerLanguage: "vi" },
            { id: "b12-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "cân bằng giữa công việc và cuộc sống", modelAnswer: "仕事と生活のバランスを取る", grading: "self", explanation: "cân bằng giữa A và B は「AとBの均衡を取る」です。" }
          ]
        },
        {
          id: "b1-3", title: "GROUP 03", description: "社会と環境",
          questions: [
            { id: "b13-01", type: "meaning-choice", direction: "vi-ja", prompt: "môi trường", choices: ["環境", "経済", "教育", "文化"], answers: ["環境"], explanation: "môi trường は「環境」です。" },
            { id: "b13-02", type: "meaning-choice", direction: "ja-vi", prompt: "大気汚染", choices: ["ô nhiễm không khí", "biến đổi khí hậu", "năng lượng sạch", "rác thải"], answers: ["ô nhiễm không khí"], explanation: "ô nhiễm không khí は「大気汚染」です。", answerLanguage: "vi" },
            { id: "b13-03", type: "blank-choice", sentence: "Chúng ta nên sử dụng phương tiện giao thông ___.", choices: ["công cộng", "cá nhân", "đặc biệt", "tạm thời"], answers: ["công cộng"], translation: "私たちは公共交通機関を利用すべきです。", explanation: "giao thông công cộng は「公共交通」です。", answerLanguage: "vi" },
            { id: "b13-04", type: "blank-input", sentence: "Hãy tắt đèn để tiết kiệm ___.", answers: ["điện"], translation: "電気を節約するため、照明を消してください。", explanation: "tiết kiệm điện は「節電する」です。", answerLanguage: "vi" },
            { id: "b13-05", type: "meaning-choice", direction: "vi-ja", prompt: "tái chế", choices: ["リサイクルする", "廃棄する", "製造する", "輸入する"], answers: ["リサイクルする"], explanation: "tái chế は「リサイクルする」です。" },
            { id: "b13-06", type: "meaning-choice", direction: "ja-vi", prompt: "気候変動", choices: ["biến đổi khí hậu", "nhiệt độ", "dự báo thời tiết", "thiên nhiên"], answers: ["biến đổi khí hậu"], explanation: "biến đổi khí hậu は「気候変動」です。", answerLanguage: "vi" },
            { id: "b13-07", type: "translation", direction: "vi-ja", prompt: "Lượng rác thải nhựa đang tăng nhanh.", modelAnswer: "プラスチックごみの量が急速に増えています。", grading: "self", explanation: "lượng は「量」、tăng nhanh は「急速に増える」です。" },
            { id: "b13-08", type: "translation", direction: "ja-vi", prompt: "一人ひとりが環境を守ることができます。", modelAnswer: "Mỗi người đều có thể bảo vệ môi trường.", grading: "self", answerLanguage: "vi", explanation: "mỗi người đều は「一人ひとりが皆」です。" },
            { id: "b13-09", type: "blank-choice", sentence: "Thành phố cần có thêm nhiều không gian ___.", choices: ["xanh", "đỏ", "rộng", "trống"], answers: ["xanh"], translation: "都市にはもっと緑地が必要です。", explanation: "không gian xanh は「緑地」です。", answerLanguage: "vi" },
            { id: "b13-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "nâng cao ý thức của người dân", modelAnswer: "市民の意識を高める", grading: "self", explanation: "nâng cao ý thức は「意識を高める」です。" }
          ]
        },
        {
          id: "b1-4", title: "GROUP 04", description: "条件・譲歩・結果",
          questions: [
            { id: "b14-01", type: "meaning-choice", direction: "vi-ja", prompt: "miễn là", choices: ["〜である限り", "〜でなければ", "〜なので", "〜する一方で"], answers: ["〜である限り"], explanation: "miễn là は条件の「〜である限り」です。" },
            { id: "b14-02", type: "meaning-choice", direction: "ja-vi", prompt: "〜でない限り", choices: ["trừ khi", "miễn là", "do đó", "tuy nhiên"], answers: ["trừ khi"], explanation: "trừ khi は「〜でない限り」です。", answerLanguage: "vi" },
            { id: "b14-03", type: "blank-choice", sentence: "___ bạn cố gắng, bạn sẽ tiến bộ.", choices: ["Miễn là", "Trừ khi", "Do đó", "Mặc dù"], answers: ["Miễn là"], translation: "努力する限り、あなたは上達します。", explanation: "miễn là は十分な条件を示します。", answerLanguage: "vi" },
            { id: "b14-04", type: "blank-input", sentence: "___ khi trời mưa, chúng tôi sẽ đi dã ngoại.", answers: ["Trừ", "trừ"], translation: "雨が降らない限り、私たちはピクニックへ行きます。", explanation: "trừ khi は「〜でない限り」です。", answerLanguage: "vi" },
            { id: "b14-05", type: "meaning-choice", direction: "vi-ja", prompt: "do đó", choices: ["したがって", "しかし", "例えば", "それにもかかわらず"], answers: ["したがって"], explanation: "do đó は結果を導く「したがって」です。" },
            { id: "b14-06", type: "blank-choice", sentence: "Tuy bận ___ anh ấy vẫn đến đúng giờ.", choices: ["nhưng", "nên", "vì", "nếu"], answers: ["nhưng"], translation: "忙しいにもかかわらず、彼は時間どおりに来ました。", explanation: "tuy ... nhưng ... は譲歩を表します。", answerLanguage: "vi" },
            { id: "b14-07", type: "translation", direction: "vi-ja", prompt: "Nếu tôi biết sớm hơn thì tôi đã giúp bạn.", modelAnswer: "もっと早く知っていたら、あなたを助けていました。", grading: "self", explanation: "nếu ... thì ... で仮定と結果を述べます。" },
            { id: "b14-08", type: "translation", direction: "ja-vi", prompt: "交通渋滞だったため、私たちは遅刻しました。", modelAnswer: "Vì bị tắc đường nên chúng tôi đến muộn.", grading: "self", answerLanguage: "vi", explanation: "vì ... nên ... は原因と結果を明示します。" },
            { id: "b14-09", type: "blank-choice", sentence: "Anh ấy bị ốm; ___, anh ấy vẫn đi làm.", choices: ["tuy nhiên", "do đó", "vì vậy", "chẳng hạn"], answers: ["tuy nhiên"], translation: "彼は病気でした。しかし、それでも出勤しました。", explanation: "tuy nhiên は文をつなぐ「しかし」です。", answerLanguage: "vi" },
            { id: "b14-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "tùy thuộc vào thời tiết", modelAnswer: "天気次第である", grading: "self", explanation: "tùy thuộc vào は「〜次第である」です。" }
          ]
        },
        {
          id: "b1-5", title: "GROUP 05", description: "長めの文を理解して訳す",
          questions: [
            { id: "b15-01", type: "translation", direction: "vi-ja", prompt: "Từ khi chuyển đến Hà Nội, tôi đã có nhiều cơ hội sử dụng tiếng Việt trong cuộc sống hằng ngày.", modelAnswer: "ハノイへ引っ越してから、日常生活でベトナム語を使う機会がたくさんありました。", grading: "self", explanation: "từ khi は「〜して以来」、cơ hội は「機会」です。" },
            { id: "b15-02", type: "translation", direction: "ja-vi", prompt: "忙しくても、私は毎日少なくとも30分は勉強するようにしています。", modelAnswer: "Dù bận, tôi vẫn cố gắng học ít nhất ba mươi phút mỗi ngày.", grading: "self", answerLanguage: "vi", explanation: "dù ... vẫn ... は「〜でも、それでも…」です。" },
            { id: "b15-03", type: "translation", direction: "vi-ja", prompt: "Điều quan trọng không phải là học thật nhanh mà là duy trì thói quen đều đặn.", modelAnswer: "大切なのはとても速く学ぶことではなく、規則的な習慣を続けることです。", grading: "self", explanation: "không phải ... mà là ... は「〜ではなく…だ」です。" },
            { id: "b15-04", type: "translation", direction: "ja-vi", prompt: "分からない言葉があれば、まず文脈から意味を推測します。", modelAnswer: "Nếu có từ không hiểu, trước tiên tôi đoán nghĩa dựa vào ngữ cảnh.", grading: "self", answerLanguage: "vi", explanation: "dựa vào ngữ cảnh は「文脈に基づいて」です。" },
            { id: "b15-05", type: "translation", direction: "vi-ja", prompt: "Mặc dù kế hoạch đã thay đổi, mọi người vẫn hợp tác để hoàn thành công việc đúng hạn.", modelAnswer: "計画が変わったにもかかわらず、皆は期限どおりに仕事を終えるため協力しました。", grading: "self", explanation: "đúng hạn は「期限どおりに」です。" },
            { id: "b15-06", type: "translation", direction: "ja-vi", prompt: "公共交通機関がもっと便利になれば、車を使う人は減るでしょう。", modelAnswer: "Nếu phương tiện giao thông công cộng thuận tiện hơn, số người sử dụng ô tô sẽ giảm.", grading: "self", answerLanguage: "vi", explanation: "số người ... sẽ giảm は「〜する人の数が減る」です。" },
            { id: "b15-07", type: "translation", direction: "vi-ja", prompt: "Tôi chọn công việc này vì nó phù hợp với kinh nghiệm và mục tiêu của mình.", modelAnswer: "私はこの仕事が自分の経験と目標に合っているので選びました。", grading: "self", explanation: "phù hợp với は「〜に適している」です。" },
            { id: "b15-08", type: "translation", direction: "ja-vi", prompt: "旅行中に現地の人と話した経験が、学習を続ける動機になりました。", modelAnswer: "Trải nghiệm nói chuyện với người địa phương trong chuyến đi đã trở thành động lực để tôi tiếp tục học.", grading: "self", answerLanguage: "vi", explanation: "trở thành động lực は「動機になる」です。" },
            { id: "b15-09", type: "translation", direction: "vi-ja", prompt: "Theo báo cáo, chất lượng không khí đã được cải thiện nhưng vẫn còn nhiều vấn đề cần giải quyết.", modelAnswer: "報告によると、大気の質は改善しましたが、解決すべき問題がまだ多く残っています。", grading: "self", explanation: "cần giải quyết は「解決する必要がある」です。" },
            { id: "b15-10", type: "translation", direction: "ja-vi", prompt: "目標を小さな段階に分けることで、進歩を確認しやすくなります。", modelAnswer: "Bằng cách chia mục tiêu thành những bước nhỏ, chúng ta có thể dễ dàng theo dõi sự tiến bộ.", grading: "self", answerLanguage: "vi", explanation: "bằng cách + 動詞 は「〜することによって」です。" }
          ]
        }
      ]
    }
  );

  // 語彙100問をAレベル60問とBレベル40問に分割します。
  // グループIDと問題IDは維持し、既存の学習記録をそのまま引き継ぎます。
  const vocabulary = levels.find((level) => level.id === "vocabulary");
  const b1 = levels.find((level) => level.id === "b1");
  const bVocabularyGroups = vocabulary.groups.splice(6);
  bVocabularyGroups.forEach((group, index) => {
    group.title = `GROUP ${String(index + 1).padStart(2, "0")}`;
    group.description = group.description.replace(/^初中級・|^中上級・|^中級・|^上級・/, "Bレベル・");
  });
  const bVocabulary = {
    id: "vocabulary-b",
    label: "B語",
    name: "B語彙",
    description: "Bレベルの単語・表現",
    requires: "a2-5",
    groups: bVocabularyGroups
  };
  levels.splice(levels.indexOf(b1), 0, bVocabulary);
  b1.requires = "vocabulary-10";

  // 各レベルに橋渡しとなる3グループを追加し、文法を使う前に段階練習できる順に並べます。
  const insertAfter = (level, afterId, groups) => {
    const index = level.groups.findIndex((group) => group.id === afterId);
    level.groups.splice(index + 1, 0, ...groups);
  };
  const renumber = (level) => level.groups.forEach((group, index) => {
    group.title = `GROUP ${String(index + 1).padStart(2, "0")}`;
  });

  insertAfter(starter, "starter-2", [{
    id: "starter-6", title: "", description: "所有の của と指示語",
    questions: [
      { id: "s6-01", type: "meaning-choice", direction: "vi-ja", prompt: "của", choices: ["〜の・〜のもの", "〜と一緒に", "〜から", "〜の前に"], answers: ["〜の・〜のもの"], explanation: "của は所有者を示し、「〜の・〜のもの」を表します。" },
      { id: "s6-02", type: "meaning-choice", direction: "vi-ja", prompt: "này", choices: ["この", "その", "あの遠くの", "どの"], answers: ["この"], explanation: "này は名詞の後ろに置き、近くの「この」を表します。" },
      { id: "s6-03", type: "blank-choice", sentence: "Đây là sách ___ tôi.", choices: ["của", "với", "cho", "từ"], answers: ["của"], translation: "これは私の本です。", explanation: "名詞 + của + 所有者で「所有者の名詞」です。", answerLanguage: "vi" },
      { id: "s6-04", type: "blank-input", sentence: "Cái ___ là của bạn?", answers: ["này"], translation: "これはあなたのものですか。", explanation: "cái này は「これ・この物」です。", answerLanguage: "vi" },
      { id: "s6-05", type: "blank-input", sentence: "Người ___ là giáo viên của tôi.", answers: ["đó", "kia"], translation: "その人は私の先生です。", explanation: "đó／kia は人や物を指すとき、名詞の後ろに置きます。", answerLanguage: "vi" },
      { id: "s6-06", type: "blank-input", sentence: "Đây là nhà ___ Lan.", answers: ["của"], translation: "これはランの家です。", explanation: "nhà của Lan で「ランの家」です。", answerLanguage: "vi" },
      { id: "s6-07", type: "blank-input", sentence: "Quyển sách kia là ___ ai?", answers: ["của"], translation: "あの本は誰のものですか。", explanation: "của ai? で「誰のものですか」と尋ねます。", answerLanguage: "vi" },
      { id: "s6-08", type: "translation", direction: "vi-ja", prompt: "Đây là bạn của tôi.", answers: ["こちらは私の友達です", "これは私の友達です"], modelAnswer: "こちらは私の友達です。", grading: "accepted", explanation: "bạn của tôi は「私の友達」です。" },
      { id: "s6-09", type: "translation", direction: "ja-vi", prompt: "これは私の本です。", answers: ["Đây là sách của tôi.", "Đây là quyển sách của tôi."], modelAnswer: "Đây là sách của tôi.", grading: "accepted", answerLanguage: "vi", explanation: "所有者は của の後ろに置きます。" },
      { id: "s6-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "cái này của ai", answers: ["これは誰のものですか", "これは誰のですか"], modelAnswer: "これは誰のものですか", grading: "accepted", explanation: "cái này は「これ」、của ai は「誰のもの」です。" }
    ]
  }]);
  insertAfter(starter, "starter-3", [{
    id: "starter-7", title: "", description: "数え方と基本の類別詞",
    questions: [
      { id: "s7-01", type: "meaning-choice", direction: "vi-ja", prompt: "con（類別詞）", choices: ["動物などを数える", "本を数える", "飲み物を数える", "家を数える"], answers: ["動物などを数える"], explanation: "con は主に動物を数える類別詞です。" },
      { id: "s7-02", type: "meaning-choice", direction: "ja-vi", prompt: "本を数える類別詞", choices: ["quyển / cuốn", "con", "ly / cốc", "quả / trái"], answers: ["quyển / cuốn"], explanation: "quyển と cuốn は本のような物を数える類別詞です。", answerLanguage: "vi" },
      { id: "s7-03", type: "blank-choice", sentence: "Tôi có hai ___ chó.", choices: ["con", "quyển", "ly", "quả"], answers: ["con"], translation: "私は犬を2匹飼っています。", explanation: "犬などの動物は con で数えます。", answerLanguage: "vi" },
      { id: "s7-04", type: "blank-input", sentence: "Tôi có ba ___ sách.", answers: ["quyển", "cuốn"], translation: "私は本を3冊持っています。", explanation: "本は quyển／cuốn で数えます。", answerLanguage: "vi" },
      { id: "s7-05", type: "blank-input", sentence: "Cho tôi một ___ nước.", answers: ["chai"], translation: "水を1本ください。", explanation: "chai は瓶・ボトルを数える語です。", answerLanguage: "vi" },
      { id: "s7-06", type: "blank-input", sentence: "Tôi mua hai ___ táo.", answers: ["quả", "trái"], translation: "私はリンゴを2個買います。", explanation: "果物は北部で quả、南部で trái がよく使われます。", answerLanguage: "vi" },
      { id: "s7-07", type: "blank-input", sentence: "Tôi uống một ___ cà phê.", answers: ["cốc", "ly"], translation: "私はコーヒーを1杯飲みます。", explanation: "飲み物の一杯には cốc／ly を使えます。", answerLanguage: "vi" },
      { id: "s7-08", type: "translation", direction: "vi-ja", prompt: "Tôi có hai con mèo.", answers: ["私は猫を2匹飼っています", "私は猫を二匹飼っています", "私は猫を2匹持っています"], modelAnswer: "私は猫を2匹飼っています。", grading: "accepted", explanation: "hai con mèo は「猫2匹」です。" },
      { id: "s7-09", type: "translation", direction: "ja-vi", prompt: "私は本を3冊持っています。", answers: ["Tôi có ba quyển sách.", "Tôi có ba cuốn sách."], modelAnswer: "Tôi có ba quyển sách.", grading: "accepted", answerLanguage: "vi", explanation: "数 + 類別詞 + 名詞の順に並べます。" },
      { id: "s7-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "một chiếc xe đạp", answers: ["自転車1台", "一台の自転車", "1台の自転車"], modelAnswer: "自転車1台", grading: "accepted", explanation: "chiếc は乗り物などを数える類別詞です。" }
    ]
  }]);
  insertAfter(starter, "starter-4", [{
    id: "starter-8", title: "", description: "疑問詞・否定・基本の質問",
    questions: [
      { id: "s8-01", type: "meaning-choice", direction: "vi-ja", prompt: "ai", choices: ["誰", "何", "どこ", "いつ"], answers: ["誰"], explanation: "ai は人について尋ねる「誰」です。" },
      { id: "s8-02", type: "meaning-choice", direction: "vi-ja", prompt: "bao nhiêu", choices: ["いくつ・いくら", "どこ", "なぜ", "どのように"], answers: ["いくつ・いくら"], explanation: "bao nhiêu は数や値段を尋ねます。" },
      { id: "s8-03", type: "blank-choice", sentence: "Bạn muốn ăn ___?", choices: ["gì", "ai", "đâu", "khi nào"], answers: ["gì"], translation: "何を食べたいですか。", explanation: "gì は物事を尋ねる「何」です。", answerLanguage: "vi" },
      { id: "s8-04", type: "blank-input", sentence: "Người đó là ___?", answers: ["ai"], translation: "その人は誰ですか。", explanation: "人を尋ねるときは ai を使います。", answerLanguage: "vi" },
      { id: "s8-05", type: "blank-input", sentence: "Bạn sống ở ___?", answers: ["đâu"], translation: "どこに住んでいますか。", explanation: "ở đâu? は場所を尋ねます。", answerLanguage: "vi" },
      { id: "s8-06", type: "blank-input", sentence: "Bạn có anh chị em ___?", answers: ["không"], translation: "兄弟姉妹はいますか。", explanation: "có ... không? で有無を尋ねます。", answerLanguage: "vi" },
      { id: "s8-07", type: "blank-input", sentence: "Tôi ___ uống cà phê.", answers: ["không"], translation: "私はコーヒーを飲みません。", explanation: "không は動詞の前に置いて否定します。", answerLanguage: "vi" },
      { id: "s8-08", type: "translation", direction: "vi-ja", prompt: "Bạn có mấy quyển sách?", answers: ["本を何冊持っていますか", "あなたは本を何冊持っていますか"], modelAnswer: "本を何冊持っていますか？", grading: "accepted", explanation: "mấy + 類別詞で少数の個数を尋ねます。" },
      { id: "s8-09", type: "translation", direction: "ja-vi", prompt: "これはいくらですか。", answers: ["Cái này bao nhiêu tiền?", "Cái này giá bao nhiêu?"], modelAnswer: "Cái này bao nhiêu tiền?", grading: "accepted", answerLanguage: "vi", explanation: "bao nhiêu tiền? は値段を尋ねる基本表現です。" },
      { id: "s8-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "chưa ăn sáng", answers: ["まだ朝食を食べていない", "まだ朝ごはんを食べていない"], modelAnswer: "まだ朝食を食べていない", grading: "accepted", explanation: "chưa は「まだ〜していない」です。" }
    ]
  }]);
  renumber(starter);

  insertAfter(elementary, "elementary-1", [{
    id: "elementary-6", title: "", description: "đã・đang・sẽ と動作の時",
    questions: [
      { id: "e6-01", type: "meaning-choice", direction: "vi-ja", prompt: "đang + 動詞", choices: ["今〜している", "もう〜した", "これから〜する", "まだ〜していない"], answers: ["今〜している"], explanation: "đang は進行中の動作を示します。" },
      { id: "e6-02", type: "meaning-choice", direction: "ja-vi", prompt: "もう〜した", choices: ["đã ... rồi", "đang ...", "sắp ...", "chưa ..."], answers: ["đã ... rồi"], explanation: "đã ... rồi は動作がすでに完了したことを明確にします。", answerLanguage: "vi" },
      { id: "e6-03", type: "blank-choice", sentence: "Tôi ___ đọc sách.", choices: ["đang", "đã", "sẽ", "chưa"], answers: ["đang"], translation: "私はいま本を読んでいます。", explanation: "いま進行中なので đang を使います。", answerLanguage: "vi" },
      { id: "e6-04", type: "blank-input", sentence: "Hôm qua tôi ___ gặp Lan.", answers: ["đã"], translation: "昨日、私はランに会いました。", explanation: "hôm qua とともに完了を明示するとき đã を使えます。", answerLanguage: "vi" },
      { id: "e6-05", type: "blank-input", sentence: "Ngày mai tôi ___ đi làm.", answers: ["sẽ"], translation: "明日、私は仕事へ行きます。", explanation: "sẽ はこれからの予定・未来を表します。", answerLanguage: "vi" },
      { id: "e6-06", type: "blank-input", sentence: "Tôi ___ làm xong bài tập.", answers: ["chưa"], translation: "私はまだ宿題を終えていません。", explanation: "chưa は未完了を表します。", answerLanguage: "vi" },
      { id: "e6-07", type: "blank-input", sentence: "Anh ấy vừa ___ nhà.", answers: ["về"], translation: "彼はたったいま帰宅しました。", explanation: "vừa + 動詞で「たったいま〜した」です。", answerLanguage: "vi" },
      { id: "e6-08", type: "translation", direction: "vi-ja", prompt: "Tôi đã ăn cơm rồi.", answers: ["私はもうご飯を食べました", "私はすでに食事をしました"], modelAnswer: "私はもうご飯を食べました。", grading: "accepted", explanation: "đã ... rồi は完了を強調します。" },
      { id: "e6-09", type: "translation", direction: "ja-vi", prompt: "彼女はいま電話で話しています。", answers: ["Cô ấy đang nói chuyện điện thoại.", "Chị ấy đang nói chuyện điện thoại."], modelAnswer: "Cô ấy đang nói chuyện điện thoại.", grading: "accepted", answerLanguage: "vi", explanation: "đang は動詞の前に置きます。" },
      { id: "e6-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "sắp bắt đầu", answers: ["もうすぐ始まる", "まもなく始まる"], modelAnswer: "もうすぐ始まる", grading: "accepted", explanation: "sắp + 動詞で「もうすぐ〜する」です。" }
    ]
  }]);
  insertAfter(elementary, "elementary-2", [{
    id: "elementary-7", title: "", description: "頻度・程度・語順",
    questions: [
      { id: "e7-01", type: "meaning-choice", direction: "vi-ja", prompt: "thường", choices: ["よく・普段", "決して〜ない", "たった今", "もうすぐ"], answers: ["よく・普段"], explanation: "thường は習慣的な頻度を表します。" },
      { id: "e7-02", type: "meaning-choice", direction: "ja-vi", prompt: "時々", choices: ["thỉnh thoảng", "luôn luôn", "không bao giờ", "hầu hết"], answers: ["thỉnh thoảng"], explanation: "thỉnh thoảng は「時々」です。", answerLanguage: "vi" },
      { id: "e7-03", type: "blank-choice", sentence: "Tôi ___ đi bộ đến chợ.", choices: ["thường", "đã", "sắp", "vừa"], answers: ["thường"], translation: "私はよく歩いて市場へ行きます。", explanation: "頻度を表す thường は通常、動詞の前に置きます。", answerLanguage: "vi" },
      { id: "e7-04", type: "blank-input", sentence: "Cô ấy nói tiếng Việt rất ___.", answers: ["tốt"], translation: "彼女はベトナム語をとても上手に話します。", explanation: "rất + 形容詞で程度を表します。", answerLanguage: "vi" },
      { id: "e7-05", type: "blank-input", sentence: "Tôi chỉ uống ___ cốc cà phê.", answers: ["một"], translation: "私はコーヒーを1杯だけ飲みます。", explanation: "chỉ は限定する語の前に置き「〜だけ」を表します。", answerLanguage: "vi" },
      { id: "e7-06", type: "blank-input", sentence: "Anh ấy cũng ___ tiếng Nhật.", answers: ["học"], translation: "彼も日本語を勉強しています。", explanation: "cũng は主語の後、動詞の前に置くのが基本です。", answerLanguage: "vi" },
      { id: "e7-07", type: "blank-input", sentence: "Chúng tôi không ___ đi ăn ngoài.", answers: ["thường"], translation: "私たちはあまり外食しません。", explanation: "không thường + 動詞で「頻繁には〜しない」です。", answerLanguage: "vi" },
      { id: "e7-08", type: "translation", direction: "vi-ja", prompt: "Mỗi tuần tôi học tiếng Việt ba lần.", answers: ["私は毎週ベトナム語を3回勉強します", "毎週3回ベトナム語を勉強します"], modelAnswer: "私は毎週ベトナム語を3回勉強します。", grading: "accepted", explanation: "mỗi tuần は「毎週」、ba lần は「3回」です。" },
      { id: "e7-09", type: "translation", direction: "ja-vi", prompt: "私は時々、友達と映画を見ます。", answers: ["Thỉnh thoảng tôi xem phim với bạn.", "Tôi thỉnh thoảng xem phim với bạn."], modelAnswer: "Thỉnh thoảng tôi xem phim với bạn.", grading: "accepted", answerLanguage: "vi", explanation: "thỉnh thoảng は文頭にも動詞の前にも置けます。" },
      { id: "e7-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "không bao giờ hút thuốc", answers: ["決してたばこを吸わない", "一度もたばこを吸わない"], modelAnswer: "決してたばこを吸わない", grading: "accepted", explanation: "không bao giờ は「決して〜ない」です。" }
    ]
  }]);
  insertAfter(elementary, "elementary-4", [{
    id: "elementary-8", title: "", description: "cho・với・cùng の使い分け",
    questions: [
      { id: "e8-01", type: "meaning-choice", direction: "vi-ja", prompt: "cho", choices: ["〜に・〜のために", "〜から", "〜より", "〜まで"], answers: ["〜に・〜のために"], explanation: "cho は受け手や利益を受ける人を示します。" },
      { id: "e8-02", type: "meaning-choice", direction: "vi-ja", prompt: "với", choices: ["〜と・〜に対して", "〜の中で", "〜の後で", "〜のために"], answers: ["〜と・〜に対して"], explanation: "với は相手や共同する対象を示します。" },
      { id: "e8-03", type: "blank-choice", sentence: "Tôi mua hoa ___ mẹ.", choices: ["cho", "từ", "bằng", "ở"], answers: ["cho"], translation: "私は母のために花を買います。", explanation: "受益者を示すとき cho を使います。", answerLanguage: "vi" },
      { id: "e8-04", type: "blank-input", sentence: "Tôi nói chuyện ___ bạn.", answers: ["với"], translation: "私は友達と話します。", explanation: "nói chuyện với + 人で「人と話す」です。", answerLanguage: "vi" },
      { id: "e8-05", type: "blank-input", sentence: "Bạn có thể giúp ___ không?", answers: ["tôi", "mình"], translation: "私を手伝ってもらえますか。", explanation: "giúp + 人で「人を助ける」です。", answerLanguage: "vi" },
      { id: "e8-06", type: "blank-input", sentence: "Cô ấy đưa quyển sách ___ tôi.", answers: ["cho"], translation: "彼女は私に本を渡します。", explanation: "đưa物 cho人 で「物を人に渡す」です。", answerLanguage: "vi" },
      { id: "e8-07", type: "blank-input", sentence: "Tôi đi chợ ___ chị gái.", answers: ["cùng", "với", "cùng với"], translation: "私は姉と一緒に市場へ行きます。", explanation: "cùng／với は共同する相手を示します。", answerLanguage: "vi" },
      { id: "e8-08", type: "translation", direction: "vi-ja", prompt: "Lan gửi tin nhắn cho tôi.", answers: ["ランは私にメッセージを送ります", "ランが私にメッセージを送りました"], modelAnswer: "ランは私にメッセージを送ります。", grading: "accepted", explanation: "gửi A cho B は「AをBに送る」です。" },
      { id: "e8-09", type: "translation", direction: "ja-vi", prompt: "私は友達と昼ご飯を食べます。", answers: ["Tôi ăn trưa với bạn.", "Tôi ăn trưa cùng bạn.", "Tôi ăn trưa cùng với bạn."], modelAnswer: "Tôi ăn trưa với bạn.", grading: "accepted", answerLanguage: "vi", explanation: "相手と一緒に行う動作には với／cùng を使えます。" },
      { id: "e8-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "mua quà cho gia đình", answers: ["家族のためにお土産を買う", "家族に贈り物を買う", "家族のためにプレゼントを買う"], modelAnswer: "家族のためにお土産を買う", grading: "accepted", explanation: "cho gia đình は「家族のために・家族に」です。" }
    ]
  }]);
  renumber(elementary);

  const a2 = levels.find((level) => level.id === "a2");
  insertAfter(a2, "a2-1", [{
    id: "a2-6", title: "", description: "数量・範囲・全体",
    questions: [
      { id: "a26-01", type: "meaning-choice", direction: "vi-ja", prompt: "một vài", choices: ["いくつかの", "すべての", "一つも〜ない", "ほとんどの"], answers: ["いくつかの"], explanation: "một vài は不特定の少数を表します。" },
      { id: "a26-02", type: "meaning-choice", direction: "vi-ja", prompt: "cả hai", choices: ["両方とも", "どちらか一方", "二つずつ", "二回"], answers: ["両方とも"], explanation: "cả hai は「二つ・二人とも」です。" },
      { id: "a26-03", type: "blank-choice", sentence: "___ người đều có ý kiến riêng.", choices: ["Mỗi", "Một", "Ít", "Vài"], answers: ["Mỗi"], translation: "一人ひとりに自分の意見があります。", explanation: "mỗi + 単数名詞で「各〜」を表します。", answerLanguage: "vi" },
      { id: "a26-04", type: "blank-input", sentence: "Tôi đã đọc ___ hai quyển sách.", answers: ["cả"], translation: "私は2冊の本を両方読みました。", explanation: "cả + 数量で全体を示します。", answerLanguage: "vi" },
      { id: "a26-05", type: "blank-input", sentence: "Chỉ ___ người biết chuyện này.", answers: ["một vài", "vài"], translation: "このことを知っているのは数人だけです。", explanation: "một vài／vài は「数人・いくつか」です。", answerLanguage: "vi" },
      { id: "a26-06", type: "blank-input", sentence: "Có khoảng hai ___ người tham gia.", answers: ["mươi"], translation: "約20人が参加します。", explanation: "khoảng は概数の「約」を表します。", answerLanguage: "vi" },
      { id: "a26-07", type: "blank-input", sentence: "Phần ___ học sinh đã làm xong.", answers: ["lớn"], translation: "大部分の生徒は終えました。", explanation: "phần lớn は「大部分」です。", answerLanguage: "vi" },
      { id: "a26-08", type: "translation", direction: "vi-ja", prompt: "Mỗi ngày tôi dành khoảng một giờ để học.", answers: ["私は毎日約1時間を勉強に使います", "毎日だいたい1時間勉強します"], modelAnswer: "私は毎日約1時間を勉強に使います。", grading: "accepted", explanation: "dành thời gian để ... は「〜するために時間を使う」です。" },
      { id: "a26-09", type: "translation", direction: "ja-vi", prompt: "友達の何人かはハノイに住んでいます。", answers: ["Một vài người bạn của tôi sống ở Hà Nội.", "Vài người bạn của tôi sống ở Hà Nội."], modelAnswer: "Một vài người bạn của tôi sống ở Hà Nội.", grading: "accepted", answerLanguage: "vi", explanation: "một vài người bạn は「友達の何人か」です。" },
      { id: "a26-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "hầu hết mọi người", answers: ["ほとんどの人", "大部分の人々"], modelAnswer: "ほとんどの人", grading: "accepted", explanation: "hầu hết は「ほとんどの」です。" }
    ]
  }]);
  insertAfter(a2, "a2-3", [{
    id: "a2-7", title: "", description: "xong・hết・mất と結果",
    questions: [
      { id: "a27-01", type: "meaning-choice", direction: "vi-ja", prompt: "xong", choices: ["終えて", "始めて", "続けて", "やめずに"], answers: ["終えて"], explanation: "動詞 + xong で動作の完了を表します。" },
      { id: "a27-02", type: "meaning-choice", direction: "vi-ja", prompt: "hết", choices: ["全部・なくなるまで", "少しだけ", "もう一度", "ゆっくり"], answers: ["全部・なくなるまで"], explanation: "hết は物が尽きることや全部行うことを表します。" },
      { id: "a27-03", type: "blank-choice", sentence: "Tôi đã đọc ___ quyển sách.", choices: ["xong", "sắp", "đang", "còn"], answers: ["xong"], translation: "私はその本を読み終えました。", explanation: "đọc xong は「読み終える」です。", answerLanguage: "vi" },
      { id: "a27-04", type: "blank-input", sentence: "Chúng tôi đã ăn ___ đồ ăn.", answers: ["hết"], translation: "私たちは食べ物を全部食べました。", explanation: "ăn hết は「全部食べる」です。", answerLanguage: "vi" },
      { id: "a27-05", type: "blank-input", sentence: "Tôi học tiếng Việt ___ hai năm rồi.", answers: ["được"], translation: "私はベトナム語を学んで2年になります。", explanation: "動作 + được + 期間で継続した期間を表します。", answerLanguage: "vi" },
      { id: "a27-06", type: "blank-input", sentence: "Đi từ đây đến ga ___ hai mươi phút.", answers: ["mất"], translation: "ここから駅まで20分かかります。", explanation: "mất + 時間で所要時間を表します。", answerLanguage: "vi" },
      { id: "a27-07", type: "blank-input", sentence: "Cửa hàng đã bán ___ loại bánh này.", answers: ["hết"], translation: "店ではこの菓子が売り切れました。", explanation: "bán hết は「売り切る・売り切れる」です。", answerLanguage: "vi" },
      { id: "a27-08", type: "translation", direction: "vi-ja", prompt: "Tôi vừa làm xong bài tập.", answers: ["私はたったいま宿題を終えました", "ちょうど宿題を終えたところです"], modelAnswer: "私はたったいま宿題を終えました。", grading: "accepted", explanation: "vừa ... xong は直前に完了した動作を表します。" },
      { id: "a27-09", type: "translation", direction: "ja-vi", prompt: "駅まで行くのに30分かかります。", answers: ["Đi đến nhà ga mất ba mươi phút.", "Đi đến ga mất ba mươi phút."], modelAnswer: "Đi đến nhà ga mất ba mươi phút.", grading: "accepted", answerLanguage: "vi", explanation: "mất ba mươi phút は「30分かかる」です。" },
      { id: "a27-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "chưa dùng hết", answers: ["まだ使い切っていない", "まだ全部使っていない"], modelAnswer: "まだ使い切っていない", grading: "accepted", explanation: "chưa ... hết で「まだ全部は〜していない」です。" }
    ]
  }]);
  insertAfter(a2, "a2-4", [{
    id: "a2-8", title: "", description: "được・bị と受け身の表現",
    questions: [
      { id: "a28-01", type: "meaning-choice", direction: "vi-ja", prompt: "được + 動詞", choices: ["好ましいことを受ける", "好ましくないことを受ける", "自分で始める", "動作を禁止する"], answers: ["好ましいことを受ける"], explanation: "được は一般に好ましい出来事を受ける表現に使われます。" },
      { id: "a28-02", type: "meaning-choice", direction: "vi-ja", prompt: "bị + 動詞", choices: ["好ましくないことを受ける", "許可される", "予定している", "能力がある"], answers: ["好ましくないことを受ける"], explanation: "bị は一般に不利益・不都合な出来事を受ける表現に使われます。" },
      { id: "a28-03", type: "blank-choice", sentence: "Tôi được bạn ___ đỡ.", choices: ["giúp", "bị", "mất", "hết"], answers: ["giúp"], translation: "私は友達に助けてもらいました。", explanation: "được + 人 + 動詞で好ましい行為を受けたことを表せます。", answerLanguage: "vi" },
      { id: "a28-04", type: "blank-input", sentence: "Xe của tôi bị ___.", answers: ["hỏng"], translation: "私の車が壊れました。", explanation: "bị hỏng は好ましくない状態「壊れる」を表します。", answerLanguage: "vi" },
      { id: "a28-05", type: "blank-input", sentence: "Cô ấy được ___ vào trường đại học.", answers: ["nhận"], translation: "彼女は大学に合格しました。", explanation: "được nhận vào ... は「〜に受け入れられる」です。", answerLanguage: "vi" },
      { id: "a28-06", type: "blank-input", sentence: "Chuyến bay bị ___.", answers: ["hủy", "hoãn"], translation: "便が欠航・延期になりました。", explanation: "bị hủy は「中止される」、bị hoãn は「延期される」です。", answerLanguage: "vi" },
      { id: "a28-07", type: "blank-input", sentence: "Tôi được tặng ___ món quà.", answers: ["một"], translation: "私は贈り物を一つもらいました。", explanation: "được tặng は「贈られる・もらう」です。", answerLanguage: "vi" },
      { id: "a28-08", type: "translation", direction: "vi-ja", prompt: "Anh ấy bị mất ví.", answers: ["彼は財布をなくしました", "彼は財布を失くしました"], modelAnswer: "彼は財布をなくしました。", grading: "accepted", explanation: "bị mất は「なくす・失う」という不利益を表します。" },
      { id: "a28-09", type: "translation", direction: "ja-vi", prompt: "私は先生にほめられました。", answers: ["Tôi được giáo viên khen.", "Tôi được thầy giáo khen.", "Tôi được cô giáo khen."], modelAnswer: "Tôi được giáo viên khen.", grading: "accepted", answerLanguage: "vi", explanation: "ほめられるのは好ましいため được を使います。" },
      { id: "a28-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "được mời đến dự tiệc", answers: ["パーティーに招待される", "宴会に招かれる"], modelAnswer: "パーティーに招待される", grading: "accepted", explanation: "được mời は「招待される」です。" }
    ]
  }]);
  renumber(a2);

  insertAfter(b1, "b1-1", [{
    id: "b1-6", title: "", description: "mà・việc・điều で文をまとめる",
    questions: [
      { id: "b16-01", type: "meaning-choice", direction: "vi-ja", prompt: "người mà ...", choices: ["…する人", "…した理由", "…する場所", "…する時間"], answers: ["…する人"], explanation: "mà は前の名詞を後ろの節で説明するときに使えます。" },
      { id: "b16-02", type: "meaning-choice", direction: "vi-ja", prompt: "việc + 動詞", choices: ["〜すること", "〜する人", "〜した場所", "〜する方法"], answers: ["〜すること"], explanation: "việc は動作を名詞化し「〜すること」を表します。" },
      { id: "b16-03", type: "blank-choice", sentence: "Người ___ bạn vừa gặp là giáo viên của tôi.", choices: ["mà", "vì", "nếu", "nên"], answers: ["mà"], translation: "あなたが先ほど会った人は私の先生です。", explanation: "mà 以下が người を説明します。", answerLanguage: "vi" },
      { id: "b16-04", type: "blank-input", sentence: "Đây là cuốn sách ___ tôi đã mua hôm qua.", answers: ["mà"], translation: "これは私が昨日買った本です。", explanation: "mà を使って cuốn sách を後ろから説明します。", answerLanguage: "vi" },
      { id: "b16-05", type: "blank-input", sentence: "___ học đều đặn rất quan trọng.", answers: ["Việc", "việc"], translation: "規則的に学ぶことはとても重要です。", explanation: "việc + 動詞句を文の主語にできます。", answerLanguage: "vi" },
      { id: "b16-06", type: "blank-input", sentence: "___ tôi quan tâm nhất là chất lượng.", answers: ["Điều", "điều"], translation: "私が最も重視するのは品質です。", explanation: "điều + 節で「〜すること・もの」を表します。", answerLanguage: "vi" },
      { id: "b16-07", type: "blank-input", sentence: "Tôi không biết lý do ___ sao anh ấy nghỉ việc.", answers: ["tại", "vì"], translation: "私は彼が退職した理由を知りません。", explanation: "lý do tại sao／vì sao は「なぜ〜なのかという理由」です。", answerLanguage: "vi" },
      { id: "b16-08", type: "translation", direction: "vi-ja", prompt: "Người đang đứng trước cửa là anh trai tôi.", modelAnswer: "ドアの前に立っている人は私の兄です。", grading: "self", explanation: "người の後ろの節が、その人を説明しています。" },
      { id: "b16-09", type: "translation", direction: "ja-vi", prompt: "私が必要としているのは、もっと練習することです。", modelAnswer: "Điều tôi cần là luyện tập nhiều hơn.", grading: "self", answerLanguage: "vi", explanation: "Điều tôi cần là ... で「私が必要なのは…です」。" },
      { id: "b16-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "việc sử dụng tiếng Việt hằng ngày", modelAnswer: "毎日ベトナム語を使うこと", grading: "self", explanation: "việc により動作全体を名詞として扱います。" }
    ]
  }]);
  insertAfter(b1, "b1-3", [{
    id: "b1-7", title: "", description: "原因・影響・変化を述べる",
    questions: [
      { id: "b17-01", type: "meaning-choice", direction: "vi-ja", prompt: "khiến", choices: ["〜させる・〜という結果にする", "〜を防ぐ", "〜に反対する", "〜と比較する"], answers: ["〜させる・〜という結果にする"], explanation: "khiến は原因が人や物に影響を与える表現です。" },
      { id: "b17-02", type: "meaning-choice", direction: "vi-ja", prompt: "do", choices: ["〜が原因で", "〜にもかかわらず", "〜である限り", "〜する代わりに"], answers: ["〜が原因で"], explanation: "do は原因を示し、名詞句の前にも置けます。" },
      { id: "b17-03", type: "blank-choice", sentence: "Tin đó ___ tôi lo lắng.", choices: ["khiến", "tránh", "giảm", "thay"], answers: ["khiến"], translation: "その知らせは私を不安にさせました。", explanation: "khiến + 人 + 状態で「人を〜の状態にさせる」です。", answerLanguage: "vi" },
      { id: "b17-04", type: "blank-input", sentence: "Mưa lớn làm ___ nhiều con đường ngập.", answers: ["cho"], translation: "大雨によって多くの道路が冠水しました。", explanation: "làm cho + 節で「〜という結果をもたらす」です。", answerLanguage: "vi" },
      { id: "b17-05", type: "blank-input", sentence: "Cuộc họp bị hoãn ___ thời tiết xấu.", answers: ["do", "vì"], translation: "会議は悪天候のため延期されました。", explanation: "do／vì + 原因で理由を示します。", answerLanguage: "vi" },
      { id: "b17-06", type: "blank-input", sentence: "Nhờ bạn giúp, tôi đã hoàn thành đúng ___.", answers: ["hạn"], translation: "あなたのおかげで、期限どおりに終えられました。", explanation: "nhờ は好ましい結果の原因、đúng hạn は「期限どおり」です。", answerLanguage: "vi" },
      { id: "b17-07", type: "blank-input", sentence: "Vấn đề này gây ___ nhiều khó khăn.", answers: ["ra"], translation: "この問題は多くの困難を引き起こしました。", explanation: "gây ra は「引き起こす」です。", answerLanguage: "vi" },
      { id: "b17-08", type: "translation", direction: "vi-ja", prompt: "Sự thay đổi này khiến công việc trở nên dễ dàng hơn.", modelAnswer: "この変化によって仕事がより簡単になりました。", grading: "self", explanation: "khiến ... trở nên ... は「〜を…の状態にする」です。" },
      { id: "b17-09", type: "translation", direction: "ja-vi", prompt: "雨のため、交通渋滞がさらにひどくなりました。", modelAnswer: "Do trời mưa, tình trạng tắc đường trở nên nghiêm trọng hơn.", grading: "self", answerLanguage: "vi", explanation: "do で原因、trở nên で状態の変化を表します。" },
      { id: "b17-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "gây ảnh hưởng đến cuộc sống", modelAnswer: "生活に影響を与える", grading: "self", explanation: "gây ảnh hưởng đến は「〜に影響を与える」です。" }
    ]
  }]);
  insertAfter(b1, "b1-4", [{
    id: "b1-8", title: "", description: "文章をつなぐ表現",
    questions: [
      { id: "b18-01", type: "meaning-choice", direction: "vi-ja", prompt: "mặt khác", choices: ["一方で・別の面では", "したがって", "例えば", "要するに"], answers: ["一方で・別の面では"], explanation: "mặt khác は別の観点を加える接続表現です。" },
      { id: "b18-02", type: "meaning-choice", direction: "vi-ja", prompt: "hơn nữa", choices: ["そのうえ・さらに", "しかし", "その代わり", "そうでなければ"], answers: ["そのうえ・さらに"], explanation: "hơn nữa は情報や根拠を追加します。" },
      { id: "b18-03", type: "blank-choice", sentence: "Trước hết, hãy đọc đề. ___ theo, hãy trả lời câu hỏi.", choices: ["Tiếp", "Tuy", "Do", "Mặt"], answers: ["Tiếp"], translation: "まず問題文を読み、次に質問に答えてください。", explanation: "tiếp theo は順序を示す「次に」です。", answerLanguage: "vi" },
      { id: "b18-04", type: "blank-input", sentence: "Giá hơi cao. ___, chất lượng rất tốt.", answers: ["Tuy nhiên", "tuy nhiên"], translation: "値段は少し高いです。しかし品質はとても良いです。", explanation: "tuy nhiên は前文と対照的な内容をつなぎます。", answerLanguage: "vi" },
      { id: "b18-05", type: "blank-input", sentence: "Xe bị hỏng. ___ đó, tôi đến muộn.", answers: ["Do", "do"], translation: "車が壊れました。そのため私は遅刻しました。", explanation: "do đó は前の内容を原因として結果を導きます。", answerLanguage: "vi" },
      { id: "b18-06", type: "blank-input", sentence: "___ cách khác, chúng ta cần thay đổi kế hoạch.", answers: ["Nói", "nói"], translation: "言い換えれば、計画を変更する必要があります。", explanation: "nói cách khác は「言い換えれば」です。", answerLanguage: "vi" },
      { id: "b18-07", type: "blank-input", sentence: "Cô ấy không những chăm chỉ mà ___ rất kiên nhẫn.", answers: ["còn"], translation: "彼女は勤勉なだけでなく、とても忍耐強いです。", explanation: "không những ... mà còn ... は「〜だけでなく…も」です。", answerLanguage: "vi" },
      { id: "b18-08", type: "translation", direction: "vi-ja", prompt: "Kế hoạch này tiết kiệm thời gian; hơn nữa, nó còn giảm chi phí.", modelAnswer: "この計画は時間を節約し、そのうえ費用も削減します。", grading: "self", explanation: "hơn nữa は利点などを追加するときに使えます。" },
      { id: "b18-09", type: "translation", direction: "ja-vi", prompt: "まず原因を確認し、その後で解決方法を考えましょう。", modelAnswer: "Trước hết, hãy xác định nguyên nhân; sau đó, chúng ta sẽ nghĩ cách giải quyết.", grading: "self", answerLanguage: "vi", explanation: "trước hết ... sau đó ... で説明の順序を示します。" },
      { id: "b18-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "nói cách khác", modelAnswer: "言い換えれば", grading: "self", explanation: "前の内容を別の表現で説明するときに使います。" }
    ]
  }]);
  renumber(b1);

  bVocabulary.groups.push(
    {
      id: "vocabulary-11", title: "", description: "Bレベル・情報とコミュニケーション",
      questions: [
        { id: "v11-01", type: "meaning-choice", direction: "vi-ja", prompt: "tin tức", choices: ["ニュース・報道", "広告", "小説", "契約"], answers: ["ニュース・報道"], explanation: "tin tức は「ニュース・報道」です。" },
        { id: "v11-02", type: "meaning-choice", direction: "ja-vi", prompt: "メディア・情報伝達", choices: ["truyền thông", "giao thông", "môi trường", "thị trường"], answers: ["truyền thông"], explanation: "truyền thông はメディアや情報伝達を表します。", answerLanguage: "vi" },
        { id: "v11-03", type: "meaning-choice", direction: "vi-ja", prompt: "nội dung", choices: ["内容", "形式", "題名", "結果"], answers: ["内容"], explanation: "nội dung は文章・番組などの「内容」です。" },
        { id: "v11-04", type: "meaning-choice", direction: "ja-vi", prompt: "情報源", choices: ["nguồn tin", "tin đồn", "dữ liệu", "bình luận"], answers: ["nguồn tin"], explanation: "nguồn tin は「情報源・ニュースの出所」です。", answerLanguage: "vi" },
        { id: "v11-05", type: "meaning-choice", direction: "vi-ja", prompt: "cập nhật", choices: ["更新する", "削除する", "印刷する", "保存する"], answers: ["更新する"], explanation: "cập nhật は情報などを「更新する」です。" },
        { id: "v11-06", type: "meaning-choice", direction: "ja-vi", prompt: "共有する", choices: ["chia sẻ", "che giấu", "xác nhận", "từ chối"], answers: ["chia sẻ"], explanation: "chia sẻ は情報や経験を「共有する」です。", answerLanguage: "vi" },
        { id: "v11-07", type: "meaning-choice", direction: "vi-ja", prompt: "phản hồi", choices: ["反応・返答", "質問", "命令", "約束"], answers: ["反応・返答"], explanation: "phản hồi は「反応・フィードバック・返答」です。" },
        { id: "v11-08", type: "meaning-choice", direction: "ja-vi", prompt: "通知・知らせ", choices: ["thông báo", "thảo luận", "thuyết phục", "giải thích"], answers: ["thông báo"], explanation: "thông báo は名詞の「通知」、動詞の「知らせる」です。", answerLanguage: "vi" },
        { id: "v11-09", type: "meaning-choice", direction: "vi-ja", prompt: "dư luận", choices: ["世論", "習慣", "法律", "予算"], answers: ["世論"], explanation: "dư luận は社会の「世論」です。" },
        { id: "v11-10", type: "meaning-choice", direction: "ja-vi", prompt: "信頼できる", choices: ["đáng tin cậy", "phổ biến", "chính xác", "bí mật"], answers: ["đáng tin cậy"], explanation: "đáng tin cậy は「信頼できる」です。", answerLanguage: "vi" }
      ]
    },
    {
      id: "vocabulary-12", title: "", description: "Bレベル・問題解決と変化",
      questions: [
        { id: "v12-01", type: "meaning-choice", direction: "vi-ja", prompt: "giải pháp", choices: ["解決策", "原因", "影響", "条件"], answers: ["解決策"], explanation: "giải pháp は問題に対する「解決策」です。" },
        { id: "v12-02", type: "meaning-choice", direction: "ja-vi", prompt: "原因", choices: ["nguyên nhân", "hậu quả", "mục tiêu", "tiến độ"], answers: ["nguyên nhân"], explanation: "nguyên nhân は「原因」です。", answerLanguage: "vi" },
        { id: "v12-03", type: "meaning-choice", direction: "vi-ja", prompt: "hậu quả", choices: ["結果・悪影響", "方法", "機会", "目的"], answers: ["結果・悪影響"], explanation: "hậu quả は多くの場合、好ましくない「結果・影響」です。" },
        { id: "v12-04", type: "meaning-choice", direction: "ja-vi", prompt: "改善する", choices: ["cải thiện", "duy trì", "hạn chế", "tăng cường"], answers: ["cải thiện"], explanation: "cải thiện は状態や品質を「改善する」です。", answerLanguage: "vi" },
        { id: "v12-05", type: "meaning-choice", direction: "vi-ja", prompt: "điều chỉnh", choices: ["調整する", "中止する", "完成する", "繰り返す"], answers: ["調整する"], explanation: "điều chỉnh は計画・設定などを「調整する」です。" },
        { id: "v12-06", type: "meaning-choice", direction: "ja-vi", prompt: "取り替える・代える", choices: ["thay thế", "khắc phục", "phát triển", "đánh giá"], answers: ["thay thế"], explanation: "thay thế は人や物を「取り替える・代替する」です。", answerLanguage: "vi" },
        { id: "v12-07", type: "meaning-choice", direction: "vi-ja", prompt: "khắc phục", choices: ["克服・是正する", "予測する", "比較する", "延期する"], answers: ["克服・是正する"], explanation: "khắc phục は問題や欠点を「克服・是正する」です。" },
        { id: "v12-08", type: "meaning-choice", direction: "ja-vi", prompt: "効果的な", choices: ["hiệu quả", "phức tạp", "tạm thời", "phù hợp"], answers: ["hiệu quả"], explanation: "hiệu quả は「効果・効率」、または「効果的な」です。", answerLanguage: "vi" },
        { id: "v12-09", type: "meaning-choice", direction: "vi-ja", prompt: "ưu tiên", choices: ["優先する・優先事項", "反対する", "確認する", "責任を負う"], answers: ["優先する・優先事項"], explanation: "ưu tiên は「優先する・優先事項」です。" },
        { id: "v12-10", type: "meaning-choice", direction: "ja-vi", prompt: "進捗", choices: ["tiến độ", "thái độ", "mức độ", "chế độ"], answers: ["tiến độ"], explanation: "tiến độ は仕事や計画の「進み具合・進捗」です。", answerLanguage: "vi" }
      ]
    }
  );
  renumber(bVocabulary);
  b1.requires = "vocabulary-12";

  const a2Plus = {
    id: "a2-plus", label: "A2+", name: "中級準備", description: "目的・伝達・変化", requires: "a2-5",
    groups: [
      {
        id: "a2-plus-1", title: "GROUP 01", description: "目的・方法・代わりの表現",
        questions: [
          { id: "a2p1-01", type: "meaning-choice", direction: "vi-ja", prompt: "để + 動詞", choices: ["〜するために", "〜した後で", "〜にもかかわらず", "〜するたびに"], answers: ["〜するために"], explanation: "để は行動の目的を示します。" },
          { id: "a2p1-02", type: "meaning-choice", direction: "vi-ja", prompt: "thay vì", choices: ["〜する代わりに", "〜のおかげで", "〜について", "〜しない限り"], answers: ["〜する代わりに"], explanation: "thay vì は選ばなかった行動を示し「〜する代わりに」です。" },
          { id: "a2p1-03", type: "blank-choice", sentence: "Tôi ghi chú ___ không quên.", choices: ["để", "vì", "mặc dù", "sau khi"], answers: ["để"], translation: "忘れないようにメモします。", explanation: "để + 否定で「〜しないように」という目的も表せます。", answerLanguage: "vi" },
          { id: "a2p1-04", type: "blank-input", sentence: "Tôi học từ mới bằng ___ viết ví dụ.", answers: ["cách"], translation: "私は例文を書くことによって新しい単語を学びます。", explanation: "bằng cách + 動詞で方法を示します。", answerLanguage: "vi" },
          { id: "a2p1-05", type: "blank-input", sentence: "___ vì đi taxi, chúng tôi đi xe buýt.", answers: ["Thay", "thay"], translation: "タクシーに乗る代わりに、私たちはバスで行きます。", explanation: "thay vì + 動詞で選択肢の対比を表します。", answerLanguage: "vi" },
          { id: "a2p1-06", type: "blank-input", sentence: "Tôi đến sớm ___ chuẩn bị phòng họp.", answers: ["để"], translation: "会議室を準備するため早く来ました。", explanation: "主節の行動目的を để 以下で説明します。", answerLanguage: "vi" },
          { id: "a2p1-07", type: "blank-input", sentence: "___ có bản đồ, chúng tôi tìm được đường.", answers: ["Nhờ", "nhờ"], translation: "地図のおかげで道を見つけられました。", explanation: "nhờ は好ましい結果につながった手段・原因を示します。", answerLanguage: "vi" },
          { id: "a2p1-08", type: "translation", direction: "vi-ja", prompt: "Tôi luyện nghe bằng cách xem video ngắn.", answers: ["短い動画を見ることでリスニングを練習します", "短い動画を見て聞き取りを練習します"], modelAnswer: "短い動画を見ることでリスニングを練習します。", grading: "accepted", explanation: "bằng cách は具体的な方法を導きます。" },
          { id: "a2p1-09", type: "translation", direction: "ja-vi", prompt: "健康のために、私は毎朝歩きます。", answers: ["Để khỏe mạnh, tôi đi bộ mỗi sáng.", "Tôi đi bộ mỗi sáng để khỏe mạnh."], modelAnswer: "Tôi đi bộ mỗi sáng để khỏe mạnh.", grading: "accepted", answerLanguage: "vi", explanation: "để khỏe mạnh は「健康でいるために」です。" },
          { id: "a2p1-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "thay vì chờ đợi", answers: ["待つ代わりに", "待っている代わりに"], modelAnswer: "待つ代わりに", grading: "accepted", explanation: "thay vì は代替を表します。" }
        ]
      },
      {
        id: "a2-plus-2", title: "GROUP 02", description: "伝聞・質問・情報を伝える",
        questions: [
          { id: "a2p2-01", type: "meaning-choice", direction: "vi-ja", prompt: "nói rằng", choices: ["〜と言う", "〜と尋ねる", "〜と約束する", "〜と反対する"], answers: ["〜と言う"], explanation: "nói rằng の後ろに発言内容を続けます。" },
          { id: "a2p2-02", type: "meaning-choice", direction: "vi-ja", prompt: "cho biết", choices: ["知らせる・明らかにする", "隠す", "繰り返す", "翻訳する"], answers: ["知らせる・明らかにする"], explanation: "cho biết は情報を「知らせる」です。" },
          { id: "a2p2-03", type: "blank-choice", sentence: "Lan nói ___ cô ấy sẽ đến muộn.", choices: ["rằng", "nếu", "nên", "dù"], answers: ["rằng"], translation: "ランは遅れて来ると言いました。", explanation: "rằng は発言や考えの内容を導きます。", answerLanguage: "vi" },
          { id: "a2p2-04", type: "blank-input", sentence: "Tôi hỏi ___ anh ấy có rảnh không.", answers: ["xem"], translation: "私は彼が空いているか尋ねました。", explanation: "hỏi xem ... có ... không で間接的な質問を表します。", answerLanguage: "vi" },
          { id: "a2p2-05", type: "blank-input", sentence: "Bạn có biết cuộc họp bắt đầu lúc ___ không?", answers: ["mấy giờ", "bao nhiêu giờ"], translation: "会議が何時に始まるか知っていますか。", explanation: "có biết ... không? の中に疑問内容を入れられます。", answerLanguage: "vi" },
          { id: "a2p2-06", type: "blank-input", sentence: "Xin ___ tôi biết khi bạn đến nơi.", answers: ["cho"], translation: "到着したら知らせてください。", explanation: "cho tôi biết は「私に知らせる」です。", answerLanguage: "vi" },
          { id: "a2p2-07", type: "blank-input", sentence: "Theo dự báo, ngày mai trời sẽ ___.", answers: ["mưa"], translation: "予報によると、明日は雨が降るでしょう。", explanation: "theo + 情報源で「〜によると」です。", answerLanguage: "vi" },
          { id: "a2p2-08", type: "translation", direction: "vi-ja", prompt: "Cô ấy cho biết chuyến bay đã bị hoãn.", answers: ["彼女は便が延期されたと知らせました", "彼女は飛行機が遅れたと伝えました"], modelAnswer: "彼女は便が延期されたと知らせました。", grading: "accepted", explanation: "cho biết の後ろが伝えた情報です。" },
          { id: "a2p2-09", type: "translation", direction: "ja-vi", prompt: "彼がどこに住んでいるか知っていますか。", answers: ["Bạn có biết anh ấy sống ở đâu không?", "Bạn biết anh ấy sống ở đâu không?"], modelAnswer: "Bạn có biết anh ấy sống ở đâu không?", grading: "accepted", answerLanguage: "vi", explanation: "疑問詞 ở đâu は内容節の中でも使えます。" },
          { id: "a2p2-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "hỏi xem có thể đổi vé không", answers: ["切符を変更できるか尋ねる", "チケットを変更できるか聞く"], modelAnswer: "切符を変更できるか尋ねる", grading: "accepted", explanation: "hỏi xem ... không は「〜かどうか尋ねる」です。" }
        ]
      },
      {
        id: "a2-plus-3", title: "GROUP 03", description: "継続・変化・以前との違い",
        questions: [
          { id: "a2p3-01", type: "meaning-choice", direction: "vi-ja", prompt: "trở nên", choices: ["〜になる", "〜のままである", "〜を始める", "〜をやめる"], answers: ["〜になる"], explanation: "trở nên + 状態で変化を表します。" },
          { id: "a2p3-02", type: "meaning-choice", direction: "vi-ja", prompt: "không còn", choices: ["もう〜ない", "まだ〜ない", "決して〜ない", "〜だけではない"], answers: ["もう〜ない"], explanation: "không còn は以前はあった状態が今はないことを表します。" },
          { id: "a2p3-03", type: "blank-choice", sentence: "Tiếng Việt của tôi ngày càng ___.", choices: ["tốt hơn", "đã", "vừa", "xong"], answers: ["tốt hơn"], translation: "私のベトナム語はだんだん上達しています。", explanation: "ngày càng + 比較表現で変化の進行を示します。", answerLanguage: "vi" },
          { id: "a2p3-04", type: "blank-input", sentence: "Thời tiết đang dần dần trở ___ lạnh hơn.", answers: ["nên"], translation: "天気は徐々に寒くなっています。", explanation: "trở nên は状態の変化を表します。", answerLanguage: "vi" },
          { id: "a2p3-05", type: "blank-input", sentence: "Tôi không ___ sống ở đó nữa.", answers: ["còn"], translation: "私はもうそこには住んでいません。", explanation: "không còn ... nữa で「もう〜ない」です。", answerLanguage: "vi" },
          { id: "a2p3-06", type: "blank-input", sentence: "Dù bận, cô ấy ___ học mỗi ngày.", answers: ["vẫn"], translation: "忙しくても、彼女は毎日勉強を続けています。", explanation: "dù ... vẫn ... で状況に反して続くことを表します。", answerLanguage: "vi" },
          { id: "a2p3-07", type: "blank-input", sentence: "Thành phố đã thay đổi rất nhiều ___ năm ngoái.", answers: ["từ"], translation: "町は昨年から大きく変わりました。", explanation: "từ + 時点で変化の起点を示します。", answerLanguage: "vi" },
          { id: "a2p3-08", type: "translation", direction: "vi-ja", prompt: "Cuộc sống ở đây trở nên thuận tiện hơn.", answers: ["ここの生活はより便利になりました", "ここでの暮らしは以前より便利になりました"], modelAnswer: "ここの生活はより便利になりました。", grading: "accepted", explanation: "trở nên thuận tiện hơn は「より便利になる」です。" },
          { id: "a2p3-09", type: "translation", direction: "ja-vi", prompt: "私はもうその会社では働いていません。", answers: ["Tôi không còn làm việc ở công ty đó nữa.", "Tôi không làm việc ở công ty đó nữa."], modelAnswer: "Tôi không còn làm việc ở công ty đó nữa.", grading: "accepted", answerLanguage: "vi", explanation: "không còn ... nữa で過去との違いを明確にします。" },
          { id: "a2p3-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "ngày càng quan trọng", answers: ["ますます重要になる", "ますます重要な"], modelAnswer: "ますます重要になる", grading: "accepted", explanation: "ngày càng は変化が進む「ますます」です。" }
        ]
      }
    ]
  };
  a2Plus.groups.push(
    {
      id: "a2-plus-4", title: "GROUP 04", description: "予定・決定・期待",
      questions: [
        { id: "a2p4-01", type: "meaning-choice", direction: "vi-ja", prompt: "dự định", choices: ["予定する", "中止する", "忘れる", "繰り返す"], answers: ["予定する"], explanation: "dự định は少し先の計画や意図を表します。" },
        { id: "a2p4-02", type: "meaning-choice", direction: "vi-ja", prompt: "hy vọng", choices: ["期待する・願う", "心配する", "反対する", "疑う"], answers: ["期待する・願う"], explanation: "hy vọng は実現を願う気持ちを表します。" },
        { id: "a2p4-03", type: "blank-choice", sentence: "Tôi ___ đi Đà Nẵng vào tháng tới.", choices: ["dự định", "đã", "vừa", "bị"], answers: ["dự định"], translation: "私は来月ダナンへ行く予定です。", explanation: "dự định + 動詞で予定を述べます。", answerLanguage: "vi" },
        { id: "a2p4-04", type: "blank-input", sentence: "Chúng tôi đã quyết ___ đổi kế hoạch.", answers: ["định"], translation: "私たちは計画を変更することに決めました。", explanation: "quyết định + 動詞で「〜することに決める」です。", answerLanguage: "vi" },
        { id: "a2p4-05", type: "blank-input", sentence: "Tôi hy ___ mọi việc sẽ tốt đẹp.", answers: ["vọng"], translation: "すべてうまくいくことを願っています。", explanation: "hy vọng + 節で期待する内容を続けます。", answerLanguage: "vi" },
        { id: "a2p4-06", type: "blank-input", sentence: "Anh ấy định ___ việc vào cuối năm.", answers: ["nghỉ"], translation: "彼は年末に退職するつもりです。", explanation: "định + 動詞は会話でよく使う「〜するつもり」です。", answerLanguage: "vi" },
        { id: "a2p4-07", type: "blank-input", sentence: "Cuộc họp được ___ vào sáng thứ Hai.", answers: ["tổ chức"], translation: "会議は月曜日の朝に開催される予定です。", explanation: "được tổ chức は「開催される」です。", answerLanguage: "vi" },
        { id: "a2p4-08", type: "translation", direction: "vi-ja", prompt: "Chúng tôi dự định chuyển nhà vào mùa hè.", answers: ["私たちは夏に引っ越す予定です", "夏に引っ越すつもりです"], modelAnswer: "私たちは夏に引っ越す予定です。", grading: "accepted", explanation: "dự định chuyển nhà は「引っ越す予定」です。" },
        { id: "a2p4-09", type: "translation", direction: "ja-vi", prompt: "旅行が順調に進むことを願っています。", answers: ["Tôi hy vọng chuyến đi sẽ diễn ra suôn sẻ.", "Hy vọng chuyến đi sẽ diễn ra suôn sẻ."], modelAnswer: "Tôi hy vọng chuyến đi sẽ diễn ra suôn sẻ.", grading: "accepted", answerLanguage: "vi", explanation: "hy vọng ... sẽ ... で将来への期待を表します。" },
        { id: "a2p4-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "quyết định ở lại", answers: ["残ることに決める", "滞在することに決める"], modelAnswer: "残ることに決める", grading: "accepted", explanation: "quyết định + 動詞は決定を示します。" }
      ]
    },
    {
      id: "a2-plus-5", title: "GROUP 05", description: "mà・việc・điều の基礎",
      questions: [
        { id: "a2p5-01", type: "meaning-choice", direction: "vi-ja", prompt: "người mà tôi gặp", choices: ["私が会った人", "私に会った人", "人に会うこと", "会う場所"], answers: ["私が会った人"], explanation: "mà 以下が前の名詞 người を説明します。" },
        { id: "a2p5-02", type: "meaning-choice", direction: "vi-ja", prompt: "việc học tiếng Việt", choices: ["ベトナム語を学ぶこと", "ベトナム語を学ぶ人", "ベトナム語の教室", "ベトナム語の先生"], answers: ["ベトナム語を学ぶこと"], explanation: "việc は動作を「〜すること」として扱います。" },
        { id: "a2p5-03", type: "blank-choice", sentence: "Đây là nhà hàng ___ tôi thích.", choices: ["mà", "nên", "nếu", "do"], answers: ["mà"], translation: "ここは私が好きなレストランです。", explanation: "mà 以下が nhà hàng を説明します。", answerLanguage: "vi" },
        { id: "a2p5-04", type: "blank-input", sentence: "Người ___ gọi cho tôi là Lan.", answers: ["mà"], translation: "私に電話した人はランです。", explanation: "người mà ... で「〜する人」です。", answerLanguage: "vi" },
        { id: "a2p5-05", type: "blank-input", sentence: "___ tập thể dục mỗi ngày rất tốt.", answers: ["Việc", "việc"], translation: "毎日運動することはとても良いです。", explanation: "việc + 動詞句を主語にできます。", answerLanguage: "vi" },
        { id: "a2p5-06", type: "blank-input", sentence: "Đó là ___ tôi muốn nói.", answers: ["điều"], translation: "それが私の言いたいことです。", explanation: "điều + 節で「〜すること・もの」を表します。", answerLanguage: "vi" },
        { id: "a2p5-07", type: "blank-input", sentence: "Cuốn sách ___ bạn cho tôi rất thú vị.", answers: ["mà"], translation: "あなたがくれた本はとても面白いです。", explanation: "mà を使って本を後ろから説明します。", answerLanguage: "vi" },
        { id: "a2p5-08", type: "translation", direction: "vi-ja", prompt: "Người đang nói chuyện với Mai là anh tôi.", answers: ["マイと話している人は私の兄です", "マイと話しているのは私の兄です"], modelAnswer: "マイと話している人は私の兄です。", grading: "accepted", explanation: "người の後ろの動作が人を説明します。" },
        { id: "a2p5-09", type: "translation", direction: "ja-vi", prompt: "これは私が探していた本です。", answers: ["Đây là cuốn sách mà tôi đang tìm.", "Đây là quyển sách mà tôi đang tìm."], modelAnswer: "Đây là cuốn sách mà tôi đang tìm.", grading: "accepted", answerLanguage: "vi", explanation: "mà 以下で本について説明します。" },
        { id: "a2p5-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "điều quan trọng nhất", answers: ["最も大切なこと", "一番重要なこと"], modelAnswer: "最も大切なこと", grading: "accepted", explanation: "điều は抽象的な「こと・もの」に使います。" }
      ]
    },
    {
      id: "a2-plus-6", title: "GROUP 06", description: "意見・賛成・説明",
      questions: [
        { id: "a2p6-01", type: "meaning-choice", direction: "vi-ja", prompt: "theo tôi", choices: ["私の考えでは", "彼によると", "その結果", "例えば"], answers: ["私の考えでは"], explanation: "theo tôi は自分の意見を始める表現です。" },
        { id: "a2p6-02", type: "meaning-choice", direction: "vi-ja", prompt: "đồng ý với", choices: ["〜に賛成する", "〜に反対する", "〜を説明する", "〜を比較する"], answers: ["〜に賛成する"], explanation: "đồng ý với + 人・意見で「〜に賛成する」です。" },
        { id: "a2p6-03", type: "blank-choice", sentence: "Theo ___, học mỗi ngày hiệu quả hơn.", choices: ["tôi", "vì", "nếu", "nên"], answers: ["tôi"], translation: "私の考えでは、毎日学ぶ方が効果的です。", explanation: "theo tôi の後に自分の判断を続けます。", answerLanguage: "vi" },
        { id: "a2p6-04", type: "blank-input", sentence: "Tôi đồng ___ với ý kiến của bạn.", answers: ["ý"], translation: "私はあなたの意見に賛成です。", explanation: "đồng ý với ý kiến で「意見に賛成する」です。", answerLanguage: "vi" },
        { id: "a2p6-05", type: "blank-input", sentence: "Tôi không ___ cách này phù hợp.", answers: ["nghĩ"], translation: "私はこの方法が適切だとは思いません。", explanation: "không nghĩ + 節で否定的な意見を述べます。", answerLanguage: "vi" },
        { id: "a2p6-06", type: "blank-input", sentence: "Bạn có thể giải ___ rõ hơn không?", answers: ["thích"], translation: "もう少し詳しく説明してもらえますか。", explanation: "giải thích は「説明する」です。", answerLanguage: "vi" },
        { id: "a2p6-07", type: "blank-input", sentence: "Tôi không chắc ___ điều đó đúng.", answers: ["là", "rằng"], translation: "それが正しいか確信がありません。", explanation: "không chắc là／rằng ... で確信のなさを示します。", answerLanguage: "vi" },
        { id: "a2p6-08", type: "translation", direction: "vi-ja", prompt: "Theo tôi, phương án thứ hai đơn giản hơn.", answers: ["私の考えでは、二つ目の案の方が簡単です", "私は二番目の方法の方が簡単だと思います"], modelAnswer: "私の考えでは、二つ目の案の方が簡単です。", grading: "accepted", explanation: "theo tôi は意見の導入です。" },
        { id: "a2p6-09", type: "translation", direction: "ja-vi", prompt: "私はその意見に賛成ですが、少し心配です。", answers: ["Tôi đồng ý với ý kiến đó nhưng hơi lo.", "Tôi đồng ý với ý kiến đó, nhưng tôi hơi lo."], modelAnswer: "Tôi đồng ý với ý kiến đó nhưng hơi lo.", grading: "accepted", answerLanguage: "vi", explanation: "nhưng で賛成と懸念を対比します。" },
        { id: "a2p6-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "giải thích lý do", answers: ["理由を説明する", "その理由を説明する"], modelAnswer: "理由を説明する", grading: "accepted", explanation: "giải thích は内容を分かるように述べることです。" }
      ]
    },
    {
      id: "a2-plus-7", title: "GROUP 07", description: "原因・結果・影響",
      questions: [
        { id: "a2p7-01", type: "meaning-choice", direction: "vi-ja", prompt: "do", choices: ["〜が原因で", "〜の代わりに", "〜に比べて", "〜について"], answers: ["〜が原因で"], explanation: "do は原因を表し、名詞の前にも置けます。" },
        { id: "a2p7-02", type: "meaning-choice", direction: "vi-ja", prompt: "ảnh hưởng đến", choices: ["〜に影響する", "〜を避ける", "〜を解決する", "〜に参加する"], answers: ["〜に影響する"], explanation: "ảnh hưởng đến + 対象で影響の及ぶ先を示します。" },
        { id: "a2p7-03", type: "blank-choice", sentence: "Chuyến bay bị hoãn ___ thời tiết xấu.", choices: ["do", "mặc dù", "thay vì", "sau khi"], answers: ["do"], translation: "便は悪天候のため延期されました。", explanation: "do + 名詞句で原因を示します。", answerLanguage: "vi" },
        { id: "a2p7-04", type: "blank-input", sentence: "Vì đường đông ___ chúng tôi đến muộn.", answers: ["nên"], translation: "道が混んでいたので、私たちは遅れました。", explanation: "vì ... nên ... で原因と結果を結びます。", answerLanguage: "vi" },
        { id: "a2p7-05", type: "blank-input", sentence: "Tiếng ồn ảnh hưởng ___ giấc ngủ của tôi.", answers: ["đến", "tới"], translation: "騒音は私の睡眠に影響します。", explanation: "ảnh hưởng đến／tới は「〜に影響する」です。", answerLanguage: "vi" },
        { id: "a2p7-06", type: "blank-input", sentence: "Nhờ luyện tập, tôi đã tiến bộ rất ___.", answers: ["nhiều"], translation: "練習のおかげで、私は大きく上達しました。", explanation: "nhờ は好ましい原因を示します。", answerLanguage: "vi" },
        { id: "a2p7-07", type: "blank-input", sentence: "Mưa lớn làm ___ đường bị ngập.", answers: ["cho"], translation: "大雨によって道路が冠水しました。", explanation: "làm cho + 節で結果を生じさせることを表します。", answerLanguage: "vi" },
        { id: "a2p7-08", type: "translation", direction: "vi-ja", prompt: "Việc thiếu ngủ ảnh hưởng đến sức khỏe.", answers: ["睡眠不足は健康に影響します", "寝不足は健康に影響を与えます"], modelAnswer: "睡眠不足は健康に影響します。", grading: "accepted", explanation: "việc thiếu ngủ は「睡眠が不足すること」です。" },
        { id: "a2p7-09", type: "translation", direction: "ja-vi", prompt: "雨のおかげで、空気が涼しくなりました。", answers: ["Nhờ trời mưa, không khí trở nên mát hơn.", "Nhờ mưa, không khí trở nên mát hơn."], modelAnswer: "Nhờ trời mưa, không khí trở nên mát hơn.", grading: "accepted", answerLanguage: "vi", explanation: "nhờ は好ましい結果の原因を示します。" },
        { id: "a2p7-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "do thiếu thời gian", answers: ["時間不足のため", "時間が足りないため"], modelAnswer: "時間不足のため", grading: "accepted", explanation: "do は客観的な原因を簡潔に示します。" }
      ]
    },
    {
      id: "a2-plus-8", title: "GROUP 08", description: "A2＋総合練習",
      questions: [
        { id: "a2p8-01", type: "meaning-choice", direction: "vi-ja", prompt: "trong khi", choices: ["〜している間・一方で", "〜した後で", "〜するために", "〜でない限り"], answers: ["〜している間・一方で"], explanation: "trong khi は同時進行や対比を表します。" },
        { id: "a2p8-02", type: "meaning-choice", direction: "vi-ja", prompt: "cho đến khi", choices: ["〜するまで", "〜して以来", "〜した途端", "〜する代わりに"], answers: ["〜するまで"], explanation: "cho đến khi は継続の終点を示します。" },
        { id: "a2p8-03", type: "blank-choice", sentence: "Tôi sẽ đợi ở đây ___ khi bạn đến.", choices: ["cho đến", "thay vì", "mặc dù", "do"], answers: ["cho đến"], translation: "あなたが来るまでここで待ちます。", explanation: "cho đến khi で時間の終点を表します。", answerLanguage: "vi" },
        { id: "a2p8-04", type: "blank-input", sentence: "___ đang nấu ăn, tôi nghe nhạc.", answers: ["Trong khi", "Trong lúc", "Khi"], translation: "料理をしながら、私は音楽を聴きます。", explanation: "trong khi／trong lúc で同時の動作を示します。", answerLanguage: "vi" },
        { id: "a2p8-05", type: "blank-input", sentence: "Đây là món ăn ngon nhất ___ tôi từng thử.", answers: ["mà"], translation: "これは私が今まで食べた中で最もおいしい料理です。", explanation: "mà 以下が món ăn を説明します。", answerLanguage: "vi" },
        { id: "a2p8-06", type: "blank-input", sentence: "Tôi học mỗi ngày để có thể nói tốt ___.", answers: ["hơn"], translation: "もっと上手に話せるよう、毎日勉強しています。", explanation: "tốt hơn は「より上手に」です。", answerLanguage: "vi" },
        { id: "a2p8-07", type: "blank-input", sentence: "Nếu không hiểu, hãy hỏi ___ giáo viên.", answers: ["lại"], translation: "分からなければ、先生にもう一度聞いてください。", explanation: "hỏi lại は「もう一度尋ねる・聞き返す」です。", answerLanguage: "vi" },
        { id: "a2p8-08", type: "translation", direction: "vi-ja", prompt: "Mặc dù mới học được một năm, cô ấy đã nói khá tốt.", modelAnswer: "学び始めてまだ1年ですが、彼女はかなり上手に話します。", grading: "self", explanation: "mặc dù で譲歩、mới ... được で短い期間を示します。" },
        { id: "a2p8-09", type: "translation", direction: "ja-vi", prompt: "予定が変わったら、できるだけ早く知らせてください。", modelAnswer: "Nếu kế hoạch thay đổi, hãy cho tôi biết càng sớm càng tốt.", grading: "self", answerLanguage: "vi", explanation: "càng sớm càng tốt は「できるだけ早く」です。" },
        { id: "a2p8-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "bằng cách luyện tập thường xuyên", modelAnswer: "定期的に練習することによって", grading: "self", explanation: "bằng cách で方法を示します。" }
      ]
    }
  );
  levels.splice(levels.indexOf(bVocabulary), 0, a2Plus);
  bVocabulary.requires = "a2-plus-8";

  const b1Plus = {
    id: "b1-plus", label: "B1+", name: "中級", description: "推測・議論・要約", requires: "b1-5",
    groups: [
      {
        id: "b1-plus-1", title: "GROUP 01", description: "推測・可能性・仮定",
        questions: [
          { id: "b1p1-01", type: "meaning-choice", direction: "vi-ja", prompt: "có lẽ", choices: ["おそらく", "必ず", "決して", "すでに"], answers: ["おそらく"], explanation: "có lẽ は確実ではない推測を表します。" },
          { id: "b1p1-02", type: "meaning-choice", direction: "vi-ja", prompt: "dường như", choices: ["〜のようだ", "〜に違いない", "〜する必要がある", "〜するつもりだ"], answers: ["〜のようだ"], explanation: "dường như は観察に基づく控えめな推測です。" },
          { id: "b1p1-03", type: "blank-choice", sentence: "___ sử kế hoạch thất bại, chúng ta sẽ làm gì?", choices: ["Giả", "Do", "Mặc", "Sau"], answers: ["Giả"], translation: "仮に計画が失敗したら、私たちはどうしますか。", explanation: "giả sử は仮定の状況を導きます。", answerLanguage: "vi" },
          { id: "b1p1-04", type: "blank-input", sentence: "Trời nhiều mây; có ___ sắp mưa.", answers: ["lẽ"], translation: "曇っているので、おそらくもうすぐ雨が降ります。", explanation: "có lẽ は可能性を述べます。", answerLanguage: "vi" },
          { id: "b1p1-05", type: "blank-input", sentence: "Anh ấy ___ như không đồng ý.", answers: ["dường"], translation: "彼は同意していないようです。", explanation: "dường như + 節で「〜のようだ」です。", answerLanguage: "vi" },
          { id: "b1p1-06", type: "blank-input", sentence: "Hãy đi ngay, nếu ___ chúng ta sẽ muộn.", answers: ["không"], translation: "すぐ行きましょう。そうでなければ遅れます。", explanation: "nếu không は「そうでなければ」です。", answerLanguage: "vi" },
          { id: "b1p1-07", type: "blank-input", sentence: "Chưa ___ anh ấy đã nhận được tin nhắn.", answers: ["chắc"], translation: "彼がすでにメッセージを受け取ったとは限りません。", explanation: "chưa chắc は「必ずしも〜とは限らない」です。", answerLanguage: "vi" },
          { id: "b1p1-08", type: "translation", direction: "vi-ja", prompt: "Dường như vấn đề phức tạp hơn chúng ta nghĩ.", modelAnswer: "問題は私たちが考えていたより複雑なようです。", grading: "self", explanation: "dường như で断定を避けて推測を述べます。" },
          { id: "b1p1-09", type: "translation", direction: "ja-vi", prompt: "時間どおりに終わらない可能性があります。", modelAnswer: "Có khả năng chúng ta sẽ không hoàn thành đúng hạn.", grading: "self", answerLanguage: "vi", explanation: "có khả năng ... は「〜する可能性がある」です。" },
          { id: "b1p1-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "trong trường hợp kế hoạch thay đổi", modelAnswer: "計画が変更された場合には", grading: "self", explanation: "trong trường hợp は「〜の場合には」です。" }
        ]
      },
      {
        id: "b1-plus-2", title: "GROUP 02", description: "対比しながら意見を組み立てる",
        questions: [
          { id: "b1p2-01", type: "meaning-choice", direction: "vi-ja", prompt: "một mặt ... mặt khác ...", choices: ["一方では〜、他方では…", "〜なので…", "〜だけでなく…", "〜するほど…"], answers: ["一方では〜、他方では…"], explanation: "二つの側面を対比して示す表現です。" },
          { id: "b1p2-02", type: "meaning-choice", direction: "vi-ja", prompt: "trái lại", choices: ["反対に", "そのため", "例えば", "つまり"], answers: ["反対に"], explanation: "trái lại は前の内容と反対の事実を導きます。" },
          { id: "b1p2-03", type: "blank-choice", sentence: "Một mặt, làm việc ở nhà rất tiện; mặt ___, đôi khi khó tập trung.", choices: ["khác", "nữa", "sau", "trên"], answers: ["khác"], translation: "在宅勤務は便利な一方、集中しにくいこともあります。", explanation: "một mặt ... mặt khác ... で両面を示します。", answerLanguage: "vi" },
          { id: "b1p2-04", type: "blank-input", sentence: "Thành phố rất đông. ___ lại, vùng quê khá yên tĩnh.", answers: ["Trái", "trái"], translation: "都市はとても混雑しています。反対に田舎はかなり静かです。", explanation: "trái lại は対照的な内容を続けます。", answerLanguage: "vi" },
          { id: "b1p2-05", type: "blank-input", sentence: "Công việc này không chỉ thú vị mà ___ có ý nghĩa.", answers: ["còn"], translation: "この仕事は面白いだけでなく、意義もあります。", explanation: "không chỉ ... mà còn ... は要素を追加して強調します。", answerLanguage: "vi" },
          { id: "b1p2-06", type: "blank-input", sentence: "Một số người thích thành phố, ___ khi người khác thích nông thôn.", answers: ["trong"], translation: "都市を好む人がいる一方、田舎を好む人もいます。", explanation: "trong khi は同時性だけでなく対比も表します。", answerLanguage: "vi" },
          { id: "b1p2-07", type: "blank-input", sentence: "Xét ___ chi phí, phương án này hợp lý hơn.", answers: ["về"], translation: "費用の面で見ると、この案の方が合理的です。", explanation: "xét về ... は評価する観点を示します。", answerLanguage: "vi" },
          { id: "b1p2-08", type: "translation", direction: "vi-ja", prompt: "Một mặt, công nghệ giúp tiết kiệm thời gian; mặt khác, nó có thể gây ra sự phụ thuộc.", modelAnswer: "技術は時間を節約する一方、依存を引き起こす可能性もあります。", grading: "self", explanation: "二つの側面を公平に示す構成です。" },
          { id: "b1p2-09", type: "translation", direction: "ja-vi", prompt: "この方法は安いだけでなく、効果的でもあります。", modelAnswer: "Phương pháp này không chỉ rẻ mà còn hiệu quả.", grading: "self", answerLanguage: "vi", explanation: "không chỉ ... mà còn ... で二つの長所を結びます。" },
          { id: "b1p2-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "xét về mặt lâu dài", modelAnswer: "長期的な面で考えると", grading: "self", explanation: "xét về mặt ... は評価の観点を示します。" }
        ]
      },
      {
        id: "b1-plus-3", title: "GROUP 03", description: "要約・言い換え・結論",
        questions: [
          { id: "b1p3-01", type: "meaning-choice", direction: "vi-ja", prompt: "tóm lại", choices: ["要するに・まとめると", "その一方で", "具体的には", "それにもかかわらず"], answers: ["要するに・まとめると"], explanation: "tóm lại は説明をまとめて結論へ導きます。" },
          { id: "b1p3-02", type: "meaning-choice", direction: "vi-ja", prompt: "nhìn chung", choices: ["全体として", "個別には", "突然", "以前は"], answers: ["全体として"], explanation: "nhìn chung は全体的な評価を述べます。" },
          { id: "b1p3-03", type: "blank-choice", sentence: "___ lại, kế hoạch đã đạt được mục tiêu chính.", choices: ["Tóm", "Trái", "Mặt", "Dường"], answers: ["Tóm"], translation: "まとめると、計画は主な目標を達成しました。", explanation: "tóm lại を文頭に置いて結論を示します。", answerLanguage: "vi" },
          { id: "b1p3-04", type: "blank-input", sentence: "Nói cách ___, chúng ta cần bắt đầu lại.", answers: ["khác"], translation: "言い換えれば、私たちはやり直す必要があります。", explanation: "nói cách khác は前の内容の言い換えです。", answerLanguage: "vi" },
          { id: "b1p3-05", type: "blank-input", sentence: "Nhìn ___, kết quả khá tích cực.", answers: ["chung"], translation: "全体として、結果はかなり良好です。", explanation: "nhìn chung は細部を除いた全体評価です。", answerLanguage: "vi" },
          { id: "b1p3-06", type: "blank-input", sentence: "Điều này cho ___ rằng cách mới có hiệu quả.", answers: ["thấy"], translation: "これは新しい方法が効果的だということを示しています。", explanation: "cho thấy rằng ... は「〜ということを示す」です。", answerLanguage: "vi" },
          { id: "b1p3-07", type: "blank-input", sentence: "Vấn đề quan trọng ___ làm thế nào để duy trì kết quả.", answers: ["là"], translation: "重要な問題は、結果をどう維持するかです。", explanation: "vấn đề ... là ... で中心的な問題を提示します。", answerLanguage: "vi" },
          { id: "b1p3-08", type: "translation", direction: "vi-ja", prompt: "Nhìn chung, lợi ích của dự án lớn hơn những hạn chế của nó.", modelAnswer: "全体として、この計画の利点は欠点より大きいです。", grading: "self", explanation: "nhìn chung で総合的な判断を示します。" },
          { id: "b1p3-09", type: "translation", direction: "ja-vi", prompt: "要するに、成功するには時間と継続的な努力が必要です。", modelAnswer: "Tóm lại, để thành công, chúng ta cần thời gian và nỗ lực liên tục.", grading: "self", answerLanguage: "vi", explanation: "tóm lại で結論を導き、để で目的を示します。" },
          { id: "b1p3-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "điều này cho thấy rằng", modelAnswer: "これは〜ということを示している", grading: "self", explanation: "根拠から判断を導くときの表現です。" }
        ]
      }
    ]
  };
  b1Plus.groups.push(
    {
      id: "b1-plus-4", title: "GROUP 04", description: "提案・交渉・調整",
      questions: [
        { id: "b1p4-01", type: "meaning-choice", direction: "vi-ja", prompt: "đề nghị", choices: ["提案する", "拒否する", "報告する", "証明する"], answers: ["提案する"], explanation: "đề nghị は案や対応を提案する語です。" },
        { id: "b1p4-02", type: "meaning-choice", direction: "vi-ja", prompt: "cân nhắc", choices: ["よく検討する", "すぐ決定する", "取り消す", "無視する"], answers: ["よく検討する"], explanation: "cân nhắc は複数の要素を考慮して検討することです。" },
        { id: "b1p4-03", type: "blank-choice", sentence: "Tôi đề ___ dời cuộc họp sang thứ Sáu.", choices: ["nghị", "cầu", "định", "báo"], answers: ["nghị"], translation: "会議を金曜日へ延期することを提案します。", explanation: "đề nghị + 動詞で提案を述べます。", answerLanguage: "vi" },
        { id: "b1p4-04", type: "blank-input", sentence: "Chúng ta cần cân ___ cả chi phí lẫn thời gian.", answers: ["nhắc"], translation: "費用と時間の両方を考慮する必要があります。", explanation: "cân nhắc は慎重な検討を表します。", answerLanguage: "vi" },
        { id: "b1p4-05", type: "blank-input", sentence: "Hai bên đã đạt được thỏa ___.", answers: ["thuận"], translation: "双方は合意に達しました。", explanation: "đạt được thỏa thuận は「合意に達する」です。", answerLanguage: "vi" },
        { id: "b1p4-06", type: "blank-input", sentence: "Xin vui lòng xác ___ thời gian họp.", answers: ["nhận"], translation: "会議の時間をご確認ください。", explanation: "xác nhận は「確認する・確定する」です。", answerLanguage: "vi" },
        { id: "b1p4-07", type: "blank-input", sentence: "Chúng tôi có thể điều ___ lịch trình nếu cần.", answers: ["chỉnh"], translation: "必要なら日程を調整できます。", explanation: "điều chỉnh lịch trình は「日程を調整する」です。", answerLanguage: "vi" },
        { id: "b1p4-08", type: "translation", direction: "vi-ja", prompt: "Tôi đề nghị chúng ta xem xét một giải pháp khác.", modelAnswer: "別の解決策を検討することを提案します。", grading: "self", explanation: "đề nghị ... xem xét ... は丁寧に検討を促します。" },
        { id: "b1p4-09", type: "translation", direction: "ja-vi", prompt: "条件についてもう一度話し合う必要があります。", modelAnswer: "Chúng ta cần thảo luận lại về các điều kiện.", grading: "self", answerLanguage: "vi", explanation: "thảo luận lại về ... は「〜について再び話し合う」です。" },
        { id: "b1p4-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "đạt được thỏa thuận", modelAnswer: "合意に達する", grading: "self", explanation: "交渉がまとまったことを表します。" }
      ]
    },
    {
      id: "b1-plus-5", title: "GROUP 05", description: "資料・傾向・根拠",
      questions: [
        { id: "b1p5-01", type: "meaning-choice", direction: "vi-ja", prompt: "xu hướng", choices: ["傾向", "原因", "基準", "手順"], answers: ["傾向"], explanation: "xu hướng は変化の方向や社会的な傾向です。" },
        { id: "b1p5-02", type: "meaning-choice", direction: "vi-ja", prompt: "dựa trên", choices: ["〜に基づいて", "〜に反して", "〜を通じて", "〜の代わりに"], answers: ["〜に基づいて"], explanation: "dựa trên は判断の根拠を示します。" },
        { id: "b1p5-03", type: "blank-choice", sentence: "Theo báo cáo, tỷ lệ này đang ___.", choices: ["tăng", "gây", "đạt", "dựa"], answers: ["tăng"], translation: "報告によると、この割合は増加しています。", explanation: "tỷ lệ tăng は「割合が増える」です。", answerLanguage: "vi" },
        { id: "b1p5-04", type: "blank-input", sentence: "Kết quả này cho ___ một xu hướng tích cực.", answers: ["thấy"], translation: "この結果は好ましい傾向を示しています。", explanation: "cho thấy はデータなどが事実を示す表現です。", answerLanguage: "vi" },
        { id: "b1p5-05", type: "blank-input", sentence: "Phân tích được thực hiện dựa ___ dữ liệu mới.", answers: ["trên"], translation: "分析は新しいデータに基づいて行われました。", explanation: "dựa trên + 根拠で「〜に基づいて」です。", answerLanguage: "vi" },
        { id: "b1p5-06", type: "blank-input", sentence: "Số người sử dụng dịch vụ đã tăng đáng ___.", answers: ["kể"], translation: "サービス利用者数は大幅に増加しました。", explanation: "đáng kể は「著しく・かなり」です。", answerLanguage: "vi" },
        { id: "b1p5-07", type: "blank-input", sentence: "So với năm trước, chi phí đã giảm mười phần ___.", answers: ["trăm"], translation: "前年と比べ、費用は10パーセント減りました。", explanation: "phần trăm は「パーセント」です。", answerLanguage: "vi" },
        { id: "b1p5-08", type: "translation", direction: "vi-ja", prompt: "Dữ liệu cho thấy nhu cầu đang tăng dần.", modelAnswer: "データは需要が徐々に増えていることを示しています。", grading: "self", explanation: "cho thấy でデータから読み取れる内容を述べます。" },
        { id: "b1p5-09", type: "translation", direction: "ja-vi", prompt: "調査結果に基づくと、この方法が最も効果的です。", modelAnswer: "Dựa trên kết quả khảo sát, phương pháp này hiệu quả nhất.", grading: "self", answerLanguage: "vi", explanation: "dựa trên で判断の根拠を示します。" },
        { id: "b1p5-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "một xu hướng đáng chú ý", modelAnswer: "注目すべき傾向", grading: "self", explanation: "đáng chú ý は「注目に値する」です。" }
      ]
    },
    {
      id: "b1-plus-6", title: "GROUP 06", description: "仮定・後悔・別の可能性",
      questions: [
        { id: "b1p6-01", type: "meaning-choice", direction: "vi-ja", prompt: "giá mà", choices: ["〜だったらよかったのに", "〜である限り", "〜するとすぐ", "〜だからこそ"], answers: ["〜だったらよかったのに"], explanation: "giá mà は現実と異なる願いや後悔を表します。" },
        { id: "b1p6-02", type: "meaning-choice", direction: "vi-ja", prompt: "nếu không thì", choices: ["そうでなければ", "たとえそうでも", "そのおかげで", "その一方で"], answers: ["そうでなければ"], explanation: "nếu không thì は条件が満たされない場合の結果を示します。" },
        { id: "b1p6-03", type: "blank-choice", sentence: "Giá ___ tôi biết điều đó sớm hơn.", choices: ["mà", "nên", "do", "vẫn"], answers: ["mà"], translation: "もっと早くそれを知っていたらよかったのに。", explanation: "giá mà で後悔や実現しにくい願いを示します。", answerLanguage: "vi" },
        { id: "b1p6-04", type: "blank-input", sentence: "Nếu tôi có nhiều thời gian hơn, tôi ___ học thêm.", answers: ["sẽ"], translation: "もっと時間があれば、さらに勉強します。", explanation: "nếu ... sẽ ... で仮定と結果を述べます。", answerLanguage: "vi" },
        { id: "b1p6-05", type: "blank-input", sentence: "Hãy kiểm tra kỹ, nếu không ___ sẽ mắc lỗi.", answers: ["thì"], translation: "よく確認してください。そうでなければ間違えます。", explanation: "nếu không thì で別の結果を警告します。", answerLanguage: "vi" },
        { id: "b1p6-06", type: "blank-input", sentence: "Giả sử ngân sách bị giảm, chúng ta sẽ xử lý thế ___?", answers: ["nào"], translation: "仮に予算が減ったら、どう対処しますか。", explanation: "giả sử で検討用の仮定を提示します。", answerLanguage: "vi" },
        { id: "b1p6-07", type: "blank-input", sentence: "Nếu không có sự giúp đỡ của bạn, tôi đã không hoàn thành ___ .", answers: ["được"], translation: "あなたの助けがなければ、私は完了できませんでした。", explanation: "đã không ... được で過去に不可能だった結果を示します。", answerLanguage: "vi" },
        { id: "b1p6-08", type: "translation", direction: "vi-ja", prompt: "Giá mà chúng ta đã chuẩn bị kỹ hơn.", modelAnswer: "私たちがもっと十分に準備していたらよかったのに。", grading: "self", explanation: "giá mà + 完了した事柄で過去への後悔を表します。" },
        { id: "b1p6-09", type: "translation", direction: "ja-vi", prompt: "もし予定を知っていたら、もっと早く来ていました。", modelAnswer: "Nếu biết lịch trình, tôi đã đến sớm hơn.", grading: "self", answerLanguage: "vi", explanation: "nếu ... đã ... で現実と異なる過去を述べます。" },
        { id: "b1p6-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "nếu không có sự hỗ trợ", modelAnswer: "支援がなければ", grading: "self", explanation: "nếu không có ... は「〜がなければ」です。" }
      ]
    },
    {
      id: "b1-plus-7", title: "GROUP 07", description: "課題・対策・評価",
      questions: [
        { id: "b1p7-01", type: "meaning-choice", direction: "vi-ja", prompt: "biện pháp", choices: ["対策・措置", "原因", "傾向", "証拠"], answers: ["対策・措置"], explanation: "biện pháp は問題に対して取る具体的な対策です。" },
        { id: "b1p7-02", type: "meaning-choice", direction: "vi-ja", prompt: "góp phần", choices: ["貢献する・一因となる", "妨げる", "置き換える", "否定する"], answers: ["貢献する・一因となる"], explanation: "góp phần + 動詞で結果への貢献を表します。" },
        { id: "b1p7-03", type: "blank-choice", sentence: "Cần có biện ___ để giảm ô nhiễm.", choices: ["pháp", "quả", "kiện", "hướng"], answers: ["pháp"], translation: "汚染を減らすための対策が必要です。", explanation: "biện pháp は「対策・措置」です。", answerLanguage: "vi" },
        { id: "b1p7-04", type: "blank-input", sentence: "Việc đi xe buýt góp phần ___ khí thải.", answers: ["giảm"], translation: "バス利用は排出ガス削減に役立ちます。", explanation: "góp phần + 動詞で貢献する結果を続けます。", answerLanguage: "vi" },
        { id: "b1p7-05", type: "blank-input", sentence: "Kết quả phụ thuộc ___ cách thực hiện.", answers: ["vào"], translation: "結果は実施方法によって決まります。", explanation: "phụ thuộc vào は「〜に依存する・〜次第である」です。", answerLanguage: "vi" },
        { id: "b1p7-06", type: "blank-input", sentence: "Chính sách mới nhằm ___ chất lượng dịch vụ.", answers: ["nâng cao", "cải thiện"], translation: "新しい政策はサービス品質の向上を目指しています。", explanation: "nhằm + 動詞で目的を示します。", answerLanguage: "vi" },
        { id: "b1p7-07", type: "blank-input", sentence: "Chúng ta cần đánh ___ hiệu quả của giải pháp.", answers: ["giá"], translation: "解決策の効果を評価する必要があります。", explanation: "đánh giá は「評価する」です。", answerLanguage: "vi" },
        { id: "b1p7-08", type: "translation", direction: "vi-ja", prompt: "Biện pháp này có thể góp phần giải quyết vấn đề lâu dài.", modelAnswer: "この対策は長期的な問題の解決に役立つ可能性があります。", grading: "self", explanation: "góp phần giải quyết は「解決に寄与する」です。" },
        { id: "b1p7-09", type: "translation", direction: "ja-vi", prompt: "結果は私たちがどのように実行するかによって決まります。", modelAnswer: "Kết quả phụ thuộc vào cách chúng ta thực hiện.", grading: "self", answerLanguage: "vi", explanation: "phụ thuộc vào cách ... で方法への依存を述べます。" },
        { id: "b1p7-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "đánh giá tính hiệu quả", modelAnswer: "有効性を評価する", grading: "self", explanation: "tính hiệu quả は「有効性・効率性」です。" }
      ]
    },
    {
      id: "b1-plus-8", title: "GROUP 08", description: "B1＋長文総合",
      questions: [
        { id: "b1p8-01", type: "meaning-choice", direction: "vi-ja", prompt: "xét về lâu dài", choices: ["長期的に見れば", "すぐに", "過去と比べて", "例外として"], answers: ["長期的に見れば"], explanation: "xét về lâu dài は長期的な観点を示します。" },
        { id: "b1p8-02", type: "meaning-choice", direction: "vi-ja", prompt: "điều đó có nghĩa là", choices: ["それは〜を意味する", "それは〜と反対だ", "それは〜の原因だ", "それは〜と同時だ"], answers: ["それは〜を意味する"], explanation: "前の内容の意味や帰結を説明する表現です。" },
        { id: "b1p8-03", type: "blank-choice", sentence: "Xét về lâu ___, đầu tư vào giáo dục rất cần thiết.", choices: ["dài", "rộng", "cao", "sâu"], answers: ["dài"], translation: "長期的に見れば、教育への投資は非常に必要です。", explanation: "về lâu dài は「長期的には」です。", answerLanguage: "vi" },
        { id: "b1p8-04", type: "blank-input", sentence: "Kết quả không như mong đợi; điều đó có nghĩa ___ chúng ta phải điều chỉnh.", answers: ["là"], translation: "結果は期待どおりではなく、調整が必要だということです。", explanation: "có nghĩa là の後ろに意味・帰結を続けます。", answerLanguage: "vi" },
        { id: "b1p8-05", type: "blank-input", sentence: "Mặc dù có nhiều khó khăn, dự án vẫn đạt được mục ___ chính.", answers: ["tiêu"], translation: "多くの困難がありましたが、計画は主な目標を達成しました。", explanation: "đạt được mục tiêu は「目標を達成する」です。", answerLanguage: "vi" },
        { id: "b1p8-06", type: "blank-input", sentence: "Dựa trên dữ liệu hiện có, chưa thể đưa ra kết ___.", answers: ["luận"], translation: "現在のデータだけでは、まだ結論を出せません。", explanation: "đưa ra kết luận は「結論を出す」です。", answerLanguage: "vi" },
        { id: "b1p8-07", type: "blank-input", sentence: "Không chỉ chi phí giảm mà chất lượng cũng được cải ___.", answers: ["thiện"], translation: "費用が減っただけでなく、品質も改善されました。", explanation: "không chỉ ... mà ... cũng ... で二つの結果を示します。", answerLanguage: "vi" },
        { id: "b1p8-08", type: "translation", direction: "vi-ja", prompt: "Nếu được thực hiện đúng cách, giải pháp này không chỉ tiết kiệm chi phí mà còn nâng cao chất lượng dịch vụ.", modelAnswer: "適切に実施されれば、この解決策は費用を節約するだけでなく、サービスの質も高めます。", grading: "self", explanation: "条件と二つの効果を一文でまとめています。" },
        { id: "b1p8-09", type: "translation", direction: "ja-vi", prompt: "調査結果は改善を示していますが、結論を出すにはさらに多くのデータが必要です。", modelAnswer: "Kết quả khảo sát cho thấy sự cải thiện, nhưng cần thêm dữ liệu để đưa ra kết luận.", grading: "self", answerLanguage: "vi", explanation: "cho thấy、nhưng、để を使って根拠・対比・目的を結びます。" },
        { id: "b1p8-10", type: "translation", direction: "vi-ja", partial: "部分訳", prompt: "dựa trên những thông tin hiện có", modelAnswer: "現在得られている情報に基づいて", grading: "self", explanation: "判断に利用できる情報の範囲を示します。" }
      ]
    }
  );
  levels.splice(levels.indexOf(b1) + 1, 0, b1Plus);
})();

// B2・B2＋。短い選択問題から記入、翻訳へ段階的に進みます。
(() => {
  const bank = window.defaultQuestionBank;
  const levels = bank.levels;
  const mc = (id, direction, prompt, choices, answer, explanation) => ({
    id, type: "meaning-choice", direction, prompt, choices, answers: [answer], explanation
  });
  const bc = (id, sentence, choices, answer, translation, explanation) => ({
    id, type: "blank-choice", sentence, choices, answers: [answer], translation, explanation, answerLanguage: "vi"
  });
  const bi = (id, sentence, answer, translation, explanation) => ({
    id, type: "blank-input", sentence, answers: Array.isArray(answer) ? answer : [answer], translation, explanation, answerLanguage: "vi"
  });
  const tr = (id, direction, prompt, modelAnswer, explanation, partial = false) => ({
    id, type: "translation", direction, prompt, modelAnswer, grading: "self", explanation,
    ...(direction === "ja-vi" ? { answerLanguage: "vi" } : {}),
    ...(partial ? { partial: "部分訳" } : {})
  });
  const group = (id, title, description, questions) => ({ id, title, description, questions });

  const b2 = {
    id: "b2", label: "B2", name: "中上級", description: "抽象的な説明・社会・交渉", requires: "b1-plus-8",
    groups: [
      group("b2-1", "GROUP 01", "断定を避け、意味を限定する", [
        mc("b2g1-01", "vi-ja", "không hẳn", ["必ずしも〜ではない", "絶対に〜だ", "〜だけである", "〜かもしれない"], "必ずしも〜ではない", "強い断定を避ける表現です。"),
        mc("b2g1-02", "ja-vi", "〜というわけではない", ["không có nghĩa là", "có thể nói là", "chắc chắn là", "miễn là"], "không có nghĩa là", "前の事実から単純な結論を出せないことを示します。"),
        bc("b2g1-03", "Đắt hơn không có nghĩa ___ tốt hơn.", ["là", "vì", "nếu", "để"], "là", "値段が高いからといって、より良いというわけではありません。", "có nghĩa là で「〜を意味する」です。"),
        bi("b2g1-04", "Ý kiến đó không ___ sai, nhưng cần xem xét thêm.", "hẳn", "その意見は必ずしも間違いではありませんが、さらに検討が必要です。", "không hẳn で断定を弱めます。"),
        bi("b2g1-05", "Không phải ai cũng ___ với cách làm này.", "đồng ý", "全員がこの方法に賛成しているわけではありません。", "không phải ai cũng ... は部分否定です。"),
        bi("b2g1-06", "Kết quả này chưa chắc đã phản ___ đúng thực tế.", "ánh", "この結果が実態を正確に反映しているとは限りません。", "phản ánh thực tế は「実態を反映する」です。"),
        bi("b2g1-07", "Điều quan trọng không chỉ là tốc độ ___ còn là độ chính xác.", "mà", "重要なのは速さだけでなく正確さでもあります。", "không chỉ ... mà còn ... の形です。"),
        tr("b2g1-08", "vi-ja", "Không hẳn cứ làm việc lâu là đạt hiệu quả cao.", "長く働けば必ず高い成果が出るというわけではありません。", "cứ ... là ... を không hẳn で限定しています。"),
        tr("b2g1-09", "ja-vi", "便利だからといって、すべての人に適しているわけではありません。", "Tiện không có nghĩa là phù hợp với tất cả mọi người.", "không có nghĩa là で安易な結論を避けます。"),
        tr("b2g1-10", "vi-ja", "chưa chắc đã phản ánh đúng thực tế", "実態を正確に反映しているとは限らない", "chưa chắc đã は確実ではないという判断です。", true)
      ]),
      group("b2-2", "GROUP 02", "原因・結果・連鎖を説明する", [
        mc("b2g2-01", "vi-ja", "bắt nguồn từ", ["〜に由来する", "〜を防ぐ", "〜と一致する", "〜を補う"], "〜に由来する", "原因や起源を示す表現です。"),
        mc("b2g2-02", "vi-ja", "kéo theo", ["〜を伴って引き起こす", "〜を切り離す", "〜を予測する", "〜を隠す"], "〜を伴って引き起こす", "一つの変化が別の結果を連鎖的に生むときに使います。"),
        bc("b2g2-03", "Sự chậm trễ này bắt nguồn ___ việc thiếu nhân lực.", ["từ", "với", "cho", "bằng"], "từ", "この遅れは人手不足に起因します。", "bắt nguồn từ の組み合わせです。"),
        bi("b2g2-04", "Giá tăng có thể kéo ___ nhiều vấn đề khác.", "theo", "価格上昇はほかの多くの問題を引き起こす可能性があります。", "kéo theo で連鎖的な結果を示します。"),
        bi("b2g2-05", "Thiếu thông tin dẫn ___ quyết định sai.", "đến", "情報不足は誤った決定につながります。", "dẫn đến は「〜につながる」です。"),
        bi("b2g2-06", "Nhờ thay đổi quy trình, thời gian xử lý đã được rút ___.", "ngắn", "工程を変えたおかげで、処理時間が短縮されました。", "rút ngắn は時間や距離を短くする表現です。"),
        bi("b2g2-07", "Vấn đề trở nên nghiêm trọng chủ yếu ___ không được xử lý sớm.", "do", "問題が深刻化したのは、主に早く対処されなかったためです。", "do は原因を簡潔に示します。"),
        tr("b2g2-08", "vi-ja", "Việc thiếu kế hoạch rõ ràng đã dẫn đến nhiều thay đổi không cần thiết.", "明確な計画がなかったため、不必要な変更が数多く生じました。", "đã dẫn đến で実際に生じた結果を述べています。"),
        tr("b2g2-09", "ja-vi", "人口の増加に伴って、住宅需要も高まりました。", "Sự gia tăng dân số kéo theo nhu cầu nhà ở cao hơn.", "kéo theo で変化の連鎖を表します。"),
        tr("b2g2-10", "vi-ja", "chủ yếu bắt nguồn từ sự thiếu chuẩn bị", "主として準備不足に起因する", "chủ yếu で主因であることを示します。", true)
      ]),
      group("b2-3", "GROUP 03", "仕事での正式な説明と調整", [
        mc("b2g3-01", "vi-ja", "tiến hành", ["実施する", "延期する", "中止する", "要約する"], "実施する", "調査・会議・作業などを正式に実施する語です。"),
        mc("b2g3-02", "ja-vi", "要件を満たす", ["đáp ứng yêu cầu", "đặt ra yêu cầu", "thay đổi yêu cầu", "từ chối yêu cầu"], "đáp ứng yêu cầu", "đáp ứng は必要や条件を満たすことです。"),
        bc("b2g3-03", "Chúng tôi sẽ tiến ___ đánh giá vào tuần tới.", ["hành", "bộ", "trình", "động"], "hành", "来週、評価を実施します。", "tiến hành + 活動名の形です。"),
        bi("b2g3-04", "Kế hoạch mới chưa đáp ___ đầy đủ các yêu cầu.", "ứng", "新しい計画はまだすべての要件を満たしていません。", "đáp ứng yêu cầu の組み合わせです。"),
        bi("b2g3-05", "Dự án sẽ được triển ___ theo ba giai đoạn.", "khai", "プロジェクトは3段階で展開されます。", "triển khai は計画を実行に移す語です。"),
        bi("b2g3-06", "Chúng ta cần cân ___ cả chi phí lẫn thời gian.", "nhắc", "費用と時間の両方を考慮する必要があります。", "cân nhắc は慎重に検討することです。"),
        bi("b2g3-07", "Hai bên đã thống nhất ___ thời hạn mới.", "về", "双方は新しい期限について合意しました。", "thống nhất về ... で合意内容を示します。"),
        tr("b2g3-08", "vi-ja", "Sau khi cân nhắc các phương án, chúng tôi quyết định điều chỉnh tiến độ.", "各案を検討した後、私たちは日程を調整することに決めました。", "cân nhắc、quyết định、điều chỉnh の流れを確認します。"),
        tr("b2g3-09", "ja-vi", "この案が要件を満たすかどうか、改めて評価する必要があります。", "Cần đánh giá lại xem phương án này có đáp ứng yêu cầu hay không.", "xem ... có ... hay không で間接疑問を作ります。"),
        tr("b2g3-10", "vi-ja", "được triển khai theo từng giai đoạn", "段階ごとに実施される", "受け身と theo を組み合わせています。", true)
      ]),
      group("b2-4", "GROUP 04", "社会・情報・メディアを論じる", [
        mc("b2g4-01", "vi-ja", "độ tin cậy", ["信頼性", "知名度", "利用率", "影響力"], "信頼性", "情報がどの程度信頼できるかを表す名詞です。"),
        mc("b2g4-02", "vi-ja", "tiếp cận thông tin", ["情報にアクセスする", "情報を削除する", "情報を隠す", "情報を翻訳する"], "情報にアクセスする", "tiếp cận は情報や機会に近づき利用することです。"),
        bc("b2g4-03", "Tin giả có thể lan ___ rất nhanh trên mạng xã hội.", ["truyền", "đổi", "giảm", "chọn"], "truyền", "偽情報はSNS上で非常に速く拡散することがあります。", "lan truyền は情報などが広がることです。"),
        bi("b2g4-04", "Người đọc cần kiểm tra độ tin ___ của nguồn tin.", "cậy", "読者は情報源の信頼性を確認する必要があります。", "độ tin cậy は「信頼性」です。"),
        bi("b2g4-05", "Internet giúp nhiều người tiếp ___ kiến thức dễ dàng hơn.", "cận", "インターネットによって、多くの人が知識にアクセスしやすくなりました。", "tiếp cận + 対象の形です。"),
        bi("b2g4-06", "Ý kiến trên mạng không phải lúc nào cũng đại ___ cho dư luận.", "diện", "ネット上の意見が常に世論を代表するとは限りません。", "đại diện cho は「〜を代表する」です。"),
        bi("b2g4-07", "Cần phân biệt sự thật ___ ý kiến cá nhân.", "với", "事実と個人の意見を区別する必要があります。", "phân biệt A với B の形です。"),
        tr("b2g4-08", "vi-ja", "Khả năng tiếp cận thông tin tăng lên, nhưng việc đánh giá nguồn tin cũng trở nên quan trọng hơn.", "情報にアクセスしやすくなりましたが、情報源を評価することもより重要になりました。", "利点と新しい課題を対比しています。"),
        tr("b2g4-09", "ja-vi", "広く共有されている情報でも、信頼できるとは限りません。", "Ngay cả thông tin được chia sẻ rộng rãi cũng chưa chắc đáng tin cậy.", "ngay cả ... cũng ... と chưa chắc を使います。"),
        tr("b2g4-10", "vi-ja", "phân biệt sự thật với ý kiến cá nhân", "事実と個人の意見を区別する", "二つの情報の性質を分ける表現です。", true)
      ]),
      group("b2-5", "GROUP 05", "人間関係と感情を詳しく表す", [
        mc("b2g5-01", "vi-ja", "đặt mình vào vị trí của người khác", ["相手の立場に立つ", "相手を避ける", "相手を説得する", "相手と競争する"], "相手の立場に立つ", "相手の視点から考える表現です。"),
        mc("b2g5-02", "vi-ja", "thẳng thắn", ["率直な", "消極的な", "曖昧な", "無関心な"], "率直な", "考えや気持ちを遠回しにせず伝える様子です。"),
        bc("b2g5-03", "Hãy thử đặt mình vào vị ___ của cô ấy.", ["trí", "điểm", "phần", "mặt"], "trí", "彼女の立場に立って考えてみてください。", "vị trí はここでは立場を意味します。"),
        bi("b2g5-04", "Anh ấy luôn cư xử khéo ___ để không làm ai mất mặt.", "léo", "彼は誰の面目も失わせないよう、いつも上手に振る舞います。", "khéo léo は人との接し方が巧みな様子です。"),
        bi("b2g5-05", "Chúng ta nên trao đổi thẳng ___ nhưng vẫn tôn trọng nhau.", "thắn", "率直に話し合うべきですが、互いの尊重は保つべきです。", "thẳng thắn と tôn trọng の両立を表します。"),
        bi("b2g5-06", "Sự hiểu lầm đã được giải ___ sau cuộc nói chuyện.", "tỏa", "話し合いの後、誤解が解けました。", "giải tỏa は不安や誤解などを和らげる語です。"),
        bi("b2g5-07", "Tôi rất ấn tượng ___ cách cô ấy xử lý tình huống.", "với", "彼女の状況への対処の仕方にとても感心しました。", "ấn tượng với ... の形です。"),
        tr("b2g5-08", "vi-ja", "Nếu biết lắng nghe và đặt mình vào vị trí của nhau, nhiều mâu thuẫn có thể được giải quyết.", "互いに耳を傾け、相手の立場に立てば、多くの対立は解決できます。", "条件と可能な結果を述べています。"),
        tr("b2g5-09", "ja-vi", "率直に意見を述べることと、相手を傷つけることは違います。", "Bày tỏ ý kiến một cách thẳng thắn khác với làm tổn thương người khác.", "khác với で二つを区別します。"),
        tr("b2g5-10", "vi-ja", "cư xử khéo léo để giữ thể diện cho nhau", "互いの面目を保つよう上手に振る舞う", "để で行動の目的を示しています。", true)
      ]),
      group("b2-6", "GROUP 06", "数値・傾向・比較を説明する", [
        mc("b2g6-01", "vi-ja", "chiếm", ["〜を占める", "〜を超える", "〜を減らす", "〜を測る"], "〜を占める", "割合や位置を示すときに使います。"),
        mc("b2g6-02", "vi-ja", "dao động", ["変動する", "安定する", "急減する", "一致する"], "変動する", "数値が一定の範囲で上下することです。"),
        bc("b2g6-03", "Nhóm này chiếm ___ 40% tổng số người tham gia.", ["khoảng", "khỏi", "suốt", "riêng"], "khoảng", "このグループは参加者全体のおよそ40％を占めます。", "khoảng は概数を示します。"),
        bi("b2g6-04", "Doanh số có xu ___ tăng vào cuối năm.", "hướng", "売上は年末に増える傾向があります。", "có xu hướng + 動詞の形です。"),
        bi("b2g6-05", "Tỷ lệ này dao ___ từ 15% đến 20%.", "động", "この割合は15％から20％の間で変動します。", "dao động từ A đến B で範囲を示します。"),
        bi("b2g6-06", "Mức tăng năm nay đáng ___ hơn năm ngoái.", "kể", "今年の増加幅は昨年より顕著です。", "đáng kể は無視できない大きさを表します。"),
        bi("b2g6-07", "Số người sử dụng đã tăng gấp ___ trong năm năm.", "đôi", "利用者数は5年間で2倍になりました。", "gấp đôi は「2倍」です。"),
        tr("b2g6-08", "vi-ja", "Mặc dù có dao động nhẹ, xu hướng chung vẫn là tăng đều.", "わずかな変動はあるものの、全体的な傾向は引き続き安定した増加です。", "細かな変化と全体傾向を分けて述べています。"),
        tr("b2g6-09", "ja-vi", "若者は回答者全体の約3分の1を占めています。", "Người trẻ chiếm khoảng một phần ba tổng số người trả lời.", "chiếm khoảng một phần ba で概算の割合を表します。"),
        tr("b2g6-10", "vi-ja", "tăng đáng kể so với cùng kỳ năm trước", "前年同期と比べて大幅に増加する", "so với cùng kỳ で同じ期間同士を比較します。", true)
      ]),
      group("b2-7", "GROUP 07", "交渉・合意・問題解決", [
        mc("b2g7-01", "vi-ja", "đi đến thống nhất", ["合意に達する", "議論を避ける", "契約を破る", "結論を疑う"], "合意に達する", "話し合いを経て同じ結論になる表現です。"),
        mc("b2g7-02", "vi-ja", "nhượng bộ", ["譲歩する", "反対する", "要求する", "延期する"], "譲歩する", "合意のために自分の条件を一部緩めることです。"),
        bc("b2g7-03", "Sau nhiều lần thảo luận, hai bên đã đi đến thống ___.", ["nhất", "kê", "qua", "báo"], "nhất", "何度も話し合った後、双方は合意に達しました。", "đi đến thống nhất は決まった表現です。"),
        bi("b2g7-04", "Mỗi bên cần nhượng ___ một chút để tìm tiếng nói chung.", "bộ", "共通の理解を得るには、双方が少しずつ譲歩する必要があります。", "nhượng bộ は交渉で譲ることです。"),
        bi("b2g7-05", "Chúng ta nên ưu ___ những vấn đề cấp bách trước.", "tiên", "まず緊急の問題を優先すべきです。", "ưu tiên は優先順位を上げることです。"),
        bi("b2g7-06", "Giải pháp này giúp dung ___ lợi ích của cả hai bên.", "hòa", "この解決策は双方の利益を両立させます。", "dung hòa は異なるものを調和させる語です。"),
        bi("b2g7-07", "Cuộc họp chưa đạt được kết quả như mong ___.", "đợi", "会議は期待した結果にまだ達していません。", "như mong đợi は「期待どおりに」です。"),
        tr("b2g7-08", "vi-ja", "Muốn đạt được thỏa thuận, hai bên đều phải sẵn sàng điều chỉnh yêu cầu.", "合意に達するには、双方が要求を調整する用意をしなければなりません。", "muốn ... と phải ... で必要条件を述べます。"),
        tr("b2g7-09", "ja-vi", "目先の利益より、長期的な協力を優先するべきです。", "Nên ưu tiên sự hợp tác lâu dài hơn lợi ích trước mắt.", "ưu tiên A hơn B で優先関係を示します。"),
        tr("b2g7-10", "vi-ja", "tìm một giải pháp có thể chấp nhận được", "受け入れ可能な解決策を見つける", "có thể chấp nhận được は妥協案の評価に使えます。", true)
      ]),
      group("b2-8", "GROUP 08", "B2総合練習", [
        mc("b2g8-01", "vi-ja", "xét trên nhiều phương diện", ["多面的に考えると", "短期的に見ると", "個人的に言えば", "例外を除けば"], "多面的に考えると", "一つの観点だけで判断しないことを示します。"),
        mc("b2g8-02", "ja-vi", "共通認識を得る", ["tìm được tiếng nói chung", "đưa ra bằng chứng", "thay đổi dư luận", "giữ nguyên quan điểm"], "tìm được tiếng nói chung", "意見の異なる人々が共通点を見つける表現です。"),
        bc("b2g8-03", "Xét trên nhiều phương ___, phương án này vẫn khả thi.", ["diện", "tiện", "hướng", "cách"], "diện", "多面的に検討しても、この案は実行可能です。", "phương diện は観点・側面です。"),
        bi("b2g8-04", "Kết quả khảo sát phần nào phản ___ nhu cầu thực tế.", "ánh", "調査結果は実際の需要をある程度反映しています。", "phần nào で程度を限定しています。"),
        bi("b2g8-05", "Không thể đưa ra kết luận nếu thiếu bằng chứng thuyết ___.", "phục", "説得力のある証拠がなければ結論は出せません。", "bằng chứng thuyết phục は説得力のある証拠です。"),
        bi("b2g8-06", "Các bên cần trao đổi để tìm được tiếng nói ___.", "chung", "関係者は共通認識を得るために話し合う必要があります。", "tiếng nói chung は共通の立場・理解です。"),
        bi("b2g8-07", "Giải pháp lâu dài phải vừa hiệu quả ___ vừa bền vững.", "vừa", "長期的な解決策は、効果的で持続可能でなければなりません。", "vừa A vừa B で二つの条件を並べます。"),
        tr("b2g8-08", "vi-ja", "Dù chưa giải quyết được toàn bộ vấn đề, biện pháp mới đã tạo ra những thay đổi đáng kể.", "すべての問題を解決したわけではありませんが、新しい施策は大きな変化をもたらしました。", "譲歩と成果を一文でまとめています。"),
        tr("b2g8-09", "ja-vi", "長期的な影響を考慮したうえで、実行可能な案を選ぶ必要があります。", "Cần lựa chọn phương án khả thi sau khi cân nhắc ảnh hưởng lâu dài.", "cân nhắc と khả thi を使った総合表現です。"),
        tr("b2g8-10", "vi-ja", "không chỉ đáp ứng nhu cầu trước mắt mà còn tạo nền tảng cho tương lai", "目先の需要を満たすだけでなく、将来の基盤も築く", "không chỉ ... mà còn ... で二つの価値を示します。", true)
      ])
    ]
  };

  const b2Plus = {
    id: "b2-plus", label: "B2+", name: "上級", description: "精密な判断・論証・正式表現", requires: "b2-8",
    groups: [
      group("b2-plus-1", "GROUP 01", "推測と話し手の立場を精密に示す", [
        mc("b2p1-01", "vi-ja", "dường như", ["〜のように見える", "〜に違いない", "〜であっても", "〜の代わりに"], "〜のように見える", "観察に基づく控えめな推測です。"),
        mc("b2p1-02", "vi-ja", "e rằng", ["残念ながら〜ではないかと思う", "確実に〜だ", "喜んで〜する", "〜のふりをする"], "残念ながら〜ではないかと思う", "好ましくない可能性を丁寧に示します。"),
        bc("b2p1-03", "Theo tôi được ___, kế hoạch vẫn chưa được phê duyệt.", ["biết", "thấy", "nghe", "nhớ"], "biết", "私の知る限り、その計画はまだ承認されていません。", "theo tôi được biết は情報範囲を限定します。"),
        bi("b2p1-04", "Dường ___ hai bên vẫn chưa hiểu rõ quan điểm của nhau.", "như", "双方はまだ互いの見解を十分理解していないようです。", "dường như は断定を避けた観察です。"),
        bi("b2p1-05", "Tôi e ___ thời gian còn lại không đủ.", "rằng", "残り時間では足りないのではないかと心配しています。", "e rằng は懸念を丁寧に述べます。"),
        bi("b2p1-06", "Có khả ___ kết quả sẽ thay đổi sau khi cập nhật dữ liệu.", "năng", "データ更新後に結果が変わる可能性があります。", "có khả năng は客観的な可能性を示します。"),
        bi("b2p1-07", "Nhận định này có vẻ chưa thật sự thuyết ___.", "phục", "この見解は十分に説得力があるとは思えません。", "có vẻ と chưa thật sự で評価を和らげています。"),
        tr("b2p1-08", "vi-ja", "Theo tôi được biết, chưa có bằng chứng nào đủ để khẳng định điều đó.", "私の知る限り、それを断定するのに十分な証拠はまだありません。", "情報範囲を限定してから判断を述べています。"),
        tr("b2p1-09", "ja-vi", "状況を見る限り、予定を変更する必要がありそうです。", "Xét tình hình hiện tại, dường như cần phải thay đổi kế hoạch.", "xét ... と dường như で慎重な判断を作ります。"),
        tr("b2p1-10", "vi-ja", "khó có thể khẳng định một cách chắc chắn", "確実に断定することは難しい", "khó có thể で可能性の低さを示します。", true)
      ]),
      group("b2-plus-2", "GROUP 02", "譲歩・転換・結論を組み立てる", [
        mc("b2p2-01", "vi-ja", "dù vậy", ["それでも", "したがって", "たとえば", "一方では"], "それでも", "前の内容を認めつつ逆方向の内容を続けます。"),
        mc("b2p2-02", "vi-ja", "xét cho cùng", ["結局のところ", "それに加えて", "念のため", "言い換えれば"], "結局のところ", "検討を重ねた後の本質的な結論を示します。"),
        bc("b2p2-03", "Phương án này còn hạn chế; ___ vậy, nó vẫn đáng được thử nghiệm.", ["dù", "do", "vì", "nếu"], "dù", "この案には限界があります。それでも試す価値はあります。", "dù vậy は独立した接続表現です。"),
        bi("b2p2-04", "Xét cho ___, con người vẫn là yếu tố quyết định.", "cùng", "結局のところ、決定的な要素はやはり人です。", "xét cho cùng で本質的な結論を導きます。"),
        bi("b2p2-05", "Tuy có tiến bộ, ___ kết quả vẫn chưa đạt mục tiêu.", "song", "進歩はあったものの、結果はまだ目標に達していません。", "tuy ... song ... はやや書き言葉的な譲歩です。"),
        bi("b2p2-06", "Một mặt cần tiết kiệm; mặt ___ phải bảo đảm chất lượng.", "khác", "一方で節約が必要ですが、他方で品質を保証しなければなりません。", "một mặt ... mặt khác ... で二面を示します。"),
        bi("b2p2-07", "Nói cách ___, chúng ta cần thay đổi cách tiếp cận.", "khác", "言い換えれば、取り組み方を変える必要があります。", "nói cách khác は言い換えの標識です。"),
        tr("b2p2-08", "vi-ja", "Tuy giải pháp này không hoàn hảo, song trong hoàn cảnh hiện nay, nó vẫn là lựa chọn hợp lý nhất.", "この解決策は完璧ではありませんが、現在の状況では最も合理的な選択です。", "譲歩の後に条件付き評価を述べています。"),
        tr("b2p2-09", "ja-vi", "一方では効率が上がりますが、他方では新たな負担も生じます。", "Một mặt hiệu quả được nâng cao, mặt khác cũng phát sinh thêm gánh nặng.", "một mặt ... mặt khác ... で対照的な影響を示します。"),
        tr("b2p2-10", "vi-ja", "xét cho cùng, điều quan trọng nhất vẫn là tính bền vững", "結局のところ、最も重要なのは依然として持続可能性である", "議論の最終的な重点を示します。", true)
      ]),
      group("b2-plus-3", "GROUP 03", "通知・依頼・報告を正式に書く", [
        mc("b2p3-01", "vi-ja", "căn cứ vào", ["〜に基づいて", "〜に反して", "〜に加えて", "〜を除いて"], "〜に基づいて", "規則・資料・事実を根拠として示す正式表現です。"),
        mc("b2p3-02", "vi-ja", "xin lưu ý rằng", ["〜にご留意ください", "〜をお詫びします", "〜を保証します", "〜をご提出ください"], "〜にご留意ください", "通知文で注意点を丁寧に示します。"),
        bc("b2p3-03", "Căn cứ ___ kết quả đánh giá, thời hạn sẽ được điều chỉnh.", ["vào", "ra", "qua", "đến"], "vào", "評価結果に基づき、期限を調整します。", "căn cứ vào + 根拠の形です。"),
        bi("b2p3-04", "Xin lưu ___ rằng lịch làm việc có thể thay đổi.", "ý", "勤務予定は変更される場合があることにご留意ください。", "xin lưu ý rằng は正式な注意喚起です。"),
        bi("b2p3-05", "Đề nghị các bộ phận liên ___ gửi báo cáo đúng hạn.", "quan", "関係部署は期限どおりに報告書を提出してください。", "các bộ phận liên quan は関係部署です。"),
        bi("b2p3-06", "Mọi thắc mắc xin vui lòng liên ___ với ban tổ chức.", "hệ", "ご不明点は主催者までお問い合わせください。", "liên hệ với は連絡先を示します。"),
        bi("b2p3-07", "Báo cáo này được lập nhằm cung cấp thông tin tổng ___.", "quan", "本報告書は概要情報を提供する目的で作成されました。", "nhằm は正式な目的表現です。"),
        tr("b2p3-08", "vi-ja", "Căn cứ vào tình hình thực tế, chúng tôi đề nghị kéo dài thời gian thực hiện thêm hai tuần.", "実際の状況に基づき、実施期間をさらに2週間延長することを提案します。", "根拠を先に示す正式な提案文です。"),
        tr("b2p3-09", "ja-vi", "必要書類は9月30日までに提出してください。", "Đề nghị nộp các tài liệu cần thiết chậm nhất vào ngày 30 tháng 9.", "chậm nhất vào ngày ... で締切日を明確に示します。"),
        tr("b2p3-10", "vi-ja", "các cá nhân và đơn vị có liên quan", "関係する個人および組織", "公的・業務的な文章で関係者を表します。", true)
      ]),
      group("b2-plus-4", "GROUP 04", "根拠を評価し、議論を検証する", [
        mc("b2p4-01", "vi-ja", "thiếu căn cứ", ["根拠に欠ける", "例外が多い", "説明が長い", "条件を満たす"], "根拠に欠ける", "主張を支える証拠が不足している評価です。"),
        mc("b2p4-02", "vi-ja", "kiểm chứng", ["検証する", "推測する", "要約する", "公表する"], "検証する", "情報や主張が正しいか確かめる語です。"),
        bc("b2p4-03", "Lập luận này chưa thuyết phục vì thiếu bằng ___ cụ thể.", ["chứng", "cấp", "cách", "pháp"], "chứng", "この議論は具体的な証拠がなく、まだ説得力に欠けます。", "bằng chứng は証拠です。"),
        bi("b2p4-04", "Thông tin cần được kiểm ___ trước khi công bố.", "chứng", "情報は公表前に検証される必要があります。", "được kiểm chứng は受け身の検証です。"),
        bi("b2p4-05", "Đánh giá khách quan phải dựa ___ nhiều nguồn dữ liệu.", "trên", "客観的な評価は複数のデータ源に基づく必要があります。", "dựa trên は根拠を示します。"),
        bi("b2p4-06", "Ví dụ này không đủ để chứng ___ cho kết luận chung.", "minh", "この例だけでは一般的な結論を証明するのに不十分です。", "chứng minh cho は主張を証明する表現です。"),
        bi("b2p4-07", "Cần phân tích cả những dữ liệu trái ___ giả thuyết ban đầu.", "với", "当初の仮説に反するデータも分析する必要があります。", "trái với は反対・矛盾を示します。"),
        tr("b2p4-08", "vi-ja", "Một vài trường hợp riêng lẻ không đủ để chứng minh rằng xu hướng này đúng trong mọi hoàn cảnh.", "少数の個別事例だけでは、この傾向があらゆる状況で正しいとは証明できません。", "個別例と一般化の区別を確認します。"),
        tr("b2p4-09", "ja-vi", "結論を受け入れる前に、データの出所と調査方法を検証すべきです。", "Trước khi chấp nhận kết luận, nên kiểm chứng nguồn dữ liệu và phương pháp khảo sát.", "trước khi と nên で検証手順を提案します。"),
        tr("b2p4-10", "vi-ja", "một nhận định còn thiếu căn cứ thuyết phục", "説得力のある根拠を欠いた見解", "nhận định と căn cứ は論証でよく使います。", true)
      ]),
      group("b2-plus-5", "GROUP 05", "文化・多様性・社会変化", [
        mc("b2p5-01", "vi-ja", "bản sắc", ["アイデンティティー・独自性", "社会的地位", "生活水準", "共通規則"], "アイデンティティー・独自性", "文化や集団の固有性を表します。"),
        mc("b2p5-02", "vi-ja", "định kiến", ["偏見・固定観念", "伝統行事", "社会保障", "多数意見"], "偏見・固定観念", "十分な理解なしに作られた先入観です。"),
        bc("b2p5-03", "Hội nhập không có nghĩa là đánh mất bản ___.", ["sắc", "chất", "thân", "quyền"], "sắc", "社会に溶け込むことは、自らの独自性を失うことではありません。", "bản sắc は文化的な独自性です。"),
        bi("b2p5-04", "Cần loại bỏ định ___ đối với những nhóm thiểu số.", "kiến", "少数派への偏見をなくす必要があります。", "định kiến đối với ... の形です。"),
        bi("b2p5-05", "Sự đa ___ văn hóa làm cho xã hội phong phú hơn.", "dạng", "文化的多様性は社会をより豊かにします。", "đa dạng văn hóa は文化の多様性です。"),
        bi("b2p5-06", "Người nhập cư cần thời gian để hòa ___ với cộng đồng mới.", "nhập", "移住者には新しい地域社会に溶け込む時間が必要です。", "hòa nhập với は共同体への適応です。"),
        bi("b2p5-07", "Truyền thống có thể được duy trì đồng ___ với sự đổi mới.", "thời", "伝統は革新と同時に維持することができます。", "đồng thời với は両立・同時性を表します。"),
        tr("b2p5-08", "vi-ja", "Tôn trọng sự khác biệt không chỉ giúp giảm định kiến mà còn tạo điều kiện cho đối thoại.", "違いを尊重することは、偏見を減らすだけでなく対話の条件も整えます。", "社会的効果を二つ並べています。"),
        tr("b2p5-09", "ja-vi", "社会に溶け込みながら、自分の文化的アイデンティティーを保つことは可能です。", "Có thể hòa nhập vào xã hội mà vẫn giữ được bản sắc văn hóa của mình.", "mà vẫn で両立を表します。"),
        tr("b2p5-10", "vi-ja", "nhìn nhận sự đa dạng như một nguồn lực", "多様性を一つの資源として捉える", "nhìn nhận A như B で見方を示します。", true)
      ]),
      group("b2-plus-6", "GROUP 06", "慣用表現を文脈で理解する", [
        mc("b2p6-01", "vi-ja", "nước đến chân mới nhảy", ["切羽詰まってから動く", "慎重に準備する", "流れに逆らう", "失敗から学ぶ"], "切羽詰まってから動く", "直前になるまで行動しないことを批判する慣用句です。"),
        mc("b2p6-02", "vi-ja", "một công đôi việc", ["一石二鳥", "二度手間", "役割分担", "試行錯誤"], "一石二鳥", "一つの行動で二つの目的を達成する表現です。"),
        bc("b2p6-03", "Đừng để nước đến chân mới ___.", ["nhảy", "chạy", "bơi", "đi"], "nhảy", "切羽詰まってから慌てないでください。", "慣用句は nước đến chân mới nhảy です。"),
        bi("b2p6-04", "Đi xe đạp vừa tập thể dục vừa đi làm, đúng là một công đôi ___.", "việc", "自転車なら運動と通勤が同時にでき、まさに一石二鳥です。", "một công đôi việc の形を確認します。"),
        bi("b2p6-05", "Có công mài sắt, có ngày nên ___.", "kim", "根気よく努力すれば、いつか成果が出ます。", "努力の継続を表すことわざです。"),
        bi("b2p6-06", "Anh ấy hay đứng núi này trông núi ___.", "nọ", "彼はいつも他人の状況のほうがよく見えてしまいます。", "今あるものに満足せず他を羨む慣用句です。"),
        bi("b2p6-07", "Dù bận đến đâu, cô ấy vẫn giữ lời đã ___.", "hứa", "どんなに忙しくても、彼女は約束を守ります。", "giữ lời đã hứa は約束を守ることです。"),
        tr("b2p6-08", "vi-ja", "Nếu cứ nước đến chân mới nhảy thì khó có thể bảo đảm chất lượng công việc.", "いつも直前になってから動くようでは、仕事の質を保証するのは難しいです。", "慣用句を条件文の中で使っています。"),
        tr("b2p6-09", "ja-vi", "この方法なら費用を節約でき、時間も短縮できるので一石二鳥です。", "Cách này vừa tiết kiệm chi phí vừa rút ngắn thời gian, đúng là một công đôi việc.", "vừa ... vừa ... と慣用句を組み合わせます。"),
        tr("b2p6-10", "vi-ja", "có công mài sắt, có ngày nên kim", "根気よく努力すれば、いつか成し遂げられる", "文字どおりの意味より継続努力の教訓を捉えます。", true)
      ]),
      group("b2-plus-7", "GROUP 07", "複数の観点を統合し、批評する", [
        mc("b2p7-01", "vi-ja", "khía cạnh", ["側面・観点", "原因・起源", "範囲・限界", "目的・意図"], "側面・観点", "対象を構成する一つの面を表します。"),
        mc("b2p7-02", "vi-ja", "làm sáng tỏ", ["明らかにする", "複雑にする", "簡略化する", "隠蔽する"], "明らかにする", "不明点を説明や証拠によって明確にします。"),
        bc("b2p7-03", "Vấn đề cần được nhìn nhận từ nhiều khía ___.", ["cạnh", "hướng", "diện", "phần"], "cạnh", "問題は複数の側面から捉える必要があります。", "khía cạnh は側面・観点です。"),
        bi("b2p7-04", "Nghiên cứu này đã làm sáng ___ mối liên hệ giữa hai yếu tố.", "tỏ", "この研究は二つの要因の関係を明らかにしました。", "làm sáng tỏ は明確化を示します。"),
        bi("b2p7-05", "Bên cạnh ưu điểm, phương pháp này cũng bộc ___ một số hạn chế.", "lộ", "利点に加え、この方法はいくつかの限界も露呈しました。", "bộc lộ は内在する性質が現れることです。"),
        bi("b2p7-06", "Cần đặt kết quả này trong bối ___ rộng hơn.", "cảnh", "この結果をより広い文脈に置く必要があります。", "đặt ... trong bối cảnh ... で解釈範囲を示します。"),
        bi("b2p7-07", "Tác giả chưa đề ___ đầy đủ đến ảnh hưởng lâu dài.", "cập", "筆者は長期的影響を十分に取り上げていません。", "đề cập đến は話題として取り上げることです。"),
        tr("b2p7-08", "vi-ja", "Nghiên cứu đã cung cấp nhiều thông tin hữu ích, tuy nhiên vẫn chưa làm sáng tỏ nguyên nhân cốt lõi.", "この研究は多くの有用な情報を提供しましたが、根本原因はまだ明らかにしていません。", "成果を認めたうえで限界を指摘しています。"),
        tr("b2p7-09", "ja-vi", "この主張を評価するには、より広い社会的背景を考慮する必要があります。", "Để đánh giá nhận định này, cần xem xét bối cảnh xã hội rộng hơn.", "để と cần で評価に必要な条件を述べます。"),
        tr("b2p7-10", "vi-ja", "nhìn nhận vấn đề từ góc độ của những người chịu ảnh hưởng", "影響を受ける人々の視点から問題を捉える", "góc độ của ... で視点の主体を示します。", true)
      ]),
      group("b2-plus-8", "GROUP 08", "B2＋総合練習", [
        mc("b2p8-01", "vi-ja", "về bản chất", ["本質的には", "表面的には", "具体的には", "結果として"], "本質的には", "細部ではなく中心的な性質を述べます。"),
        mc("b2p8-02", "ja-vi", "慎重に検討する価値がある", ["đáng được cân nhắc kỹ", "khó có thể chấp nhận", "không cần kiểm chứng", "nên được loại bỏ"], "đáng được cân nhắc kỹ", "đáng được + 動詞で評価を示します。"),
        bc("b2p8-03", "Về bản ___, đây không chỉ là vấn đề kỹ thuật.", ["chất", "sắc", "thân", "lĩnh"], "chất", "本質的には、これは単なる技術的問題ではありません。", "về bản chất は本質を示す定型表現です。"),
        bi("b2p8-04", "Mọi chính sách đều cần được đánh giá dựa trên tác động thực ___.", "tế", "あらゆる政策は実際の影響に基づいて評価される必要があります。", "tác động thực tế は現実に生じる影響です。"),
        bi("b2p8-05", "Giải pháp trước mắt không nên làm ảnh hưởng ___ mục tiêu lâu dài.", "đến", "当面の解決策が長期目標に影響してはいけません。", "ảnh hưởng đến + 対象の形です。"),
        bi("b2p8-06", "Đề xuất này đáng được cân ___ kỹ trước khi bác bỏ.", "nhắc", "この提案は退ける前に慎重に検討する価値があります。", "đáng được cân nhắc は検討価値を示します。"),
        bi("b2p8-07", "Một quyết định hợp lý phải tính đến cả lợi ích lẫn rủi ___.", "ro", "合理的な決定では利益とリスクの両方を考慮すべきです。", "tính đến は判断材料に含めることです。"),
        tr("b2p8-08", "vi-ja", "Về bản chất, phát triển bền vững đòi hỏi phải cân bằng lợi ích kinh tế, xã hội và môi trường.", "本質的に、持続可能な発展には経済・社会・環境の利益の均衡が必要です。", "抽象的な定義を三つの要素で説明しています。"),
        tr("b2p8-09", "ja-vi", "十分な根拠がない以上、この結果だけで政策の有効性を断定することはできません。", "Khi chưa có đủ căn cứ, không thể chỉ dựa vào kết quả này để khẳng định hiệu quả của chính sách.", "根拠不足と断定不可の関係を示します。"),
        tr("b2p8-10", "vi-ja", "một cách tiếp cận toàn diện, có tính đến cả lợi ích trước mắt lẫn ảnh hưởng lâu dài", "目先の利益と長期的影響の両方を考慮した包括的な取り組み方", "toàn diện と cả ... lẫn ... を組み合わせた総合表現です。", true)
      ])
    ]
  };

  levels.push(b2, b2Plus);
})();

// 発音入門。北部標準発音を基本に、音声に依存せずIPAと調音の説明で学びます。
(() => {
  const bank = window.defaultQuestionBank;
  const q = (id, prompt, choices, answer, explanation) => ({
    id, type: "pronunciation-choice", prompt, choices, answers: [answer], explanation
  });
  const g = (id, title, description, questions) => ({ id, title, description, questions });
  const pronunciation = {
    id: "pronunciation", label: "Aa", name: "発音入門", description: "文字・母音・子音・声調",
    groups: [
      g("pronunciation-1", "GROUP 01", "基本母音の読み方", [
        q("pr1-01", "a", ["/aː/・口を大きく開く長めのア", "/ə/・弱いア", "/i/・イ", "/u/・唇を丸めるウ"], "/aː/・口を大きく開く長めのア", "北部標準発音の a は、口を開いて長めに出す母音です。"),
        q("pr1-02", "i", ["/i/・日本語のイに近い", "/e/・狭いエ", "/ɯ/・唇を丸めないウ", "/ɔ/・広いオ"], "/i/・日本語のイに近い", "i は舌を前方の高い位置に置きます。"),
        q("pr1-03", "y", ["/i/・基本的に i と同じ音", "/j/・必ずヤ行になる", "/ɯ/・唇を丸めないウ", "/ə/・弱いア"], "/i/・基本的に i と同じ音", "母音としての y は基本的に i と同じ /i/ です。"),
        q("pr1-04", "u", ["/u/・唇を丸めるウ", "/ɯ/・唇を丸めないウ", "/o/・狭いオ", "/aː/・長めのア"], "/u/・唇を丸めるウ", "u は唇を丸め、舌を後ろの高い位置に置きます。"),
        q("pr1-05", "e", ["/ɛ/・口をやや広く開くエ", "/e/・狭いエ", "/ə/・弱いア", "/ɔ/・広いオ"], "/ɛ/・口をやや広く開くエ", "e と ê は別の母音です。e のほうが口の開きが広くなります。"),
        q("pr1-06", "ê", ["/e/・口の開きが狭いエ", "/ɛ/・広いエ", "/i/・イ", "/ɤ/・オとアの間"], "/e/・口の開きが狭いエ", "ê は e より舌の位置が高い、狭いエです。"),
        q("pr1-07", "o", ["/ɔ/・口を広めに開くオ", "/o/・狭いオ", "/u/・ウ", "/ɤ/・唇を丸めないオ寄りの音"], "/ɔ/・口を広めに開くオ", "o と ô は別の母音です。o のほうが口の開きが広い音です。"),
        q("pr1-08", "ô", ["/o/・唇を丸める狭いオ", "/ɔ/・広いオ", "/u/・ウ", "/ə/・弱いア"], "/o/・唇を丸める狭いオ", "ô は o より舌の位置が高い、狭いオです。"),
        q("pr1-09", "me", ["m + /ɛ/・メに近いが e は広い", "m + /e/・必ず狭いエ", "m + /i/・ミ", "m + /u/・ム"], "m + /ɛ/・メに近いが e は広い", "me の e は /ɛ/ です。声調記号がないので ngang で読みます。"),
        q("pr1-10", "mê", ["m + /e/・メに近いが ê は狭い", "m + /ɛ/・広いエ", "m + /aː/・マ", "m + /ɔ/・モ"], "m + /e/・メに近いが ê は狭い", "mê の ê は狭い /e/ です。e と聞き分けます。")
      ]),
      g("pronunciation-2", "GROUP 02", "ベトナム語特有の母音", [
        q("pr2-01", "ă", ["/a/・a より短いア", "/aː/・長めのア", "/ə/・弱いア", "/ɤ/・オとアの間"], "/a/・a より短いア", "ă は a と音質が近く、長さが短い母音です。"),
        q("pr2-02", "â", ["/ə/・力を抜いた短いア", "/a/・短い明瞭なア", "/ɯ/・唇を丸めないウ", "/e/・狭いエ"], "/ə/・力を抜いた短いア", "â は英語 about の最初のような、中央寄りの弱い母音です。"),
        q("pr2-03", "ơ", ["/ɤ/・唇を丸めないオとアの間", "/o/・唇を丸めるオ", "/ə/・短い弱いア", "/ɯ/・唇を丸めないウ"], "/ɤ/・唇を丸めないオとアの間", "ơ は唇を丸めず、舌を後ろ寄りの中段に置きます。"),
        q("pr2-04", "ư", ["/ɯ/・唇を丸めないウ", "/u/・唇を丸めるウ", "/i/・イ", "/ɤ/・オとアの間"], "/ɯ/・唇を丸めないウ", "ư は日本語のウより唇をさらに丸めず、舌を後ろ寄りに置きます。"),
        q("pr2-05", "a / ă", ["a は長め /aː/、ă は短め /a/", "どちらも完全に同じ", "a は /ə/、ă は /ɯ/", "a は短く、ă は長い"], "a は長め /aː/、ă は短め /a/", "a と ă の大きな違いは母音の長さです。"),
        q("pr2-06", "â / ơ", ["どちらも中央・後方寄りだが、â は短く ơ は長め", "どちらも唇を強く丸める", "â はイ、ơ はエ", "完全に同じ文字の別表記"], "どちらも中央・後方寄りだが、â は短く ơ は長め", "â /ə/ と ơ /ɤ/ は似て聞こえても、長さと舌の位置が異なります。"),
        q("pr2-07", "u / ư", ["u は唇を丸め、ư は丸めない", "u は丸めず、ư は丸める", "両方ともイ", "違いは声調だけ"], "u は唇を丸め、ư は丸めない", "この唇の形の対立は意味の区別に関わります。"),
        q("pr2-08", "ăn", ["短い ă /a/ のあとに n", "長い a /aː/ のあとに n", "ư /ɯ/ のあとに ng", "ơ /ɤ/ のあとに m"], "短い ă /a/ のあとに n", "ăn は短い母音を保ち、語末 n を鼻に抜きます。"),
        q("pr2-09", "ơn", ["ơ /ɤ/ のあとに n", "o /ɔ/ のあとに ng", "u /u/ のあとに m", "â /ə/ のあとに t"], "ơ /ɤ/ のあとに n", "ơn の ơ は唇を丸めない母音です。"),
        q("pr2-10", "tư", ["t + ư /ɯ/・唇を丸めないウに近い", "t + u /u/・唇を丸める", "t + i /i/", "t + ơ /ɤ/"], "t + ư /ɯ/・唇を丸めないウに近い", "tư の母音は ư です。カタカナの「トゥ」だけでは区別しきれません。")
      ]),
      g("pronunciation-3", "GROUP 03", "母音の組み合わせ", [
        q("pr3-01", "ai", ["a から短いイ方向へ移る", "a からウ方向へ移る", "最初から最後までイ", "二音節のア・イ"], "a から短いイ方向へ移る", "ai は一つの音節内で a から i 側へ滑らかに移ります。"),
        q("pr3-02", "ao", ["a から短いウ方向へ移る", "a からイ方向へ移る", "二音節のア・オ", "最初から最後までオ"], "a から短いウ方向へ移る", "ao の o は語末の半母音として、短いウ方向へ移ります。"),
        q("pr3-03", "ơi", ["ơ から短いイ方向へ移る", "ơ からウ方向へ移る", "オとイを二音節で読む", "ê からアへ移る"], "ơ から短いイ方向へ移る", "ơi は唇を丸めない ơ から i 側へ移ります。"),
        q("pr3-04", "ui", ["u から短いイ方向へ移る", "ư からア方向へ移る", "ウとイを二音節で読む", "o からイ方向へ移る"], "u から短いイ方向へ移る", "ui は唇を丸める u から i 側へ移る一音節です。"),
        q("pr3-05", "ia / iê", ["どちらも /iə/ 系で、つづりは音節構造で変わる", "ia は /a/、iê は /e/", "どちらも二音節", "声調だけが違う"], "どちらも /iə/ 系で、つづりは音節構造で変わる", "語末子音の有無などによって ia と iê を使い分けます。"),
        q("pr3-06", "ua / uô", ["どちらも /uə/ 系で、つづりは音節構造で変わる", "ua は /a/、uô は /o/", "どちらも二音節", "u を発音しない"], "どちらも /uə/ 系で、つづりは音節構造で変わる", "ua と uô は対応する母音の組み合わせです。"),
        q("pr3-07", "ưa / ươ", ["どちらも /ɯə/ 系で、ư から中央へ動く", "u /u/ からオへ動く", "どちらも /iə/", "ơ を発音しない"], "どちらも /ɯə/ 系で、ư から中央へ動く", "ưa と ươ は唇を丸めない ư から始まります。"),
        q("pr3-08", "tiếng", ["iê のまとまりを一音節で読む", "i と ê を別々の二音節で読む", "ê を発音しない", "語末 ng を語頭のグと読む"], "iê のまとまりを一音節で読む", "tiếng は一音節です。iê の後ろを語末 ng で閉じます。"),
        q("pr3-09", "nước", ["ươ を一音節で読み、最後を短い c で閉じる", "ư と ơ を二音節に分ける", "c をクとはっきり解放する", "ơ を発音しない"], "ươ を一音節で読み、最後を短い c で閉じる", "nước は一音節です。語末 c は母音後に息を解放しません。"),
        q("pr3-10", "muốn", ["uô を一音節で読み、最後は n の鼻音", "u と ô を二音節で読む", "語末 n をンヌと読む", "ô を発音しない"], "uô を一音節で読み、最後は n の鼻音", "muốn は uô を滑らかにつなぎ、n で鼻に抜きます。")
      ]),
      g("pronunciation-4", "GROUP 04", "基本的な語頭子音", [
        q("pr4-01", "b", ["/ɓ/・唇を閉じて出す、強く息を伴わない b", "/pʰ/・強い息を伴う p", "/m/・鼻音", "/v/・唇と歯の摩擦音"], "/ɓ/・唇を閉じて出す、強く息を伴わない b", "ベトナム語の b は内破的な性質をもつ有声両唇音です。"),
        q("pr4-02", "đ", ["/ɗ/・舌先で閉鎖して出す有声音", "/z/・摩擦音", "/tʰ/・強い息を伴う音", "/dʒ/・ヂに近い音"], "/ɗ/・舌先で閉鎖して出す有声音", "đ と d は別の子音です。đ は日本語のダ行に比較的近い閉鎖音です。"),
        q("pr4-03", "m", ["/m/・唇を閉じて鼻へ抜く", "/n/・舌先の鼻音", "/ŋ/・舌の奥の鼻音", "/b/・鼻へ抜かない"], "/m/・唇を閉じて鼻へ抜く", "m は日本語のマ行に近い両唇鼻音です。"),
        q("pr4-04", "n", ["/n/・舌先を上歯茎につける鼻音", "/m/・唇の鼻音", "/ŋ/・舌の奥の鼻音", "/l/・側面から息を出す"], "/n/・舌先を上歯茎につける鼻音", "n は舌先を使う鼻音です。"),
        q("pr4-05", "l", ["/l/・舌先をつけ、両側から息を出す", "/n/・鼻へ抜く", "/r/・必ず巻き舌", "/j/・ヤ行"], "/l/・舌先をつけ、両側から息を出す", "l と n は地方によって混同もありますが、標準では区別します。"),
        q("pr4-06", "h", ["/h/・喉から息を出す", "/x/・舌の奥で摩擦させる", "/f/・唇と歯で摩擦させる", "発音しない"], "/h/・喉から息を出す", "h は声門付近で作る摩擦音です。"),
        q("pr4-07", "ph", ["/f/・上の歯と下唇で摩擦させる", "/pʰ/・必ず強い破裂音", "/v/・有声の摩擦音", "/h/・喉の摩擦音"], "/f/・上の歯と下唇で摩擦させる", "現代標準語の ph は /f/ です。二文字で一つの子音を表します。"),
        q("pr4-08", "th", ["/tʰ/・t に強めの息を伴う", "/t/・息をほとんど伴わない", "/θ/・英語 think の th", "/s/・摩擦音"], "/tʰ/・t に強めの息を伴う", "ベトナム語の th は英語の th ではなく、有気の t です。"),
        q("pr4-09", "v", ["/v/・上の歯と下唇を近づける有声摩擦音", "/f/・無声摩擦音", "/w/・唇を丸める接近音", "/b/・唇を閉じる音"], "/v/・上の歯と下唇を近づける有声摩擦音", "北部標準の v は /v/ です。南部では別の実現もあります。"),
        q("pr4-10", "ba / pha", ["ba は b /ɓ/、pha は ph /f/ で始まる", "どちらも /p/ で始まる", "ba は /m/、pha は /h/", "違いは声調だけ"], "ba は b /ɓ/、pha は ph /f/ で始まる", "b は閉鎖、ph は唇と歯の摩擦で作ります。")
      ]),
      g("pronunciation-5", "GROUP 05", "つづりと子音の組み合わせ", [
        q("pr5-01", "c / k / q", ["いずれも基本は /k/ 系で、後続文字によってつづり分ける", "c は /s/、k は /k/、q は /g/", "すべて別の声調", "すべて発音しない"], "いずれも基本は /k/ 系で、後続文字によってつづり分ける", "q は通常 qu の形で現れ、母音的な要素を伴います。"),
        q("pr5-02", "g / gh", ["どちらも基本は /ɣ/ 系で、後続母音によりつづり分ける", "g は /g/、gh は /h/", "gh の h を別に読む", "どちらも /k/"], "どちらも基本は /ɣ/ 系で、後続母音によりつづり分ける", "gh は e・ê・i の前などで使われます。"),
        q("pr5-03", "ng / ngh", ["どちらも /ŋ/・舌の奥で作る鼻音", "ngh は三つの子音を順に読む", "どちらも /n/", "語頭では発音しない"], "どちらも /ŋ/・舌の奥で作る鼻音", "ngh は e・ê・i の前などで使われ、音は ng と同系です。"),
        q("pr5-04", "nh", ["/ɲ/・ニャ行に近いが一つの子音", "/n/ と /h/ を順に読む", "/ŋ/・舌の奥の鼻音", "/j/・ヤ行だけ"], "/ɲ/・ニャ行に近いが一つの子音", "語頭 nh はスペイン語 ñ に似た硬口蓋鼻音です。"),
        q("pr5-05", "kh", ["/x/・舌の奥と軟口蓋で摩擦させる", "/kʰ/・単純な強い k", "/h/・喉だけで出す", "/f/・唇と歯で出す"], "/x/・舌の奥と軟口蓋で摩擦させる", "kh は日本語にない摩擦音で、息を舌の奥ですらせます。"),
        q("pr5-06", "d / gi（北部）", ["多くの場合どちらも /z/ に近い", "d は /d/、gi は /g/", "どちらも /j/ だけが正しい", "どちらも発音しない"], "多くの場合どちらも /z/ に近い", "ハノイを中心とする北部発音では d と gi が同音になるのが一般的です。"),
        q("pr5-07", "r（北部）", ["話者により /z/ に近い音など変化がある", "必ず日本語のラ行と同じ", "必ず英語の r と同じ", "発音しない"], "話者により /z/ に近い音など変化がある", "r は地域差・話者差が大きいため、音声も参考として聞きます。"),
        q("pr5-08", "tr / ch", ["標準的説明では区別するが、北部の一部では近くなる", "必ず完全に同じつづり", "tr は /t/ と /r/ を別々に読む", "ch は /k/ と /h/ を別々に読む"], "標準的説明では区別するが、北部の一部では近くなる", "教科書的な区別と、実際の地域差の両方を意識します。"),
        q("pr5-09", "nghe", ["ngh を一つの /ŋ/ としてから e を読む", "n・g・h を別々に読む", "g を発音しない", "語頭を /n/ だけで読む"], "ngh を一つの /ŋ/ としてから e を読む", "nghe の ngh は一まとまりの語頭子音です。"),
        q("pr5-10", "không", ["kh /x/ で始まり、語末 ng は /ŋ/ の鼻音", "k /k/ と h /h/ を別々に読む", "語末 ng をングとはっきり破裂させる", "h を発音しない"], "kh /x/ で始まり、語末 ng は /ŋ/ の鼻音", "không では語頭と語末で舌の奥を使います。")
      ]),
      g("pronunciation-6", "GROUP 06", "語末子音と音節の終わり", [
        q("pr6-01", "-m", ["唇を閉じて鼻へ抜いて終わる", "ムと母音を足す", "舌先で止める", "舌の奥で止める"], "唇を閉じて鼻へ抜いて終わる", "語末 m の後ろに日本語のウを足しません。"),
        q("pr6-02", "-n", ["舌先を上歯茎につけて鼻へ抜く", "ヌと母音を足す", "唇を閉じる", "舌の奥だけを使う"], "舌先を上歯茎につけて鼻へ抜く", "語末 n は位置を保ったまま鼻音で終えます。"),
        q("pr6-03", "-ng", ["舌の奥を上げて鼻へ抜く /ŋ/", "ングとグを破裂させる", "舌先の /n/ と同じ", "唇を閉じる /m/"], "舌の奥を上げて鼻へ抜く /ŋ/", "日本語の「キング」の最後の鼻音に近く、g を解放しません。"),
        q("pr6-04", "-nh", ["前寄りの母音に続く鼻音で、ニを加えない", "ニャと一音節追加する", "必ず語頭 nh と全く同じ", "発音しない"], "前寄りの母音に続く鼻音で、ニを加えない", "語末 nh は一音節内の終わりで、地域や分析により音価の説明が異なります。"),
        q("pr6-05", "-p", ["唇を閉じ、息を解放せず /p̚/ で止める", "プと母音を足す", "/f/ と摩擦させる", "鼻へ抜く"], "唇を閉じ、息を解放せず /p̚/ で止める", "語末 p は短く閉じるだけで、日本語のプのように母音を足しません。"),
        q("pr6-06", "-t", ["舌先で閉じ、息を解放せず /t̚/ で止める", "トと母音を足す", "強く息を破裂させる", "鼻へ抜く"], "舌先で閉じ、息を解放せず /t̚/ で止める", "語末 t は閉鎖した位置で短く終わります。"),
        q("pr6-07", "-c", ["舌の奥で閉じ、息を解放せず /k̚/ で止める", "クと母音を足す", "/s/ と摩擦させる", "鼻へ抜く"], "舌の奥で閉じ、息を解放せず /k̚/ で止める", "語末 c は英語の k のような位置ですが、息を放出しません。"),
        q("pr6-08", "-ch", ["前寄りの母音に続く、短く閉じる語末音", "チと母音を足す", "c と h を別々に読む", "語頭 ch と常に同じように破裂させる"], "前寄りの母音に続く、短く閉じる語末音", "語末 ch は一音節内で息を解放せず閉じます。"),
        q("pr6-09", "học", ["語末 c で短く止め、クを付け足さない", "ホックと三拍で読む", "語末 c を /s/ と読む", "語末を鼻へ抜く"], "語末 c で短く止め、クを付け足さない", "học は一音節です。nặng のため低く短い声調にもなります。"),
        q("pr6-10", "Việt", ["語末 t で息を解放せず短く止める", "ヴィエットと母音を足して読む", "t を発音しない", "語末を /n/ にする"], "語末 t で息を解放せず短く止める", "Việt は一音節で、t の後ろにオを加えません。")
      ]),
      g("pronunciation-7", "GROUP 07", "6つの声調", [
        q("pr7-01", "ma", ["ngang・→ 高さを大きく変えない", "sắc・↗ 上がる", "huyền・↘ 下がる", "nặng・短く低く止める"], "ngang・→ 高さを大きく変えない", "声調記号がない音節は ngang です。"),
        q("pr7-02", "má", ["sắc・↗ 高く上がる", "huyền・↘ ゆるく下がる", "hỏi・↘↗ 下がって戻る", "ngang・→ 平ら"], "sắc・↗ 高く上がる", "アキュート記号は sắc を示します。"),
        q("pr7-03", "mà", ["huyền・↘ 低い方向へゆるく下がる", "sắc・↗ 上がる", "ngã・途中に喉の緊張を伴う", "ngang・→ 平ら"], "huyền・↘ 低い方向へゆるく下がる", "グレイヴ記号は huyền を示します。北部では息漏れを伴うことがあります。"),
        q("pr7-04", "mả", ["hỏi・↘↗ 下がってから戻る", "ngã・高く上がり喉の中断を伴う", "nặng・短く低く止める", "sắc・↗ 上がる"], "hỏi・↘↗ 下がってから戻る", "フック記号は hỏi です。実際の曲線は話者や文脈で変わります。"),
        q("pr7-05", "mã", ["ngã・上昇と喉の緊張・中断を伴う", "hỏi・下がって戻るだけ", "huyền・ゆるく下がる", "ngang・平ら"], "ngã・上昇と喉の緊張・中断を伴う", "チルダ記号は ngã です。北部では声門化が重要です。"),
        q("pr7-06", "mạ", ["nặng・低く短く、喉を締めて終える", "ngang・平ら", "sắc・長く上がる", "hỏi・下がって戻る"], "nặng・低く短く、喉を締めて終える", "下点は nặng です。短さと声質も手がかりになります。"),
        q("pr7-07", "ngang / sắc / huyền", ["無印 / ´ / ` の順", "´ / ` / 無印の順", "無印 / ̉ / ̃ の順", ". / ´ / ` の順"], "無印 / ´ / ` の順", "つづりの記号と声調名を対応させます。"),
        q("pr7-08", "hỏi / ngã / nặng", ["̉ / ̃ / ̣ の順", "̃ / ̉ / ̣ の順", "̣ / ̉ / ̃ の順", "` / ´ / 無印の順"], "̉ / ̃ / ̣ の順", "hỏi はフック、ngã はチルダ、nặng は下点です。"),
        q("pr7-09", "bán / bàn", ["bán は上がる sắc、bàn は下がる huyền", "どちらも ngang", "bán は huyền、bàn は sắc", "違いは母音だけ"], "bán は上がる sắc、bàn は下がる huyền", "同じ子音・母音でも声調で語が区別されます。"),
        q("pr7-10", "học", ["nặng・低く短く、語末 c でも短く閉じる", "hỏi・下がって戻る", "ngang・平らで長い", "sắc・高く上がり続ける"], "nặng・低く短く、語末 c でも短く閉じる", "閉鎖音で終わる音節の nặng は特に短く聞こえます。")
      ]),
      g("pronunciation-8", "GROUP 08", "単語で発音を総合確認", [
        q("pr8-01", "xin chào", ["xin は語末 n、chào は huyền で下がる", "xin は語末 m、chào は sắc で上がる", "二語とも ngang", "ch を c と h に分ける"], "xin は語末 n、chào は huyền で下がる", "音節末と声調を意識して二語をつなぎます。"),
        q("pr8-02", "cảm ơn", ["cảm は hỏi、ơn は ơ /ɤ/ と語末 n", "cảm は sắc、ơn は u /u/", "両方とも ngang", "ơ を唇を丸める o と同じにする"], "cảm は hỏi、ơn は ơ /ɤ/ と語末 n", "cảm の声調と ơn の特有母音を分けて確認します。"),
        q("pr8-03", "nước", ["ươ /ɯə/ 系・sắc・語末 c を解放しない", "uô /uə/ 系・huyền・語末 n", "ư と ơ の二音節", "語末をクとはっきり発音する"], "ươ /ɯə/ 系・sắc・語末 c を解放しない", "nước は一音節に母音の動き・声調・語末閉鎖が入ります。"),
        q("pr8-04", "khỏe", ["kh /x/ で始まり、hỏi の動きを伴う", "k と h を別々に読み、sắc にする", "ph /f/ で始まる", "声調は ngang"], "kh /x/ で始まり、hỏi の動きを伴う", "kh の摩擦と hỏi の声調を同時に意識します。"),
        q("pr8-05", "người", ["ng /ŋ/ で始まり、ươ 系から i 側へ移り、huyền", "n /n/ で始まり、u /u/ だけを読む", "ng をングと二音にする", "声調は sắc"], "ng /ŋ/ で始まり、ươ 系から i 側へ移り、huyền", "người は一音節です。北部発音では複数の要素が滑らかにつながります。"),
        q("pr8-06", "Việt Nam", ["Việt は nặng と語末 t、Nam は ngang と語末 m", "Việt は sắc、Nam は huyền", "両方とも語末 n", "Việt を二音節に分ける"], "Việt は nặng と語末 t、Nam は ngang と語末 m", "二語それぞれの声調と語末位置を保ちます。"),
        q("pr8-07", "học", ["h で始まり、o /ɔ/、nặng、語末 c /k̚/", "kh /x/ で始まり、ô /o/、sắc", "h を発音せず、語末を ng にする", "二音節でホ・クと読む"], "h で始まり、o /ɔ/、nặng、語末 c /k̚/", "一つの音節を低く短く閉じます。"),
        q("pr8-08", "bánh mì", ["bánh は sắc と語末 nh、mì は huyền", "bánh は nặng、mì は sắc", "両方とも ngang", "nh を n と h に分ける"], "bánh は sắc と語末 nh、mì は huyền", "二つの異なる声調を保って読みます。"),
        q("pr8-09", "trường", ["ươ 系・huyền・語末 ng の鼻音", "uô 系・sắc・語末 n", "ư と ơ を二音節にする", "語末 g を強く破裂させる"], "ươ 系・huyền・語末 ng の鼻音", "trường は一音節で、最後は舌の奥の鼻音です。"),
        q("pr8-10", "tiếng Việt", ["tiếng は iê・sắc・ng、Việt は nặng・t", "tiếng は二音節、Việt は ngang", "両方とも huyền", "語末 ng と t を発音しない"], "tiếng は iê・sắc・ng、Việt は nặng・t", "発音入門の母音・声調・語末子音をまとめて確認します。")
      ])
    ]
  };

  const typing = bank.levels.find((level) => level.id === "typing");
  typing.requires = "pronunciation-8";
  bank.levels.unshift(pronunciation);
})();
