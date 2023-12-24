import { Form } from "./Form.js";

export function App() {
  return [
    {
      tagName: "div",
      children: [
        {
          tagName: "h1",
          attributes: {
            textContent: "Digite seu nome",
          },
        },
        {
          tagName: "div",
          children: Form(),
        },
      ],
    },
  ];
}
