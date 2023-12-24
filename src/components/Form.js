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
      Button({ title: "Limpar", onClick: handleClickClear }),
      {
        tagName: 'div',
        children: `Meu nome é: ${name}`,
      },
    ],
  };
}
