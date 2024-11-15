---
outline: [2, 3]
---

## Procedural Task
The following tasks are provided with proper instruction, the task is marked correct as long as you follow the instructions. Do not copy code, instead write it so you can understand the whole concept. This is essential for your exploratory tasks, quizzes, assignments and exams.

### Task 1: Explore JavaScript Basics

In this task , read through the guide and write/run the code in examples and explore how to use JavaScript in a very basic level.
#### 1. Variables

Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. Understanding the differences between these keywords is crucial.

##### 1.1 Declaring Variables

- **`var`**: Function-scoped or globally scoped. Can be redeclared and updated.
- **`let`**: Block-scoped. Can be updated but not redeclared in the same scope.
- **`const`**: Block-scoped. Cannot be updated or redeclared. Must be initialized at declaration.

##### 1.2 Examples

```javascript
// Using var
var name = "Alice";
console.log(name); // Output: Alice

// Using let
let age = 25;
age = 26; // Allowed
console.log(age); // Output: 26

// Using const
const birthYear = 1995;
// birthYear = 1996; // Error: Assignment to constant variable.
console.log(birthYear); // Output: 1995
```

##### 1.3 Best Practices

- Use `const` by default for variables that won't change.
- Use `let` for variables that will be reassigned.
- Avoid using `var` to prevent scope-related issues.

---

#### 2. Data Types

JavaScript has several data types that can be categorized into **Primitive** and **Reference** types.

#### 2.1 Primitive Data Types

1. **String**: Represents textual data.
2. **Number**: Represents both integer and floating-point numbers.
3. **Boolean**: Represents logical values (`true` or `false`).
4. **Undefined**: A variable declared but not assigned a value.
5. **Null**: Represents an intentional absence of any object value.
6. **Symbol**: Unique and immutable primitive used as identifiers.
7. **BigInt**: Represents integers with arbitrary precision.

#### 2.2 Reference Data Types

1. **Object**: Collections of key-value pairs.
2. **Array**: List-like objects.

##### 2.3 Examples

```javascript
// Primitive Types
let message = "Hello, World!"; // String
let count = 42;                // Number
let isActive = true;           // Boolean
let data;                      // Undefined
let empty = null;              // Null
let uniqueId = Symbol('id');   // Symbol
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Reference Types
let person = {
    name: "Bob",
    age: 30
}; // Object

let fruits = ["Apple", "Banana", "Cherry"]; // Array

##### 2.4 Type Checking

Use `typeof` to determine the type of a variable.

```javascript
console.log(typeof message); // "string"
console.log(typeof count);   // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof data);    // "undefined"
console.log(typeof empty);   // "object" (this is a known JavaScript peculiarity)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof person);  // "object"
console.log(typeof fruits);  // "object"
```

---

#### 3. Conditionals

Conditionals allow your code to make decisions based on certain conditions. JavaScript provides several conditional statements, including `if`, `else if`, `else`, and ternary operators.

##### 3.1 `if` Statement

Executes a block of code if a specified condition is `true`.

```javascript
let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day.");
}
```

**Output:**
```
It's a hot day.
```

##### 3.2 `else` Statement

Executes a block of code if the `if` condition is `false`.

```javascript
let temperature = 20;

if (temperature > 25) {
    console.log("It's a hot day.");
} else {
    console.log("It's not a hot day.");
}
```

**Output:**
```
It's not a hot day.
```

##### 3.3 `else if` Statement

Specifies a new condition to test if the previous conditions were `false`.

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

**Output:**
```
Grade: B
```

##### 3.4 Ternary Operator

A shorthand for `if-else` statements.

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

##### 3.5 Logical Operators

Combine multiple conditions using logical operators:

- **`&&`** (AND): Both conditions must be `true`.
- **`||`** (OR): At least one condition must be `true`.
- **`!`** (NOT): Inverts the boolean value.

```javascript
let isMember = true;
let hasCoupon = false;

