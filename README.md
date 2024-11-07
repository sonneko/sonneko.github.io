# sonnekoのサイト

## 使用技術
React

Vite.js

React Router DOM

Material UI


## 概要
Sonneko用の、ホームページのフロントエンドの構築。

https://www.sonneko.com/

で、公開中。

## 起動・開発環境

```
$ git clone "https://github.com/sonneko/sonneko.github.io.git"
$ cd sonneko.github.io
$ npm install
```
### ビルド
```
$ vite build
```

### 開発用サーバー起動
```
$ npm run dev
```

## ディレクトリ構造

`/public/*`

- 静的ホスティング

`/src/class/*`

- 全体で使うContextのclass
- DOM操作を使った自作の簡易ゲームエンジン（開発中）

`/src/components`

- `/BlogTemp`
    - ブログページのレイアウトコンポーネント・文書に関係するコンポーネント

- `/mini`
    - コンポーネントの依存対象となるコンポーネントの配置場所

- `/*.tsx`
    - コンポーネント

- `/css/*`
    - コンポーネント用のCSS


`/src/docs`
    - `共通のヘッダー・フッターを記述`

`/src/global`
    - どこでも使う大きめのコンポーネント

`/src/pages`
    - ページコンポーネント・ルーティング構造通りに配置


## 周辺のプロジェクト

### バックエンド
https://github.com/sonneko/sonneko-back
で開発中。

https://api.sonneko.com
で、公開中
