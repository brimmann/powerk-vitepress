---
outline: [2, 3]
---


## Task 1: Simple Functions 

A function in JavaScript is a reusable block of code designed to perform a particular task. Functions allow you to write code once and reuse it as many times as you need.

**Example:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

Here, `greet` is a function that takes a single parameter (`name`) and prints a greeting.

---

## Task 2. Callback Functions

### What is a Callback?

A **callback function** is a function that you pass into another function as an argument, with the expectation that the receiving function will call it at a certain time. In simpler terms, it's a function you give to another function to use when it’s done doing something else.

### Why Use Callbacks?

Callbacks are useful for:

- Handling tasks that take time, such as fetching data from a server.
- Allowing one piece of code to call back another piece of code after completing its job.
- Keeping code organized and avoiding “blocking” your program while it waits for tasks (like network requests) to finish.

### Example: Using a Callback in a Simple Program

Suppose you have a function that simulates a long-running task, like reading data from a file. Once it's done, you want to call another function to process that data. A callback makes this easy.

```javascript
function getData(callback) {
  console.log("Getting data, please wait...");

  setTimeout(function() {
    const data = { id: 1, content: "Hello from the server!" };
    console.log("Data received.");
    
    // Once data is received, call the callback function:
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

function processData(data) {
  console.log("Processing data:", data);
}

// Use getData and pass processData as a callback:
getData(processData);

// Program flow:
// 1. getData starts and prints "Getting data, please wait..."
// 2. After 2 seconds, it prints "Data received."
// 3. Then it calls processData(data), which prints the processed data.
```

---

## Task 3. Anonymous Functions

### What is an Anonymous Function?

An **anonymous function** is a function without a name. Instead of defining a function with a name like `function myFunction() {}`, you can define it as just `function() {}` and often assign it directly to a variable or use it as an argument.

**Example:**

```javascript
// Named function
function sayHello() {
  console.log("Hello!");
}

// Anonymous function assigned to a variable
const sayHelloAnon = function() {
  console.log("Hello!");
};

sayHelloAnon(); // Output: Hello!
```

### Common Uses of Anonymous Functions

- When you only need a function once, without reusing it.
- As callbacks, where the function is defined right where it’s needed.
- To keep your code concise and focused.

### Example: Using Anonymous Functions as Callbacks

Let's modify our previous callback example to use an anonymous function instead of `processData`:

```javascript
function getData(callback) {
  console.log("Getting data, please wait...");

  setTimeout(function() {
    const data = { id: 2, content: "Hello again from the server!" };
    console.log("Data received.");

    // Call the anonymous callback function:
    callback(data);
  }, 2000);
}

// Use an anonymous function directly as the callback:
getData(function(data) {
  console.log("Anonymous callback processing data:", data);
});
```

Here, we passed an anonymous function to `getData`. We didn’t need to define it separately.

---

## Task 4. Functions Usage With Objects

In JavaScript, objects can hold all kinds of values—**including functions**. Functions that belong to objects are often called **methods**.

### Adding Functions as Methods to Objects

You can create an object and then add a function as a property:

```javascript
const person = {
  name: "Charlie",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

person.greet(); // Output: Hello, my name is Charlie.
```

In the example above, `greet` is a function stored inside the `person` object, making it a method of `person`.

### Calling Object Methods

To call a method, you use the same syntax as accessing any other property, but add parentheses:

```javascript
person.greet(); // Calls the greet method
```

### Passing Functions Around as Values

Functions in JavaScript are “first-class citizens,” meaning you can:

- Pass them as arguments to functions (callbacks).
- Assign them to variables.
- Store them in objects or arrays.
- Return them from other functions.

### Example: Using Functions in Objects

Let’s say we have an object that keeps track of a to-do list and has methods for adding and displaying tasks. Some of these methods might even take callbacks:

