import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'
import createBookmarkTemplate from './views/bookmark.js'
import createEditFormTemplate from './views/edit.js'

import BOOKMARKS_DATA from './data/data.js'

// create app
const app = express()
app.use(express.urlencoded({ extended: false }))

// static assets
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
	res.send(createHomepageTemplate())
})

app.get('/bookmarks', (req, res) => {
	res.send(createListTemplate(BOOKMARKS_DATA))
})

app.post('/bookmarks', (req, res) => {
	const { title, url, label } = req.body
	const id = Math.random().toString()

	BOOKMARKS_DATA.push({ id, title, url, label })
	res.redirect('/bookmarks/' + id)
})

app.get('bookmarks/:id', (req, res) => {
	const { id } = req.params

	const bookmark = BOOKMARKS_DATA.find((bookmark) => bookmark.id === id)
	res.send(createBookmarkTemplate(bookmark))
})

app.delete('bookmarks/:id', (req, res) => {
	const idx = BOOKMARKS_DATA.findIndex(
		(bookmark) => bookmark.id === req.params.id
	)
	BOOKMARKS_DATA.splice(idx, 1)
	res.send()
})

app.put('bookmarks/:id', (req, res) => {
	const { title, url, label } = req.body
	const { id } = req.params
	const newBookmark = { id, title, url, label }
	const idx = BOOKMARKS_DATA.findIndex((bookmark) => bookmark.id === id)
	BOOKMARKS_DATA[idx] = newBookmark
	res.send(createBookmarkTemplate(newBookmark))
})

app.get('bookmarks/edit/:id', (req, res) => {
	const bookmark = BOOKMARKS_DATA.find(
		(bookmark) => bookmark.id === req.params.id
	)
	res.send(createEditFormTemplate(bookmark))
})

app.post('bookmarks/search', (req, res) => {
	const text = req.body.search.toLowerCase()
	const bookmarks = BOOKMARKS_DATA.filter((bookmark) =>
		bookmark.title.toLowerCase().includes(text)
	)
	res.send(createListTemplate(bookmarks))
})

// listen to port
app.listen(3000, () => {
	console.log('App is running 🏃‍➡️ on port 3000, better catch 🏈 it')
})
