# Style Your Counter App with Tailwind: A Beginner’s Guide

In this tutorial we will build the same counter app we built in the last lab. JavaScript stays the same but this time we will style it with Tailwind CSS.

Prerequisites:
 - Familiarity with Basic JavaScript
 - Familiarity how to use Command Line to create files and folders
 - Familiarly with how to open your project in VS Code 
 - App we build in previous Lab, link is given:
	 -  https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p

## Setting Up Tailwind CSS Project

Use the following command to create your project and open it in VS Code:

```Shell
mkdir counter-app-tailwindcss
cd counter-app-tailwindcss
code .
```

Once the project is opened in VS Code create `index.html` file and add the following code.

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter App Tailwind</title>
</head>
<body>
    <h1>Hello Tailwind CSS!</h1>
</body>
</html>
```

**Quick Explanation**
- This is simple html page with a title set and heading tag that says *Hello Tailwind CSS*

If you open it you will see the heading. We haven't added any tailwind related thing yet.

Now let's enable Tailwind CSS for our project and change the color of the heading using Tailwind CSS not normal CSS.

```shell
npm install -D tailwindcss
npx tailwindcss init
```

**Quick Explanation**
- The first command install important packages that we need to enable Tailwind CSS in our project. But you don't need to worry about it to much, just enter the command and that's it. Always follow these steps when wanted to use Tailwind CSS in your project.
- The second command, create a file in our project folder. If you haven't noticed yet, see there is file named `tailwind.config.js`. This is where we would put all settings related to our Tailwind CSS. But don't worry about it too, you will get familiar with it as you keep using Tailwind CSS for your projects. For now we will only put one setting into it.

Open your the newly created file `tailwind.config.js` and make sure it looks like this.

`tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Quick Explanation**
- We added `'./*.{html}'` in to the `content` array in this file.
- This setting will tell the Tailwind CSS that all files that end with `.html` will use Tailwind CSS.

We are almost there to finish the setup. Now let's create new file named `input.css` and put the following code inside it.

`input.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Quick Explanation**
- This is always a part of the setup and you really don't have know about it that what is this. Just do it whenever you want to use Tailwind CSS in you project. We really don't want to go into extra details right now.

**Note:** Click on the following link first and install Tailwind CSS extension for your VS Code. It isn't necessary to have it but it will help you write code faster.
- [Install Tailwind CSS Extension](vscode:extension/bradlc.vscode-tailwindcss)

We are ready now, let's change the color of the heading with Tailwind CSS. In Tailwind CSS you don't need to write any CSS rules in `style.css` file. You just need to know what classes to add to your element.

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter App Tailwind</title>
    <link rel="stylesheet" href="output.css">
</head>
<body>
    <h1 class="text-red-800">Hello Tailwind CSS!</h1>
</body>
</html>
```

**Quick Explanation**
- We only added a class to `h1` element named `text-red-800` which means the text of this heading should red and 800 says how intense the color is.
- We also linked a style-sheet named `output.css`. It should be there always as part of the process. 

Now the final step of the setup. Run the following command to apply tailwind styles to see the heading's color is changed to red.

```shell
npx tailwindcss -i ./input.css -o ./output.css
```

- This command apply the tailwind classes you placed on your tags and make a style sheet named `output.css` which is where the definition for the classes and CSS rules you used will be generated automatically that will be used by the browser. 


That's all about Tailwind CSS. You pick up classes that you need from the following link and add it to your elements then everything will be taken care of for you. You will realize the power of Tailwind CSS once you keep using it for your projects. You write almost zero CSS manually.

- https://tailwindcss.com/docs/




## Converting the Counter App to Tailwind CSS Version

So for our counter project what we need it to do is to keep he the HTML and JavaScript the same and delete our CSS style-sheet and apply all those styles through Tailwind CSS classes.

So lets do it. First copy the HTML from that project this this HTML.

`index.html`
```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter App</title>
    <link rel="stylesheet" href="output.css" />
  </head>

  <body>
    <h1>Counter App</h1>

    <p class="counter-preview">0</p>
    <div class="buttons" id="allBtns">
      <button class="decrement" id="decrement">Decrement</button>
      <button class="reset" id="reset">Reset</button>
      <button class="increment" id="increment">Increment</button>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

**Quick Explanation**
- Same HTML as before.
- Only change style-sheet from `style.css` to `output.css`

Now lets create `script.js` file and copy all our JavaScript to it from that project.
`script.js`
```javascript
const display = document.querySelector(".counter-preview");
const allBtns = document.querySelector("#allBtns");

allBtns.addEventListener("click", counter);

let value = 0;
function counter(e) {
  const btn = e.target.id;
  if (btn === "increment") {
    value += 1;
  } else if (btn === "decrement") {
    value -= 1;
  } else {
    value = 0;
  }

  display.textContent = value;
}
```

**Quick Explanation**
- Nothings changes and everything stays the same.

 If you open your `index.html` in the browser you will see everything works and the only thing missing is the styles which we will add in a moment using Tailwind CSS. 


Now modify your `index.html` and add corresponding classes to each element. Use the Tailwind CSS Docs to find what class represents what kind of styles. So your HTML code should look like something like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter App</title>
    <link rel="stylesheet" href="output.css">
  </head>

  <body
    class="m-0 box-border font-sans text-base text-[#333] w-[400px] mx-auto flex flex-col gap-10 items-center justify-center min-h-[90vh]"
  >
    <h1 class="uppercase">Counter App</h1>

    <p class="text-[8rem] font-bold text-[#333] counter-preview">0</p>

    <div id="allBtns" class="flex">
      <button
        id="decrement"
        class="bg-[#4caf50] text-white border-none py-[10px] px-[20px] rounded-md text-lg cursor-pointer mt-5 ml-4 decrement"
      >
        Decrement
      </button>
      <button
        id="reset"
        class="bg-[#f44336] text-white border-none py-[10px] px-[20px] rounded-md text-lg cursor-pointer mt-5 ml-4 reset"
      >
        Reset
      </button>
      <button
        id="increment"
        class="bg-[#2196f3] text-white border-none py-[10px] px-[20px] rounded-md text-lg cursor-pointer mt-5 ml-4 increment"
      >
        Increment
      </button>
    </div>

    <script src="./script.js"></script>
  </body>
</html>

```


## Summary
- To use Tailwind CSS you need to setup your project first properly.
- Tailwind CSS is all about classes that are already there for us to use according to our need.
- You then apply those classes which generate a final style-sheet that you include with your HTML pages.
- You write almost zero CSS.
- To easily type Tailwind CSS classes with autocomplete in your VS Code you need to install its extension.