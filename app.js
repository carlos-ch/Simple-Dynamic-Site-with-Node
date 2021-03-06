const router = require("./router.js")
// Solution: Use Node.js to perform the profile look ups and server our templates via HTTP.

// (1.) Create a web server

const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
