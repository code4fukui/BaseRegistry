# BaseRegistry

## Features

- [Specifying the Base Registry](ベース・レジストリの指定について.md)
- [Administrative Service Data Linkage Model (Whole)](行政サービス・データ連携モデル（全体編）.md)

## Base Registry Items

### Address (Location)

- [On the Development of Address/Location Master Data as a Base Registry](ベース・レジストリとしての住所・所在地マスターデータ整備について.md)
- [Administrative Basic Information Data Linkage Model - Address](行政基本情報データ連携モデル-住所.md)
- [Guidelines for Improving and Strengthening Multilingual Support for Realizing a Tourism-Oriented Country](観光立国実現に向けた多言語対応の改善・強化のためのガイドライン.md)
- [Hepburn Romanization](ヘボン式ローマ字.csv)

### Characters (Kanji)

- [Practical Guidebook for Introducing Character Environment](文字環境導入実践ガイドブック.md)
- [Character Information Infrastructure](https://github.com/code4fukui/mojikiban)

### Data Linkage Model

- [Date and Time](行政基本情報データ連携モデル-日付及び時刻.md)
- [Address](行政基本情報データ連携モデル-住所.md)
- [Postal Code](行政基本情報データ連携モデル-郵便番号.md)
- [Geographic Information](行政基本情報データ連携モデル-地理情報.md)
- [Phone Number](行政基本情報データ連携モデル-電話番号.md)
- [POI Code](行政基本情報データ連携モデル-POIコード.md)
- [POI Code List](POIコード.csv)

## References

- [Terminology](用語.md)
- [Standard Guideline Glossary](https://code4fukui.github.io/stdwords-jp/)
- [Digital Government Implementation Plan](デジタル・ガバメント実行計画.md)
- [Technical Report on Selection of Terminal Environment and Web Browsers to be Targeted for Service Provision in Government Information Systems](政府情報システムにおいてサービス提供の対象とすべき端末環境及びWebブラウザの選定に関する技術レポート.md)
- [Data Quality Guidebook](データ品質ガイドブック.md)
- [Code List](コード一覧.csv) [※Organized from Internet search](https://cio.go.jp/codes)
- [API Technical Guidebook](APIテクニカルガイドブック.md)

## Sources

- [About the Designation of Base Registries | Government CIO Portal](https://cio.go.jp/node/2764)
- [Standard Guideline Group | Government CIO Portal](https://cio.go.jp/guides)

## Word File Creation (docx)

Install [Deno](https://deno.land)
```
cd deno
deno run -A make.js
```