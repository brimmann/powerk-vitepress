---
outline: [1, 3]
---

# TailwindCSS Essentials

In this tutorial, we’re gonna go over the basics of TailwindCSS. It’s a CSS framework that makes it way easier to build clean, good-looking designs—fast. You just use utility classes, no need to write your own CSS. Everyone’s using it these days, so it’s a good skill to have. It doesn’t take long to pick up. Just learn the basics and you’re set. After a bit, you’ll start thinking in utility classes instead of regular CSS.

## Project Setup

To start working on our project, we do the followings:

1. First we create folder where our code file will exist.
2. Then we we have two options to include TailwindCSS in our code:
   - Using a CDN include in our `head` tag. This option allow us to quickly setup the project and do experimentation. However this approach is not recommended for production level, when you want to finalize your website and make it available for the users.
   - Using command line tools. This approach is the standard way of working with TailwindCSS. However it needs a bit of configuration, like installing Node.js and using a front-end development environment like VIte.
3. Finally we start writing our code.

For learning, we will just start with CDN option and later on we will learn about the second option as well once you get familiar with core concepts of TailwindCSS.

So let's setup our project using CDN version of TailwindCSS. Create folder and inside the folder create an `index.html `file and put the following code in it.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="min-h-screen flex items-center justify-center">
    <h1 class="text-3xl font-bold">Hello TailwindCSS!</h1>
  </body>
</html>
```

**Explanation:**

- This code show a hello world message when you open the page.
- We used TailwindCSS to style the page. Notice that there is a heading right in the center of the page and we haven't written any CSS.

The example above demonstrate how we can use TailwindCSS to style our web pages.

## Styling with utility classes

TailwindCSS allow us to craft powerful user interface without writing any CSS. And this is made possible by TailwindCSS **utility classes**. You can see these classes we added to our elements in the previous example. Unlike other CSS frameworks like Bootstrap TailwindCSS utility classes target only one specific CSS rule. As you start working with these classes you will get used to it and you will be able to recall the names of these classes and you will know where to use which class.

You might ask why don't we just use inline style that is also something like this. But TailwindCSS is more than that:

- **Designing with constraints** — using inline styles, every value is a random. With utilities, you’re choosing styles from a predefined design system, which makes it much easier to build visually consistent UIs.
- **Hover, focus, and other states** — inline styles can’t target states like hover or focus, but Tailwind’s can right in the HTML.
- **Media queries** — you can’t use media queries in inline styles, but in TailwindCSS you can.
- **No browser conflicts** — Any page using TailwindCSS will look the same accros all browsers and environments.

**Note: You don't have to memorize these classes, you will naturally get used to them as you keep working with TailwindCSS.**

## VS code setup to write utility classes faster

There is an official extension available in VS code that will help you write utility classes faster in your HTML. You write the first few letters and it will automatically suggest which class you want use.

Here is how you can set it up:

1. Go to VS Code extensions and type Tailwinds in the search box.
2. Click on **Tailwind CSS IntelliSense** and install it.
3. After installation use **CTRL + Shift + P** to and in the box that will open type **Open Workspace Settings (JSON)** and click on it. After that paste the following content and **CTRL + S** to save it:

```JSON
{
    "tailwindCSS.experimental.configFile": "./tailwind.config.js",
    "editor.quickSuggestions": {
      "strings": true
    },
    "tailwindCSS.includeLanguages": {
      "html": "html"
    },
    "css.validate": false
}

