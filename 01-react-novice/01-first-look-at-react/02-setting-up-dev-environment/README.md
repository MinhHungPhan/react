# React Development Environment Setup

This tutorial serves as a guide to get your development environment set up for a React course. It covers everything from the code editor to the web browser and Node.js setup.

## Table of Contents

- [Introduction](#introduction)
- [Setting up VS Code](#setting-up-vs-code)
- [Configuring Web Browser](#configuring-web-browser)
- [Installing Node.js](#installing-nodejs)
- [Configuring VS Code Settings and Extensions](#configuring-vs-code-settings-and-extensions)
- [Setting up Snippets](#setting-up-snippets)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

Before diving deep into React coding, it's essential to ensure that your development environment is properly set up. This document provides step-by-step instructions, assuming you have a basic knowledge of coding.

## Setting up VS Code

VS Code is one of the most recommended code editors, and if you haven't installed it yet, it's time to do so:

1. [Download VS Code here](https://code.visualstudio.com/download)

2. Follow the installation process like any other application.

Once installed, you can customize your VS Code as demonstrated in the course for consistency.

## Configuring Web Browser

Google Chrome is the recommended browser to ensure that your applications look consistent with the course demos. If you haven't installed it:

1. [Download Google Chrome here](https://www.google.com/chrome/)
2. Install it.

## Installing Node.js

We will not be developing with Node.js directly, but the tools we'll be using run on it. Ensure you have at least Node version 18.

1. [Download Node.js here](https://nodejs.org/en/download/)

2. Install it.

After installation, you can check the version by opening a terminal and typing:
```bash
node -v
```

## Configuring VS Code Settings and Extensions

### Essential Extensions

1. **ESLint**: A linter to identify and report on patterns. [Download here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. **Prettier**: Automatically formats your code for consistency. [Download here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Themes

1. **One Monokai**: For a consistent color theme.
2. **Material Icons**: A theme for the file icons in the file tree.

### Important Settings

1. **Auto-save**: Set auto-save to onFocusChange.
2. **Formatter**: Set Prettier as your default formatter and enable formatting on save.
3. **ESLint**: Configure ESLint to run on save.

## Setting up Snippets

Snippets speed up your development process by providing predefined pieces of code. There are some essential snippets available in the starter files downloaded from the course's GitHub repo:

1. `cl` for `console.log()`
2. `RFC` for creating a React functional component.
3. Forward React style component snippet.

To integrate these snippets:

1. Open the snippets file from the GitHub repo.
2. Copy the snippets.
3. Navigate to User Snippets in VS Code.
4. Paste the snippets.

## Conclusion

With the above steps, you're now all set to dive into React! As you progress through the course, the environment setup ensures a smooth learning experience, allowing you to focus on the core concepts.

## References

- [VS Code](https://code.visualstudio.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Node.js](https://nodejs.org/)
- [ESLint on VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier on VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)