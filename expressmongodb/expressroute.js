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







MyWebsite/
│
├── server.js
├── package.json
│
└── public/
    └── index.html


const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Student Schema
const Student = mongoose.model("Student", {
    name: String,
    email: String,
    age: Number,
    roll: Number
});

// Home
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Add Student
app.post("/add", async (req, res) => {

    await Student.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        roll: req.body.roll
    });

    res.send("<h2>Student Added Successfully!</h2><a href='/'>Go Home</a>");
});

// Show Students
app.get("/students", async (req, res) => {

    const students = await Student.find();

    let output = "<h1>All Students</h1>";

    students.forEach(student => {
        output += `
        <p>
        Name: ${student.name}<br>
        Email: ${student.email}<br>
        Age: ${student.age}<br>
        Roll: ${student.roll}
        <a href="/delete/${student._id}">Delete</a>
        </p><hr>`;
    });

    output += "<a href='/'>Go Home</a>";

    res.send(output);
});

// Delete Student
app.get("/delete/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.redirect("/students");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});



public/index.html

<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>

    <style>
        body {
            font-family: Arial;
            background: #eee;
            margin: 0;
        }

        header {
            background: #222;
            color: white;
            text-align: center;
            padding: 20px;
        }

        nav {
            background: #444;
            text-align: center;
            padding: 15px;
        }

        button {
            padding: 12px 20px;
            background: #008CBA;
            color: white;
            border: none;
            margin: 5px;
            cursor: pointer;
        }

        .page {
            display: none;
            background: white;
            padding: 25px;
            margin: 30px auto;
            max-width: 500px;
        }

        input {
            display: block;
            padding: 10px;
            margin: 12px 0;
            width: 90%;
        }
    </style>
</head>

<body>

<header>
    <h1>My Website</h1>
    <p>HTML CSS JavaScript Express MongoDB</p>
</header>

<nav>
    <button onclick="showPage('home')">Home</button>
    <button onclick="showPage('student')">Add Student</button>
    <button onclick="location.href='/students'">Show Students</button>
    <button onclick="showPage('about')">About</button>
</nav>

<div id="home" class="page">
    <h2>Welcome Home</h2>
    <p>Select any program from the menu.</p>
</div>

<div id="student" class="page">
    <h2>Student Registration</h2>

    <form action="/add" method="POST">

        <input type="text" name="name"
        placeholder="Enter Name" required>

        <input type="email" name="email"
        placeholder="Enter Email" required>

        <input type="number" name="age"
        placeholder="Enter Age" required>

        <input type="number" name="roll"
        placeholder="Enter Roll Number" required>

        <button type="submit">Submit</button>

    </form>
</div>

<div id="about" class="page">
    <h2>About Us</h2>
    <p>This website uses Express.js and MongoDB.</p>
</div>

<script>

function showPage(id) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

showPage("home");

</script>

</body>
</html>


