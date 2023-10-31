# Creating and Reusing Component with React

Welcome to our guide on building an application with React. We'll be walking through creating a new component and diving deep into the concept of reusability.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started: Accessing Starter Files](#getting-started-accessing-starter-files)
- [Creating Our First React Component](#creating-our-first-react-component)
- [Understanding Component Reusability](#understanding-component-reusability)
- [Visual Cleanup: GitHub Lines](#visual-cleanup-github-lines)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

React is a powerful library that allows developers to build modular and reusable components for web applications. One of its core philosophies is the idea of reusability – the ability to use a component in multiple places, ensuring a consistent look and behavior across an app.

## Getting Started: Accessing Starter Files

Before we begin:

1. Download the starter files for this project from GitHub.
2. Navigate to the `starter` folder.
3. Copy the three main files (folder of pizza images, starter data, and `index.css`).
4. Paste them into the `public` folder of your React project.

**Note**: It's a good practice to move `index.css` into the `src` folder for better organization.

## Creating Our First React Component

In React, components are typically written as functions. Let's create a simple component named `Pizza`.

```javascript
function Pizza() {
  return <h2>Pizza</h2>;
}
```

Remember:

1. Function names of components should start with an uppercase letter.
2. Functions should return some form of JSX, or `null`.

However, merely defining a component doesn't render it on the screen. For that, you'd need to include it inside another component, usually `App`.

```javascript
function App() {
  return (
    <div>
      <Pizza />
    </div>
  );
}
```

**Important**: Do not nest function declarations. Instead, call or include one component inside another.

## Understanding Component Reusability

The true power of components comes from their reusability. Let's enhance our `Pizza` component to display an image and some details.

Using data from our starter data:

```javascript
const pizzaData = {
  name: "Delicious Spinach Pizza",
  ingredients: "spinach, mozzarella, tomatoes"
};

function Pizza() {
  return (
    <div>
      <h2>{pizzaData.name}</h2>
      <p>{pizzaData.ingredients}</p>
      <img src="spinaci.jpg" alt={pizzaData.name} />
    </div>
  );
}
```

To reuse this component multiple times, just call it multiple times:

```javascript
function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
```

This will render three pizza components with the same data. Customizing this data will be covered in future topics.

## Visual Cleanup: GitHub Lines

When you set up a new project with `Create-React-App`, it's automatically initialized as a GitHub repository. This might cause colored lines to appear in your editor's gutter. If you want a cleaner look:

1. Go to your editor settings.
2. Search for "diff decorations".
3. Set it to "none".

This will remove the visual noise from the editor.

## Conclusion

You've now taken a deep dive into creating and reusing React components. React's power comes from its modular and reusable design philosophy, allowing for clean and consistent UIs.

## References

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Component Patterns](https://levelup.gitconnected.com/5-react-component-patterns-3f1c8c3d995a)
- [Create React App](https://create-react-app.dev/)