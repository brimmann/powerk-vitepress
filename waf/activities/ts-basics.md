# **15-Minute TypeScript Activity: Building a Simple To-Do List App**

**Objective:**

In this quick tutorial, we'll build a simple command-line To-Do List application using TypeScript. We'll cover key TypeScript features such as type annotations, interfaces, classes, enums, and basic asynchronous operations. Let's code together!

---

## **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Step 1: Initialize the Project](#step-1-initialize-the-project)
4. [Step 2: Define a Task Interface](#step-2-define-a-task-interface)
5. [Step 3: Create an Enum for Task Status](#step-3-create-an-enum-for-task-status)
6. [Step 4: Implement the ToDoList Class](#step-4-implement-the-todolist-class)
7. [Step 5: Add Basic Operations](#step-5-add-basic-operations)
8. [Step 6: Test the Application](#step-6-test-the-application)
9. [Conclusion](#conclusion)

---

## **Prerequisites**

- Node.js and npm installed on your machine.
- Basic knowledge of JavaScript and some familiarity with TypeScript.

---

## **Project Setup**

Let's get started by setting up our project environment.

### **Step 1: Initialize the Project**

1. **Create a new directory and navigate into it:**

   ```bash
   mkdir todo-app
   cd todo-app
   ```

2. **Initialize a new npm project:**

   ```bash
   npm init -y
   ```

3. **Install TypeScript and ts-node (for running TypeScript files directly):**

   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```

4. **Initialize a TypeScript configuration file:**

   ```bash
   npx tsc --init
   ```

   This creates a `tsconfig.json` file with default settings.

5. **Open the project in your code editor (e.g., VS Code):**

   ```bash
   code .
   ```

---

### **Step 2: Define a Task Interface**

Create a `Task` interface to define the structure of a to-do item.

1. **Create a new file `Task.ts` in a `models` folder:**

   - Create a folder:

     ```bash
     mkdir models
     ```

   - Create the file:

     ```bash
     touch models/Task.ts
     ```

2. **Define the `Task` interface:**

   ```typescript
   // models/Task.ts

   import { TaskStatus } from './TaskStatus';

   export interface Task {
     id: number;
     title: string;
     description?: string;
     status: TaskStatus;
   }
   ```

---

### **Step 3: Create an Enum for Task Status**

Enums in TypeScript allow us to define a set of named constants.

1. **Create a new file `TaskStatus.ts` in the `models` folder:**

   ```bash
   touch models/TaskStatus.ts
   ```

2. **Define the `TaskStatus` enum:**

   ```typescript
   // models/TaskStatus.ts

   export enum TaskStatus {
     Pending = 'Pending',
     InProgress = 'InProgress',
     Completed = 'Completed',
   }
   ```

---

### **Step 4: Implement the ToDoList Class**

We'll create a class to manage our tasks.

1. **Create a new file `ToDoList.ts` in a `classes` folder:**

   - Create the folder:

     ```bash
     mkdir classes
     ```

   - Create the file:

     ```bash
     touch classes/ToDoList.ts
     ```

2. **Implement the `ToDoList` class:**

   ```typescript
   // classes/ToDoList.ts

   import { Task } from '../models/Task';
   import { TaskStatus } from '../models/TaskStatus';

   export class ToDoList {
     private tasks: Task[] = [];
     private nextId: number = 1;

     public addTask(title: string, description?: string): Task {
       const task: Task = {
         id: this.nextId++,
         title,
         description,
         status: TaskStatus.Pending,
       };
       this.tasks.push(task);
       return task;
     }

     public listTasks(): Task[] {
       return this.tasks;
     }

     public updateTaskStatus(id: number, status: TaskStatus): boolean {
       const task = this.tasks.find((t) => t.id === id);
       if (task) {
         task.status = status;
         return true;
       }
       return false;
     }
   }
   ```

   **Explanation:**

   - **Private properties:**
     - `tasks`: An array to store our tasks.
     - `nextId`: A number to keep track of the next task ID.
   - **Methods:**
     - `addTask`: Adds a new task to the list.
     - `listTasks`: Returns all tasks.
     - `updateTaskStatus`: Updates the status of a task.

---

### **Step 5: Add Basic Operations**

Let's create an entry point to interact with our `ToDoList`.

1. **Create a new file `index.ts` in the `src` folder:**

   - Create the folder:

     ```bash
     mkdir src
     ```

   - Create the file:

     ```bash
     touch src/index.ts
     ```

2. **Implement basic operations:**

   ```typescript
   // src/index.ts

   import { ToDoList } from '../classes/ToDoList';
   import { TaskStatus } from '../models/TaskStatus';

   const myToDoList = new ToDoList();

// Function to simulate async operation
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  console.log('Adding tasks...\n');
  myToDoList.addTask('Learn TypeScript', 'Cover basic to advanced topics.');
  myToDoList.addTask('Build a project', 'Implement a TypeScript project.');

  await delay(1000); // Simulate async delay

  console.log('Current Tasks:\n');
  myToDoList.listTasks().forEach((task) => {
    console.log(
      `ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`
    );
  });

  await delay(1000);

  console.log('\nUpdating task status...\n');
  myToDoList.updateTaskStatus(1, TaskStatus.Completed);

  await delay(1000);

  console.log('Updated Tasks:\n');
  myToDoList.listTasks().forEach((task) => {
    console.log(
      `ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`
    );
  });
})();
   ```

   **Explanation:**

   - We create an instance of `ToDoList`.
   - Add two tasks.
   - List tasks with their statuses.
   - Update the status of the first task to `Completed`.
   - List tasks again to show the updated status.
   - Used an async IIFE (Immediately Invoked Function Expression) to simulate asynchronous operations using `async/await`.

---

### **Step 6: Test the Application**

1. **Compile and run the application using `ts-node`:**

   ```bash
   npx ts-node src/index.ts
   ```

2. **Expected Output:**

   ```
   Adding tasks...

   Current Tasks:

   ID: 1, Title: Learn TypeScript, Status: Pending
   ID: 2, Title: Build a project, Status: Pending

   Updating task status...

   Updated Tasks:

   ID: 1, Title: Learn TypeScript, Status: Completed
   ID: 2, Title: Build a project, Status: Pending
   ```

---

## **Conclusion**

Congratulations! You've built a simple To-Do List application using TypeScript in just 15 minutes. We've covered:

- **Type Annotations:** Specifying types for variables and function parameters.
- **Interfaces:** Defining the shape of objects with the `Task` interface.
- **Enums:** Using `TaskStatus` enum to represent fixed sets of constants.
- **Classes:** Implementing the `ToDoList` class with properties and methods.
- **Asynchronous Functions:** Using `async/await` to simulate async operations.

---

Feel free to expand this application by adding more features, such as:

- Removing tasks.
- Persisting tasks to a file or database.
- Adding user input from the command line.