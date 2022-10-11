# Svelte Kit Tutorial

SvelteのSSRフレームワーク
SSG / SPAモード対応
ルーティング、サーバーサイドロジックなどが含まれる
1.0のリリース候補段階（1.0.0-next.512）

## Initialize

`npm create svelte@latest <app-name>`
or
`yarn create svelte <app-name>`

promptに沿って進める

## Project Structure

```plaintext
/.svelte-kit
/src
  /lib
    /components
      SomeComponent.svelte
  /routes
    +page.svelte      // indexページ
    +layout.svelte    // 全体レイアウト
    +layout.ts        // 全ページに適用するロジック
    +error.svelte     // エラー時の遷移先
    /blog
      /[slug]
        +page.svelte // blog/[id] ページ
        +page.ts　　　　　　　　　　// クライエントのルーティング
        +page.server.ts // サーバーのルーティング
```

### +page

ページコンポーネント（ルートはフォルダー名で決定）
SSR → CSR
`+page.js`: ページのロード前のロジック
`+page.server.js`： SSR時のサーバーがわロジック

ページのプリレンダリングに関するオプジョンもこちらで指定
(e.g. `export const csr = true`)

`getServerSideProps`は、`+page.server.js`内で行い、その戻り値は`+page.svelte`の`export let data`propsで取得できる

load関数は`PageLoad` / `PageServerLoad`型

### +error

404などのフォールバック用ページ
ランタイムのエラーは、`export let error` と指定することで取得できる

ルートごとに設定することで、以下のようなカスタマイズができる

```plaintext
src/routes/
  /blog
    +error.svelte // blogルート内で発生したエラーの場合
  +error.svelte   // 上記以外のエラーの場合
```

### +layout

`+page.svelte`をslot(命名指定不可)としてもらい、トップレベルのページ描画を行う
`+layout.js`には全ページに適用される

`+error.svelte`同様、サブルートに配置すると該当ルートの共通レイアウトとしてカスタマイズできる（最上位の`+layout`は継承）

### +server

APIルート

`e.g. (/api/helloの場合) src/routes/api/hello/+server.js`

型は、functionが`RequestHandler`、requestが`RequstEvent`responseが`Response`

### その他ファイル

そのほかのファイルはSvelte Kitから認識されない
複数ルートから使われるものは`/lib`(インポート時は`$lib`)に配置が推奨

## SSR

Svelte Kitの基本動作モード
`<script context="module">`及び、`.server.js`が実行され、SSRのレスポンスで描画

window等に関しては、`import { browser } from '$app/env'`で判別する

`<script context="module">`で`export const ssr = false`すると、個別でのSSR設定が可能

SPAで実行したい時は、`prerender = false`も必要

### Fetch API

`window.fetch`を、ブラウザだけでなく、HooksやServerの中でも使用できる

loadメソッド中では直接エンドポイントコール可能

```svelte
e.g. index.svelte

<script context="module">
  export const async load({ fetch }) => {
    const data = await fetch('/some/api')

    return {
      props: { data }
    }
  }
</script>

<script>
  export let data // Propとして受け取り
</script>
```

## SSG

`svelte.config.js`にて`@sveltejs/adapter-static`を設定することで、静的サイト生成機能が使える(デフォルトはadapter-auto)

`vite build`コマンドで静的アセットが出力される
build中でもSSRロジックは回実行される

## サンプル概要

[Unsplash](www.unsplash.com)よりランダムな写真・コレクションを取得し表示する
`/collection/[id]` ルートはプリレンダー

### Requirements

UnsplashのAPIキー
環境変数に`VITE_API_ACCESS_KEY`として設定
