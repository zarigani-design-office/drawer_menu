# Drawer Menu Template by Zarigani Design Office
ドロワーメニューのテンプレートファイルです。このHTMLとCSSとJSを読み込めばドロワーメニューを実装することができます。

デモは[こちら](https://zarigani-design-office.com/html/drawer_menu/)

## 導入方法
1. ダウンロードしたら`<div class="zdo_drawer_menu">`で囲まれたHTMLをコピーして自身のHTMLへペーストします。
2. jQeuryを読み込みます。
3. cssフォルダ内の`zdo_drawe_menu.css`とjsフォルダ内の`zdo_drawer_menu.js`をそれぞれ読み込みます。

テンプレートにはcss,jsともに読み込まれているので、これを基にページを作成しても構いません。

## 見た目の変更
CSSは `zdo_drawe_menu.css`に書かれています。直接変更しても上書きしても構いません。
### 左側に出したい場合
`<div class="zdo_drawer_menu">`の部分にclass名`left`を足して、`<div class="zdo_drawer_menu left">`にすればボタン、ナビゲーションともに左側になります。

### ボタンとMENU文字の色
ボタンの色と文字色は136行目の
```
/*+++ Default Button Color +++*/
.zdo_drawer_menu .zdo_drawer_button {
  color: #276490;
}

.zdo_drawer_menu .zdo_drawer_button .zdo_drawer_bar {
  background-color: #276490;
}
```
部分にかかれているのでカラーコードを変更すると色が変えられます。
### ナビゲーションのカスタマイズ
ナビゲーションには基本的なCSSのみ適用しています。CSS126行目の
```
/*+++ Default Navigation CSS +++*/
.zdo_drawer_menu .zdo_drawer_nav {
  padding: 112px 24px;
}

.zdo_drawer_menu .zdo_drawer_nav li {
  font-size: 16px;
  margin-bottom: 15px;
}
```
に書かれているので、ここを書き換えてください。
### その他
クラス名には接頭辞として`zdo_drawer`をつけてあるのでクラス名のバッティングはないと思います。ラッパーとして`zdo_drawer_menu`を使っています。このラッパーの中で一度リセットはしていますが、場合によってはCSSの上書きが発生するかもしれないので、表示がうまくいかない場合はCSSを確認してください。

ファイル内にはgulpfile.jsなど入っていますが必要なindex.html,zdo_drawer_menu.css,zdo_drawer_menu.jsの3つです。コンパイル前のzdo_drawer_menu.scssも入っています。

## ライセンス
MIT License  
無保証・商用利用可
