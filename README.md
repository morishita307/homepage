# homepage

## 事前に必要なツール
- [VisualStudio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Node.js](https://nodejs.org/ja/)

## やったこと
1. [angular cliの導入](http://www.tohoho-web.com/ex/angular.html)  
  ```npm i -g @angular/cli```
2. プロジェクト作成  
  ```ng new hp-app```
3. 起動確認(開発モード)   
  ```ng serve```  
  ⇨[http://localhost:4200/](http://localhost:4200/)で画面が確認できる
4. 新たなコンポーネントの作成  
  ```ng generate component menu```  
  ```ng generate component main```  

5. [Bootstrap導入](https://qiita.com/shukawam/items/1134147d5ac61789987d)  
  ```ng add @angular/localize```  
  ```npm install @ng-bootstrap/ng-bootstrap bootstrap```
  モジュールへのインポートなど

6. serviceの作成  
  menuの選択をmainに反映できるよう、serviceを作成  
  ```ng generate service menu/menu```


## Angularのディレクトリ構成について
- 基本的に```/src/app/```配下を作成・編集
- ```src/app/app-routing``` ⇨ 画面のルーティングに使用
- ```src/app/app.module.ts``` ⇨ モジュールをインポートする際使用
- ```src/app/app.component.html``` ⇨ 各コンポーネントの読み込み（大元のhtmlファイル）

## 今後の開発の流れ
- ```ng generate```コマンドでコンポーネント作成
- 作成したコンポーネントを```src/app/app.component.html```へ追加
- 各コンポーネント内でcssの調整や関数定義を行う
- コンポーネント間の共有が必要な場合は適宜serviceを利用する

## 参考
angular cliについては、こちらの記事が分かりやすいです。（上記リンク先と同様）  
- [Angular入門](http://www.tohoho-web.com/ex/angular.html)
