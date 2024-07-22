const createHomepageTemplate = () => /*html*/ `
  <html>
    <head>
      <title>BookMarkList</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>BookMarkList</h1>
        <h4>The todo list for your bookmarks 📚</h4>
      </header>

      <main>
        <div class="search" style="text-align: center;">
          <input 
            type="search" 
            name="search" 
            placeholder="search bookmarks by title..."
            hx-post="/bookmarks/search"
            hx-trigger="keyup changed delay:500ms"
            hx-target=".bookmark-list"
          />
        </div>
        <div class="bookmark-list">
          <button 
            hx-get="/bookmarks" 
            hx-target=".bookmark-list"
            hx-trigger="dblclick">Show Bookmarks</button>
        </div>

        <div class="add-bookmark-form">
          <h2>Enter or paste your link 🔗 to add it to the list 😎</h2>
          <form 
            hx-post="/bookmarks"
            hx-target=".bookmark-list ul"
            hx-swap="beforeend"
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
            <input
              id="url"
              type="text"
              name="url"
              placeholder="https://example.com"
              required
            />
            <input
              id="label"
              type="text"
              name="label"
              placeholder="Label"
            />
            <button hx-on:click="console.log('new bookmark added', event)">Add</button>  
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
