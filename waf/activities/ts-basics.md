# **15-Minute TypeScript Tutorial: Building a Simple Shapes Calculator Together**

Welcome! In this short tutorial, we'll build a simple TypeScript program that calculates the area and perimeter of different shapes. Along the way, we'll explore various TypeScript features such as type annotations, interfaces, classes, enums, and modules.

**Let's get started!**

---

## **Step 1: Project Setup**

### **1.1 Create a New Project Directory**

Open your terminal and create a new directory for the project:

```bash
mkdir shapes-calculator
cd shapes-calculator
```

### **1.2 Initialize a New NPM Project**

Initialize a new Node.js project with default settings:

```bash
npm init -y
```

### **1.3 Install TypeScript**

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

### **1.4 Initialize TypeScript Configuration**

Initialize a `tsconfig.json` file with default settings:

```bash
npx tsc --init
```

This file allows you to customize TypeScript compiler options.

---

## **Step 2: Create the Enum and Interfaces**

### **2.1 Define an Enum for Shape Types**

Create a new file `ShapeType.ts` in the `src` directory:

```bash
mkdir src
cd src
touch ShapeType.ts
```

In `ShapeType.ts`, define the `ShapeType` enum:

```typescript
// src/ShapeType.ts
export enum ShapeType {
  Circle = 'CIRCLE',
  Rectangle = 'RECTANGLE'
}
```

### **2.2 Define Interfaces for Shapes**

Create a new file `IShape.ts`:

```bash
touch IShape.ts
```

In `IShape.ts`, define the `IShape` interface:

```typescript
// src/IShape.ts
export interface IShape {
  type: string;
  getArea(): number;
  getPerimeter(): number;
}
```

---

## **Step 3: Implement Classes for Shapes**

### **3.1 Create the Circle Class**

Create a new file `Circle.ts`:

```bash
touch Circle.ts
```

In `Circle.ts`, implement the `Circle` class:

```typescript
// src/Circle.ts
import { IShape } from './IShape';
import { ShapeType } from './ShapeType';

export class Circle implements IShape {
  type: string = ShapeType.Circle;
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
```

### **3.2 Create the Rectangle Class**

Create a new file `Rectangle.ts`:

```bash
touch Rectangle.ts
```

In `Rectangle.ts`, implement the `Rectangle` class:

```typescript
// src/Rectangle.ts
import { IShape } from './IShape';
import { ShapeType } from './ShapeType';

export class Rectangle implements IShape {
  type: string = ShapeType.Rectangle;
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
```

---

## **Step 4: Utilize Generics and Union Types**

### **4.1 Create a Generic Function**

In a new file `ShapeUtils.ts`, create a function that processes any shape:

```bash
touch ShapeUtils.ts
```

```typescript
// src/ShapeUtils.ts
import { IShape } from './IShape';

export function displayShapeInfo<T extends IShape>(shape: T): void {
  console.log(`Shape Type: ${shape.type}`);
  console.log(`Area: ${shape.getArea().toFixed(2)}`);
  console.log(`Perimeter: ${shape.getPerimeter().toFixed(2)}`);
}
```

---

## **Step 5: Write the Main Program**

### **5.1 Create the Entry Point**

Create `index.ts` in the `src` directory:

```bash
touch index.ts
```

In `index.ts`, put everything together:

```typescript
// src/index.ts
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { displayShapeInfo } from './ShapeUtils';

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

displayShapeInfo(circle);
console.log('-------------------');
displayShapeInfo(rectangle);
```

---

## **Step 6: Compile and Run the Program**

### **6.1 Compile TypeScript to JavaScript**

Compile the TypeScript files:

```bash
npx tsc
```

This will generate JavaScript files in the `dist` directory (default).

### **6.2 Run the Program**

Run the compiled JavaScript using Node.js:

```bash
node dist/index.js
```

### **Expected Output**

```plaintext
Shape Type: CIRCLE
Area: 78.54
Perimeter: 31.42
-------------------
Shape Type: RECTANGLE
Area: 24.00
Perimeter: 20.00
```

---

## **Step 7: Explore Advanced TypeScript Features**

### **7.1 Type Guards**

Let's add a function that uses a type guard to check the shape type.

In `ShapeUtils.ts`, add:

```typescript
// src/ShapeUtils.ts
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

function isCircle(shape: IShape): shape is Circle {
  return shape.type === 'CIRCLE';
}

export function displayDetailedInfo(shape: IShape): void {
  displayShapeInfo(shape);

  if (isCircle(shape)) {
    console.log(`Radius: ${(shape as Circle).radius}`);
  } else if (shape instanceof Rectangle) {
    console.log(`Width: ${(shape as Rectangle).width}`);
    console.log(`Height: ${(shape as Rectangle).height}`);
  }
}
```

