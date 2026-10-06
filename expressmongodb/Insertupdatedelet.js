const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/company")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("Connection Error:", err);
    });

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);


app.get("/insert", async (req, res) => {
    try {
        await Employee.deleteMany({});

        const employees = [
            {
                name: "Rahul",
                age: 25,
                department: "IT",
                salary: 30000
            },
            {
                name: "Priya",
                age: 27,
                department: "HR",
                salary: 35000
            },
            {
                name: "Amit",
                age: 30,
                department: "Finance",
                salary: 40000
            },
            {
                name: "Neha",
                age: 26,
                department: "Marketing",
                salary: 32000
            }
        ];

        await Employee.insertMany(employees);

        res.send("Employee records inserted successfully!");
    } 
    catch (error) {
        res.send(error.message);
    }
});

app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();

        res.json(employees);
    } 
    catch (error) {
        res.send(error.message);
    }
});

app.get("/update", async (req, res) => {
    try {
        await Employee.updateOne(
            { name: "Rahul" },
            { $set: { salary: 45000 } }
        );

        res.send("Rahul's salary updated to 45000!");
    } 
    catch (error) {
        res.send(error.message);
    }
});

app.get("/delete", async (req, res) => {
    try {
        await Employee.deleteOne({
            name: "Neha"
        });

        res.send("Neha's record deleted successfully!");
    } 
    catch (error) {
        res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});