const firebolt = {
  hi: "vitor",
  createElement(tag, uiCallback) {
    const jsx = uiCallback();

    return () => jsx;
  },
  createController(callback) {
    const result = callback();

    return () => result;
  },
  create(tag, controllerCallback) {
    const { component, ...props } = controllerCallback();

    const ID = new Date().getTime();

    class Element extends HTMLElement {
      constructor() {
        const self = super();

        Object.entries(props).forEach(([name, value]) => {
          self[name] = value;
        });

        self.setAttribute("data-firebolt-id", ID);

        return self;
      }

      static get observedAttributes() {
        return Object.keys(props);
      }

      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
      }

      connectedCallback() {
        if (typeof tag === "string") {
          this.innerHTML = `<${tag}>${this.textContent}</${tag}>`;
          return;
        }

        if (typeof tag === "function") {
          this.innerHTML = tag();
          return;
        }
      }

      // disconnectedCallback() {}
    }

    customElements.define(component, Element);

    return document.querySelector(`[data-firebolt-id="${ID}"]`);
  },
  createContext(callback) {
    const context = callback();

    return () => context;
  },
  useContext(context, selector) {
    if (selector) {
      return selector(context());
    }

    return context();
  },
  createStore(callback) {
    const store = callback();

    return (selector) => {
      if (selector) {
        return selector(store);
      }

      return store;
    };
  },
};

window.firebolt = firebolt;
