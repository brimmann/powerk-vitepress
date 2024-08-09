import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Powerk",
  description: "This is my blog where I will be posting tutorials.",
  head: [['link', {rel: 'icon', href: '/logo.svg'}]],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Explore', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Explore',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  }
})
