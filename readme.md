# Firebolt

a SPA js framework made for fun :)

# Problem

desevolver um app com minimas funcionalidades com js puro pra deixar simples

negativos:
sem two-way data binding
API DOM imperativa
lidar com fetch de informações
popular informações na tela, map de data pra tela
formulários horrivel
router API lixo, sem redirect, sem configuração de rotas, sem basePath etc
compartilhamento de informções entre arquivos
salvar no localStorage precisa de JSON.stringify

não quero que seja um SPA nem CSR, cada arquivo html vai ter sua logica imbutida ali
então nao precisa de um contexto
context basico pra autenticação

tem que ter uma forma da UI e o js conversarem e trocarem dados como se não fosse nada
como por exemplo com o CustomElements & WebComponents

Oq eu não quero:
formas especiais de tratar eventos tipo no lit("@click") e angular ([ng-app]), tudo tem que ser tratado como html normal e js normal

2 threads
ui - a ui roda aqui simples, definir os custom elements aq
worker - todo o framework roda aqui, pegar a logica dos custom elements e executar aq

# Features

- Polyfill for temporal API included
- Unified storage API to work with LocalStorage and Cookies
- Easy two-way data binding with controlled state
- Context & Global State management
- Content Caching
- Native PWA package
- API for selecting DOM elements
- Router

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
