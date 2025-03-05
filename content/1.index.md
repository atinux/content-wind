---
navigation:
  title: Home
---

# Content Wind

A lightweight Nuxt theme to build a Markdown driven website, based on [Nuxt Content](https://content.nuxt.com), [TailwindCSS](https://tailwindcss.com) and [Iconify](https://iconify.design) ✨

## Features

- Write pages in Markdown
- Use [layouts](https://nuxt.com/docs/guide/directory-structure/layouts) in Markdown pages
- Enjoy meta tag generation
- Generated navigation from pages
- Leverage TailwindCSS Typography
- Switch between light & dark mode
- Access 100,000 icons from 100+ icon sets
- Highlight code blocks with [Shiki](https://shiki.matsu.io)
- Create Vue components and use them in Markdown
- Deploy on any Node or Static hosting: GH Pages, Vercel, Netlify, Heroku, etc.
- Live edit on [Nuxt Studio](https://nuxt.studio)

## Setup

::button-link
---
external: true
href: https://stackblitz.com/github/Atinux/content-wind/?file=content%2F1.index.md
icon: simple-icons:stackblitz
---
Play online on Stackblitz
::

Open a terminal and run the following command:

```bash
npx nuxi init -t github:atinux/content-wind my-website
```

Follow the instructions in the terminal and you are ready to go 🚀

## Usage

This template has some built-in features to make it as easy as possible to create a content-driven website.

### Pages

Create your Markdown pages in the `content/` directory:

```md [content/index.md]
# My title

This first paragraph will be treated as the page meta description.
```

You can overwrite meta tags by using front-matter:

```md [content/index.md]
---
title: 'Custom title'
description: 'Custom meta description'
image: 'Custom image injected as `og:image`'
---

# My title

This first paragraph will be treated as the page meta description.
```

This is done thanks to Nuxt Content's [document-driven mode](https://content.nuxtjs.org/guide/writing/document-driven) of Nuxt Content.

### Navigation

The navigation is generated from your pages, you can take a look at the [`<AppNavbar>`](https://github.com/Atinux/content-wind/blob/main/components/AppNavbar.vue) component to see how it works.

It uses the [Navigation](https://content.nuxt.com/usage/navigation) from Nuxt Content to fetch the navigation object.

To customize the title displayed in the navigation, you can set the `navigation.title` property in the front-matter of your pages:

```md
---
navigation.title: 'Home'
---

# Welcome to my site

With a beautiful description
```

### Theme configuration

You can configure Content Wind global configuration in the `app.config.ts` file:

```ts [signature]
interface AppConfigInput {
  cover?: string, // default: '/cover.jpg'
  socials?: {
    twitter?: string
    github?: string
    mastodon?: string
  }
}
```

Example of settings Twitter and GitHub icons in the navbar:

```ts [app.config.ts]
export default defineAppConfig({
  socials: {
    twitter: 'Atinux',
    github: 'Atinux/content-wind'
    mastodon: '@atinux@webtoo.ls'
  }
})
```

### Icons

Use any icon from [icones.js.org](https://icones.js.org) with the `<Icon>` component:

```html
<Icon name="i-lucide-music" />
```

You can also use it in your Markdown:

```md
:icon{name="i-lucide-music"}
```

Will result in :icon{name="i-lucide-music"}

Learn more on [`@nuxt/icon`](https://github.com/nuxt/icon) documentation.

### Code Highlight

It supports code highlighting with Shiki and as well as different [VS Code themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes).

::markdown-block
\`\`\`ts
export default () => 'Hello Content Wind'
\`\`\`
::

Will result in:

```ts
export default () => 'Hello Content Wind'
```

Updating the theme is as simple as editing your `nuxt.config`:

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'one-dark-pro',
    }
  }
})
```

Learn more in the [Content Code Highlight section](https://content.nuxt.com/get-started/configuration#highlight).

### Vue Components

Add Vue components into the `components/` directory and start using them in Markdown.

See the `<MarkdownBlock>` component in [`components/MarkdownBlock.vue`](https://github.com/Atinux/content-wind/blob/main/.demo/components/MarkdownBlock.vue).

By leveraging the [`<ContentSlot>`](https://content.nuxt.com/components/content-slot) component from Nuxt Content, you can use both slots and props in Markdown thanks to the [MDC syntax](https://content.nuxt.com/usage/markdown).

## Deployment

[![Deploy to NuxtHub](https://hub.nuxt.com/button.svg)](https://hub.nuxt.com/new?repo=atinux/content-wind)

:br

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatinux%2Fcontent-wind)

:br

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/atinux/content-wind)

### Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
npm run generate
```

The `dist/` directory is ready to be deployed (symlink to `.output/public`), [learn more on Nuxt docs](https://nuxt.com/docs/getting-started/deployment#static-hosting).

### Node server

Build the application for production:

```bash
npm run build
```

Start the server in production:

```bash
node .output/server/index.mjs
```

Learn more on [Nuxt docs](https://nuxt.com/docs/getting-started/deployment) for more information.

---

You are at the end of the page, you can checkout the [about page](/about) or the [GitHub repository](https://github.com/Atinux/content-wind) and give a :icon{name="i-lucide-star"}

Thanks for reading and happy writing, [Atinux](https://twitter.com/Atinux).
