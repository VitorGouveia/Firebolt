const firebolt = {
  hi: "vitor",
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
