const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {
  const currentTime = moment().format("DD-MM-YYYY HH:mm:ss");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World!</h1>");
  res.write("<p>Current Date and Time: " + currentTime + "</p>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
