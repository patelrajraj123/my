
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(() => console.log("MongoDB Connected"));

const Student = mongoose.model("Student", {
    name: String,
    roll: Number,
    age: Number
});

app.get("/add", async (req, res) => {
    await Student.create({
        name: "Raj",
        roll: 101,
        age: 20
    });
    res.send("Student Inserted");
});

app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.get("/update", async (req, res) => {
    await Student.updateOne(
        { roll: 101 },
        { $set: { age: 21 } }
    );
    res.send("Student Updated");
});

app.get("/delete", async (req, res) => {
    await Student.deleteOne({ roll: 101 });
    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});