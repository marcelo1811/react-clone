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
