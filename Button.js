export function Button({ onClick, title }) {
  return {
    tagName: "button",
    attributes: {
      style: 'color: white; background-color: red;'
    },
    children: [
      {
        tagName: "span",
        attributes: {
          textContent: title,
        },
        handlers: {
          click: onClick,
        },
      },
    ],
  };
}
