const express = require("express");
const app = express();


app.get("/Home", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/About", (req, res) => {
    res.send("Welcome to About Page");
});

app.get("/services", (req, res) => {
    res.send("Welcome to Services Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

--------------
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>Welcome to Home Page!</h1>
      <p>This is the Home Page of my website.</p>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </body>
    </html>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>About Page</title>
    </head>
    <body>
      <h1>About Us</h1>
      <p>This is About Page.</p>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
    </body>
    </html>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Contact Page</title>
    </head>
    <body>
      <h1>Contact Us</h1>
      <p>Email: example@gmail.com</p>
      <p>Phone: 1234567890</p>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

