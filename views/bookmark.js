const createBookmarkTemplate = (bookmark) => /*html*/ `
  <li data-id="${bookmark.id}">
    <div class="details">
      <h3>${bookmark.title}</h3>
      <p>${bookmark.url}</p>
      <p>${bookmark.label}</p>
    </div>
    <button>Delete</button>
  </li>
`
export default createBookmarkTemplate
