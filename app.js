import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'
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
	res.send(createListTemplate())
})

app.post('/bookmarks', (req, res) => {
	const { title, url, label } = req.body
	const id = Math.random().toString(36).substring(2, 15)

	BOOKMARKS_DATA.push({ id, title, url, label })
	res.send(createListTemplate())
})

// listen to port
app.listen(3000, () => {
	console.log('App listening on port 3000')
})
