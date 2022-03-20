// function update() {
//   document.querySelector("body").innerHTML =
//     document.querySelector("main").innerHTML;
// }
import { render, html } from "https://unpkg.com/uhtml?module";
const elementTable = {
  input: HTMLInputElement,
  button: HTMLButtonElement,
  p: HTMLParagraphElement,
};

const firebolt = {
  create(tag, callback) {
    const { component, entry, ...props } = callback();

    if (typeof tag !== "string") {
      render(document.querySelector(entry), tag(props));
      return tag;
    }

    const element = document.createElement(tag);

    Object.entries(props).forEach(([propName, value]) => {
      if (propName.includes("on")) {
        element[propName] = value;
        return;
      }

      element.setAttribute(propName, value);
    });

    document.querySelector(entry).appendChild(element);
    return element;
  },

  createElement(elementCallback) {
    return (...props) => elementCallback(...props);
  },

  createContext(callback) {
    const values = callback();

    return values;
  },

  useContext(context, selectorCallback) {
    if (!selectorCallback) {
      return context;
    }

    return selectorCallback(context);
  },
};

const fireboltDOM = {
  create(tag, callback) {
    const { component, entry, ...props } = callback();

    class Element extends elementTable[tag] {
      constructor(...rest) {
        const self = super({ ...rest });

        Object.entries(props).forEach(([propName, value]) => {
          if (propName.includes("on")) {
            self[propName] = value;
            return;
          }

          self.setAttribute(propName, value);
        });

        return self;
      }
    }

    customElements.define(component, Element, {
      extends: tag,
    });

    return new Element();
  },
};

window.firebolt = firebolt;
