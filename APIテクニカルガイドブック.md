# APIテクニカルガイドブック

- 2019-03-28
- 内閣官房情報通信技術(IT)総合戦略室
- 標準ガイドライン群ID 1020

データは公開もさることながら、活用してこそ価値を生みます。
そのためには活用しやすい形式でデータが提供される必要があり、そのアクセスインタフェースとしてAPIが普及してきています。
政府機関においても API によるデータ提供事例が増えつつありますが、その設計・運用は各府省の個々の指針によって行われているのが現状です。
本ガイドブックでは、API の開発に当たり技術的に考慮すべき事項や留意点を記しました。

## 参考文献一覧

### 表 5-2 参考とした他APIガイド

- [White House Web API Standards](https://github.com/WhiteHouse/api-standards)
- [18F API Standards](https://github.com/18F/api-standards)
- [Application programming interfaces (APIs)(GOV.UK)](https://www.gov.uk/service-manual/technology/applicationprogramming-interfaces-apis)
- [API Design Guide(GOV.AU)](http://apiguide.readthedocs.io/en/latest/index.html)
- [Web API DesignCrafting Interfaces that Developers Love](https://pages.apigee.com/rs/apigee/images/api-designebook-2012-03.pdf)

### 表 5-3 本ガイドブック内で参照した企画や取り組みなど

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

### 表 5-4 技術用語説明

#### HTTPプロトコル

インターネット上で、Webクライアントからリクエストを送り、それを受けてWebサーバからレスポンスを返すことで、データの送受信を行う規約。サーバに要求する動作を定めたメソッドが定められており、GET/POST/PUT/DELETEなどがある。

#### REST(本ガイドブック内)

REpresentational State Transferの略称。
HTTPプロトコルに基づいて、URIを指定しリソースを取得する設計様式を指す。本ガイドブックでは、Pragmatic RESTとする。

#### SOAP

Simple Object Access Protocolの略称。
HTTPプロトコル等に基づいて、XMLデータのやり取りを通じ連携を行う方式。「WS-*」と総称される
様々なプロトコルが用意されている。

#### URI

Uniform Resource Identifierの略称。インターネット上で、リソースの場所などを表現する識別子

#### エンドポイント

ネットワークに接続された端末のアドレス。本ガイドブックでは、APIへアクセスするためのアドレスを示す。

#### ベースURI

URIのうち、指定するリソースによって変わらない共通部分

#### ページネーション

データを小さく分割した単位及びそのアクセス先をページと呼ぶ。
全データではなく特定のデータを要求する場合、欲しいデータ（ページ）を指定することとなる。

#### HTTPステータスコード

HTTPプロトコルに従ったWebサーバからのレスポンスにおいて、その通信結果を表す3桁のコード

#### TLS(SSL)

Secure Sockets Layerの略称。インターネット上で通信データを暗号化するための技術。
HTTPにおける通信にTLS(SSL)を適用した場合、その通信をHTTPS通信と呼ぶ。

#### APIキー

APIの利用に必要な暗号鍵のこと。API利用者ごとに発行し、不正なアクセスを防ぐとともに、API呼び出し状況の把握にも使われる。

#### OpenID Connect

Webサーバ上のリソースへのアクセス権限を管理し、利用者がクライアントにID/PWを教えることなく、アクセスを許可するための仕組み。
OAuth2.0を拡張した認証プロトコル

#### クロスサイトスクリプティング

Webページの入力フォームなどから不正なスクリプトを挿入し、そのWebページを閲覧したブラウザ上で、スクリプトを実行させる攻撃。スクリプトにより、利用者の分からないところで、別のサーバに通信を行うこともある。

#### クロスドメイン

１つのWebサイト内でアクセス先のドメインが複数に跨っている状態

#### CORS対応

Cross-Origin Resource Sharingの略称。
Webブラウザがオリジンサーバ（主となるオリジナルコンテンツを保有しているサーバ）以外のサーバからデータを取得できるようにする対応。
多くのWebブラウザでは、クロスサイトスクリプティングを防ぐために、別のサーバへアクセスしない仕組みとなっている。

#### DoSアタック

Denial of Serviceアタックの略称。
インターネット上から、サーバに過大な負荷を掛けるために、大量アクセスを行う攻撃。
サーバが落ちたり、応答速度が遅くなる。

#### SQLインジェクション

アプリケーションが想定しないSQL文を入力し、データベースの内容を変更したり削除する攻撃

#### クロスサイトリクエストフォージェリ

攻撃者が作成したWebサイトに訪れた利用者が、知らない間に、自動で他のリソースへアクセスし不正な行為をしてしまう攻撃

#### クリックジャギング

攻撃者が作成したWebサイト上で、ある箇所をクリックさせ、別のWebサイトに関する設定情報などを変更させる攻撃

#### トランザクション処理

複数の処理セットを一つの単位として処理すること。
具体的には、全ての工程が正常に実行された場合にのみ、データベースへの書き込みなど、他へ影響を与える処理を実行する。
途中で異常があった場合には、全てを最初の状態に戻す。
他からの書き換えが処理中に行われないよう、ロックする（自ら以外変更不可とする）ことなどが挙げられる。

#### インタフェース（本ガイドブック内）

APIの仕様、つまりAPIを介した通信方法、又は、仕様に基づき実装された外部と通信する接点
