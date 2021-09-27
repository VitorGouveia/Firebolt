class Post extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" })
    shadow.innerHTML = `
      <h1>This is a post</h1>

      <p>
        This post was made entirely with web components, while it really helps on the HTML part, on the js part it's really hard to style and etc
      </p>
    `
  }
}

customElements.define("page-post", Post)