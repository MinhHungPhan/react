# JavaScript Review - Destructuring

Welcome to the JavaScript review section. Today, we will delve into an important and commonly-used concept in JavaScript: **Destructuring**.

## Table of Contents

- [Introduction](#introduction)
- [Setting Up](#setting-up)
- [Understanding Object Destructuring](#understanding-object-destructuring)
- [Understanding Array Destructuring](#understanding-array-destructuring)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

Destructuring is a concise way to extract values from arrays or properties from objects into distinct variables. It simplifies the process of accessing and assigning these values or properties, making our code cleaner and more readable.

## Setting Up

Before diving into destructuring, let's set up our environment:

1. Create a new folder named **javascript-review**.
2. Retrieve the starter files from the GitHub repo you downloaded at the start of this course.
3. Copy the **script.js** from the starter folder into the project folder you just created.
4. To open this folder in VS Code, drag and drop the folder. This action will set it as the project folder.
    - Alternatively, if you encounter issues, click on "open" in VS Code to manually locate and open the folder.
5. The `script.js` contains sample data, including an array of books and a couple of utility functions.
6. To execute JavaScript directly within VS Code, use the `Quokka` extension. If you haven't installed it yet, do so. This allows you to run JavaScript without needing to connect to an HTML file.

## Understanding Object Destructuring

Consider we have an object representing a book with properties such as title, author, and publication date.

### Traditional Access:

```javascript
const title = book.title;
const author = book.author;
```

### With Object Destructuring:

```javascript
const { title, author } = book;
```

In the above example, `title` and `author` are now separate variables that hold the respective values from the `book` object. The variable names must match the object's property names.

**Example:**

If we have a book with the properties:
- `title`
- `author`
- `pages`
- `publicationDate`
- `genres`
- `hasMovieAdaptation`

We can destructure it like:

```javascript
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
```

## Understanding Array Destructuring

For arrays, destructuring works based on the order of elements.

### Traditional Access:

```javascript
const primaryGenre = genres[0];
const secondaryGenre = genres[1];
```

### With Array Destructuring:

```javascript
const [primaryGenre, secondaryGenre] = genres;
```

In the above example, `primaryGenre` will be assigned the value of the first element in the `genres` array, and `secondaryGenre` will be assigned the value of the second element.

## Conclusion

Destructuring is a powerful feature in JavaScript, offering a more concise way to access elements and properties from arrays and objects. By leveraging destructuring, we can enhance the readability and maintainability of our code.

Remember, practice makes perfect. The more you use destructuring, the more natural it will feel. Happy coding! 🌱

## References

- [MDN Web Docs: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)