# Quick Tutorial: Building an Express Server with TypeScript in 15 Minutes

In this tutorial, we'll walk through setting up a basic Express server using TypeScript. This will help you understand the fundamental features of TypeScript in a practical context. By the end, you'll have a simple server running and a grasp of basic TypeScript concepts.

## Prerequisites

- Node.js and npm installed on your machine
- Basic knowledge of JavaScript and Node.js
- A code editor (like Visual Studio Code)

---

## Step 1: Set Up the Project Directory

Create a new directory for your project and navigate into it:

```bash
mkdir express-typescript-tutorial
cd express-typescript-tutorial
```

## Step 2: Initialize npm and Install Dependencies

Initialize a new npm project:

```bash
npm init -y
```

Install Express and TypeScript as development dependencies:

```bash
npm install express
npm install --save-dev typescript ts-node @types/node @types/express
```

- **express**: The Express framework.
- **typescript**: TypeScript compiler.
- **ts-node**: Allows running TypeScript files directly.
- **@types/node** and **@types/express**: Type definitions for Node.js and Express.

## Step 3: Configure TypeScript

Initialize a TypeScript configuration file:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file. Open it and ensure the following settings are configured:

```json
{
  "compilerOptions": {
    "target": "ES6",                         
    "module": "commonjs",                    
    "outDir": "./dist",                      
    "rootDir": "./src",                      
    "strict": true,                          
    "esModuleInterop": true,                 
    "skipLibCheck": true,                    
    "forceConsistentCasingInFileNames": true 
  }
}
```

- **target**: The JavaScript version to compile to.
- **module**: The module system to use.
- **outDir**: The output directory for compiled JavaScript files.
- **rootDir**: The root directory of TypeScript source files.

## Step 4: Write the Express Server in TypeScript

Create a `src` directory and add an `index.ts` file:

```bash
mkdir src
touch src/index.ts
```

Open `src/index.ts` and add the following code:

```typescript
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple interface
interface Message {
  text: string;
  author: string;
}

// GET endpoint
app.get('/', (req: Request, res: Response) => {
  const message: Message = {
    text: 'Hello, TypeScript with Express!',
    author: 'Your Name',
  };
  res.json(message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### Explanation:

- **Imports**: We import `express` and types for `Request` and `Response`.
- **Interface**: We define a `Message` interface to type the response object.
- **Middleware**: `express.json()` parses incoming JSON requests.
- **GET Endpoint**: Sends a JSON response with typed data.

## Step 5: Build and Run the Server

To run the server, we'll use `ts-node` for simplicity.

Add a script to your `package.json`:

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Now start the server:

```bash
npm start
```

You should see:

```
Server is running at http://localhost:3000
```

Open your browser and navigate to `http://localhost:3000`. You should see the JSON message.

## Step 6: Add a Route with Parameters and Types

Let's add a new route that takes a parameter and demonstrates more TypeScript features.

Update `src/index.ts`:

```typescript
// ...

// Define a User interface
interface User {
  id: number;
  name: string;
}

// Mock user data
const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// GET user by ID
app.get('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send(`User with ID ${id} not found.`);
  }
});
```

### Explanation:

- **User Interface**: Defines the shape of a user object.
- **Mock Data**: An array of users to simulate a database.
- **Route**: Retrieves a user by ID, demonstrating type assertions and type-safe code.

## Step 7: Use Async/Await with TypeScript

Let's simulate an asynchronous operation, such as fetching data from a database.

Modify the `/users/:id` route:

```typescript
// ...

// Simulate an asynchronous database call
const getUserById = (id: number): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);
      resolve(user);
    }, 500); // Simulate delay
  });
};

// Update the route to use async/await
app.get('/users/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const user = await getUserById(id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send(`User with ID ${id} not found.`);
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});
```

### Explanation:

- **Async Function**: `getUserById` simulates an asynchronous function returning a `Promise`.
- **Await**: We use `await` to wait for the promise to resolve.
- **Error Handling**: We wrap the logic in a `try...catch` block.

## Step 8: Restart the Server and Test

Since we've updated the code, restart the server:

```bash
npm start
```

Test the new route in your browser or with `curl`:

```bash
curl http://localhost:3000/users/1
```

You should see:

```json
{
  "id": 1,
  "name": "Alice"
}
```

## Conclusion

You've now:

- Set up a basic Express server with TypeScript.
- Used TypeScript interfaces to define object shapes.
- Handled route parameters with type safety.
- Implemented asynchronous functions with async/await.

This foundational knowledge will help you build more complex applications using TypeScript and Express.

---

Feel free to explore more TypeScript features, such as enums, generics, and advanced type definitions, to further enhance your application.