class Post extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" })
    shadow.appendChild(this.createPost())

    document.querySelector(".post-container").appendChild(shadow)
  }

  createPost() {
    const div = document.createElement("div")
    div.classList.add("post")

    div.innerHTML = `
      <h1>This is a post</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, magnam? Eaque inventore tempore dolores et
        doloribus quod molestiae vitae omnis necessitatibus modi, blanditiis culpa voluptatum nam dolorem ad earum
        voluptates?
      </p>
    `

    return div
  }
}

customElements.define("page-post", Post)