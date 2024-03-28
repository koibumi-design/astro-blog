---
title: 'Koibumi Astro Blog Document'
description: 'Introduce how to use Koibumi Astro Blog (English Version)'
pubDate: 'Mar 26 2023'
heroImage: '/117092881_p1.webp'
pinned: true
notCompleted: false
---

This is a blog template build with [Astro](https://astro.build). It started from the minimal
official [Astro blog template](https://astro.build/themes/details/blog/) but
use [Koibumi Design System](https://solid.koibumi.art) for styling.

This is a simple template that you can customize it easily. For advanced usage, you can check
the [Astro documentation](https://docs.astro.build).

## Site Profile Configuration

You can configure the site profile in `src/consts.ts` file. Here is the default configuration:

```ts
export const SITE_TITLE = 'Koibumi Blog';

export const SITE_DESCRIPTION = 'A blog about SolidJS, Astro, and koibumi design.';

export const FAVICON_SRC = '/favicon.svg';

export const AVATAR_SRC = '/avatar.avif';

export const BIO = " Welcome to my website! I write about programming, technology, and other things that interest me."

export const GLOBAL_STYLE: 'quartz' | 'glass' | 'lightGlass' = 'glass'

export const COPYRIGHT_NAME = 'Koibumi Design';
```

| Attribute          | Description                                                                                |
|--------------------|--------------------------------------------------------------------------------------------|
| `SITE_TITLE`       | The title of the site.                                                                     |
| `SITE_DESCRIPTION` | The description of the site.                                                               |
| `FAVICON_SRC`      | The path of the favicon.                                                                   |
| `AVATAR_SRC`       | The path of the avatar.                                                                    |
| `BIO`              | The bio of the author.                                                                     |
| `GLOBAL_STYLE`     | The global style of the site. You can choose one from `quartz`, `glass`, and `lightGlass`. |
| `COPYRIGHT_NAME`   | The name of the copyright.                                                                 |

### How to change the favicon and avatar

You can find the avatar and favicon in `/public` folder. You can replace them with your own images.

If you change the name of the file, for example, `favicon.svg` to `favicon.ico`, you need to also change
the `FAVICON_SRC` or `AVATAR_SRC` in `src/consts.ts` file.

### How to set the language

Setting the language by editing the `const.ts` is not supported yet. You can set the language by editing the `lang`
attribute in the `html` tag in these files:

- `src/layouts/BlogPost.astro`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`

### How to set your contact information

Setting contact information is not supported yet. You can only edit the `src/pages/index.astro` file manually.

Edit this pattern:

```html

<div id="contact">
    <a class="icon-link" href="https://github.com/koibumi-design" target="_blank" aria-label="GitHub">
        <GitHubIcon/>
    </a>
</div>
```

To get the icons, you can use the [Simple Icons](https://simpleicons.org) website.

## Frontmatter of the blog post

You must set the frontmatter of the blog post in the markdown file. Here is an example:

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

| Attribute      | Description                                                                                                |
|----------------|------------------------------------------------------------------------------------------------------------|
| `title`        | The title of the blog post.                                                                                |
| `description`  | The description of the blog post.                                                                          |
| `pubDate`      | The publication date of the blog post.                                                                     |
| `heroImage`    | (optional) The cover of the blog post.                                                                     |
| `pinned`       | (optional, default is false) Pin the blog post.                                                            |
| `notCompleted` | (optional, default is false) Mark as not completed. Not completed post will not be shown in the blog list. |

### How to add a new blog post

Just create a `.md` file in the `src/content/blog` folder. You can copy the existing file and edit the frontmatter.

If you don't know how to use markdown, you should check
the [Markdown Guide](https://www.markdownguide.org/basic-syntax/).

### How to add a new page

Create a new `.astro` file in the `src/pages` folder. You can copy the existing file and edit it.

If you want to add the page or external link to the navigation bar, you can edit the `src/components/Header.astro` file.

## How to change a new background

Find `src/styles/global.scss` file and edit the `background-image` property in the `body` selector.

```scss
body {

  /* Edit the following line */
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

## How to use LaTex in the blog post

Math is rendered using KaTeX. To load that, add css tag in the first line of the markdown file.

```md
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">
```

## How to host my blog

For convenience to editing, you can import the repository to your GitHub account. Then, you can deploy it to any free static site hosting service you like.

Recommend free hosting services:

- [Cloudflare Pages](https://pages.cloudflare.com/) 
- [Vercel](https://vercel.com/) 
- [Netlify](https://www.netlify.com/) 

A domain is required to use these services.

## Attribution List

- avatar: [遥かに込めた願いを](https://www.chichi-pui.com/posts/09ed6832-e2eb-4e80-b107-a93d0e55fd33/)
- background: [桜と海中の部屋イラスト素材集](https://www.pixiv.net/artworks/116840824)
- hero images: [白い花イラスト素材集](https://www.pixiv.net/artworks/117092881)