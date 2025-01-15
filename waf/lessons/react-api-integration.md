---
outline: [2, 3]
---

# How to Connect a React App to a Back-End

**Outline**
1. How Server and Client Work Together
2. Building the Front-end Client in Pure HTML/CSS
3. Building the Front-end Client in React
4. Building the REST API in Node/Express
5. Integrating the API with React Client
6. Serving Data from Database Instead of File
7. Adding New Records and Updating Existing Records

## Section 1: How Server and Client Work Together

In simple words server and client are two programs that talk to each other via internet (network) show on in (Figure 1.1).

*Figure 1.1*: what actually client server is
![image](/imgs/waf/server1.png)

You can see that a client-server model is simply communication between two programs. These programs can run on the same computer or on separate computers. The key idea is that they communicate through a network. Typically, these two programs are on separate computers — one on your computer, which is the browser, and the other on a powerful computer in a data center, commonly referred to as a server.

Let's take an example. Suppose there is a website that displays a specific list of university students. In this case, a program is running on the university's server that stores the student data. When you open your browser and visit a specific link provided by the university, the browser on your computer sends a request to the university's server where that program is running. The server then responds by sending the list of students, which your browser displays for you. See (Figure 1.2).

*Figure 1.2*: shows how student list comes from the server to the client
![image](/imgs/waf/server1.png)

In the next sections, we’ll build all the parts shown in the figure — the program that runs in the browser (client-side) and the program that runs on the server (server-side). Since we don’t have access to a university server, we’ll run both programs on the same computer.


## Section 2: Building the Front-end Client in Pure HTML/CSS

In this section, we’ll make a simple browser (client-side) program using plain HTML and CSS. We’re not connecting it to a server yet. For now, think of it as a placeholder for the student list that we’ll later get from the server in a more organized way.

(Figure 2.1) shows the design for how our one page website would look like
![image](/imgs/waf/design.png)

Let's start setting up the files and folders for our project.

1. **Create a folder** named `final-lesson`.
2. **Inside `final-lesson`**, create another folder called `pure-html-css`.
3. **Open `pure-html-css`** in VS Code.
4. **Inside `pure-html-css`**, create two files:
    - `index.html`
    - `styles.css`


Now, open `index.html` and write the following HTML code. Type it manually instead of copying it to better understand its structure and content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="style.css" rel="stylesheet" />
    <title>Student Records</title>
  </head>
  <body>
    <header>
      <h1>Student Records</h1>
    </header>

    <table>
      <thead>
        <tr>
          <th>Series ID</th>
          <th>Student Name</th>
          <th>Father Name</th>
          <th>Student Reg No</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1001</td>
          <td>John Doe</td>
          <td>Michael Doe</td>
          <td>REG-23456</td>
          <td>Fall 2023</td>
        </tr>
        <tr>
          <td>1002</td>
          <td>Jane Smith</td>
          <td>Robert Smith</td>
          <td>REG-23457</td>
          <td>Spring 2024</td>
        </tr>
        <tr>
            <td>1003</td>
            <td>Ahmad Ali</td>
            <td>Abdullah</td>
            <td>REG-23458</td>
            <td>Spring 2024</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

Now open `styles.css` and write this CSS code to style our table for a better look.

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #83d63f;
  padding: 20px;
  text-align: center;
}

table {
  margin: 50px auto;
  border-collapse: collapse;
  width: 80%;
  text-align: left;
}

th,
td {
  border: 1px solid #999;
  padding: 10px;
}

