let name = "oi";

export function Form() {
  function handleClickClear() {
    name = "";
  }

  function handleChangeName(e) {
    name = e.target.value;
  }

  return [
    {
      id: "3",
      tagName: "div",
      children: [
        {
          id: "1",
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
          id: "2",
          tagName: "div",
          children: [
            {
              id: "5",
              tagName: "button",
              handlers: {
                click: handleClickClear,
              },
              children: [
                {
                  tagName: "span",
                  attributes: {
                    textContent: "Limpar",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "4",
          tagName: "span",
          attributes: {
            textContent: `Meu nome  ${name}`,
          },
        },
      ],
    },
  ];
}
