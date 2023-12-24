let elements;
let name = "oi";

function createVDOM() {
  return [
    {
      id: '3',
      tagName: 'div',
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
              id: '5',
              tagName: 'button',
              handlers: {
                click: handleClickClear
              },
              children: [
                {
                  tagName: 'span',
                  attributes: {
                    textContent: 'Limpar'
                  },
                }
              ]
            }
          ]
        },
        {
          id: '4',
          tagName: 'span',
          attributes: {
            textContent: `Meu nome  ${name}`,
          },
        }
      ]
    }
  ];
}

function handleClickClear() {
  name = ''
}

function handleChangeName(e) {
  name = e.target.value;
}

function handleEvent(e, fn) {
  fn(e);
  updateVDOM();
  document.getElementById(e.target.id).focus()
}

function convertToHTMLNode(data) {
  const { tagName, id, attributes, handlers, children } = data;
  const element = document.createElement(tagName);

  element.id = id;
  if (attributes) {
    Object.entries(attributes).forEach(([attribute, value]) => {
      element[attribute] = value;
    });
  }
  if (handlers) {
    Object.entries(handlers).forEach(([handler, fn]) => {
      element.addEventListener(handler, (e) => handleEvent(e, fn));
    });
  }
  if (children) {
    element.replaceChildren(...children.map(convertToHTMLNode))
  }
  return element;
}

function updateVDOM() {
  elements = createVDOM();
  document.body.replaceChildren(...elements.map(convertToHTMLNode));
}

updateVDOM();