th {
  background-color: #dedede;
}
```

Open your HTML file, and you’ll see a webpage with a sample student list.

So far, we’ve made a simple webpage using basic HTML and CSS that works right in your browser.

In the next section, we’ll remake this page using React. Why? Because React makes it easier to add cool features and create a more interactive page. It also makes it simple to get student data from a server.

## Section 3: Building the Front-end Client in React

Let's setup our new project for React now. Open terminal within `waf-basics-1` and type the following command. 

```terminal
npm create vite@latest react-front-end -- --template react
```

This will create a react project in that folder. Use the following commands:

```terminal
cd react-front-end
code .
```

This command will first take you to the project's folder in terminal and then will open that folder in VS Code.

If you are not comfortable with command line, how you open projects in vs code and how your create them read the following short articles and then return back to this tutorial.

- https://www.robinwieruch.de/developer-setup/
- https://www.robinwieruch.de/react-js-windows-setup/

Now enter the following two commands:

```terminal
npm install
npm run dev
```

This will install all necessary *npm* packages required for your react project and will start the development server.

Now open the link shown in the terminal. It will show your react project in the browser. 

### React Project Structure

In you project folder you will see the following files and folders:

```
react-front-end/
--node_modules/
--public/
----vite.svg
--src/
----assets/
------react.svg
----App.css
----App.jsx
----index.css
----main.jsx
--.eslintrc.cjs
--.gitignore
--index.html
--package-lock.json
--package.json
--README.md
--vite.config.js
```


We don't need to understand what each file in the project is for now. We will focus on folder and files inside it. However here is a quick idea about each folder and file in the project.

Here’s a simple explanation for each folder and file in your project:

1. **react-front-end/**: The main project folder that holds everything for your app.
2. **node_modules/**: A folder with all the extra code and tools your app needs to run, automatically created when you install packages.
3. **public/**: A place to store files like images or icons that won’t change, like **vite.svg**.
4. **src/**: The "source" folder where you write your app’s main code.
    - **assets/**: A folder inside **src** for storing images, icons, or files used in the app, like **react.svg**.
    - **App.css**: The file for the design and look of your app.
    - **App.jsx**: The main part of your app where you write the logic and structure.
    - **index.css**: The overall design (like fonts, colors) for the whole app.
    - **main.jsx**: The file that starts and connects everything to the **index.html**.
5. **.eslintrc.cjs**: A file that helps keep your code clean and error-free.
6. **.gitignore**: A list of files or folders that won’t be saved to GitHub.
7. **index.html**: The main webpage that shows your app in the browser.
8. **package-lock.json**: Keeps track of the exact versions of extra code (packages) your app uses.
9. **package.json**: Lists the important details about your project (name, version) and its required tools.
10. **README.md**: A simple file with instructions or info about the project.
11. **vite.config.js**: Settings for how Vite (a development tool) runs your app.

But we will focus on **src/** folder. This is where we will write React code. 

### React Components

Every React application is built on the foundation of React components. In this section, you will get to know your first React component which is located in the src/App.jsx file and which should look similar to the example below.

**src/App.jsx**
```jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main>
        <h1>Vite + React</h1>
        
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
```

This is the component that is shown in your browser and this is a placeholder code that comes when you create new project. Let's write our own component code instead of this. Clear the current code and replace it with the following code:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
```

Also clear the content of `src/App.css` and `src/index.css` to keep the project clean.

Now if you visit the link again you will see the our fist component is displayed in the browser.

**Quick Explanation**
- First, this React component, specifically called App component, is just a JavaScript function. In contrast to traditional JavaScript functions, it’s defined in **PascalCase**. A component has to start with a capital letter, otherwise it isn’t treated as a component in React. The kind of the App component is commonly called a function component. Function components are the modern way of using components in React, however, be aware that there are other variations of React components (see component types in a later section) too.
- Second, the App component doesn’t have any parameters in its function signature yet. In the upcoming sections, you will learn how to pass information (see props in a later section) from one component to another component. These props will be accessible via the function’s signature as parameters then.
- And third, the App component returns code that resembles HTML. You will see how this new syntax (see JSX in a later section), allows you to combine JavaScript and HTML for displaying highly dynamic and interactive content in a browser.

You can write any JavaScript code inside the function like normal JavaScript. See the following code we declared variable inside the function.

**src/App.jsx**
```jsx
function App() {
  // New line of code
  let title = "React"

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
```


### React JSX

You see that we used HTML beside JavaScript code. This is made possible by ending our file with `.jsx` extension. JSX is a way that combine both JavaScript and HTML in one file and this is used by React to create our components. 

Anything returned in our `App` function is displayed in the browser. So we can write HTML in JavaScript and JavaScript in HTML to create our components. In the current code use HTML inside `()` to be displayed but now let's use our `title` variable inside HTML to see how React works. To use any JavaScript in HTML in a `.jsx` file we use `{}`. Let's see it in action.

**src/App.jsx**
```jsx
function App() {

  let title = "React"

  // add title variable in following html
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
}

export default App;
```

See the result of this code in the browser. Same heading but this time the word *React* comes from a JavaScript variable.

Now lets see how we can use this mixture of JavaScript and HTML in React to build our project's front-end client.

### Start Coding Project's Front-end Client

We will start by creating our front-end client in one **Component** and then we will gradually refine our front-end client and get introduced to new ideas in React along he way.

As we already have created the HTML required for project in the previous section, we will use that same HTML within our App component.

Modify the `App.jsx` to look like this:

**src/App.jsx**
```jsx
function App() {
  let title = "React";

  return (
    <div></div>
  );
}

export default App;
```

Inside the `<div></div>` we will first write HTML for our header and then  for our table. Let's create the header first.

**src/App.jsx**
```jsx
function App() {
  let title = "React";

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
    </div>
  );
}

export default App;
```

Open the website in browser. Notice that the header's text is shown there but no style like color, text centering and so on are applied. It is because we haven't assigned any styles to our components. So let's see how can we style React components.

