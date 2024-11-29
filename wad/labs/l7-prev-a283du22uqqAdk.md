---
outline: [2, 3]
---

## Procedural Task
This task is provided with proper instruction, the task is marked correct as long as you follow the instructions. Do not copy code, instead write it so you can understand the whole concept. This is essential for your exploratory tasks, quizzes, assignments and exams.

### Hoisting
#### **Example with `var`:**

```javascript
console.log(name); // Output: undefined

var name = "Alice";

console.log(name); // Output: Alice
```

**What's Happening:**

1. JavaScript moves `var name;` to the top.
2. Before `name` is assigned `"Alice"`, its value is `undefined`.
3. After assignment, `name` holds `"Alice"`.

#### **Example with `let`:**

```javascript
console.log(age); // Error: Cannot access 'age' before initialization

let age = 25;
```

**What's Happening:**

1. `let` declarations are hoisted but **not** initialized.
2. Trying to access `age` before its declaration causes a **ReferenceError**.
3. Only after `let age = 25;` is executed does `age` hold the value `25`.

**Quick Takeaway**

- **`var`**: Hoisted and initialized as `undefined`. You can access it before declaration, but it won't have your assigned value yet.
- **`let` and `const`**: Hoisted **but not initialized**. Accessing them before their declaration throws an error.
### 1. Function Declaration

**Definition:** A function declaration defines a named function using the `function` keyword. Function declarations are hoisted, meaning they are loaded into memory during the compilation phase, allowing them to be called before they appear in the code.

**Syntax:**

```javascript
function functionName(parameters) {
  // function body
}
```

**Example:**

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!
```

**Key Points:**

- Hoisted: Can be called before their declaration in the code.
- Named: Always have a name, which can be useful for debugging.

---

### 2. Function Expression

**Definition:** A function expression defines a function as part of a larger expression, typically by assigning it to a variable. Function expressions can be named or anonymous. Unlike function declarations, they are not hoisted.

**Syntax:**

```javascript
const functionName = function(parameters) {
  // function body
};
```

**Example:**

```javascript
// Function Expression (Anonymous)
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Calling the function
console.log(greet("Bob")); // Output: Hello, Bob!
```

**Named Function Expression:**

```javascript
const greet = function greetPerson(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Carol")); // Output: Hello, Carol!
```

**Key Points:**

- Not hoisted: Cannot be called before they are defined in the code.
- Can be anonymous or named.
- Useful for creating closures and passing functions as arguments.

---

### 3. Arrow Function

**Definition:** Introduced in ES6, arrow functions provide a concise syntax for writing functions. They differ from regular functions in terms of `this` binding and do not have their own `arguments` object.

**Syntax:**

```javascript
const functionName = (parameters) => {
  // function body
};
```

**Example:**

```javascript
// Arrow Function
const greet = (name) => {
  return `Hello, ${name}!`;
};

// For single parameter and single expression, can be more concise
const greetShort = name => `Hello, ${name}!`;

// Calling the functions
console.log(greet("Dave"));      // Output: Hello, Dave!
console.log(greetShort("Eve")); // Output: Hello, Eve!
```

**Key Points:**

- Concise syntax: Especially useful for short functions.
- Lexical `this`: Arrow functions do not have their own `this` context; they inherit `this` from the parent scope.
- No `arguments` object: If needed, use rest parameters (`...args`).

---

### Summary of Differences

|Feature|Function Declaration|Function Expression|Arrow Function|
|---|---|---|---|
|**Syntax**|`function name() {}`|`const name = function() {}`|`const name = () => {}`|
|**Hoisting**|Yes|No|No|
|**`this` Binding**|Dynamic|Dynamic|Lexical (inherits from parent scope)|
|**`arguments` Object**|Yes|Yes|No|
|**Use Case**|Defining named functions, especially when hoisting is beneficial|Assigning functions to variables, callbacks|Short functions, especially where `this` needs to be inherited|

---

### Practical Example Combining All Three

Let's create a simple calculator that can add two numbers using each type of function.

```javascript
// Function Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const addExpression = function(a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

// Using the functions
console.log(addDeclaration(2, 3)); // Output: 5
console.log(addExpression(4, 5));  // Output: 9
console.log(addArrow(6, 7));       // Output: 13
```

**Explanation:**

- **`addDeclaration`** is defined using a function declaration and can be called before its definition in the code.
- **`addExpression`** is defined using a function expression and must be defined before it is called.
- **`addArrow`** is defined using an arrow function, offering a concise syntax.

---

### When to Use Each

- **Function Declarations:** When you need hoisting or are defining a function that will be used throughout your code.
- **Function Expressions:** When you want to create a function dynamically, use closures, or pass functions as arguments.
- **Arrow Functions:** When you need a shorter syntax and want `this` be not explicitly used, such as in array methods (`map`, `filter`, etc.) or event handlers.


## Exploratory Tasks
Read the requirements and solve them accordingly using your own understanding.

**Note:** Explanations should be provided in your own words.

###  Task 1: Function Declaration

Create a **function declaration** named `calculateRectangleArea` that takes two parameters, `width` and `height`, and returns the area of a rectangle. Use the formula:

```
Area = width × height
```

_Example Usage:_

```javascript
console.log(calculateRectangleArea(5, 10)); // Output: 50
```

---

### Task 2: Function Expression

Convert the `calculateRectangleArea` function from Task 1 into a **function expression** assigned to a variable called `calculateRectangleAreaExpr`.

_Example Usage:_

```javascript
console.log(calculateRectangleAreaExpr(5, 10)); // Output: 50
```

---

### Task 3: Arrow Function

Rewrite the `calculateRectangleArea` function from Task 1 as an **arrow function** assigned to a variable called `calculateRectangleAreaArrow`.

_Example Usage:_

```javascript
console.log(calculateRectangleAreaArrow(5, 10)); // Output: 50
```

---

### Task 4: Hoisting

Consider the following code snippet:

```javascript
console.log(getCircleArea(7));

var getCircleArea = function(radius) {
  return Math.PI * radius * radius;
};
```

1. **Predict the Output:**
    
    - What will be logged to the console when this code is executed? Explain your reasoning.
2. **Modify the Code:**
    
    - Change the function expression `getCircleArea` into a **function declaration**.
    - Run the code again. What is the new output? Explain how hoisting affects the behavior in both cases.

---

**Instructions:**

- Write your explainations in the code as a block comment `*/ <your explationations> /*.
- Test each task to ensure your functions work as expected.
- Provide explanations for Task 4 to demonstrate your understanding of hoisting.