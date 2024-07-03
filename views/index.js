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
          <!-- form template goes here -->
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
