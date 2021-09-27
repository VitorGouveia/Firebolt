class Post2 extends HTMLElement {
  constructor() {
    super()
    const getPost = async () => {
      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(await this.fetchPost())
    }
    getPost()
  }

  async fetchPost() {
    const div = document.createElement("div")
    div.classList.add("post")

    const response = await fetch("./js/fetch/post.html")
    const data = await response.text()
    
    div.innerHTML = data

    return div
  }
}

customElements.define("page-post2", Post2)