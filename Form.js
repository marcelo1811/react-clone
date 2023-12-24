import { Button } from "./Button.js";

let name = "oi";

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
      {
        tagName: "div",
        children: Button({ title: "Limpar", onClick: handleClickClear }),
      },
      {
        tagName: "span",
        attributes: {
          textContent: `Meu nome  ${name}`,
        },
      },
    ],
  };
}
