import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: "https://powerk.codeglyn.com",
  },
  ignoreDeadLinks: true,
  title: "Powerk",
  description: "Learning made simple.",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-ZNPYDPL8JW",
      },
    ],
    [
      "script",
      {},
      `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZNPYDPL8JW');
    `,
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/brimmann/powerk-vitepress" },
    ],
    nav: [{ text: "About the Author", link: "https://me.codeglyn.com" }],
    footer: {
      message:
        "Released under the Attribution-NonCommercial-NoDerivatives 4.0 International License.",
      copyright: "Copyright © 2024 Mohammad Rashid Stanikzai",
    },
    sidebar: {
      // "/explore/": [
      //   {
      //     text: "Explore",
      //     items: [
      //       { text: "Python Crash Course", link: "/python-crash-course" },
      //       {
      //         text: "JavaScript Crash Course",
      //         link: "/javascript-crash-course/",
      //       },
      //       { text: "C++ Crash Course", link: "/cpp-crash-course" },
      //       { text: "Vue Crash Course", link: "/vue-crash-course/" },
      //       {
      //         text: "Django crash course",
      //         link: "django-crash-course",
      //       },
      //       {
      //         text: "Python Projects: Building cool stuff",
      //         link: "python-stuff",
      //       },
      //       {
      //         text: "Javascript Projects: Building cool stuff",
      //         link: "javascript-stuff",
      //       },
      //       { text: "C++ Projects: Building cool stuff", link: "cpp-stuff" },
      //     ],
      //   },
      // ],
      "/python-crash-course/": [
        {
          text: "Python Crash Course",
          items: [
            { text: "Getting Started", link: "/python-crash-course/" },
            {
              text: "Dealing with Information",
              link: "/python-crash-course/variables",
            },
            {
              text: "Doing Things Conditionally",
              link: "/python-crash-course/conditions",
            },
            {
              text: "Doing Things Repeatedly",
              link: "/python-crash-course/loops",
            },
            {
              text: "Dividing Your Code into Blocks",
              link: "/python-crash-course/functions",
            },
            {
              text: "Objects in Programs",
              link: "/python-crash-course/classes",
            },
          ],
        },
      ],
    },
  },
});
