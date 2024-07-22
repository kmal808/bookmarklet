import createBookmarkTemplate from './bookmark.js'

const createListTemplate = (bookmarks) => /*html*/ `
  <ul>
    ${bookmarks.map((bookmark) => createBookmarkTemplate(bookmark)).join('')}
  </ul>  
`
export default createListTemplate
