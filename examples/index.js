// function update() {
//   document.querySelector("body").innerHTML =
//     document.querySelector("main").innerHTML;
// }

const elementTable = {
  input: HTMLInputElement,
  button: HTMLButtonElement,
  p: HTMLParagraphElement,
};

const firebolt = {
  create(tag, callback) {
    const { component, entry, ...props } = callback();

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
    // class Element extends elementTable[tag] {
    //   constructor(...rest) {
    //     const self = super({ ...rest });

    //     Object.entries(props).forEach(([propName, value]) => {
    //       self[propName] = value;
    //     });

    //     return self;
    //   }
    // }

    // customElements.define(name, Element, {
    //   extends: tag,
    // });
    // return new Element();
  },
  // createStore(callback) {
  //   const set = (setter) => {
  //     const newState = setter({ ...store, ...actions });
  //     result = newState;
  //     console.log("updating...");
  //     update();
  //   };
  //   const { actions, ...store } = callback(set);
  //   let result = { ...store, ...actions };
  //   return result;
  // },
};

window.firebolt = firebolt;
