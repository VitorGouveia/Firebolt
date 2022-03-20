# Firebolt

a SPA js framework made for fun :)

# Features

- Polyfill for temporal API included
- Unified storage API to work with LocalStorage and Cookies
- Easy two-way data binding with controlled state
- Context & Global State management
- Content Caching
- Native PWA package
- API for selecting DOM elements
- Router?

# Syntax

```ts
import firebolt from "firebolt";

// firebolt.register(<Component>, <name>)

const useUsernameStore = firebolt.createStore(() => ({
  username: "",
  hasButtonBeenPressed: false,
  setUsername: (username, state) => ({
    ...state,
    username,
  }),
  setButtonPressed: (hasButtonBeenPressed, state) => ({
    ...state,
    hasButtonBeenPressed,
  }),
}));

const userContext = firebolt.createContext(() => {
  // this runs behind the scenes
  const { username, setUsername, hasButtonBeenPressed, setButtonPressed } =
    useUsernameStore();

  return {
    username,
    setUsername,
    hasButtonBeenPressed,
    setButtonPressed,
  };
});

const Button = firebolt.create("button", () => {
  const { hasButtonBeenPressed, setButtonPressed } =
    firebolt.useContext(userContext);

  return {
    name: "form-custom-button",
    onclick: (event) => {
      event.preventDefault();

      setButtonPressed(true);
    },
    disabled: hasButtonBeenPressed,
  };
});

const InputFieldComponent = firebolt.createElement("input", ({ placeholder, ...props }) => {
  const { username } = firebolt.useContext(userContext);

  return `
    <div>
      <h1>username preview: ${username}</h1>
      <label>${placeholder}</label>
      <input ${...props} placeholder=${placeholder} />
    </div>
  `
})

const InputFieldController = firebolt.createController(() => {
  const { setUsername } = firebolt.useContext(userContext);

  return {
    onChange: (event) => {
      setUsername(event.target.value);
    },
  };
})

// a component has two parts
// the UI
// and the logic
// both separated
const Input = firebolt.create(InputFieldComponent, InputFieldController);
```

```html
<body>
  <app-input name="username" placeholder="set your username" />

  <form-custom-button>set my new username</form-custom-button>
</body>
```
