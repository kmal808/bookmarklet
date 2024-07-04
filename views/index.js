const createHomepageTemplate = () => /*html*/ `
  <html>
    <head>
      <title>BookMarklet</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>BookMarklet</h1>
      </header>
      <main>
        <div class="bookmark-list">
          <button hx-get="/bookmarks" hx-target=".bookmark-list">Show Bookmarks</button>
        </div>

        <div class="add-bookmark-form">
          <h2>Enter or paste your link 🔗 to save to the list 😎</h2>
          <form action="">
            <input
              type="text"
              name="title"
              placeholder="Title"
            />
            <input
              type="text"
              name="url"
              placeholder="https://example.com"
            />
            <input
              type="text"
              name="label"
              placeholder="Label"
            />
            <button hx-post="/bookmarks" hx-target=".bookmark-list ul" hx-swap="beforeend">Add Bookmark</button>  
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
