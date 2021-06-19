# 行政基本情報データ連携モデル POIコード

- 標準ガイドライン群 ID：1015-6
- 2019-03-28
- https://cio.go.jp/sites/default/files/uploads/documents/1015-6_gyousei_data_model_poi.pdf
- https://cio.go.jp/sites/default/files/uploads/documents/1015-6_gyousei_data_model_poi.docx

観光施設、公共施設など地理的目標物を POI（Point Of Interest）と呼び、既存の施設コード、自然物コード等を比較し、以下のとおり整理する。

## 1. POIコード

- 観光施設、公共施設など地理的目標物に対する分類コードである。
- 無意コード4桁でありコードは別表に示す。
- [POIコード.csv](POIコード.csv)
- [根拠コード等対応表.csv](根拠コード等対応表.csv)
- https://cio.go.jp/sites/default/files/uploads/documents/1015-6_gyousei_data_poikode_ichiran.pdf
- https://cio.go.jp/sites/default/files/uploads/documents/1015-6_gyousei_data_poikode_ichiran.xlsx

## 2. 解説

### 2.1. 分類対象の選択

既存の施設コード、地理目的コードから選択している。

基本は以下の４分類を参照している。
- [国土地理院 電子国土基本図 地物種別コード](https://www.gsi.go.jp/common/000189294.pdf)
- [国土交通省 都市計画 GIS 地物一覧](https://www.mlit.go.jp/crd/tosiko/GISguidance/index.html)
- [国土交通省 国土数値情報](https://nlftp.mlit.go.jp/ksj/)
- [国土地理院 公共測量標準図式 数値地形図データ取得分類コード表](https://www.mlit.go.jp/crd/city/sigaiti/materials/sokuryou/fuzokushiryou.pdf)

観光とスポーツ施設について、上記に加えて以下を参照している。
- [観光庁 観光入込客統計に関する共通基準 観光地点等分類コード](https://www.mlit.go.jp/common/000995211.pdf)
- [観光庁 観光立国実現に向けた多言語対応の改善・強化のためのガイドライン](https://www.mlit.go.jp/kankocho/news03_000102.html)
- [文部科学省 体育・スポーツ施設現況調査 施設種別の定義](https://www.mext.go.jp/sports/b_menu/toukei/chousa04/shisetsu/1368149.htm)
- [東京都 国内外旅行者のためのわかりやすい案内サイン標準化指針【東京都版対訳表】](https://www.sangyo-rodo.metro.tokyo.lg.jp/tourism/signs/)

海外標準との整合性を確保する観点から以下についても参照している。
- [OpenStreetMap Wiki, JA:Map Features](https://wiki.openstreetmap.org/wiki/JA:Map_Features)(2017-11-28)
- [schema.org](https://schema.org/)(2017-11-28)

また、店舗等の産業関連目標物との整合性を確保する観点から、以下についても参照している。
- [日本標準産業分類](https://www.soumu.go.jp/toukei_toukatsu/index/seido/sangyo/02toukatsu01_03000023.html)

### 2.2. 分類項目名

各項目の分類項目名は、既存の分類項目における定義等を踏まえ、一般的な呼称を選定した。商業施設に関しては、店の呼称は「－屋」「－店」が混在している。これは、一意に分類項目を決めるため一般的な呼称を使用しているもので、「－屋」「－店」との呼称自体が区別やレベル感を表すものではない。

グローバルな互換性をとるため、日本には存在しない施設等にもコードを付与している。

### 2.3. 複合施設等の扱い

複合施設は、その他を選択するか最も近いコードを使用することを推奨する。コード利用時の説明には、内部施設について記述する方法、コードを列挙する方法等がある。

また、コード使用時の目的に応じて使い分ける場合もある。

### 2.4. 地点ではないエリアや点ではない対象物に対する考え方

地形に関しては、特定の位置を示すものではなく、範囲を示す対象物であることもある。これらの対象物は、広域な目標物とする場合もあるので、コード表に含まれている。また、遊漁船、ロープウェイ等の出発点を示す場合がある。
