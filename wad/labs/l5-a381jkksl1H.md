
## Procedural Task
The following tasks are provided with proper instruction, the task is marked correct as long as you follow the instructions. Do not copy code, instead write it so you can understand the whole concept. This is essential for your exploratory tasks, quizzes, assignments and exams.

### Task 1: Explore Flex-box
#### Objective
In this task you are going to explore how to use flex-box at a very basic level

#### Setup
Create a new HTML file (`index-p-task1.html`) and a CSS file (`styles-p-task1.css`). Link `styles-p-task1.css` to `index-p-task1.html`.

##### Step 1: Setting Up Your Project

Create a simple HTML file and link it to a CSS stylesheet.

**`index-p-task1.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Tutorial</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

**`styles-p-task1.css`**
```css
body {
  font-family: Arial, sans-serif;
}

.container {
  border: 2px solid #333;
  padding: 20px;
}

.item {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
}
```

Open `index-p-task1.html` in your browser to see a simple layout with three items.

##### Step 2: Understanding Flex Container and Flex Items

- **Flex Container**: The parent element that holds the flex items. It’s where you apply Flexbox properties.
- **Flex Items**: The child elements inside the flex container that will be arranged by Flexbox.

In our example:

- `.container` is the **flex container**.
- `.item` elements are the **flex items**.

##### Step 3: Applying `display: flex`

To activate Flexbox on the container, set its `display` property to `flex`.

**`styles.css`**
```css
.container {
  display: flex;
  border: 2px solid #333;
  padding: 20px;
}
```

**Result:** The `.item` elements will now align horizontally by default.

##### Step 4: Flex Direction

The `flex-direction` property defines the direction in which the flex items are placed in the container.

 Common Values:

- `row` (default): Items are placed horizontally.
- `column`: Items are placed vertically.

**Example: Setting Flex Direction to Column**

```css
.container {
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  padding: 20px;
}
```

**Result:** The `.item` elements stack vertically.

##### Step 5: Justify Content

The `justify-content` property aligns flex items along the main axis (horizontal by default).

 Common Values:

- `flex-start` (default): Items align to the start.
- `flex-end`: Items align to the end.
- `center`: Items are centered.
- `space-between`: Items are evenly distributed with the first item at the start and last at the end.
- `space-around`: Items are evenly distributed with equal space around them.

**Example: Centering Items Horizontally**

```css
.container {
  display: flex;
  justify-content: center;
  border: 2px solid #333;
  padding: 20px;
}
```

**Result:** All `.item` elements are centered horizontally within the container.

##### Step 6: Align Items

The `align-items` property aligns flex items along the cross axis (vertical by default).

 Common Values:

- `stretch` (default): Items stretch to fill the container.
- `flex-start`: Items align to the start.
- `flex-end`: Items align to the end.
- `center`: Items are centered.
- `baseline`: Items are aligned along their baseline.

**Example: Centering Items Vertically**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Added height for vertical alignment */
  border: 2px solid #333;
  padding: 20px;
}
```

**Result:** All `.item` elements are centered both horizontally and vertically within the container.

##### Step 7: Combining Flex Properties

Let’s create a more structured layout by combining `flex-direction`, `justify-content`, and `align-items`.

**Example: Space Between Items Vertically**

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  border: 2px solid #333;
  padding: 20px;
}
```

**Result:** The `.item` elements are arranged vertically with equal space between them and centered horizontally.

##### Step 8: Responsive Design with Flexbox

Flexbox is inherently responsive. Let’s make our layout adjust based on screen size.

**Example: Changing Layout on Smaller Screens**

```css
/* Default Flex Layout */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #333;
  padding: 20px;
}

/* Flex Layout for Screens Less Than 600px Wide */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

**Result:** On screens wider than 600px, items are arranged horizontally with space around them. On smaller screens, items stack vertically.

##### Conclusion

Flexbox is a versatile and powerful tool for creating responsive layouts with minimal code. By understanding and utilizing the basic Flexbox properties—`display: flex`, `flex-direction`, `justify-content`, and `align-items`—you can design flexible and adaptive web layouts efficiently.

##### Next Steps

- **Explore More Flexbox Properties:** Such as `flex-wrap`, `align-content`, and individual item properties like `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Build Complex Layouts:** Try creating navigation bars, grids, and responsive cards.
- **Practice:** Use online Flexbox playgrounds like [Flexbox Froggy](https://flexboxfroggy.com/) to reinforce your understanding.

### Task 2: Form Validation at HTML Level
#### Objective
In this task you are going to explore how to validate forms before submitting using only HTML.

#### Setup
Create a new HTML file (`index-p-task2.html`) and a CSS file (`styles-p-task2.css`). Link `styles-p-task2.css` to `index-p-task2.html`.


##### Step 1: Setting Up Your Project

Create a simple project structure with an HTML file and a CSS file.

**Project Structure:**
```
/project
│
├── index.html
└── styles.css
```

`index-p-task2.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Forms Tutorial</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Form will go here -->
</body>
</html>
```

`styles-p-task2.css`
```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