if (isMember && hasCoupon) {
    console.log("Discount applied.");
} else {
    console.log("No discount.");
}
// Output: No discount.
```

---

#### 4. Loops

Loops are used to execute a block of code repeatedly until a specified condition is met. JavaScript offers several types of loops: `for`, `while`, `do...while`, and `for...of`/`for...in`.

##### 4.1 `for` Loop

Executes a block of code a specified number of times.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}
```

**Output:**
```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

##### 4.2 `while` Loop

Executes a block of code as long as a specified condition is `true`.

```javascript
let count = 1;

while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

##### 4.3 `do...while` Loop

Executes a block of code once before checking the condition, and then repeats the loop as long as the condition is `true`.

```javascript
let number = 1;

do {
    console.log(`Number: ${number}`);
    number++;
} while (number <= 3);
```

**Output:**
```
Number: 1
Number: 2
Number: 3
```

##### 4.4 `for...of` Loop

Iterates over iterable objects like arrays, strings, etc.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**
```
Apple
Banana
Cherry
```

##### 4.5 `for...in` Loop

Iterates over enumerable properties of an object.

```javascript
let person = {
    name: "Charlie",
    age: 28,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

**Output:**
```
name: Charlie
age: 28
city: New York
```

##### 4.6 Control Statements

- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and continues with the next one.

```javascript
// Using break
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 1, 2

// Using continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5
```

---

#### 5. Switch Statements

The `switch` statement is used to perform different actions based on different conditions. It's an alternative to using multiple `if-else` statements and can make code more readable.

##### 5.1 Syntax

```javascript
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    // Add more cases as needed
    default:
        // Code to execute if none of the cases match
}
```

##### 5.2 Example

```javascript
let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```

##### 5.3 Fall-Through Behavior

If `break` is omitted, the program continues executing the subsequent cases until a `break` is encountered.

```javascript
let fruit = "Apple";

