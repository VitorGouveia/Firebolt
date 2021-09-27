class Post2 extends HTMLElement {
  constructor() {
    super()
    const getPost = async () => {
      const response = await fetch("./js/fetch&webcomponent/post.html")
    const data = await response.text()
      const shadow = this.attachShadow({ mode: "open" })
      shadow.innerHTML = data
    }
    /* could probably fetch css here i think */
    getPost()
  }
}

customElements.define("page-post2", Post2)