form {
  max-width: 500px;
  margin: auto;
}

label {
  display: block;
  margin-top: 15px;
}

input, textarea, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
}
```

Open `index-p-task2.html` in your browser to see the basic structure.

##### Step 2: Understanding the `<form>` Element

The `<form>` element is the container for all form elements. It can include input fields, labels, buttons, and other elements.

 Basic Structure:
```html
<form action="#" method="get">
  <!-- Form elements go here -->
</form>
```

- **`action`**: Specifies where to send the form data when submitted. Using `#` keeps the user on the same page.
- **`method`**: Specifies the HTTP method to use (`get` or `post`). For simple validations, `get` is sufficient.

Example:
```html
<form action="#" method="get">
  <!-- Form elements -->
</form>
```

##### Step 3: Adding Form Inputs

Forms can contain various types of input elements to collect different types of data.

 Common Input Types:

- **Text Input**: Single-line text field.
- **Password Input**: For passwords; hides input characters.
- **Email Input**: For email addresses; includes basic validation.
- **Number Input**: For numerical input with up/down controls.
- **Textarea**: Multi-line text input.
- **Select Dropdown**: Dropdown list of options.
- **Radio Buttons**: Allow selection of one option from a set.
- **Checkboxes**: Allow multiple selections.
- **Submit Button**: Submits the form.

Example:
```html
<form action="#" method="get">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="1" max="100">

  <label for="bio">Biography:</label>
  <textarea id="bio" name="bio" rows="4"></textarea>

  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>

  <label for="hobbies">Hobbies:</label>
  <input type="checkbox" id="hobby1" name="hobbies" value="reading">
  <label for="hobby1">Reading</label>
  <input type="checkbox" id="hobby2" name="hobbies" value="traveling">
  <label for="hobby2">Traveling</label>

  <button type="submit">Submit</button>
</form>
```

**Explanation:**

- Each input is associated with a `<label>` for accessibility and usability.
- `id` and `for` attributes link labels to their corresponding inputs.
- Different input types are used to collect various data.

##### Step 4: Using Labels for Accessibility

Using `<label>` elements improves accessibility by linking labels to form controls, making it easier for screen readers and enhancing the clickable area.

 Best Practices:

- **Always use `<label>` elements** with `for` attributes matching the `id` of the input.
- This association helps users understand what data is expected.

 Example:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

 Alternative Approach: Wrapping Inputs with Labels
```html
<label>
  Email:
  <input type="email" name="email">
</label>
```

Both methods effectively associate the label with the input.

##### Step 5: Implementing HTML5 Validation Attributes

HTML5 introduces several attributes that allow you to validate user input directly in the browser without JavaScript.

 Common Validation Attributes:

- **`required`**: Makes the input mandatory.
- **`min` and `max`**: Set minimum and maximum values for number inputs.
- **`minlength` and `maxlength`**: Set minimum and maximum character lengths for text inputs.
- **`pattern`**: Defines a regex pattern that the input must match.
- **`type` Attributes**: Certain types like `email`, `url`, `number` have built-in validation.

Example:
```html
<form action="#" method="get">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="3" maxlength="15">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required pattern=".{6,}" title="Password must be at least 6 characters long">

  <button type="submit">Register</button>
</form>
```

**Explanation:**

- **Username**: Required, must be between 3 and 15 characters.
- **Email**: Required and must follow a valid email format.
- **Password**: Required and must be at least 6 characters long.

Browser Behavior:

When users try to submit the form without meeting the requirements, the browser will display default validation messages and prevent form submission.

Additional Validation Attributes:

- **`placeholder`**: Provides a hint to the user about what to enter.
- **`title`**: Offers additional information about the input, often used to customize validation messages.

 Example with `placeholder` and `title`:
```html
<label for="website">Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com" title="Please enter a valid URL">
```

##### Step 6: Styling Your Form with CSS

Enhancing the visual appeal of your form improves user experience. You can style form elements using CSS to create a clean and modern design.

 Example:
```css
form {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  font-weight: bold;
}

input, textarea, select {
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus, textarea:focus, select:focus {
  border-color: #66afe9;
  outline: none;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
```

Applying the Styles:

Ensure your `styles` file includes the above CSS rules. These styles will:

- **Form Container**: Have a light background, padding, rounded corners, and a subtle shadow.
- **Labels**: Be bold for better readability.
- **Inputs and Selects**: Feature borders and rounded corners, with a distinct border color when focused.
- **Buttons**: Display a green background that darkens on hover, enhancing interactivity.

