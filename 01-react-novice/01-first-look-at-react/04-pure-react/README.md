# Pure React Without Modern Tooling

Welcome to a brief introduction on how to write React code without relying on modern tools or a build process. This guide is intended to give you a firsthand experience with "pure React", highlighting the simplicity yet limitations of not utilizing modern tooling.

## Table of Contents

- [Introduction](#introduction)
- [Setting Up the Project](#setting-up-the-project)
- [Integrating React](#integrating-react)
- [Creating Our First Component](#creating-our-first-component)
- [Adding Dynamic Content](#adding-dynamic-content)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

React, at its core, can be written without any additional tools or build processes. By exploring this pure version of React, you'll gain an appreciation for the advanced tools that make development faster and more convenient.

## Setting Up the Project

1. **Create a Project Folder**: Name it "01-pure-React".

2. **Open in VS Code**: You can drag and drop this folder onto the VS Code icon or simply open the folder from the menu.

3. **Create an `index.HTML` File**: In VS Code, you can scaffold an empty HTML structure by typing an exclamation mark and hitting enter. Name your title "Hello React!" and in the body, create a div with the ID of "root". This is the standard for React, where our React components will be rendered.

## Integrating React

1. **Include React Library as a Script**: You can find the script URLs from the official [React documentation](https://react.dev). Look for the section labeled "Try React locally" and use the given script tags.

2. **Why Two Libraries?**:

```js
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- The first script (`react.js`) is the core React library. It handles components, state, and core React functionalities.
- The second script (`react-dom.js`) is responsible for rendering React components into the DOM. Since we're building a web application, we need the `react-dom` library.

## Creating Our First Component

1. **Script Tag**: Create another script tag after including the React libraries.

2. **Define Component**: A React component is essentially a function that starts with an uppercase letter. Create a function named `App`.

3. **Rendering JSX vs. Pure React**: Normally, we use JSX syntax, but in this setup, we'll use `React.createElement` to create elements. This is because we don’t have the tooling to convert JSX into JavaScript in this pure setup.

## Adding Dynamic Content

1. **Adding Content**: To add content inside your header, you'll need to specify it as the third argument in the `React.createElement` function.

2. **Adding Dynamic Time**: You can display the current time by creating a new date object and converting it to a local time string. This showcases how you can integrate plain JavaScript within your React components.

3. **Auto-Updating Time**: To make your time display update every second:
- Introduce the concept of state using `React.useState`.
- Use `React.useEffect` combined with JavaScript's `setInterval` function to update the time state every second.

## Conclusion

Writing React without any modern tooling provides a foundational understanding of React's mechanics. However, it's evident that this approach has its limitations, making modern tooling essential for real-world applications. In subsequent sections, we'll delve into the powerful tools that make React development efficient and enjoyable.

Remember, the key here is not to memorize everything but to understand the essence. Modern tooling exists for a reason, and as you progress, you'll appreciate their power and necessity. Enjoy your journey in React!

## References

- [Official React Documentation](https://react.dev)