```javascript
const todoList = {
  tasks: [],
  
  addTask: function(task, callback) {
    this.tasks.push(task);
    console.log(`Task "${task}" added to the list.`);
    
    // If a callback is provided, call it now
    if (callback && typeof callback === "function") {
      callback(this.tasks);
    }
  },
  
  showTasks: function() {
    console.log("Current tasks:", this.tasks.join(", "));
  }
};

// Add a task and provide a callback as an anonymous function
todoList.addTask("Learn JavaScript", function(currentTasks) {
  console.log("Callback: The current tasks are:", currentTasks);
});

// Add another task without a callback
todoList.addTask("Write a blog post");

// Show all tasks
todoList.showTasks();
```

**What’s happening here?**

- `addTask` is a function stored inside the `todoList` object.
- We can pass a callback function (anonymous or named) to `addTask`.
- After adding the task, `addTask` calls the callback with the updated list of tasks.
- The `showTasks` method just displays all tasks currently in the object.

## Task 5: Create a Counter App in JavaScript

Let's create something interesting with the knowledge we acquired in this course. The following is a link to a tutorial that guides you step by step how to create counter app using JavaScript. Follow the tutorial and submit the final result. 

**Don't copy/paste code, it is for your own benefit.**

Link:
- https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p

## Task 6: Exercises

Try the following exercises using your understanding. Don't copy code for other sources.

**Important Note for Students:** As you attempt these exercises, avoid running straight to a code-completion tool (like ChatGPT) for full solutions. Instead, try to reason about each step, consult official documentation (e.g., MDN), and break down the tasks on your own. You will learn the most by struggling a bit and discovering the logic yourself. You will need this knowledge in your exam and quizzes. 

### Exercise 1: Callbacks Basics

**Task:**

- Create `fetchData(callback)` that simulates a 1-second delay, then calls `callback` with a mock data object.
- Write a separate `printData(data)` function and pass it to `fetchData`.
- Modify your code so that instead of `printData`, you use an anonymous function directly.

**Reflect (no code):**

- Why do we use callbacks for delayed operations?
- What happens if you call `printData` before the data is ready?

---

### Exercise 2: Multiple Callbacks for Success/Failure

**Task:**

- Write `loginUser(onSuccess, onError)` that uses `setTimeout` and a random choice to simulate a success or failure.
- If success, call `onSuccess("Logged in!")`; if failure, call `onError("Login failed.")`.
- Try calling `loginUser` several times with different callbacks to see different outcomes.

**Reflect (no code):**

- How would you handle more complex scenarios with multiple steps?
- Why not just one callback?

---

### Exercise 3: Anonymous Functions as Return Values

**Task:**

- Write `mathOperation(type)` that returns an anonymous function. If `type` is `"add"`, return a function that adds two numbers, etc.
- Test your returned function: `mathOperation("add")(2,3)` should give 5.

**Reflect (no code):**

- How can returning anonymous functions help make your code more flexible?
- What concept lets the returned function still access `type` if needed?

---

### Exercise 4: Object Methods and `this`

**Task:**

- Create an object `car` with `make`, `model`, `year`, and a method `describe()` that returns a string using `this` to reference these properties.
- Call `car.describe()` and confirm it shows the correct data.

**Reflect (no code):**

- How would you add another method that modifies `car` data?
- What issues arise if you try to use `this` in a nested anonymous function inside `car`?

---

### Exercise 5: Objects and Callbacks

**Task:**

- Make an object `dataHandler` with a property `data: []` and methods:
    - `addItem(item, callback)`: adds `item` and then calls `callback(this.data)`.
    - `transformData(callback)`: replaces `this.data` with the result of `callback(this.data)`.
- Add items and transform them.
- Test with both named and anonymous callbacks.

**Reflect (no code):**

- How does using callbacks with objects help create reusable, modular code?
- What if the callback fails or throws an error?

---

### Additional Challenge

**Without coding, explain (in your own words) to a friend what callbacks are and why they’re important in JavaScript. Use a non-technical analogy.**

- Don’t just say “they are functions passed to other functions.” Show an example or scenario that makes sense in everyday life.

---

**Tips:**

- Work step by step.
- Insert `console.log` at various points to understand the execution order.
- Attempt small variations (change delays, data, or callback logic) to see how it affects the output.