**Result:** The form will have a clean, modern appearance with enhanced focus states and button interactions.

##### Conclusion

HTML forms are fundamental for interacting with users and collecting data. By understanding how to create forms and implement HTML5 validation, you can build robust, user-friendly interfaces with minimal effort. Here's a quick recap of what you've learned:

- **Creating Forms**: Using the `<form>` element and various input types.
- **Accessibility**: Associating labels with form controls for better usability.
- **Validation**: Leveraging HTML5 attributes to enforce data integrity.
- **Styling**: Enhancing the appearance of forms with CSS.

##### Next Steps

- **Explore More HTML5 Validation Attributes**: Such as `step` for number inputs and `multiple` for file uploads.
- **Learn About Form Accessibility**: Implementing ARIA (Accessible Rich Internet Applications) attributes for improved accessibility.
- **Practice Creating Different Forms**: Try building login forms, contact forms, and survey forms to reinforce your understanding.

## Exploratory Tasks
Read the problem statements and solve them accordingly using your own understanding.

### Task 1: Create a Horizontal Navigation Bar Using Flexbox

**Problem Statement:**

In this lab task, you will design a simple horizontal navigation bar using CSS Flexbox. The navigation bar should display a set of links arranged neatly in a single row. This exercise will help you understand and apply fundamental Flexbox properties to create clean and organized layouts.

**Requirements:**

1. **Layout:**
   - Create a navigation bar that spans the full width of the page.
   - Include at least five navigation links (e.g., Home, About, Services, Portfolio, Contact).
   - Arrange the navigation links horizontally in a single row.

2. **Flexbox Implementation:**
   - Utilize Flexbox properties such as `display: flex`, `justify-content`, and `align-items` to achieve the desired layout.
   - Ensure that the navigation links are evenly spaced within the navigation bar.
   - Align the navigation links vertically centered within the navigation bar.

3. **Styling:**
   - Add a background color to the navigation bar to distinguish it from the rest of the page.
   - Style the navigation links with padding, margins, and hover effects to enhance usability and visual appeal.
   - Change the cursor to a pointer when hovering over the navigation links to indicate interactivity.

**Additional Guidelines:**

- **Consistency:** Ensure that all navigation links have consistent padding and margins for a uniform look.
- **Accessibility:** Use semantic HTML elements (e.g., `<nav>`) to improve accessibility and SEO.
- **Scalability:** Design the navigation bar in a way that allows easy addition or removal of links without disrupting the layout.

### Task 2: Create a User Registration Form with HTML5 Validation

**Problem Statement:**

In this lab,task  you will design and implement a user registration form using HTML5. The form should collect essential user information and utilize HTML5 validation attributes to ensure that the input data meets specified criteria. This exercise will help you understand how to create forms that provide immediate feedback to users, enhancing the overall user experience without the need for additional scripts or server-side processing.

**Requirements:**

1. **Form Structure:**
   - Create a registration form that includes the following input fields:
     - **Full Name:** Text input.
     - **Email Address:** Email input.
     - **Password:** Password input.
     - **Confirm Password:** Password input.
     - **Age:** Number input.
     - **Website:** URL input (optional).
     - **Bio:** Textarea for a short biography (optional).
     - **Gender:** Radio buttons with options (e.g., Male, Female, Other).
     - **Hobbies:** Checkboxes with multiple options (e.g., Reading, Traveling, Gaming).
     - **Terms and Conditions:** Checkbox to agree to terms.

2. **HTML5 Validation:**
   - **Required Fields:** Ensure that Full Name, Email Address, Password, Confirm Password, Age, Gender, and Terms and Conditions are mandatory.
   - **Email Validation:** Use the appropriate `type` attribute to validate the email format.
   - **Password Requirements:**
     - Minimum length of 6 characters.
     - Use the `pattern` attribute to enforce password rules (e.g., at least one number and one uppercase letter).
   - **Confirm Password:** Ensure that this field matches the Password field using HTML5 validation.
   - **Age Constraints:** 
     - Set a minimum age of 18 and a maximum age of 100 using the `min` and `max` attributes.
   - **Website URL:** If provided, validate that the input is a proper URL.
   - **Bio Character Limit:** Limit the biography to a maximum of 300 characters using the `maxlength` attribute.
   - **Terms and Conditions:** Users must check this box to submit the form.

3. **Accessibility:**
   - Use `<label>` elements appropriately to associate labels with their corresponding input fields.
   - Ensure that the form is navigable using a keyboard.

4. **Styling:**
   - Apply basic CSS to make the form visually appealing and user-friendly.
   - Highlight input fields with validation errors using CSS pseudo-classes like `:invalid`.
