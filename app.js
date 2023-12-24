import { Form } from "./Form.js";

export function App() {
  return [
    {
      tagName: "div",
      children: [
        {
          tagName: "h1",
          children: "Digite seu nome",
        },
        {
          tagName: "div",
          children: Form(),
        },
      ],
    },
  ];
}
