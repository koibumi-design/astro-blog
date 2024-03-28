---
title: '恋文 Astro Blog ドキュメント'
description: 'Koibumi Astro Blog の使い方を紹介します（日本語版）'
pubDate: 'Mar 28 2023'
heroImage: '/117092881_p3.webp'
pinned: true
---

> このドキュメントは英語版を翻訳したものです。より良い翻訳がありましたら、プルリクエストしてください。

これは[Astro](https://astro.build)で構築されたブログテンプレートです。最小限の公式[Astroブログテンプレート](https://astro.build/themes/details/blog/)から始まりましたが、スタイリングには[恋文意匠](https://solid.koibumi.art)を使用しています。

これは簡単にカスタマイズできるシンプルなテンプレートです。高度な使い方については、[Astroのドキュメント](https://docs.astro.build)を参照してください。

## サイトプロファイルの設定

`src/consts.ts`ファイルでサイトプロファイルを設定できます。こちらがデフォルトの設定です：

```ts
export const SITE_TITLE = 'Koibumi Blog';

export const SITE_DESCRIPTION = 'A blog about SolidJS, Astro, and koibumi design.';

export const FAVICON_SRC = '/favicon.svg';

export const AVATAR_SRC = '/avatar.avif';

export const BIO = " Welcome to my website! I write about programming, technology, and other things that interest me."

export const GLOBAL_STYLE: 'quartz' | 'glass' | 'lightGlass' = 'glass'

export const COPYRIGHT_NAME = 'Koibumi Design';
```

| 属性               | 説明                                                                                  |
|-------------------|--------------------------------------------------------------------------------------|
| `SITE_TITLE`      | サイトのタイトルです。                                                                   |
| `SITE_DESCRIPTION`| サイトの説明です。                                                                       |
| `FAVICON_SRC`     | ファビコンのパスです。                                                                   |
| `AVATAR_SRC`      | アバターのパスです。                                                                     |
| `BIO`             | 著者のバイオです。                                                                       |
| `GLOBAL_STYLE`    | サイトのグローバルスタイルです。`quartz`、`glass`、`lightGlass`から選ぶことができます。|
| `COPYRIGHT_NAME`  | 著作権の名前です。                                                                       |

### ファビコンとアバターを変更する方法

アバターとファビコンは`/public`フォルダにあります。それらを自分の画像に置き換えることができます。

ファイル名を変更する場合は、例えば、`favicon.svg`を`favicon.ico`に変更した場合、`src/consts.ts`ファイル内の`FAVICON_SRC`または`AVATAR_SRC`も変更する必要があります。

### 言語の設定方法

`const.ts`を編集して言語を設定することはまだサポートされていません。以下のファイル内の`html`タグの`lang`属性を編集することで言語を設定できます：

- `src/layouts/BlogPost.astro`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`

### お問い合わせ情報の設定方法

お問い合わせ情報の設定はまだサポートされていません。`src/pages/index.astro`ファイルを手動で編集することしかできません。

このパターンを編集してください：

```html

<div id="contact">
    <a class="icon-link" href="https://github.com/koibumi-design" target="_blank" aria-label="GitHub">
        <GitHubIcon/>
    </a>
</div>
```

アイコンを取得するには、[Simple Icons](https://simpleicons.org)ウェブサイトを使用できます。

## ブログ投稿のフロントマター

マークダウンファイル内でブログ投稿

のフロントマターを設定する必要があります。こちらが一例です：

```md
---
title: 'Koibumi Astro Blog Document'
description: 'Introduce how to use Koibumi Astro Blog (English Version)'
pubDate: 'Mar 26 2023'
heroImage: '/117092881_p1.webp'
pinned: true
notCompleted: false
---
```

| 属性           | 説明                                                                                         |
|---------------|---------------------------------------------------------------------------------------------|
| `title`       | ブログ投稿のタイトルです。                                                                      |
| `description` | ブログ投稿の説明です。                                                                          |
| `pubDate`     | ブログ投稿の公開日です。                                                                        |
| `heroImage`   | （オプション）ブログ投稿のカバーです。                                                          |
| `pinned`      | （オプション、デフォルトはfalse）ブログ投稿をピン留めします。                                    |
| `notCompleted`| （オプション、デフォルトはfalse）未完成としてマークします。未完成の投稿はブログリストに表示されません。 |

### 新しいブログ投稿を追加する方法

`src/content/blog`フォルダ内に`.md`ファイルを作成してください。既存のファイルをコピーしてフロントマターを編集することができます。

マークダウンの使用方法がわからない場合は、[Markdown Guide](https://www.markdownguide.org/basic-syntax/)を確認してください。

### 新しいページを追加する方法

`src/pages`フォルダ内に新しい`.astro`ファイルを作成してください。既存のファイルをコピーして編集することができます。

ページまたは外部リンクをナビゲーションバーに追加したい場合は、`src/components/Header.astro`ファイルを編集できます。

## 新しい背景を変更する方法

`src/styles/global.scss`ファイルを見つけて、`body`セレクタの`background-image`プロパティを編集してください。

```scss
body {

  /* 以下の行を編集 */
  background-image: url('/background.webp'), linear-gradient(to right, #ffcdb9, #FFC0CB);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

## ブログ投稿でLaTexを使用する方法

数式はKaTeXを使用してレンダリングされます。それをロードするために、マークダウンファイルの最初の行にcssタグを追加してください。

```md
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">
```

## ブログをホストする方法

編集の便宜のために、リポジトリをGitHubアカウントにインポートできます。その後、好きな無料の静的サイトホスティングサービスにデプロイできます。

無料ホスティングサービスの推奨：

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

これらのサービスを使用するにはドメインが必要です。

## 著作権リスト

- アバター：[遥かに込めた願いを](https://www.chichi-pui.com/posts/09ed6832-e2eb-4e80-b107-a93d0e55fd33/)
- 背景：[桜と海中の部屋イラスト素材集](https://www.pixiv.net/artworks/116840824)
- 画像：[白い花イラスト素 材集](https://www.pixiv.net/artworks/117092881)