### Styling in React
To style components in CSS we need to include a CSS file in our component and that CSS file will contain all the styles that can be applied to this components. There are many other ways to style components in CSS but we will not go into that because this tutorials is not meant to cover everything about React. 

So let's add our CSS styles in `App.css` file and then we will include this file in our `App.jsx` file to style the components. 

**src/App.css**
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #83d63f;
  padding: 20px;
  text-align: center;
}
```

These style will make our header element to look like the one in the design. To make these styles work we need to `import` this `App.css` file in our `App.jsx`.

**src/App.jsx**
```jsx
import "./App.css";  // Add this line of code at the top

function App() {
  let title = "React";

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
    </div>
  );
}

export default App;
```

Open the browser. Now you can see that styles are applied to our header.

### Adding Students Table and It's Styles

Now let's add our table of student's list and it's corresponding styles.

Modify your `App.jsx` to add the table.

**src/App.jsx**
```jsx
import "./App.css";

function App() {
  let title = "React";

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>John Doe</td>
            <td>Michael Doe</td>
            <td>REG-23456</td>
            <td>Fall 2023</td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Jane Smith</td>
            <td>Robert Smith</td>
            <td>REG-23457</td>
            <td>Spring 2024</td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Ahmad Ali</td>
            <td>Abdullah</td>
            <td>REG-23458</td>
            <td>Spring 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

In the browser you can see the table now but it isn't style properly. So simply add table related styles to your `App.css` file.

**src/App.css**
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #83d63f;
  padding: 20px;
  text-align: center;
}