switch(fruit) {
    case "Apple":
        console.log("Apples are red or green.");
    case "Banana":
        console.log("Bananas are yellow.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Output:
// Apples are red or green.
// Bananas are yellow.
```

**Note:** To prevent fall-through, always include `break` unless intentional.

##### 5.4 Grouping Cases

Multiple cases can execute the same block of code.

```javascript
let color = "green";

switch(color) {
    case "red":
    case "blue":
    case "green":
        console.log("Primary color.");
        break;
    case "yellow":
    case "purple":
    case "orange":
        console.log("Secondary color.");
        break;
    default:
        console.log("Unknown color.");
}

// Output: Primary color.
```

---
#### 5. User Interaction Methods

JavaScript provides several built-in functions to interact with users and manipulate the document. These include `alert()`, `prompt()`, `confirm()`, and `document.write()`. Understanding how to use these functions can enhance user experience and allow for dynamic content manipulation.

##### 6.1 `alert()`

The `alert()` function displays a modal dialog box with a specified message and an OK button. It's often used to inform users about important information.

 **Syntax**

```javascript
alert(message);
```

- **`message`**: The text you want to display in the alert box. It can be a string, number, or any other type that can be converted to a string.

**Example**

```javascript
alert("Welcome to JavaScript Tutorial!");
```

**Output:**

A dialog box appears with the message "Welcome to JavaScript Tutorial!" and an OK button.

##### Use Cases

- Informing users about important information.
- Debugging purposes to check variable values.

**Note:** Overusing `alert()` can be disruptive to user experience. Use it sparingly.

##### 6.2 `prompt()`

The `prompt()` function displays a dialog box that prompts the user to input some text. It returns the input value if the user clicks OK, or `null` if the user clicks Cancel.

**Syntax**

```javascript
let result = prompt(message, default);
```

- **`message`**: The text you want to display to the user.
- **`default`** (optional): A default input value.

**Example**

```javascript
let userName = prompt("Enter your name:", "Guest");
if (userName !== null) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("User canceled the prompt.");
}
```

**Possible Outputs:**

1. **User Enters "Alice" and Clicks OK:**
    ```
    Hello, Alice!
    ```

2. **User Clicks Cancel:**
    ```
    User canceled the prompt.
    ```

##### Use Cases

- Collecting user input.
- Gathering data for further processing.

**Note:** Like `alert()`, excessive use of `prompt()` can hinder user experience. Ensure it's necessary before implementing.

##### 6.3 `confirm()`

The `confirm()` function displays a dialog box with a specified message and OK and Cancel buttons. It returns `true` if the user clicks OK, and `false` if the user clicks Cancel.

**Syntax**

```javascript
let result = confirm(message);
```

- **`message`**: The text you want to display to the user.

**Example**

```javascript
let isSure = confirm("Do you want to proceed?");
if (isSure) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the action.");
}
```

**Possible Outputs:**

1. **User Clicks OK:**
    ```
    User chose to proceed.
    ```

2. **User Clicks Cancel:**
    ```
    User canceled the action.
    ```

**Use Cases**

- Confirming user actions (e.g., deletions, submissions).
- Asking for user consent before performing critical operations.

**Note:** Ensure that the confirmation is clear to avoid confusing the user.

##### 6.4 `document.write()`

The `document.write()` method writes a string of text directly to the HTML document. It can be used to dynamically add content to the page.

**Syntax**

```javascript
document.write(content);
```

- **`content`**: The HTML content or text you want to write to the document.

**Example**

```javascript
document.write("<h1>Hello, World!</h1>");
```

**Output:**

The webpage displays a heading "Hello, World!".

**Use Cases**

- Dynamically generating content during page load.
- Educational purposes and simple demonstrations.

##### Important Considerations

- **Timing:** Using `document.write()` after the page has fully loaded can overwrite the entire document. It's best used during the initial loading phase.
  
  ```javascript
  // Safe to use during page load
  document.write("<p>This is safe.</p>");
  
  // Risky: Overwrites the entire document if used after load
  document.write("<p>This will erase the page content.</p>");
  ```

- **Modern Alternatives:** For dynamic content manipulation, consider using the Document Object Model (DOM) methods like `createElement()`, `appendChild()`, `innerHTML`, etc., which offer more control and are safer to use after the page has loaded.

  ```javascript
  // Using innerHTML as a safer alternative
  document.getElementById("content").innerHTML = "<p>Hello, World!</p>";
  ```

- **Performance:** Frequent use of `document.write()` can lead to performance issues and is generally discouraged in modern web development.
#### Conclusion

Understanding variables, data types, conditionals, loops, and switch statements is fundamental to programming in JavaScript. These concepts form the building blocks for writing efficient and effective code. Practice by writing small programs that utilize these features to solidify your understanding.

#### Remember These Resources for Future Reference

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript (Book)](https://eloquentjavascript.net/)

### Task 2: Manipulating HTML Elements Using JavaScript
#### Objective
How to access and manipulate HTML elements using JavaScript.

#### Setup
There are three different JavaScript APIs that you are going to learn in this lab task. Create a separate html file for each and try theme out.

#### 1. `getElementById`

The `getElementById` method selects a single HTML element based on its unique `id` attribute. Since IDs should be unique within an HTML document, this method returns only one element.

**Syntax**

```javascript
document.getElementById('elementId');
```

- **`'elementId'`**: The `id` of the HTML element you want to select.

**Example**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>getElementById Example</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>

    <script>
        let titleElement = document.getElementById('title');
        titleElement.style.color = 'blue';
        titleElement.innerHTML = 'Title Changed!';
    </script>
</body>
</html>
```


---

#### 2. `getElementsByClassName`

The `getElementsByClassName` method selects all HTML elements that have a specific `class` attribute. It returns an **HTMLCollection** (similar to an array) of elements, allowing you to manipulate multiple elements at once.

