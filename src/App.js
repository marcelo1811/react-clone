import { Form } from "./components/Form.js";

export function App() {
  return [
    {
      tagName: "div",
      children: [
        {
          tagName: "h1",
          children: "Type your name",
        },
        {
          tagName: "div",
          children: Form(),
        },
      ],
    },
  ];
}