/*Styles for the table*/
table {
  margin: 50px auto;
  border-collapse: collapse;
  width: 80%;
  text-align: left;
}
th,
td {
  border: 1px solid #999;
  padding: 10px;
}
th {
  background-color: #dedede;
}
```

Now open the browser you will the exact webpage that we had created with pure HTML/CSS. So the good news is that you have created your first React app.

Next we will enable this app to get the student list from a node server through REST API and show it in the table. Of course we will create our node server before that. Along the process we will modify our React app to use other React related concepts like dividing our app in multiple components and so on.
## Section 4: Building the REST API in Node/Express

Before we start creating our Node/Express server we keep these things in mind:
- We will create a very simple server where keep student's data in file not a database.
- Our server only have one end-point which will be used to get the student data in JSON format.
- We will not create the functionality of changing student data like deleting some student's records, editing some some students records or adding new records. We will save this for part two of this tutorial.
- Each student record will have these parts: *Series ID*, *Student Name*, *Father Name*, *Reg No* and *Batch*

### Setting Up Back-end Server Project
So let's start sticking to these rules for now. We will add advanced features to both front-end and back-end in the second part.

Open your terminal in `waf-basics-1` folder we created in beginning and do the following:
```terminal
mkdir back-end-server
cd back-end-server
npm init -y
code .
```

This command will create a new folder for our server program, initialize npm project and open it in VS Code.

Structure your project folder as follow:

```
back-end-server/
├─ data/
│  └─ students.txt
├─ app.js
└─ package.json
```

The data folder will keep our student records file and the ``app.js`` will contain our server code.

Before we write code open your `package.json` file. It should look like this:

**package.json**
```json
{
  "name": "back-end-server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Remove `"main": "index.js"` line and add `"type": "module"`. This will ensure that we will be able to use `import` statement in our code. So it should look like this now.

**package.json**
```json
{
  "name": "back-end-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Next install `express` using the following command to write our server code.

```terminal
npm install express
```

###  Writing Server Code

Write the following code in `app.js`.

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is running! at http://localhost:3000/");
});

```

Now visit http://localhost:3000/ in your browser. It will display the text *Hello world!*.

**Quick Explanation**
- This code start an express server at http://localhost:3000/
- We import express and user it to initialize a variable named `app`. This variable contain everything related to express.
- The function `app.get()` takes two arguments *a path* and *callback function*. When that the ends with first argument in browser it calls the its callback function which is passed to it. 
- The `res.send("Hello world")` in the callback is called to tell express to send this text the browser when browser request this path which is `/`.
- In the last we run our server, specifying the port as first argument and the callback function which is called after the server starts.

Let's add another route and this route will be used to server student data.

Your code should look like this.

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// New route
app.get("/students", (req, res) => {
    res.send("Soon we will send student data instead of text.")
})

app.listen(3000, () => {
  console.log("Server is running! at http://localhost:3000/");
});
```

**Quick Explanation**
- We used `app.get()` function to add new route at `/students`.
- When you visit http://localhost:3000/students, it will return the text in the called.

### Student Data File

Let's create the file `data/studnet.txt` if you haven't created already and then add some sample data into it.

Copy and paste this data.

```
[
  {
    "seriesId": 1001,
    "studentName": "John Doe",
    "fatherName": "Michael Doe",
    "studentRegNo": "REG-23456",
    "batch": "Fall 2023"
  },
  {
    "seriesId": 1002,
    "studentName": "Jane Smith",
    "fatherName": "Robert Smith",
    "studentRegNo": "REG-23457",
    "batch": "Spring 2024"
  },
  {
    "seriesId": 1003,
    "studentName": "Ahmad Ali",
    "fatherName": "Abdullah",
    "studentRegNo": "REG-23458",
    "batch": "Spring 2024"
  }
]
```

Note that this is simple text stored in a file `.txt` file. We will read this file in our server and then convert to JSON format and then send it through `http://localhost:3000/students` endpoint. So when user visit that link in the browser they get content of this file as JSON object.

To read, convert and serve this data write the following code.

```js
import express from "express";
import path from "path";

// Don't forget to add these imports
import fs from "fs/promises";
import { cwd } from "process";

const app = express();

app.get("/", (req, res) => {
  res.json({ a: "key" });
});

app.get("/students", async (req, res) => {
  // Path to your data file
  const students_file_path = path.join(process.cwd(), "data/students.txt");

  // Read, convert and send the data
  try {
    const data = await fs.readFile(students_file_path, "utf-8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch {
    res.send("An error occured in the server.");
  }
});

app.listen(3000, () => {
  console.log("Server is running! at http://localhost:3000/");
});
```

**Quick Explanation**
- We first imported `fs` and `path` to read file and address paths to the files.
- In the `students` route callback we first created variable to the file's path.
- Then we read the file using `fs.readfile()`
- Then converted the file, read file to proper JSON object and then served it through the endpoint.
- We added `async` keyword before parameter of the called back in order to use `await` keyword within the callback for asynchronous operations.

Now when you visit this rout you can see the JSON object of the student's data is returned to the browser. Our server implementation is done for now. Next we will use this end-point in our React app to receive the data and display it in the table.

### Avoiding Some Future Bugs
You don't have understand this part just do as I say. We need to take care of some bugs beforehand that will arise in the future.

Enter following command in the Terminal to install a package named `cors` in your server.
```terminal
npm install cors
```

Next add the following two line of code into your `app.js`:

```jsx
import express from "express";
import path from "path";

import fs from "fs/promises";
import { cwd } from "process";

import cors from "cors"; // New: Add this line

const app = express();

app.use(cors()); // New: Another line 
app.use(express.json())  // New: Another line 

app.get("/", (req, res) => {
  res.json({ a: "key" });
});

app.get("/students", async (req, res) => {
  // Paht to your data file
  const students_file_path = path.join(process.cwd(), "data/students.txt");

  // Read, convert and send the data
  try {
    const data = await fs.readFile(students_file_path, "utf-8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch {
    res.send("An error occured in the server.");
  }
});

app.listen(3000, () => {
  console.log("Server is running! at http://localhost:3000/");
});
```
## Section 5: Integrating the API with React Client 

In this section we will use the JSON data served by our server (also called back-end) to be shown in the table in the React application (also called front-end). 

### React Lists and Objects

In react when it comes to displaying content of a table or a list we don't just put it there in HTML. We need to create JavaScript objects and arrays that holds that data which can be displayed as a list or table. Then we use those objects or arrays to display the data in a better ways using JavaScript code.

To show you how this thing works, first remove HTML code for the table in the `App.jsx` component. Add a list of random items. The code should like this.

**src/App.js**
```jsx
import "./App.css";

function App() {
  let title = "React";

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <ul>
        <li>Oil</li>
        <li>Bread</li>
        <li>Onion</li>
        <li>Garlic</li>
      </ul>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We removed table HTML code from our `App.jsx` component and add a simple shopping list.
- The browser now displays our list instead of the table.

Let's use React to display this list in a better way. We will use JavaScript `map()` function to iterate over an array and display our list using this new way since we can combine JavaScript and HTML in JSX. If you are not familiar with `map()` function visit the following link and then continue.

- https://www.w3schools.com/jsref/jsref_map.asp

Modify your `app.jsx` as follow.

```jsx
import "./App.css";

function App() {
  let listItems = ["Oil", "Bread", "Onion", "Garlic"];

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <ul>
        {listItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We create an array inside our component function `App()`.
- We then use `{}` to write JavaScript code in our HTML.
- We use `map()` function on `listItem` array to iterate over it.
- The callback in `map()` function returns an HTML `<li>{item}</li>` that will be placed inside the `ul` element for each element in the array.

You can see that our code is now better no extra lines and hard coded HTML elements. If you add a new item to the array it will automatically be added to the `ul` without write it explicitly. This way of coding is why people use React instead of pure HTML/CSS/JavaScript.

We can use the same method to create our student list table. Before we start creating our table this way we need to learn one more React concept called state.

### Storing Students List in Array
Now we know how to display content of an array in our HTML using `map()` functions so let's apply this knowledge to our students list in the table.

Modify your `app.jsx` to show students list as before.

```jsx
import "./App.css";

function App() {
  let title = "React";

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>John Doe</td>
            <td>Michael Doe</td>
            <td>REG-23456</td>
            <td>Fall 2023</td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Jane Smith</td>
            <td>Robert Smith</td>
            <td>REG-23457</td>
            <td>Spring 2024</td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Ahmad Ali</td>
            <td>Abdullah</td>
            <td>REG-23458</td>
            <td>Spring 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

We did nothing new in this code, it display the list students as before using HTML.

Now let's update the code to create an array of these students and then using `map()` method display each row in the table from this array.

```jsx
import "./App.css";

function App() {
  const students = [
    {
      seriesId: 1001,
      studentName: "John Doe",
      fatherName: "Michael Doe",
      studentRegNo: "REG-23456",
      batch: "Fall 2023",
    },
    {
      seriesId: 1002,
      studentName: "Jane Smith",
      fatherName: "Robert Smith",
      studentRegNo: "REG-23457",
      batch: "Spring 2024",
    },
    {
      seriesId: 1003,
      studentName: "Ahmad Ali",
      fatherName: "Abdullah",
      studentRegNo: "REG-23458",
      batch: "Spring 2024",
    },
  ];

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We created an array of the student list using the same data. We created an array of objects and each object contains data for each student.
- Then we used `students.map()` function inside `tbody` and return each row inside the function.
- Each row contains data from our `studens` array in each iteration.

You can see that we get the same list but this time more structured using React and its power of mixing JavaScript and HTML in JSX.

### React State

Modify your component by removing the list from the `App` component and adding the following code.

```jsx
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <div>
        <div>Value: 1</div>
        <button>Increase Vlaue</button>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- Now our component shows a button and a number.

We will use this button to increase the value when the user click on it. To do this we need to use a variable for the value part using JSX. 

Modify your code like this.

```jsx
import "./App.css";

let value = 2; // Add this variable and use it in JSX

function App() {
  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <div>
        <div>Value: {value}</div>
        <button>Increase Vlaue</button>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We add a new variable name `value`.
- We use this variable in our `div` component so the value of this variable will be displayed in the component HTML.

Next we need to somehow write a JavaScript code that will run when we click on that button and then this code will increase the value of this variable. For that let's use JavaScript `click` event to run a function that will update this value.

```jsx
import "./App.css";

let value = 2;

const handleClick = () => {
  value++;
};

function App() {
  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <div>
        <div>Value: {value}</div>
        <button onClick={handleClick}>Increase Vlaue</button>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We create a function named handle click that add one to the variable `value` each time it is called. 
- We use `onClick` to connect this function to `button` element. You can note that it is a bit different than JavaScript. In JavaScript we would use `click=handleClick()`. It is JSX remember. So things can look a bit different but it is the same thing.

Now let's test it to see if it is working or not. Unfortunately nothing happens when you click on the button. The reason is that we didn't tell React to show the  new value in the browser each time click on this button. To do that we need to use React state to clearly tell the browser to track this variable and when it changed it has to show the updated value.

```jsx
import "./App.css";
import * as React from "react"; // add this import statment

function App() {
  const [value, setValue] = React.useState(2);  // creating state

  const handleClick = () => {
    const temp = value + 1;
    setValue(temp); // updating state
  };

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <div>
        <div>Value: {value}</div>
        <button onClick={handleClick}>Increase Vlaue</button>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- First we imported `React` to create a state
- We created a state named `value` and initialized it with 2. Think of it the same variable we created earlier but now React knows that this variable can change and when it change I need to update the view in the browser to show its new value.
- The initial value of a state goes to this function `React.useState(initial_value)`.
- When creating a state we create to things `value` the variable to be used and `setValue` a function to update the value of this state whenever we want. 
- We create a new value by adding old value with one and stored it in `temp` variable and then we passed this `temp` variable to `setValue(temp)` to tell React to update the value of the state.

Now each time you click the button it updates the number by adding one. This is React state and this is one state of our `App` component. A component can have multiple state when you want to track multiple variables.

### Using React State to Store the Students List

Now let's focus on our project at hand. Let's modify our `app.jsx` to show the students' list as before. 

```jsx
import "./App.css";

function App() {
  const students = [
    {
      seriesId: 1001,
      studentName: "John Doe",
      fatherName: "Michael Doe",
      studentRegNo: "REG-23456",
      batch: "Fall 2023",
    },
    {
      seriesId: 1002,
      studentName: "Jane Smith",
      fatherName: "Robert Smith",
      studentRegNo: "REG-23457",
      batch: "Spring 2024",
    },
    {
      seriesId: 1003,
      studentName: "Ahmad Ali",
      fatherName: "Abdullah",
      studentRegNo: "REG-23458",
      batch: "Spring 2024",
    },
  ];

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

The only thing we want to change in this code is that make the `students` variable a React state and not a simple JavaScript variable anymore. Why? We will come to that later but for now just convert the variable to React state.

```jsx
import "./App.css";
import * as React from "react"; // New: Import React

function App() {
  const [students, setStudents] = React.useState([ // New: Create a React state of students
    {
      seriesId: 1001,
      studentName: "John Doe",
      fatherName: "Michael Doe",
      studentRegNo: "REG-23456",
      batch: "Fall 2023",
    },
    {
      seriesId: 1002,
      studentName: "Jane Smith",
      fatherName: "Robert Smith",
      studentRegNo: "REG-23457",
      batch: "Spring 2024",
    },
    {
      seriesId: 1003,
      studentName: "Ahmad Ali",
      fatherName: "Abdullah",
      studentRegNo: "REG-23458",
      batch: "Spring 2024",
    },
  ]);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We imported `React` to create a React state.
- We then just replace our old `students` variable by a `[students, setStudents]`, a React state.
- We then initialized this state by passing the same array into `React.useState()`.
- Everything else is the same as before.

Now our base is ready. Next we need to connect this front-end(React app) to our back-end(Node/Express server).

### Connecting our React App to our Node/Express Server

What do we mean by connecting our React app to our Node/Express Server? It simply means that this student list we have in our `App` component should not be created here, it should come from our server from that file we created in our server. How to do it? Think for a moment and then move to the next paragraph.

When we created our server we created a route when someone call that the server sends the list of the students from our file in the sever as JSON object. So what we need here is a mechanism to call that route from within our React code and then wait for it to bring that JSON object. Once we received the JSON object we can convert it to a JavaScript array and using `map()` function we display it in our HTML. This is the whole idea of connecting a React Application to sever in our case a node/express server and this is called receiving data from a server through REST API. This is also called integrating a REST API with a front-end application (in our case React Application).

The first thing we need to do is to remove the list data from our `App` component.

```jsx
import "./App.css";
import * as React from "react";

function App() {
  const [students, setStudents] = React.useState([]); // Our student list is an empty array now.

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We removed the student data.
- Now our student list is an empty state that has no data.

Next we will initialize this state from our server through API call. We need to write some code to get that data from he server and than convert it to a JavaScript array and then update our state.

### Fetching Data from the Server

#### Code Playground

Before reading the rest of the sections, play with this code sandbox to get the idea of how `useEffect()` works:
- https://codesandbox.io/p/sandbox/25pxly

**Playground Code**
```jsx
import React, { useState, useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // // 1. Runs on every render
  // useEffect(() => {
  //   console.log("Component rendered or updated");
  // });

  // 2. Runs only once (on mount)
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // // 3. Runs when 'count' changes
  // useEffect(() => {
  //   console.log(`Count updated to: ${count}`);
  // }, [count]);

  // // 4. Runs when 'text' changes
  // useEffect(() => {
  //   console.log(`Text updated to: ${text}`);
  // }, [text]);

  return (
    <div>
      <h1>React useEffect Examples</h1>
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      /> */}
    </div>
  );
}

export default App;
```

#### Connecting to the Back-end

First in your terminal enter the following commands to install a package that will help us call our server from our React application.

```terminal
npm install axios
```

Once we installed it, we can then use it in our code by importing it. Modify `app.jsx` as follow.

```jsx
import "./App.css";
import * as React from "react";
import axios from "axios"; // New: import the packge we will for calling server

function App() {
  const [students, setStudents] = React.useState([]);

  // New: function to call the server
  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    // Now lets update the state
    setStudents(result.data);
  };

  // New: This is a special react code called useEffect hook. 
  // It call our server call function each the page is loaded in the browser
  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We import `axios` to facilitated our call to the server.
- We created a function `callTheServer` to call the server wait for the result and the update the students list using `setStudent`. 
- Next we used a special code in React that calls `callTheServer` function once when the page is loaded in the browser. 

**Note:** Make sure that your server `app.js` is running.

Now you can see that our list comes from the server and the server get this list from a file in the server. In real life scenarios this data is stored in a database instead of a file and the server when receive a call to its endpoint get that data from the database and then send it back as JSON to where it is called from.

#### Let's Verify

Lets verify that this list is coming from the file. To do so we let's change some data in the file. For example let's change the name of the third student from *Ali Khan* to *Mohammad Khan* in our `students.txt` file in the server. Then restart the server and reload React page your will see the updated name in the list.

Similarly, you can add new students, remove students and so on. Just make sure only change the data in `student.txt` file not the keys of objects. If you changed the keys you will have update your react code to use those key in the map function of each row.

## Section 6: Serving Data from Database Instead of File

In this section we will improve our back-end code to serve the students data from a data based instead of the file.

I have already created the database in MongoDB Atlas with some records. This is the URI:
- `"mongodb+srv://rashidstanikzai:bookbook@cluster0.yy0rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`

First, install `mongodb` package to e be able to access our database through our app.

```shell
npm install mongodb
```

**Note:** There are many ways to interact with our database through our Node.js app like Mongoose, but I personal prefer interacting with database through official JavaScript package built for Node.js.

Replace your `app.js` content in server with the following updated code.

`app.js`
```js
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json())

const uri = "mongodb+srv://rashidstanikzai:bookbook@cluster0.yy0rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let studentsCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("test");
    studentsCollection = db.collection("students");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}


app.get("/", (req, res) => {
  res.end("There is nothing in this endpoint.");
});


app.get("/students", async (req, res) => {
  try {
    const students = await studentsCollection.find({}).toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred in the server.");
  }
});


connectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}).catch((e) => {
    console.log("Error connecting db", e)
});
```

**Quick Explanation**
- We first created function to connect our app to our database in Atlas. We can also connect to our local database he same way.
- After connecting to the database we created a reference to our `students` collection which stores our students record.
- We then update `/students` endpoint to retrieve students data from the database using `find()` and then we send the retrieved data to the client in the response.
- Lastly we first connect to the database by calling the function `connectToDatabase()` we created earlier and if database connection was successful we run the server at port `3000`.

Now if you go to your front end refresh you will see the same data in the table but this time it coming from a database not a file.


## Section 7: Adding New Records and Updating Existing Records

First let's create a new endpoint in our server to add new records to our database. So update your back-end server's `app.js` file too look something like this.

`app.js`
```js
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json())

const uri =
  "mongodb+srv://rashidstanikzai:bookbook@cluster0.yy0rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let studentsCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("test");
    studentsCollection = db.collection("students");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

app.get("/", (req, res) => {
  res.end("There is nothing in this endpoint.");
});

app.get("/students", async (req, res) => {
  try {
    const students = await studentsCollection.find({}).toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred in the server.");
  }
});

// New Endpoint for Adding Records to the Database
app.post("/students", async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData)

    const result = await studentsCollection.insertOne(newData);

    res.status(201).json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "An error occurred while saving the data." });
  }
});

connectToDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((e) => {
    console.log("Error connecting db", e);
  });
```

**Quick Explanation**
- We added a new endpoint `/students` with request type as `POST` which will be called whenever a client call this point with a post request. The other `/students` request type is different, that is a `GET` request.
- We get the data from the request's body and store it it in `newData` variable.
- Next we use `mongodb` `insertOne()` function to add this new data to our database.
- Lastly we return success message to the client if record added to the database if error occurred we send the client an error message.

Now if we call this endpoint from anywhere with request and body that has data for a single student record like the following, it will take it to the database. We can send this request from anywhere, from a browser, a mobile app, a command line tool, Postman (an app for APIs testing) or our React app, as long as that request is of type `POST` and have data like the following in its body.

```
  {
    "seriesId": 1004,
    "studentName": "Ali Khan",
    "fatherName": "Gul Smith",
    "studentRegNo": "REG-2359",
    "batch": "Spring 2024"
  }
```

### Modify our React App to Send Request to This Endpoint

Our server side is ready. Next thing we need to do is to develop a method in our React app to send data to this endpoint. One way to do it, is to make form and then tell the user to fill in the form and after he submits the form we send a request to this endpoint and put the data in body of this request that use added to the form.

Let's first create a small form, right below the table.

`App.jsx`
```jsx
import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  
  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    setStudents(result.data);
  };

  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <h2>Student Registration</h2>
        <form>
          <input
            name="seriesId"
            placeholder="Series ID"
            required
          />
          <input
            name="studentName"
            placeholder="Student Name"
            required
          />
          <input
            name="fatherName"
            placeholder="Father's Name"
            required
          />
          <input
            name="studentRegNo"
            placeholder="Registration No"
            required
          />
          <input
            name="batch"
            placeholder="Batch"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
```

Also paste the following styles to your `App.css` for better look of the form.

`App.css`
```css
.container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  width: 100%;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
```

**Quick Explanation**
- We only created a small form bellow the table using simple html.
- Then we added some style to our form using simple css.

Now if the user enter something in the form, we can do nothing with that unless we store those information in some variable. Let's create React state for that and connect it to our form. 

`App.jsx`
```jsx
import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  const [formData, setFormData] = React.useState({
    seriesId: "",
    studentName: "",
    fatherName: "",
    studentRegNo: "",
    batch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    setStudents(result.data);
  };

  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <h2>Student Registration</h2>
        <form>
          <input
            name="seriesId"
            onChange={handleChange}
            value={formData.seriesId}
            placeholder="Series ID"
            required
          />
          <input
            name="studentName"
            onChange={handleChange}
            value={formData.studentName}
            placeholder="Student Name"
            required
          />
          <input
            name="fatherName"
            onChange={handleChange}
            value={formData.fatherName}
            placeholder="Father's Name"
            required
          />
          <input
            name="studentRegNo"
            onChange={handleChange}
            value={formData.studentRegNo}
            placeholder="Registration No"
            required
          />
          <input
            name="batch"
            onChange={handleChange}
            value={formData.batch}
            placeholder="Batch"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We create a React state `formData` that stores an object. Initially that is empty.
- Next we added function `handleChange()` that is used to update our `formData` when the user enter something in any of the input.
- Next we add two new attributes to each input, `onChange={handleChange}` and `value=formData.<nameOftheProperty>`. This ensures that whatever value is stored in `formData` are shown in the form and whatever value user enter is stored in `formData`. It is like two way binding the `formData` to our form, it is called *controlled forms*.

Next let's test whether our state truly track the user input in the form or not.

`App.jsx`
```jsx
import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  const [formData, setFormData] = React.useState({
    seriesId: "",
    studentName: "",
    fatherName: "",
    studentRegNo: "",
    batch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    alert("Form submitted successfully!");
  };

  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    setStudents(result.data);
  };

  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="seriesId"
            onChange={handleChange}
            value={formData.seriesId}
            placeholder="Series ID"
            required
          />
          <input
            name="studentName"
            onChange={handleChange}
            value={formData.studentName}
            placeholder="Student Name"
            required
          />
          <input
            name="fatherName"
            onChange={handleChange}
            value={formData.fatherName}
            placeholder="Father's Name"
            required
          />
          <input
            name="studentRegNo"
            onChange={handleChange}
            value={formData.studentRegNo}
            placeholder="Registration No"
            required
          />
          <input
            name="batch"
            onChange={handleChange}
            value={formData.batch}
            placeholder="Batch"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We created a new function named `handleSubmit()` which prints `formData` variable to the console and shows and alert.
- Next we connected this function to the form so when the user click on the submit button this function is called.

Open your app and add some data to the form and then click submit button. You will see that a that `handleSubmit()` function is called. You can see the data user entered in form is shown in the console and alert is also shown. Now we have full control on our form and we can do whatever we want with its data. 

Next we will submit this data to the server instead of showing it in console.

`App.jsx`
```jsx
import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  const [formData, setFormData] = React.useState({
    seriesId: "",
    studentName: "",
    fatherName: "",
    studentRegNo: "",
    batch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/students", formData);
      alert("Form submitted successfully!");

      setFormData({
        seriesId: "",
        studentName: "",
        fatherName: "",
        studentRegNo: "",
        batch: "",
      });

      await callTheServer();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting the form.");
    }
  };

  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    setStudents(result.data);
  };

  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="seriesId"
            onChange={handleChange}
            value={formData.seriesId}
            placeholder="Series ID"
            required
          />
          <input
            name="studentName"
            onChange={handleChange}
            value={formData.studentName}
            placeholder="Student Name"
            required
          />
          <input
            name="fatherName"
            onChange={handleChange}
            value={formData.fatherName}
            placeholder="Father's Name"
            required
          />
          <input
            name="studentRegNo"
            onChange={handleChange}
            value={formData.studentRegNo}
            placeholder="Registration No"
            required
          />
          <input
            name="batch"
            onChange={handleChange}
            value={formData.batch}
            placeholder="Batch"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
```

**Quick Explanation**
- We updated our `handleSubmit()` function only. 
- We made it `async` so when we send request to the server it can wait for the result.
- We use `axios.post()` to call our end point in our server. We pass the endpoint we want and the data we want to be send to the server. In our case it the data is `formData` variable, the data the user has entered the form.
- After successful completion of the request we show success message in alert otherwise if there was an error add the new record to our database we show an error to the user.
- We also assign an empty object to the our state to clear the form at the end and make it ready if the user want to add another record.
- Lastly we update the our list by called `callTheServer()` function to get the updated list from the database.

Now if you enter some data in the form and click submit you will see success alert and will see the new record appears in the list.


## Summary
- We learned what server and client is.
- We learned what is client and how we can create client application in React.
- We then created a simple server that serves students data through database.
- We learned how to integrate server and client together.

## Experimentations
- You can create a new endpoint to update existing data. It will follow the same mechanism. 
- You can divide your React app in multiple components. 
- You create a dialog for adding records or updating records.
- You can use Mongoose to change how server interact with your database.
- You can use Model-View-Controller architecture for your server.
