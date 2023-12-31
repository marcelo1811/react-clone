# React-Clone

React-Clone is a small project that recreates some of the core functionality of the popular JavaScript library React, using only HTML and JavaScript. This project serves as an educational resource for developers who want to understand the inner workings of React by building a simplified version of it from scratch.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with React-Clone, simply download the project files and open the `index.html` file in your web browser.

```bash
git clone https://github.com/marcelo1811/react-clone.git
cd react-clone
```

Now, open the `index.html` file in your favorite web browser.

## Features

React-Clone includes simplified implementations of the following React core features using only HTML and JavaScript:

- **Component Rendering**: Create and render components.

- **Component Props**: Pass custom props to a component.

- **State Management**: Implement a basic state management system.

- **Virtual DOM**: Construct and update a virtual DOM.

- **Event Handling**: Handle events within components.

Please note that React-Clone is a minimalistic version of React and does not include many of the advanced features and optimizations found in the official React library.

## Code snippets

### Form component

```js
// Form.js
import { Button } from "./Button.js";

let name = "";

export function Form() {
  function handleClickClear() {
    name = "";
  }

  function handleChangeName(e) {
    name = e.target.value;
  }

  return {
    tagName: "div",
    children: [
      {
        id: '1',
        tagName: "input",
        attributes: {
          type: "text",
          value: name,
        },
        handlers: {
          input: handleChangeName,
        },
      },
      Button({
        title: "Clear",
        onClick: handleClickClear,
        color: "white",
        bgColor: "red",
      }),
      {
        tagName: 'div',
        children: `My name is: ${name}`,
      },
    ],
  };
}
```

### Button component

```js
// Button.js
export function Button({ onClick, title, color='black', bgColor}) {
  return {
    tagName: "button",
    attributes: {
      style: `color: ${color}; background-color: ${bgColor};`
    },
    handlers: {
      click: onClick,
    },
    children: title,
  };
}
```

Simply include the `react-clone.js` file in your HTML and write your components using React-Clone's API.
