---
outline: [2, 3]
---

## Overview

In this lab, you will:

1. Create and manipulate **objects**.
2. Create, modify, and iterate over **arrays**.
3. Use the **spread operator** to copy and merge both arrays and objects.

Each section includes a brief demonstration snippet so you can see how the concepts are used in practice.

Do not copy code, instead write it so you can understand the whole concept. This is essential for your exploratory tasks, quizzes, assignments and exams. Follow the instructions in first 4 tasks and use your own logic and understanding to write code for Task 5.

---

### Prerequisites

- Basic JavaScript knowledge (variables, data types, functions).
- Familiarity with `console.log()` to inspect values.
- Understanding of basic iteration techniques.

---

### Task 1: Objects

**Objective:** Learn how to create objects, access and modify their properties, and iterate over their keys and values.

**Tasks:**

1. **Create an Object:**
    
    - Create an object named `book` with the properties `title`, `author`, `yearPublished`, and `genres` (an array of strings).
        
        **Demonstration:**
        
        ```js
        // Example demonstration
        const exampleBook = {
          title: "1984",
          author: "George Orwell",
          yearPublished: 1949,
          genres: ["Dystopian", "Political Fiction"]
        };
        console.log(exampleBook);
        // Output: { title: "1984", author: "George Orwell", yearPublished: 1949, genres: ["Dystopian", "Political Fiction"] }
        ```
        
2. **Accessing Object Properties:**
    
    - Access and log the `title` and `author` using both dot and bracket notations.
        
    - Access and log the first genre from `genres`.
        
        **Demonstration:**
        
        ```js
        console.log(exampleBook.title); // Dot notation
        console.log(exampleBook["author"]); // Bracket notation
        console.log(exampleBook.genres[0]); // Accessing array property of the object
        ```
        
3. **Modifying Object Properties:**
    
    - Change the `yearPublished` to a new value.
        
    - Add a new property `rating`.
        
        **Demonstration:**
        
        ```js
        exampleBook.yearPublished = 1950; // modifying existing property
        exampleBook.rating = 4.5; // adding new property
        console.log(exampleBook);
        // Updated object will now include rating and yearPublished changed to 1950
        ```
        
4. **Deleting Properties:**
    
    - Remove the `rating` property and confirm it’s gone.
        
        **Demonstration:**
        
        ```js
        delete exampleBook.rating;
        console.log(exampleBook); 
        // rating is now removed from the object
        ```
        
5. **Iterating Over an Object:**
    
    - Use a `for...in` loop to print all keys and values.
        
        **Demonstration:**
        
        ```js
        for (let key in exampleBook) {
          console.log(key, ":", exampleBook[key]);
        }
        // This will print each property and value, e.g.:
        // title : 1984
        // author : George Orwell
        // yearPublished : 1950
        // genres : ["Dystopian", "Political Fiction"]
        ```
        

---

### Task 2: Arrays