```

4. Next create a file in the root of your project named `tailwind.config.js` and paste the following content and save it.

```JavaScript
module.exports = {
  content: ["./*.html"], // adjust this if your HTML files live somewhere else
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This will allow you to write TailwindCSS utility classes easily and fast.

## Flexbox and Grid

TailwindCSS provide us with utility classes for both Flexbox and Grid systems in CSS. It makes them super convent to use and get the results we want in a clean and neat way.

### Flexbox

Let's implement the following design using Flexbox in TailwindCSS.
![image](/imgs/wad2/tailwind/flexbox.png)

```html
<div class="w-96 bg-white p-7 flex flex-col gap-5 items-start rounded">
  <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, eaque?
    Iusto atque, provident quos, magni earum nemo accusamus corporis ipsum
    eligendi ipsam, aspernatur aliquid! Possimus modi odio provident repellat
    quos!
  </p>
  <div class="text-sm flex gap-2">
    <span>June 11, 2022</span>
    <span class="before:content-['\2022']">15 Events</span>
    <span class="before:content-['\2022']">105 Participants</span>
  </div>
  <button class="border rounded px-4 py-2 capitalize hover:outline-2">
    Watch Video
  </button>
</div>
```

**Explanation:**

- We created an HTML structure first and we then added classes to it.
- You can note that how we turned the parent `div` to Flexbox using TailwindCSS utility class.

### Grid

A perfect use case for grid would be the following design. Let's implement this with TailwindCSS.

![image](/imgs/wad2/tailwind/grid.png)

```HTML
<div class="grid grid-cols-3 gap-4">
  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">Website Redesign</h2>
    <p class="text-gray-600 mt-2">
      Redesign the homepage for a fresh, modern look. Deadline: Aug 5, 2023.
    </p>
  </div>

  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">Email Campaign</h2>
    <p class="text-gray-600 mt-2">
      Craft and launch a summer promo email blast. Deadline: Aug 10, 2025.
    </p>
  </div>

  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">Bug Fixes & QA</h2>
    <p class="text-gray-600 mt-2">
      Squash critical bugs reported in the beta release.
    </p>
  </div>

  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">SEO Optimization</h2>
    <p class="text-gray-600 mt-2">
      Boost our organic search rankings on key landing pages.
    </p>
  </div>

  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">Feature Planning</h2>
    <p class="text-gray-600 mt-2">
      Brainstorm the next set of app features. Deadline: Aug 15, 2025.
    </p>
  </div>

  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold">User Feedback</h2>
    <p class="text-gray-600 mt-2">
      Gather insights from user surveys and reviews.
    </p>
  </div>
</div>
```

- We created six cards, each card has the same style applied to it.
- We use Tailwind classes to turn the parent `div` to a Grid.
- We made it has three columns using `grid-col-3` and we added some gap too.

## Basic Styling

As you saw we have used utility classes in our previous examples to implement our designs. Like that, TailwindCSS have classes for all rules from basics to advanced. Let's see how we can use these classes for basic styling like setting margins, padding, borders, backgrounds and so on.

### Spacing

TailwindCSS gives us utility classes for both margin and padding. Using these classes we can easily set margins and padding. Let's see it in action by implementing the following design.

![image](/imgs/wad2/tailwind/spacing.png)

```HTML
<div class="max-w-sm mx-auto my-8 bg-gray-100 p-6 rounded shadow">
  <h2 class="text-2xl font-bold mb-4">Card Title</h2>
  <p class="text-gray-700 mb-6">
    This is a simple card that demonstrates how margin and padding classes work
    in Tailwind CSS. The outer div has overall padding and margin settings,
    while inner elements have spacing for a clean layout.
  </p>
  <button
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
  >
    Learn More
  </button>
</div>
```

**Explanation:**

- We created HTML structure of the card first.
- We use `mx-auto` to give it equal margins from both sides.
- We then give `p-6` class to the parent `div` which make its children has padding of `24px` that shows how we can use different utilities to control padding.

### Sizing

TailwindCSS provide extensive class controlling size of our elements. Let's build the following design and see how we can use different size related classes to control the size of our elements.

![image](/imgs/wad2/tailwind/sizing.png)

```HTML
<div class="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    class="w-full h-48 object-cover"
    src="link-to-an-image"
    alt="Product image"
  />
  <div class="p-4">
    <h3 class="text-lg font-semibold mb-2">Product Title</h3>
    <p class="text-gray-600 text-sm mb-4">
      This is a great product that you'll love. It has all the features you need
      in one package.
    </p>
    <div class="flex items-center justify-between">
      <span class="text-xl font-bold">$29.99</span>
      <button
        class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Buy Now
      </button>
    </div>
  </div>
</div>
```

**Explanation:**

- We used `max-w-xs` to set a maximum width for the parent element.
- We used `w-full` to set the width to 100% of the image and it's using `h-48` to 192px.
- Similarly there are other utilities for controlling the size of the elements.

### Typography

TailwindCSS provide utility classes to let us deal with typography. Like making text larger or smaller, bold and so many other text related things.

![image](/imgs/wad2/tailwind/typo.png)

```HTML
<article class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <header class="mb-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">
      How to Use Tailwind CSS Typography
    </h1>
    <p class="text-gray-600 text-sm">By John Doe on July 20, 2022</p>
  </header>

  <section class="space-y-6">
    <p class="text-gray-800 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam.
    </p>

    <h2 class="text-3xl font-semibold text-gray-800 mt-6 mb-4">
      Getting Started
    </h2>
    <p class="text-gray-700">
      When you start a project,
      <emp class="underline uppercase">clear and consistent</emp>
      typography goes a long way toward making your content easily digestible
      and engaging.
    </p>

    <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-700">
      "Design is not just what it looks like and feels like. Design is how it
      works." – Steve Jobs
    </blockquote>

    <h3 class="text-2xl font-medium text-gray-800 mt-6 mb-2">Key Points</h3>
    <ul class="list-disc ml-5 text-gray-700">
      <li>Use appropriate heading sizes for hierarchy.</li>
      <li>Maintain readable line heights with proper spacing.</li>
      <li>Combine margins and padding for visual balance.</li>
      <li>Use contrast to emphasize important text.</li>
    </ul><div
  class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg"
>
  <div class="flex items-center p-4 border-b border-gray-300">
    <img
      class="w-16 h-16 rounded-full border-4 border-blue-500"
      src="image-url-goes-here"
      alt="Profile picture"
    />
    <div class="ml-4">
      <h2 class="text-xl font-bold text-gray-800">Jane Doe</h2>
      <p class="text-gray-500">Software Engineer</p>
    </div>
  </div>
  <div class="p-4">
    <p class="text-gray-700 mb-4">
      Jane is an experienced software engineer specializing in front-end
      development. He loves creating beautiful and intuitive user interfaces.
    </p>
    <button
      class="w-full py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-200"
    >
      Follow
    </button>
  </div>
</div>


    <p class="text-gray-800 leading-relaxed mt-4">
      In conclusion, employing thoughtful typography not only enhances
      readability but also delivers a more professional and engaging user
      experience.
    </p>
  </section>

  <footer class="mt-8">
    <p class="text-gray-500 text-xs">© 2022 John Doe. All rights reserved.</p>
  </footer>
</article>
```

### Backgrounds

TailwindCSS has utility classes for handling backgrounds. Like background colors, images, their positioning and so on. Let's implement the following design to see how it works.

![image](/imgs/wad2/tailwind/backgrounds.png)

```HTML
<div class="relative h-96">
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(image-url-goes-here)]"
  ></div>

  <div
    class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"
  ></div>

  <div class="relative flex items-center justify-center h-full">
    <div class="text-center text-white px-4">
      <h1 class="text-6xl font-bold mb-4">Discover the World</h1>
      <p class="text-xl mb-6">
        Embark on an unforgettable journey through breathtaking landscapes.
      </p>
      <a
        href="#explore"
        class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded uppercase font-semibold"
      >
        Explore Now
      </a>
    </div>
  </div>
</div>
```

### Borders

To deal with borders of element we can use TailwindCSS border utilities. It gives us control on different aspects of borders of an element. Like border width, color, radius and so on.

![image](/imgs/wad2/tailwind/borders.png)

```HTML
<div
  class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg"
>
  <div class="flex items-center p-4 border-b border-gray-300">
    <img
      class="w-16 h-16 rounded-full border-4 border-blue-500"
      src="image-url-goes-here"
      alt="Profile picture"
    />
    <div class="ml-4">
      <h2 class="text-xl font-bold text-gray-800">Jane Doe</h2>
      <p class="text-gray-500">Software Engineer</p>
    </div>
  </div>
  <div class="p-4">
    <p class="text-gray-700 mb-4">
      Jane is an experienced software engineer specializing in front-end
      development. He loves creating beautiful and intuitive user interfaces.
    </p>
    <button
      class="w-full py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-200"
    >
      Follow
    </button>
  </div>
</div>
```

## Advanced Styling (Bonus Lesson)

TailwindCSS provide utilities classes for some advanced scenarios like animation, effects transformation, interactivity and so on.

### Effects

![image](/imgs/wad2/tailwind/effects.png)

```html
<div class="p-10 bg-white rounded flex gap-8 justify-between w-2/4 mx-auto">
  <div class="shadow-md rounded text-center p-20">shadow-md</div>
  <div class="shadow-lg rounded text-center p-20">shadow-lg</div>
  <div class="shadow-xl rounded text-center p-20">shadow-xl</div>
</div>
```

### Filters

TailwindCSS has utilities for doing filters on elements including image elements. Let's one in action.

![image](/imgs/wad2/tailwind/filters.png)

```html
<div class="p-10 bg-white rounded flex gap-8 justify-between w-3/4 mx-auto">
  <img class="blur-xs" src="https://picsum.photos/400/300?random=1" />
  <img class="grayscale" src="https://picsum.photos/400/300?random=1" />
  <img class="blur-xs grayscale" src="https://picsum.photos/400/300?random=1" />
</div>
```

### Transition and Animation

TailwindCSS provide utilities for transition and animation as well. Let's see an example. This example is taken from TailwindCSS documentation.

![image](/imgs/wad2/tailwind/transitions.png)

```html
<div
  class="flex justify-around gap-8 text-sm leading-6 font-bold text-white w-1/4 mx-auto"
>
  <div class="flex shrink-0 flex-col items-center">
    <p
      class="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400"
    >
      duration-150
    </p>
    <button
      class="rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white duration-150 ease-in-out hover:scale-125"
    >
      Button A
    </button>
  </div>
  <div class="flex shrink-0 flex-col items-center">
    <p
      class="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400"
    >
      duration-300
    </p>
    <button
      class="rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white duration-300 ease-in-out hover:scale-125"
    >
      Button B
    </button>
  </div>
  <div class="flex shrink-0 flex-col items-center">
    <p
      class="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400"
    >
      duration-700
    </p>
    <button
      class="rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white duration-700 ease-in-out hover:scale-125"
    >
      Button C
    </button>
  </div>
</div>
```

### Transform

TailwindCSS utilities for transformation help us do transformation on our elements like rotating it, scaling it and so on. Let's see an example.

![image](/imgs/wad2/tailwind/transform.png)

```html
<div
  class="p-10 bg-white rounded flex gap-8 justify-between w-3/4 mx-auto mb-8"
>
  <img class="-rotate-45" src="https://picsum.photos/400/300?random=1" />
  <img class="rotate-90" src="https://picsum.photos/400/300?random=1" />
  <img class="rotate-210" src="https://picsum.photos/400/300?random=1" />
</div>
```

### Interactivity

![image](/imgs/wad2/tailwind/inter.png)

```html
<div
  class="flex justify-around gap-8 text-sm leading-6 font-bold text-white w-1/4 mx-auto"
>
  <button
    type="button"
    class="w-full cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300 sm:w-auto dark:disabled:bg-indigo-800 dark:disabled:text-indigo-400"
    tabindex="-1"
  >
    Submit</button
  ><button
    type="button"
    class="w-full cursor-progress rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300 sm:w-auto dark:disabled:bg-indigo-800 dark:disabled:text-indigo-400"
    tabindex="-1"
  >
    Saving...</button
  ><button
    type="button"
    disabled=""
    class="w-full cursor-not-allowed rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300 sm:w-auto dark:disabled:bg-indigo-800 dark:disabled:text-indigo-400"
    tabindex="-1"
  >
    Confirm
  </button>
</div>
```

## Tables

TailwindCSS also provide some useful utilities for tables which helps us create clean and neat tables.

![image](/imgs/wad2/tailwind/tables.png)

```HTML
<div class="px-4 py-8 sm:px-8">
  <table
    class="w-full border-separate border-spacing-2 border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800"
  >
    <thead class="bg-gray-50 dark:bg-gray-700">
      <tr>
        <th
          class="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
        >
          Province
        </th>
        <th
          class="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
        >
          City
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          KPK
        </td>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Peshawar
        </td>
      </tr>
      <tr>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Balochistan
        </td>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Quita
        </td>
      </tr>
      <tr>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Panjab
        </td>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Lahore
        </td>
      </tr>
      <tr>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Sindh
        </td>
        <td
          class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          Karachi
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Responsive Design

Let's we have a layout like the following. When user views it on a _desktop_ it should like the first picture and if the user visit the same page a from a mobile devices I should automatically look like the second picture. To do something like that it will be very tedious task if we want to use only CSS. All the selectors and than defining rules which can possibly be duplicated. However TailwindCSS allows us to do this a clean in neat way without having to touch CSS or media queries.

The way TailwindCSS does it is that every utility class can be applied conditionally based on different screen sizes. TailwindCSS use mobile-first approach which means that we implement our design initially for mobile screen and then gradually apply different styles at different screen sizes (breakpoints) as it gets bigger.

First, make sure you've added the viewport meta tag to the `<head>` of your document:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the `:` character:

```HTML
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="image-link" />
```

**Explanation:**

- The code above create an image tag and apply some utility classes
- It shows that the screen size is not specified device make the width of image `w-16` (equal to `64px`) and if it is the screen size is medium (`md`) make the width `w-32` and for larger screen (`lg`) make it `w-48`.

There are five default breakpoints in TailwindCSS:

| Breakpiont | Minimum Screen Width | CSS                               |
| ---------- | -------------------- | --------------------------------- |
| `sm`       | 640px (40rem)        | `@media (width >= 40rem) { ... }` |
| `md`       | 768px (48rem)        | `@media (width >= 48rem) { ... }` |
| `lg`       | 1024px (64rem)       | `@media (width >= 64rem) { ... }` |
| `xl`       | 1280px (80rem)       | `@media (width >= 80rem) { ... }` |
| `2xl`      | 1536px (96rem)       | `@media (width >= 96rem) { ... }` |

Lets implement the following design now. This example is taken from TailwindCSS official documentation.

**Layout for Desktop**

![image](/imgs/wad2/tailwind/res1.png)

**Layout for Mobile**

![image](/imgs/wad2/tailwind/res2.png)

```HTML
<div
  class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
>
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="https://picsum.photos/400/300?random=1"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div
        class="text-sm font-semibold tracking-wide text-indigo-500 uppercase"
      >
        Company retreats
      </div>
      <a
        href="#"
        class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
      >
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and
        take in some sunshine? We have a list of places to do just that.
      </p>
    </div>
  </div>
</div>

```

## Hover and Focus

Every utility class in Tailwind can be applied *conditionally* by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, to apply the `bg-sky-700` class on hover, use the `hover:bg-sky-700` class:

```HTML
<button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
```

**Explanation:**

- This code shows a button when it is in normal state it background is `bg-sky-500` and if you hover over it its background changes to `bg-sky-700`.

Let's take a look at the following example and see how it works in action. This is example is also taken from TailwindCSS official documentations.

This creates a button and when you hover or focus on it, its look changes.

```HTML
<button
  type="button"
  class="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500"
>
  Save changes
</button>
```

## Dark mode

In TailwindCSS you can prefix utilities to be applied according to the system mode, dark or light. Using this utilities we can easily implement our dark and light versions of our theme.

Lets take a look at the following example. It is taken from TailwindCSS official documentations with some modifications.

![image](/imgs/wad2/tailwind/dark.png)

```HTML
<div
  class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 max-w-80 mx-auto"
>
  <h3
    class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight"
  >
    Writes upside-down
  </h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including
    upside-down. It even works in outer space.
  </p>
</div>
```

## Arbitrary values

Notice that all the utility classes we’ve used so far come with fixed preset values—like p-2, p-3, p-10, w-32, etc. But sometimes, you might want to use your own custom value. For example, maybe you want padding to be exactly 179px.

Tailwind lets you do that. You can use square brackets to set custom values, like this: p-[170px].

Just replace the number with your own value inside brackets—[your_value_here]—and Tailwind will apply it. This works for padding, margin, width, height, colors, and more.

We can have something like this:

```html
<div class="bg-[#bada55] p-[179px] text-[22px]">
  <!-- ... -->
</div>
```

## Development environment using Node.js (Bonus Lesson)

The development environment we have been using is not the right way to develop web pages using TailwindCSS. The reason is that it download all the utility classes into our web site and the size of TailwindCSS files is more than 1 MB. This drastically slow down our websites.

The right way to develop production-ready website with TailwindCSS is to setup a Node.js based development environment which only include the classes we used which can't more than a few KBs.

To setup the environment we go through the following steps.

1. Install Node.js (preferably through NVM for better Node.js version management).
2. Use Vite to setup a development server for your front-end development.
3. Initialize the project and install tailwindcss and start building.

To install Node.js using NVM refer to the following tutorials:

- https://dev.to/naseelniyas/install-node-using-nvm-in-under-3-mins-2djk
- https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows (For Windows Users)
- https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating (For Linux and Mac Users)

Once you have installed node let's do the following to initialize our project that uses TailwindCSS:

1. Create a new folder for your project
2. Open it in VS Code
3. Go Terminal in VS Code and type the following commands to initialize the project.

```shell
npm create vite@latest . -- --template vanilla
npm install
npm install tailwindcss @tailwindcss/vite
```

4. Next create a file named `vite.config.js` in the root directory and put the following content in it:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

5. Next run the following command to run your development server.

```shell
npm run dev
```

6. Go to this URL http://localhost:5173 in your browser to see your first Vite based web-page.

You can see your initial web-page in the browser but we will change it to our desired page and clear the default things a bit first. To do the cleaning, do the following:

- Delete everything in the sub-folder named `src` in the root of your project except for `main.js` and `style.css`.
- Clear the content of `index.html` file and add the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body class="min-h-screen flex items-center justify-center">
    <h1 class="text-3xl font-bold">Hello TailwindCSS!</h1>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

- Clear the content of `main.js` and add the following code:

```js
import "./style.css";
```

- Clear the content of `style.css` as well and add the following code in it:

```css
@import "tailwindcss";
```

Now go visit http://localhost:5173 again and your will see that very first Hello TailwindCSS! page we have created in the very first section.

Now you can go ahead and do whatever you wanna do to your HTML using TailwindCSS. And extra perk you can get from Vite is that you don't have to refresh your page on the browser when changing something your code. Vite will do it for you.

Why is this a standard way to develop things while using TailwindCSS?

The reason is that any front-end job you do is have to be done in a development environment first and then when finalized everything you and online it. So once you are done with the coding and ready to make it online just use the following command:

```shell
npm run build
```

This command will create very minimal(very small size) i`ndex.html` and`style.css`file for you that you can host anywhere (names can be different, it also create script file). And your website will be way faster because this command only keeps necessary things and clean all the extra things from your code that you don't use.

## Customization (Bonus Tip)

You can replace the default's of TailwindCSS by using theme variables. And you will need to do so as you get used to TailwindCSS. Refer the the following documentation to learn more about it.

- https://tailwindcss.com/docs/theme
