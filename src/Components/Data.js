const files = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: `gsap.fromTo('.mybtn',{x:100},{y:200})`
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: `body { margin: 0; padding: 0; }
      button{
          background-color: blue;
         height: 100vh;
      }`
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: `<!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8" />
          <title>title</title>
          <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
      </head>
      <body>
          <button class="mybtn">hello</button>
      </body>
      </html>`
    }
  };

  export default files