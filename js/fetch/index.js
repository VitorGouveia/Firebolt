const getComponent = async () => {
  /* use fetch API to get the contents of the html file */
  const response = await fetch(`./js/fetch/post.html`)
  /* turn it into text, since it cannot be JSON */
  const data = await response.text()

  /* creates a DIV  */
  const div = document.createElement("div")
  /* gives it the post class  */
  div.classList.add("post")
  /* insert the post content into the div  */
  div.innerHTML = data

  /* put the div into the post container */
  document.querySelector(".post-container").appendChild(div)
}

getComponent()