# Rendering the Root Component: Pizza Menu Project

Welcome to the Pizza Menu project! In this guide, we'll take you through the steps to start building this project from scratch. If you're new to React or looking for a refresher on setting up a React project, this guide will serve you well. Let's get started!

## Table of Contents

- [Introduction](#introduction)
- [Starting from Scratch](#starting-from-scratch)
- [Setting Up the Environment](#setting-up-the-environment)
- [Building the App Component](#building-the-app-component)
- [Rendering to the DOM](#rendering-to-the-dom)
- [React Version Differences](#react-version-differences)
- [Strict Mode](#strict-mode)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

In this guide, we'll set up a React project from scratch, explaining each step along the way. This will provide a foundation for the Pizza Menu project that we'll build throughout this section.

## Starting from Scratch

To start fresh:
1. Delete all files that are not essential to the project.
2. Retain `index.HTML` but disregard other non-essential files.
   
Remember, as we move forward, always make sure your browser and code editor are side by side. This will help you see the code's output in real time.

## Setting Up the Environment

Create the primary file `index.js`. This name is crucial because the module bundler for this project, webpack, expects this file to be the main entry point.

Begin by importing necessary libraries:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
```

These libraries provide the fundamental functions and methods to build and render our React components.

## Building the App Component

Create a basic functional component called `App`:

```javascript
function App() {
  return <h1>Hello React!</h1>;
}
```

While the name `App` is a convention, any functional component's name should start with an uppercase letter.

## Rendering to the DOM

To render the `App` component to the DOM:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

In the above code, we first create a root using the `ReactDOM` library. We then render our App component within this root.

## React Version Differences

The method mentioned above works for React version 18. For older code bases (before React 18), the rendering looks a bit different:

```javascript
// For React 17 and before:
ReactDOM.render(<App />, document.getElementById('root'));
```

With React 18, there were slight changes in the way we import React-DOM and render our app, making our application ready for the newer version.

## Strict Mode

For better development, wrap your App component in a `StrictMode` component:

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

`StrictMode` is a utility from React that helps detect potential problems in your application during development. It renders components twice to find specific bugs and checks if you're using outdated parts of the React API.

## Conclusion

Congratulations! You've now set up a basic React project from scratch. This foundation will serve as the base for our Pizza Menu project. Remember, always activate strict mode when developing React applications for a safer and more efficient development process.

## References

- [React Official Documentation](https://reactjs.org/)
- [Webpack Official Documentation](https://webpack.js.org/)

Thank you for following along, and happy coding! 🚀