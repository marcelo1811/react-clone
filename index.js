import { App } from "./src/App.js";
import { generateUUID } from "./src/utils/generateUUID.js";

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

  let element;
  if (!tagName) {
    return document.createTextNode(children);
  }

  element = document.createElement(tagName);
  element.id = id || generateUUID();
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
    } else if (typeof children === 'string') {
      element['textContent'] = children
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
