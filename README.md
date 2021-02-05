# homepage

## 事前に必要なツール
- [VisualStudio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Node.js](https://nodejs.org/ja/)

## やったこと
1. [angular cliの導入](http://www.tohoho-web.com/ex/angular.html)  
  `npm i -g @angular/cli`
2. プロジェクト作成  
  `ng new hp-app`
3. 起動確認  
  `ng serve`  
  ⇨[http://localhost:4200/](http://localhost:4200/)で画面が確認できる
4. 新たなコンポーネントの作成  
  `ng generate component menu`  
  `ng generate component main`  

5. [Bootstrap導入](https://qiita.com/shukawam/items/1134147d5ac61789987d)  
  `ng add @angular/localize`  
  `npm install @ng-bootstrap/ng-bootstrap bootstrap`
  モジュールへのインポートなど

6. serviceの作成  
  menuの選択をmainに反映できるよう、serviceを作成  
  `ng generate service menu/menu`