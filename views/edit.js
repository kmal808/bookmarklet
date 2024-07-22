const createEditFormTemplate = (bookmark) => /*html*/ `
  <form 
    hx-put="/bookmarks/${bookmark.id}" 
    hx-target="closest li"
    hx-swap="outerHTML"
  >
    <input
      type="text"
      name="title"
      value="${bookmark.title}"
      placeholder="Title"
      required
    />
    <input
      type="url"
      name="url"
      value="${bookmark.url}"
      placeholder="https://example.com"
      required
    />
    <input
      type="text"
      name="label"
      value="${bookmark.label}"
      placeholder="Label"
    />
    <button>Confirm</button>  
  </form>
`
export default createEditFormTemplate
