npm install upper-case
npm install lower-case


let http = require('http');
let uc = require('upper-case');
let lc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.write(lc.lowerCase("Hello World!"));
  res.end();
}).listen(8080);




























const http = require('http');
const uc = require('upper-case');
const lc = require('lower-case');


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });


  res.write(`
    <form method="GET">
      <input type="text" name="text" placeholder="Enter text">
      <button type="submit">Submit</button>
    </form>
  `);


  if (req.url.includes('?text=')) {
    const url = new URL(req.url, 'http://localhost:8080');
    const text = url.searchParams.get('text');


    res.write(`<h3>Uppercase: ${uc.upperCase(text)}</h3>`);
    res.write(`<h3>Lowercase: ${lc.lowerCase(text)}</h3>`);
  }


  res.end();
}).listen(8080);


console.log('Server running at http://localhost:8080');



