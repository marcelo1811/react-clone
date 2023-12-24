import { App } from "./App.js";

let elements;

function createVDOM() {
  return App();
}

function handleEvent(e, fn) {
  fn(e);
  updateVDOM();
  document.getElementById(e.target.id).focus();
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
    element.replaceChildren(...children.map(convertToHTMLNode));
  }
  return element;
}

function updateVDOM() {
  elements = createVDOM();
  document.body.replaceChildren(...elements.map(convertToHTMLNode));
}

updateVDOM();
