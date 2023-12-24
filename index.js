import { App } from "./App.js";
import { generateUUID } from "./generateUUID.js";

const root = document.getElementById("root");
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

  element.id = data.id || generateUUID();
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
    if (Array.isArray(children)) {
      element.replaceChildren(...children.map(convertToHTMLNode));
    } else {
      element.replaceChildren(convertToHTMLNode(children));
    }
  }
  return element;
}

function updateVDOM() {
  elements = createVDOM().map(convertToHTMLNode);
  root.replaceChildren(...elements);
}

updateVDOM();
