window.defaultQuestionBank = {
  version: 7,
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
})();
