//app.js
  
const express = require("express");
const app = express();

// Serve static files
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

//index.html
<!DOCTYPE html>
<html>
<head>
    <title>Express Static Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Welcome to Express.js</h1>
    <p>This is a Static Web Page.</p>

    <button onclick="showMessage()">Click Me</button>

    <script src="script.js"></script>
</body>
</html>

//style.css

body {
    background-color: lightblue;
    text-align: center;
    font-family: Arial;
}

h1 {
    color: blue;
}

button {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
}
//script.js

function showMessage() {
    alert("Hello from Express.js!");
}
