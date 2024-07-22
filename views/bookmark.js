const createBookmarkTemplate = (bookmark) => /*html*/ `
  <li data-id="${bookmark.id}">
    <div 
      class="details" 
      hx-get="/bookmarks/edit/${bookmark.id}" 
      hx-target="closest li">
      <h3>${bookmark.title}</h3>
      <p>${bookmark.url}</p>
      <p>${bookmark.label}</p>
    </div>
    <button 
      hx-delete="/bookmarks/${bookmark.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML"
      >Delete
    </button>
  </li>
`
export default createBookmarkTemplate
