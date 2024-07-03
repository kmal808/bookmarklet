import BOOKMARKS_DATA from '../data/data.js'
import createBookmarkTemplate from './bookmark.js'

const createListTemplate = () => /*html*/ `
  <ul>
    ${BOOKMARKS_DATA.map((bookmark) => createBookmarkTemplate(bookmark)).join(
			''
		)}
  </ul>  
`
export default createListTemplate