Update `index.ts` to use `displayDetailedInfo`:

```typescript
// src/index.ts
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { displayDetailedInfo } from './ShapeUtils';

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

displayDetailedInfo(circle);
console.log('-------------------');
displayDetailedInfo(rectangle);
```

Re-compile and run the program:

```bash
npx tsc
node dist/index.js
```

### **New Output**

```plaintext
Shape Type: CIRCLE
Area: 78.54
Perimeter: 31.42
Radius: 5
-------------------
Shape Type: RECTANGLE
Area: 24.00
Perimeter: 20.00
Width: 4
Height: 6
```

---

## **Step 8: Review and Conclusion**

Congratulations! You've just:

- **Set up a TypeScript project** with `tsconfig.json`.
- **Used enums** to define fixed sets of constants.
- **Defined interfaces** to enforce contracts on classes.
- **Implemented classes** with properties and methods.
- **Utilized generics** to create reusable functions.
- **Applied type guards** for type safety at runtime.
- **Organized code using modules** and ES6 imports/exports.

---

## **Optional Enhancements**

If you have extra time, consider exploring these features:

### **8.1 Async/Await with Promises**

Simulate fetching shape data asynchronously:

```typescript
// src/ShapeService.ts
export async function fetchShapeData(): Promise<IShape[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Circle(7),
        new Rectangle(10, 5)
      ]);
    }, 1000);
  });
}
```

Update `index.ts`:

```typescript
// src/index.ts
import { displayDetailedInfo } from './ShapeUtils';
import { fetchShapeData } from './ShapeService';

async function main() {
  const shapes = await fetchShapeData();
  shapes.forEach((shape) => {
    displayDetailedInfo(shape);
    console.log('-------------------');
  });
}

main();
```

### **8.2 Decorators**

Add a simple class decorator to log when a class is instantiated:

```typescript
// src/Decorators.ts
export function Logger(constructor: Function) {
  console.log(`New instance created: ${constructor.name}`);
}
```

Apply the decorator to the `Circle` class:

```typescript
// src/Circle.ts
import { Logger } from './Decorators';

@Logger
export class Circle implements IShape {
  // ... rest of the class
}
```

---

## **Wrapping Up**

TypeScript provides powerful features that help you write safer and more maintainable code. By completing this tutorial, you've touched upon many key aspects of TypeScript.

---

# **Complete Code Files for Reference**

### **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

### **src/ShapeType.ts**

```typescript
export enum ShapeType {
  Circle = 'CIRCLE',
  Rectangle = 'RECTANGLE'
}
```

### **src/IShape.ts**

```typescript
export interface IShape {
  type: string;
  getArea(): number;
  getPerimeter(): number;
}
```

### **src/Circle.ts**

```typescript
import { IShape } from './IShape';
import { ShapeType } from './ShapeType';

export class Circle implements IShape {
  type: string = ShapeType.Circle;
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
```

### **src/Rectangle.ts**

```typescript
import { IShape } from './IShape';
import { ShapeType } from './ShapeType';

export class Rectangle implements IShape {
  type: string = ShapeType.Rectangle;
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
```

### **src/ShapeUtils.ts**

```typescript
import { IShape } from './IShape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

export function displayShapeInfo<T extends IShape>(shape: T): void {
  console.log(`Shape Type: ${shape.type}`);
  console.log(`Area: ${shape.getArea().toFixed(2)}`);
  console.log(`Perimeter: ${shape.getPerimeter().toFixed(2)}`);
}

function isCircle(shape: IShape): shape is Circle {
  return shape.type === 'CIRCLE';
}

export function displayDetailedInfo(shape: IShape): void {
  displayShapeInfo(shape);

  if (isCircle(shape)) {
    console.log(`Radius: ${(shape as Circle).radius}`);
  } else if (shape instanceof Rectangle) {
    console.log(`Width: ${(shape as Rectangle).width}`);
    console.log(`Height: ${(shape as Rectangle).height}`);
  }
}
```

### **src/index.ts**

```typescript
import { displayDetailedInfo } from './ShapeUtils';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

displayDetailedInfo(circle);
console.log('-------------------');
displayDetailedInfo(rectangle);
```

---

**Thank you for coding along!** Feel free to experiment further and explore more TypeScript features.