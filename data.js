// 行程、施設、お知らせ、連絡先はここで変更できます。
// confirmed は予約確認済みにだけ使用します。未確認の電話番号等を追加しないでください。
window.TRIP_DATA = {
  places: {
    ikuta: {name:'生田神社', description:'参拝と境内散策。', query:'生田神社 神戸'},
    cruise: {name:'THE KOBE CRUISE コンチェルト', description:'12:30出航のランチクルーズ。鉄板焼「海岳」。', query:'THE KOBE CRUISE コンチェルト 神戸', status:'予約済', kind:'confirmed'},
    museum: {name:'神戸海洋博物館', description:'神戸の港と海の歴史に触れる見学。', query:'神戸海洋博物館'},
    kawasaki: {name:'カワサキワールド', description:'神戸海洋博物館内のものづくり展示を見学。', query:'カワサキワールド'},
    hotel: {name:'明石ルミナスホテル', description:'1日目の宿泊先。JR西明石駅が最寄駅。', query:'明石ルミナスホテル'},
    dinner: {name:'居酒屋 いっぽん志や 西明石店', description:'1日目18:00頃からの夕食候補。', query:'居酒屋 いっぽん志や 西明石店', status:'仮予定', kind:'tentative'},
    castle: {name:'姫路城', description:'2日目、見学希望者向けの自由行動先。', query:'姫路城'},
    garden: {name:'好古園', description:'姫路城周辺の自由行動先の一例。', query:'好古園 姫路'},
    himeji: {name:'姫路駅', description:'12月20日（日）14:20集合。14:36出発。', query:'姫路駅'}
  },
  day1: [
    {time:'7:50', title:'生山駅 集合', description:'8:08発の特急やくもに乗車します。具体的な集合場所は幹事の案内をご確認ください。', query:'生山駅', highlight:true, status:'集合時刻', kind:'confirmed'},
    {time:'8:08', title:'生山駅 発', description:'特急やくもで岡山へ。', query:'生山駅'},
    {time:'9:47頃', title:'岡山駅 着', description:'山陽新幹線へ乗り換え。', query:'岡山駅'},
    {time:'10:40頃', title:'新神戸駅 着', description:'三宮方面へ移動。', query:'新神戸駅'},
    {time:'11:00〜11:40', title:'生田神社', description:'参拝・境内散策。', place:'ikuta'},
    {time:'11:40〜12:10', title:'神戸ハーバーランド方面へ移動', description:'ランチクルーズの乗船受付。出航に遅れないようご注意ください。', query:'神戸ハーバーランド コンチェルト'},
    {time:'12:30〜14:15', title:'THE KOBE CRUISE コンチェルト', description:'12:30出航。ランチクルーズ・鉄板焼「海岳」。', place:'cruise', status:'予約済', kind:'confirmed', highlight:true},
    {time:'14:30〜16:30', title:'神戸海洋博物館・カワサキワールド', description:'博物館・ものづくり展示を見学。', place:'museum'},
    {time:'16:30頃', title:'西明石方面へ移動', description:'公共交通機関で宿泊先へ。', query:'西明石駅'},
    {time:'17:30頃', title:'明石ルミナスホテル', description:'チェックイン。禁煙シングル利用予定。', place:'hotel'},
    {time:'18:00頃〜', title:'居酒屋 いっぽん志や 西明石店', description:'夕食。お店は仮予定です。', place:'dinner', status:'仮予定', kind:'tentative'},
    {time:'夕食後', title:'自由時間', description:'各自ホテルへお戻りください。'}
  ],
  day2: [
    {time:'朝', title:'ホテルで朝食', description:'各自チェックアウト。', place:'hotel'},
    {time:'チェックアウト後', title:'自由行動', description:'明石・姫路周辺で観光、昼食、買い物など。昼食は団体予約をせず、各自自由です。'},
    {time:'14:20', title:'姫路駅 集合', description:'自由行動後の集合時刻です。駅構内の具体的な集合場所は幹事の案内をご確認ください。', place:'himeji', highlight:true, status:'集合時刻', kind:'confirmed'},
    {time:'14:36', title:'姫路駅 発', description:'山陽新幹線。', place:'himeji'},
    {time:'15:02', title:'岡山駅 着', description:'特急やくもへ乗り換え。', query:'岡山駅'},
    {time:'15:13', title:'岡山駅 発', description:'特急やくも17号。', query:'岡山駅'},
    {time:'16:50', title:'生山駅 着', description:'到着・解散。', query:'生山駅'}
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
