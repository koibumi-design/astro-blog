---
title: '恋文 Astro Blog 主题文档'
description: '介绍如何使用恋文 Astro 主题博客（中文文档）'
pubDate: 'Mar 27 2023'
heroImage: '/117092881_p0.webp'
pinned: true
---

> 这个文档由AI从英文翻译而来，如果你有更好的翻译，请提交一个PR。

这是一个使用[Astro](https://astro.build)构建的博客模板。它从最简单的官方[Astro博客模板](https://astro.build/themes/details/blog/)开始，但使用[Koibumi设计系统](https://solid.koibumi.art)进行样式设计。

这是一个简单的模板，您可以轻松自定义。对于高级用法，您可以查看[Astro文档](https://docs.astro.build)。

## 站点配置文件

您可以在`src/consts.ts`文件中配置站点概况。这里是默认配置：

```ts
export const SITE_TITLE = 'Koibumi Blog';

export const SITE_DESCRIPTION = 'A blog about SolidJS, Astro, and koibumi design.';

export const FAVICON_SRC = '/favicon.svg';

export const AVATAR_SRC = '/avatar.avif';

export const BIO = " Welcome to my website! I write about programming, technology, and other things that interest me."

export const GLOBAL_STYLE: 'quartz' | 'glass' | 'lightGlass' = 'glass'

export const COPYRIGHT_NAME = 'Koibumi Design';
```

| 属性              | 描述                                                                         |
|-------------------|----------------------------------------------------------------------------|
| `SITE_TITLE`      | 站点的标题。                                                                 |
| `SITE_DESCRIPTION`| 站点的描述。                                                                 |
| `FAVICON_SRC`     | favicon的路径。                                                              |
| `AVATAR_SRC`      | 头像的路径。                                                                 |
| `BIO`             | 作者的简介。                                                                 |
| `GLOBAL_STYLE`    | 站点的全局样式。您可以从`quartz`、`glass`和`lightGlass`中选择一种。           |
| `COPYRIGHT_NAME`  | 版权名称。                                                                   |

### 如何更改favicon和头像

您可以在`/public`文件夹中找到头像和favicon。您可以将它们替换为您自己的图片。

如果您更改了文件名，例如，`favicon.svg`到`favicon.ico`，您也需要在`src/consts.ts`文件中更改`FAVICON_SRC`或`AVATAR_SRC`。

### 如何设置语言

通过编辑`const.ts`来设置语言目前还不支持。您可以通过编辑以下文件中的`html`标签中的`lang`属性来设置语言：

- `src/layouts/BlogPost.astro`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`

### 如何设置您的联系信息

目前还不支持设置联系信息。您只能手动编辑`src/pages/index.astro`文件。

编辑此模式：

```html

<div id="contact">
    <a class="icon-link" href="https://github.com/koibumi-design" target="_blank" aria-label="GitHub">
        <GitHubIcon/>
    </a>
</div>
```

要获取图标，您可以使用[Simple Icons](https://simpleicons.org)网站。

## 博客帖子的前言

您必须在markdown文件中设置博客帖子的前言。这里是一个例子：

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

| 属性            | 描述                                                                                   |
|-----------------|---------------------------------------------------------------------------------------|
| `title`         | 博客帖子的标题。                                                                        |
| `description`   | 博客帖子的描述。                                                                        |
| `pubDate`       | 博客帖子的发布日期。                                                                     |
| `heroImage`     | （可选）博客帖子的封面。                                                                 |
| `pinned`        | （可选，默认为false）固定博客帖子。                                                      |
| `notCompleted`  | （可选，默认为false）标记为未完成。未完成的帖子将不会显示在博客列表中。                   |

### 如何添加新的博客帖子

只需在`src/content/blog`文件夹中创建一个`.md`文件。您可以复制现有文件

并编辑前言。

如果您不知道如何使用markdown，您应该查看[Markdown指南](https://www.markdownguide.org/basic-syntax/)。

### 如何添加新页面

在`src/pages`文件夹中创建一个新的`.astro`文件。您可以复制现有文件并编辑。

如果您想将页面或外部链接添加到导航栏，您可以编辑`src/components/Header.astro`文件。

## 如何更改新的背景

找到`src/styles/global.scss`文件并编辑`body`选择器中的`background-image`属性。

```scss
body {

  /* 编辑以下行 */
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

## 如何在博客帖子中使用LaTex

使用KaTeX渲染数学公式。要加载它，请在markdown文件的第一行添加css标签。

```md
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">
```

## 如何托管我的博客

为了方便编辑，您可以将仓库导入到您的GitHub账户。然后，您可以将其部署到任何您喜欢的免费静态站点托管服务。

推荐免费托管服务：

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

使用这些服务需要一个域名。

## 借物表

- avatar: [遥かに込めた願いを](https://www.chichi-pui.com/posts/09ed6832-e2eb-4e80-b107-a93d0e55fd33/)
- background: [桜と海中の部屋イラスト素材集](https://www.pixiv.net/artworks/116840824)
- hero images: [白い花イラスト素材集](https://www.pixiv.net/artworks/117092881)