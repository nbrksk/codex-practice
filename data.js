// 行程、施設、お知らせ、連絡先はここで変更できます。
// confirmed は予約確認済みにだけ使用します。未確認の電話番号等を追加しないでください。
window.TRIP_DATA = {
  places: {
    ikuta: {name:'生田神社', description:'参拝と境内散策。', query:'生田神社 神戸',
      photo: {
        src: 'images/ikuta-shrine.webp', width: 900, height: 598, alt: '生田神社の拝殿',
        author: 'Saigen Jiro', source: 'https://commons.wikimedia.org/wiki/File:Ikuta-jinja,_haiden-1.jpg',
        license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
    },
    cruise: {name:'THE KOBE CRUISE コンチェルト', description:'12:30出航のランチクルーズ。鉄板焼「海岳」。', query:'THE KOBE CRUISE コンチェルト 神戸', status:'予約済', kind:'confirmed'},
    museum: {name:'神戸海洋博物館', description:'神戸の港と海の歴史に触れる見学。', query:'神戸海洋博物館',
      photo: {
        src: 'images/kobe-maritime-museum.webp', width: 900, height: 600, alt: '神戸海洋博物館の白い屋根と神戸ポートタワー',
        author: 'Balon Greyjoy', source: 'https://commons.wikimedia.org/wiki/File:20190901_Kobe_Port_Tower_and_Maritime_Museum-1.jpg',
        license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
    },
    kawasaki: {name:'カワサキワールド', description:'神戸海洋博物館内のものづくり展示を見学。', query:'カワサキワールド'},
    hotel: {name:'明石ルミナスホテル', description:'1日目の宿泊先。JR西明石駅が最寄駅。', query:'明石ルミナスホテル'},
    dinner: {name:'はし処 恵', description:'1日目18:00集合。兵庫県明石市西明石北町3丁目1-13-102。JR西明石駅西口から徒歩約11分。', query:'はし処 恵 兵庫県明石市西明石北町3丁目1-13-102', status:'予約済', kind:'confirmed'},
    castle: {name:'姫路城', description:'2日目、見学希望者向けの自由行動先。', query:'姫路城',
      photo: {
        src: 'images/himeji-castle.webp', width: 900, height: 600, alt: '石垣の上にそびえる姫路城の白い天守',
        author: 'Nikos Kitsakis', source: 'https://commons.wikimedia.org/wiki/File:Himeji_castle_in_may_2015.jpg',
        license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
    },
    garden: {name:'好古園', description:'姫路城周辺の自由行動先の一例。', query:'好古園 姫路'},
    himeji: {name:'姫路駅', description:'12月20日（日）14:20集合。14:36出発。', query:'姫路駅'}
  },
  day1: [
    {time:'6:46', title:'宍道駅 発（宍道駅乗車グループ）', description:'岡山行きの特急やくも6号に乗車します。', query:'宍道駅'},
    {time:'7:50', title:'生山駅 集合（奥出雲発・生山駅乗車グループ）', description:'奥出雲から生山駅へ移動し、駅に集合。具体的な集合場所は幹事の案内をご確認ください。', query:'生山駅', highlight:true, status:'集合時刻', kind:'confirmed'},
    {time:'8:08', title:'生山駅 発', description:'岡山行きの特急やくも6号に乗車し、宍道駅乗車グループと車内で合流します。', query:'生山駅'},
    {time:'9:47', title:'岡山駅 着', description:'山陽新幹線へ乗り換え。', query:'岡山駅'},
    {time:'10:40頃', title:'新神戸駅 着', description:'三宮方面へ移動。', query:'新神戸駅'},
    {time:'11:00〜11:40', title:'生田神社', description:'参拝・境内散策。', place:'ikuta'},
    {time:'11:40〜12:10', title:'神戸ハーバーランド方面へ移動', description:'ランチクルーズの乗船受付。出航に遅れないようご注意ください。', query:'神戸ハーバーランド コンチェルト'},
    {time:'12:30〜14:15', title:'THE KOBE CRUISE コンチェルト', description:'12:30出航。ランチクルーズ・鉄板焼「海岳」。', place:'cruise', status:'予約済', kind:'confirmed', highlight:true},
    {time:'14:30〜16:30', title:'神戸海洋博物館・カワサキワールド（希望者）', description:'昼食後は、博物館・ものづくり展示の見学または自由時間を選べます。', place:'museum'},
    {time:'14:30〜16:30', title:'自由時間（希望者）', description:'見学に参加しない方は自由時間。18:00に夕食会場へ直接お越しください。'},
    {time:'16:30頃', title:'西明石方面へ移動', description:'公共交通機関で宿泊先へ。', query:'西明石駅'},
    {time:'17:30頃', title:'明石ルミナスホテル', description:'チェックイン。禁煙シングル利用予定。', place:'hotel'},
    {time:'18:00', title:'夕食会場 集合・はし処 恵', description:'兵庫県明石市西明石北町3丁目1-13-102。JR西明石駅西口から徒歩約11分。自由時間を選んだ方は会場へ直接集合。7名で予約済み。', place:'dinner', status:'予約済', kind:'confirmed', highlight:true},
    {time:'夕食後', title:'自由時間', description:'各自ホテルへお戻りください。'}
  ],
  day2: [
    {time:'朝', title:'ホテルで朝食', description:'各自チェックアウト。', place:'hotel'},
    {time:'チェックアウト後', title:'自由行動', description:'明石・姫路周辺で観光、昼食、買い物など。昼食は団体予約をせず、各自自由です。'},
    {time:'14:20', title:'姫路駅 集合', description:'自由行動後の集合時刻です。駅構内の具体的な集合場所は幹事の案内をご確認ください。', place:'himeji', highlight:true, status:'集合時刻', kind:'confirmed'},
    {time:'14:36', title:'姫路駅 発', description:'山陽新幹線。', place:'himeji'},
    {time:'15:02', title:'岡山駅 着', description:'特急やくもへ乗り換え。', query:'岡山駅'},
    {time:'15:13', title:'岡山駅 発', description:'特急やくも17号。', query:'岡山駅'},
    {time:'16:50', title:'生山駅 着', description:'生山駅で降りる方はここで解散。', query:'生山駅'},
    {time:'18:19', title:'宍道駅 着（宍道駅で降りる方）', description:'岡山15:13発の特急やくも17号にそのまま乗車し、宍道駅で下車します。', query:'宍道駅'}
  ],
  castleRoute: [
    {time:'8:00頃', title:'明石ルミナスホテル 出発', description:'希望者向けの参考ルート。', place:'hotel'},
    {time:'8:10頃', title:'西明石駅 発', description:'姫路方面へ。', query:'西明石駅'},
    {time:'8:35頃', title:'姫路駅 着', description:'姫路城へ徒歩移動（約15分）。9:00頃到着を目安に移動。', place:'himeji'},
    {time:'9:00〜11:00頃', title:'姫路城 見学', description:'9:00頃到着・見学開始の参考予定。', place:'castle'},
    {time:'見学後', title:'自由行動・昼食', description:'好古園、姫路市内散策、買い物など。昼食は各自自由。', place:'garden'},
    {time:'14:20', title:'姫路駅 集合', description:'全員共通の集合時刻です。', place:'himeji', highlight:true}
  ],
  // 例: {title:'集合場所のご案内', body:'確定した案内を記入'}
  announcements: [],
  // 公開してよい実在の連絡先のみ追加。例: {name:'幹事', phone:'確認済み番号'}
  contacts: []
};
