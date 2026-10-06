const express = require("express");

const app = express();

app.get("/students", (req, res) => {
res.send("GET: Display students");
});

app.post("/students", (req, res) => {
res.send("POST: Add new student");
});

app.put("/students/101", (req, res) => {
res.send("PUT: Update student 101");
});

app.delete("/students/101", (req, res) => {
res.send("DELETE: Delete student 101");
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});