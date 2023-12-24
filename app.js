import { Form } from "./Form.js";

export function App() {
  return [
    {
      id: "4",
      tagName: "div",
      children: [
        {
          id: "7",
          tagName: "h1",
          attributes: {
            textContent: "Digite seu nome",
          },
        },
        {
          id: "8",
          tagName: "div",
          children: Form(),
        },
      ],
    },
  ];
}
