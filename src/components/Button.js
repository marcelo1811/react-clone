export function Button({ onClick, title }) {
  return {
    tagName: "button",
    attributes: {
      style: 'color: white; background-color: red;'
    },
    handlers: {
      click: onClick,
    },
    children: title,
  };
}
