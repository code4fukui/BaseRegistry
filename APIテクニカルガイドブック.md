# APIテクニカルガイドブック

- 2019-03-28
- 内閣官房情報通信技術(IT)総合戦略室
- 標準ガイドライン群ID 1020

データは公開もさることながら、活用してこそ価値を生みます。
そのためには活用しやすい形式でデータが提供される必要があり、そのアクセスインタフェースとしてAPIが普及してきています。
政府機関においても API によるデータ提供事例が増えつつありますが、その設計・運用は各府省の個々の指針によって行われているのが現状です。
本ガイドブックでは、API の開発に当たり技術的に考慮すべき事項や留意点を記しました。

## 参考文献一覧

### 表 ５-2 参考とした他APIガイド

- [White House Web API Standards](https://github.com/WhiteHouse/api-standards)
- [18F API Standards](https://github.com/18F/api-standards)
- [Application programming interfaces (APIs)(GOV.UK)](https://www.gov.uk/service-manual/technology/applicationprogramming-interfaces-apis)
- [API Design Guide(GOV.AU)](http://apiguide.readthedocs.io/en/latest/index.html)
- [Web API DesignCrafting Interfaces that Developers Love](https://pages.apigee.com/rs/apigee/images/api-designebook-2012-03.pdf)

### 表 ５-3 本ガイドブック内で参照した企画や取り組みなど

- [RFC6570 URI Template](https://tools.ietf.org/html/rfc6570)
- [RFC4627 The application/json Media Type for JavaScript Object Notation (JSON)](https://tools.ietf.org/html/rfc4627)
- [W3CExtensible Markup Language (XML) 1.0 (Fifth Edition)](http://www.w3.org/TR/xml/)
- [RFC4180 Common Format and MIME Type for Comma-Separated Values (CSV) Files](https://tools.ietf.org/html/rfc4180)
- [RFC7946 The GeoJSON Format](https://tools.ietf.org/html/rfc7946)
- [Open Geospatial Consortium](http://www.opengeospatial.org/standards/kml)
- [RFC5545「Internet Calendaring and Scheduling Core Object Specification」](https://datatracker.ietf.org/doc/html/rfc5545)
- [RFC6350「vCard Format Specification」](https://tools.ietf.org/html/rfc6350)
- [JIS縮退マップについて（ページ下部の項目）](http://www.houjin-bangou.nta.go.jp/download/)
- [JSONHypertext Application Languagedraft-kelly-json-hal-08](https://tools.ietf.org/html/draft-kelly-json-hal-08)
- [ISO639「Language codes」](http://www.iso.org/iso/home/standards/language_codes.htm)
- [ISO4217「Currency codes」](http://www.iso.org/iso/home/standards/currency_codes.htm)
- [ISO3166「Country codes」](http://www.iso.org/iso/home/standards/country_codes.htm)
- [JISX0401「都道府県コード」](http://www.jisc.go.jp/)でJISX0401を検索
- [JIS X 0402「市町村コード」](http://www.jisc.go.jp/)でJISX0402を検索
- [ISO22324「Societal security」](http://www.iso.org/iso/catalogue_detail.htm?csnumber=5006)
- [Security Research Group 「Let's Encrypt」](https://letsencrypt.jp/)
- [OpenID Connect](http://openid.net/)
- [OpenID Japan](http://www.openid.or.jp/document/index.html#op-docopenid-connect)
- [W3C Date and Time Formats (ISO8601より）](https://www.w3.org/TR/NOTE-datetime)
- [共通語彙基盤](http://goikiban.ipa.go.jp/)
- [文字情報基盤](http://mojikiban.ipa.go.jp/)
- [RFC7231 HTTPステータスコード](https://tools.ietf.org/html/rfc7231)
- [RFC7807 エラーメッセージ](https://tools.ietf.org/html/rfc7807)
- [Cross-Origin ResourceSharing W3C Recommendation](https://www.w3.org/TR/cors/)
- [Open API Initiative](https://www.openapis.org/)
- [IPA ウェブサイトにおける脆弱性解説](http://www.ipa.go.jp/security/vuln/vuln_contents/xss_solution.html)
- [IPA安全なウェブサイトの作り方](http://www.ipa.go.jp/security/vuln/websecurity.html)
- [IPAセキュア・プログラミング講座](http://www.ipa.go.jp/security/awareness/vendor/programmingv2/index.html)
- [OWASP REST Security Cheat Sheet](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)

### 表 ５-4 技術用語説明

|用語|概要|
|-|-|
|HTTPプロトコル|インターネット上で、Webクライアントからリクエストを送り、それを受けてWebサーバからレスポンスを返すことで、データの送受信を行う規約。サーバに要求する動作を定めたメソッドが定められており、GET/POST/PUT/DELETEなどがある。|
