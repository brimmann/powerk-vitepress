import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Powerk",
  description: "This is my blog where I will be posting tutorials.",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Explore", link: "/explore" }],

    sidebar: {
      "/explore/": [
        {
          text: "Explore",
          items: [
            { text: "Python Crash Course", link: "/python-crash-course" },
            {
              text: "JavaScript Crash Course",
              link: "/javascrip-crash-course",
            },
            { text: "C++ Crash Course", link: "/cpp-crash-course" },
            { text: "Vue Crash Course", link: "/vue-crash-course" },
            {
              text: "Python Projects: Building cool stuff",
              link: "python-projects",
            },
            {
              text: "Javascript Projects: Building cool stuff",
              link: "javascript-projects",
            },
            { text: "C++ Projects: Building cool stuff", link: "cpp-projects" },
          ],
        },
      ],
      "/python-crash-course/": [
        {
          text: "Python Crash Course",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
    },
  },
});
