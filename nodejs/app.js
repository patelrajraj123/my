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







const fs = require('fs');

fs.writeFile('my.txt', 'hii ', (err) => {
    if (err) throw err;
    console.log('Create file');

    fs.readFile('my.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File read:', data);

        fs.appendFile('my.txt', '\nindus', (err) => {
            if (err) throw err;
            console.log('Data appended in file');

            fs.readFile('my.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log('File read:', data);

                fs.unlink('my.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted');
                });
            });
        });
    });
});








const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000;

// 1. Create file
app.get('/create', (req, res) => {
    fs.writeFile('my.txt', 'hii ', (err) => {
        if (err) {
            return res.status(500).send('Error creating file');
        }

        res.send('File created successfully');
    });
});

// 2. Read file
app.get('/read', (req, res) => {
    fs.readFile('my.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found. Create it first.');
        }

        res.send('File content: ' + data);
    });
});

// 3. Append data to file
app.get('/append', (req, res) => {
    fs.appendFile('my.txt', '\nindus', (err) => {
        if (err) {
            return res.status(500).send('Error appending to file');
        }

        res.send('File appended successfully');
    });
});

// 4. Delete file
app.get('/delete', (req, res) => {
    fs.unlink('my.txt', (err) => {
        if (err) {
            return res.status(404).send('File not found. Create it first.');
        }

        res.send('File deleted successfully');
    });
});

// 5. Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
