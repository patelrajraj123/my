const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World!</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});











const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("Home Page");
  }

  else if (req.url === "/about") {
    res.end("About Page");
  }

  else if (req.url === "/contact") {
    res.end("Contact Page");
  }

  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