**Objective:** Practice creating arrays, accessing and modifying elements, and using array methods like `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `map`, `filter`, and `reduce`.

**Tasks:**

1. **Creating an Array:**
    
    - Create an array `favoriteMovies` with at least 5 movie titles.
        
        **Demonstration:**
        
        ```js
        const exampleMovies = ["Inception", "The Matrix", "Interstellar", "Parasite", "The Godfather"];
        console.log(exampleMovies); 
        // Output: ["Inception", "The Matrix", "Interstellar", "Parasite", "The Godfather"]
        ```
        
2. **Modifying Arrays:**
    
    - Use `push()`, `pop()`, `shift()`, and `unshift()` to add and remove movies.
        
        **Demonstration:**
        
        ```js
        exampleMovies.push("Avengers: Endgame"); // adds at the end
        exampleMovies.unshift("Joker"); // adds at the start
        console.log(exampleMovies);
        
        exampleMovies.pop(); // removes from the end
        exampleMovies.shift(); // removes from the start
        console.log(exampleMovies); 
        // Check the console to see how the array changed after each operation
        ```
        
3. **Slicing and Splicing:**
    
    - Use `slice()` to create a sub-array.
        
    - Use `splice()` to remove and insert elements.
        
        **Demonstration:**
        
        ```js
        const subArray = exampleMovies.slice(1, 3);
        console.log(subArray);
        // slice doesn't affect the original array
        
        exampleMovies.splice(2, 1, "Blade Runner", "Fight Club");
        console.log(exampleMovies);
        // splice modifies the original array
        ```
        
4. **Iterating Over Arrays:**
    
    - Use `forEach()` to print each movie.
        
    - Use `map()` to create an array of movie name lengths.
        
    - Use `filter()` to get movies that meet a certain criteria.
        
    - Use `reduce()` to perform a computation on all elements.
        
        **Demonstration:**
        
        ```js
        // forEach
        exampleMovies.forEach(movie => console.log(movie));
        
        // map
        const movieLengths = exampleMovies.map(movie => movie.length);
        console.log(movieLengths);
        
        // filter
        const longTitleMovies = exampleMovies.filter(movie => movie.length > 10);
        console.log(longTitleMovies);
        
        // reduce
        const totalChars = exampleMovies.reduce((acc, curr) => acc + curr.length, 0);
        console.log("Total characters:", totalChars);
        ```
        

---

### Task 3: Spread Operator

**Objective:** Learn to use the spread operator (`...`) to copy and merge arrays and objects, and to pass array elements as arguments to functions.

**Tasks:**

1. **Copying Arrays with Spread:**
    
    - Create a copy of an array and modify the copy without affecting the original.
        
        **Demonstration:**
        
        ```js
        const original = [1, 2, 3];
        const copy = [...original];
        copy.push(4);
        console.log("Original:", original); // [1, 2, 3]
        console.log("Copy:", copy); // [1, 2, 3, 4]
        ```
        
2. **Merging Arrays with Spread:**
    
    - Merge two arrays into one.
        
        **Demonstration:**
        
        ```js
        const moreMovies = ["Gravity", "Black Panther", "Spirited Away"];
        const allMovies = [...exampleMovies, ...moreMovies];
        console.log(allMovies);
        ```
        
3. **Copying Objects with Spread:**
    
    - Create a copy of an object and add new properties without affecting the original.
        
        **Demonstration:**
        
        ```js
        const originalBook = { title: "Dune", author: "Frank Herbert", year: 1965 };
        const extendedBook = { ...originalBook, publisher: "Chilton Books" };
        console.log(originalBook);
        console.log(extendedBook);
        ```
        
4. **Merging Objects with Spread:**
    
    - Merge multiple objects into a new object.
        
        **Demonstration:**
        
        ```js
        const bookSales = { copiesSold: 20000000, language: "English" };
        const completeBookInfo = { ...originalBook, ...bookSales };
        console.log(completeBookInfo);
        // If keys overlap, the last object’s values take precedence
        ```
        
5. **Spread Operator in Function Calls:**
    
    - Use the spread operator to pass array elements as separate arguments.
        
        **Demonstration:**
        
        ```js
        function printMovieList(...movieNames) {
          movieNames.forEach(movie => console.log(movie));
        }
        
        printMovieList(...exampleMovies); 
        // Each movie in exampleMovies is logged individually
        ```
        

---

### Task 4: All Together

**Objective:** Combine objects, arrays, and the spread operator in a more complex scenario.

**Scenario:**  
You have a bookstore with two sections: `literatureSection` and `scienceSection`. Each section is an array of book objects. Merge the sections, update specific books, and extract data using array methods.

**Tasks:**

1. **Creating the Data:**
    
    ```js
    const literatureSection = [
      { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, genres: ["Classic", "Romance"] },
      { title: "Moby-Dick", author: "Herman Melville", yearPublished: 1851, genres: ["Classic", "Adventure"] },
      { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", yearPublished: 1880, genres: ["Classic", "Philosophy"] }
    ];
    
    const scienceSection = [
      { title: "A Brief History of Time", author: "Stephen Hawking", yearPublished: 1988, genres: ["Science", "Non-fiction"] },
      { title: "The Selfish Gene", author: "Richard Dawkins", yearPublished: 1976, genres: ["Science", "Biology"] },
      { title: "Silent Spring", author: "Rachel Carson", yearPublished: 1962, genres: ["Science", "Environmental"] }
    ];
    ```
    
2. **Merging the Sections:**
    
    ```js
    const bookstoreInventory = [...literatureSection, ...scienceSection];
    console.log(bookstoreInventory);
    ```
    
3. **Updating Inventory:**
    
    - Find a book published before 1950 and update its year to 1950 using `map()` and the spread operator.
        
        **Demonstration:**
        
        ```js
        const updatedInventory = bookstoreInventory.map(book => {
          if (book.yearPublished < 1950) {
            return { ...book, yearPublished: 1950 }; // new object with updated year
          }
          return book;
        });
        console.log(updatedInventory);
        ```
        
4. **Filtering and Mapping:**
    
    - Filter for books in the "Fiction" or "Science" genres.
        
    - Map to create an array of just book titles.
        
        **Demonstration:**
        
        ```js
        const filteredBooks = updatedInventory.filter(book =>
          book.genres.includes("Science") || book.genres.includes("Fiction")
        );
        console.log("Filtered Books:", filteredBooks);
        
        const bookTitles = updatedInventory.map(book => book.title);
        console.log("All Book Titles:", bookTitles);
        ```
        
5. **Reducing the Data:**
    
    - Use `reduce()` to find the oldest publication year.
        
        **Demonstration:**
        
        ```js
        const oldestYear = updatedInventory.reduce((oldest, book) => {
          return (book.yearPublished < oldest) ? book.yearPublished : oldest;
        }, Infinity);
        
        console.log("Oldest Publication Year:", oldestYear);
        ```
        

---
### Task 5: Exploratory

**Objective:** Test your understanding by solving these exercises with no instructions or hints. **Do not provide any demonstration or guidance here.** Attempt to use what you have learned so far to complete these tasks.

**Exercises:**

1. Create an object representing a music album with properties for the album’s title, artist, releaseYear, and a list of track titles.
2. Update the releaseYear of the album and add a new property for genre.
3. Delete one property from the album.
4. Use a loop to log all properties of the album.
5. Create an array of at least five song titles.
6. Add and remove songs from the start and end of the array.
7. Use `slice()` and `splice()` on the array to create new variations.
8. Use `forEach()`, `map()`, `filter()`, and `reduce()` on the array for various transformations and summaries.
9. Create a copy of the songs array using the spread operator and then merge it with another array of song titles.
10. Create two objects representing two different playlists, merge them using the spread operator, and then modify one of the merged properties.
11. Pass an array of numbers to a function using the spread operator, and inside the function, calculate the sum of those numbers.
12. Combine all concepts: Create an array of objects, each representing a movie or a book with various properties, and then filter, map, and reduce them using the techniques you’ve learned. Use the spread operator to update at least one of these objects without mutating the original.

---
### Submission

- Include all your final code in a single JavaScript file.
- Use `console.log()` statements to display the results of each task.
- Add comments to explain what each section and line of code does.
- Verify that original objects/arrays are not accidentally mutated when using the spread operator.