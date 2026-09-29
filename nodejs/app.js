const http=require("http");

http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/html'});

res.end('Hello World!');

}).listen(8080);


---


read file

const fs = require("fs");

fs.readFile("not-found.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

write file

const fs = require("fs");

var data = "text";

fs.writeFile("demo.txt", data, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File written successfully");
});