**Syntax**

```javascript
document.getElementsByClassName('className');
```

- **`'className'`**: The class name of the HTML elements you want to select.

**Example**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>getElementsByClassName Example</title>
</head>
<body>
    <p class="paragraph">Paragraph 1</p>
    <p class="paragraph">Paragraph 2</p>
    <p class="paragraph">Paragraph 3</p>

    <script>
        let paragraphs = document.getElementsByClassName('paragraph');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = 'yellow';
        }
    </script>
</body>
</html>
```


---

#### 3. `innerHTML`

The `innerHTML` property allows you to get or set the HTML content inside an element. It's a powerful way to dynamically change the content of your web page.

**Syntax**

```javascript
element.innerHTML = 'New Content';
```

- **`element`**: The DOM element you want to modify.
- **`'New Content'`**: The HTML or text you want to insert inside the element.

**Example**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>innerHTML Example</title>
</head>
<body>
    <div id="content">
        <p>This is the original content.</p>
    </div>

    <script>
        let contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<h2>Content Updated!</h2><p>The paragraph has been replaced.</p>';
    </script>
</body>
</html>
```

## Exploratory Tasks
Read the requirments and solve them accordingly using your own understanding.

### Task 1: Create a Web Page that Uses JavaScript

1. **HTML Setup:**

   - Create an HTML file with the following elements:
     - An `<h1>` element with the `id` of `"greeting"` and the text `"Welcome!"`.
     - A `<p>` element with the `class` of `"info"` containing the text `"This is your personalized greeting page."`.
     - A `<button>` element with the text `"Start"`.

2. **JavaScript Functionality:**

   - When the `"Start"` button is clicked, execute the following steps:

     a. **Greet the User:**
        - Use the `prompt()` function to ask the user for their name and store the input in a variable named `userName`.
        - If the user enters a name, display an `alert()` welcoming them by name (e.g., `"Hello, Alex! Welcome to our site."`).
        - If the user does not enter a name (i.e., clicks Cancel or leaves it blank), display an `alert()` with a generic welcome message (e.g., `"Hello, Guest! Welcome to our site."`).

     b. **Favorite Activity Selection:**
        - Use the `prompt()` function to ask the user for their favorite activity (e.g., reading, gaming, hiking) and store it in a variable named `favoriteActivity`.
        - Use a `switch` statement to respond based on the user's favorite activity:
          - If the user enters `"reading"`, `"gaming"`, or `"hiking"`, display an `alert()` with a customized message (e.g., `"Reading is a wonderful way to expand your knowledge!"`).
          - For any other activity, display an `alert()` saying `"That's a great activity!"`.
          - If the user does not enter an activity, skip this step.

     c. **Confirmation to Update Information:**
        - Use the `confirm()` function to ask the user, `"Would you like to update your greeting information on the page?"`.
          - If the user clicks **OK**:
            - Use `getElementById` to select the `<h1>` element with the `id` of `"greeting"` and update its `innerHTML` to include the user's name if provided (e.g., `"Welcome, Alex!"`). If no name was provided, keep it as `"Welcome!"`.
            - Use `getElementsByClassName` to select the `<p>` element(s) with the class `"info"` and update their `innerHTML` to include the user's favorite activity if provided (e.g., `"This is your personalized greeting page. Your favorite activity is reading."`). If no activity was provided, keep the original text.
          - If the user clicks **Cancel**, display an `alert()` saying `"No changes made to the page."`.

#### Example Structure

Here's a basic structure to help you get started. **Do not include it the solution**, but use this as a reference for how your HTML and JavaScript might be organized.

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Greeting Page</title>
</head>
<body>
    <h1 id="greeting">Welcome!</h1>
    <p class="info">This is your personalized greeting page.</p>
	
    <script>
	    
    </script>
</body>
</html>
```
