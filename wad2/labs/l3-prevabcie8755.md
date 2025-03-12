---
outline: [2, 3]
footer: false
---

# WAD, Spring 2025 - Lab 3 (March 13, 2025)

Read the following description carefully.

### Web-page Structure

#### **1. General Layout:**

Create a web-page with the following sections:

- **Header** → Contains a **logo** and the **website name**.
- **Main Section** → Includes:
  - An **article** with multiple paragraphs.
  - Different types of text formatting.
  - Bullet point lists.
  - Headings to structure the content.
  - An **image** related to the article.
  - The **date of posting** displayed.
- **Profile Card** → Displays:
  - Your **profile picture** (in a circular frame).
  - Your **name**.
  - A **brief bio** about yourself.
  - The **number of followers** you have.
  - Styled to look like a **card**.
- **Footer** → Includes a **copyright message**.

#### **2. Styling & Design:**

- Use **CSS** to enhance the website’s appearance.
- A **more visually appealing design** will earn higher marks.
- **Explore Figma Community** for design inspiration:  
   [Figma Community Website Templates](https://www.figma.com/community/website-templates).

### CSS Rules to Follow

Implement the following CSS rules:

#### **Selectors Usage:**

- **Element Selectors** → Style all headings and paragraphs.
- **Class Selectors** → Use for **navigation** and **buttons**.
- **ID Selectors** → Apply to **uniquely style the main section**.
- **Attribute Selectors** → Use them to style links differently based on their type, such as:
  - **External links** (`a[href^="http"]`) → Links that go to other websites.
  - **Internal links** (`a[href^="/"]`) → Links that navigate within your website.
  - **Document links** (`a[href$=".pdf"]`) → Links that open PDF or other document files.
- **Pseudo-Classes** → Add hover effects (`:hover`) on links and buttons.
- **Pseudo-Elements** → Use (`::before`, `::after`) for decorative content.
- **Contextual Selectors** → Example: `nav a {}` for styling links inside the navbar.

#### **Box Model & Layout Styling:**

- Set **width and height** for the card layout.
- Apply **background-color** or **background-image**.
- Use **borders** and **border-radius** to round corners.
- Add **box-shadow** for depth effect.
- Use **padding** inside the card for spacing.
- Apply **margin** to center the card in the viewport.

#### **Typography & Readability:**

- Choose a **readable font-family**.
- Set different **font sizes** for headings and body text.
- Adjust **font-weight** for emphasis.
- Define **line-height** and **text-align** for better readability.
- Use **letter-spacing** and **word-spacing** for aesthetics.
- Apply `text-transform` to **capitalize headings** or highlight sections.

#### Use CSS variables to define repeating colors and values
