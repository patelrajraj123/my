const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/raj")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const Student = mongoose.model("Student", {
    name: String,
    email: String,
    age: Number,
    rollNumber: String
});

app.get("/", (req, res) => {
    res.send(`
        <h2>Add Student</h2>

        <form id="form">
            Name: <input id="name"><br><br>
            Email: <input id="email"><br><br>
            Age: <input id="age" type="number"><br><br>
            Roll Number: <input id="rollNumber"><br><br>
            <button>Add Student</button>
        </form>

        <hr>

        <h2>Update Student</h2>

        Roll Number: <input id="uRoll"><br><br>
        Name: <input id="uName"><br><br>
        Email: <input id="uEmail"><br><br>
        Age: <input id="uAge"><br><br>

        <button onclick="updateStudent()">Update</button>

        <hr>

        <h2>Delete Student</h2>

        Roll Number: <input id="dRoll">
        <button onclick="deleteStudent()">Delete</button>

        <hr>

        <button onclick="showStudents()">Display Records</button>

        <div id="records"></div>

        <script>
            document.getElementById("form").onsubmit = async function(e) {
                e.preventDefault();

                await fetch("/students", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: document.getElementById("name").value,
                        email: document.getElementById("email").value,
                        age: document.getElementById("age").value,
                        rollNumber: document.getElementById("rollNumber").value
                    })
                });

                alert("Student Added");
            };

            async function showStudents() {
                const response = await fetch("/students");
                const students = await response.json();

                document.getElementById("records").innerHTML =
                    students.map(s =>
                        "<p>" + s.name + " | " +
                        s.email + " | " +
                        s.age + " | Roll: " +
                        s.rollNumber + "</p>"
                    ).join("");
            }

            async function updateStudent() {
                const roll = document.getElementById("uRoll").value;

                await fetch("/students/" + roll, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: document.getElementById("uName").value,
                        email: document.getElementById("uEmail").value,
                        age: document.getElementById("uAge").value
                    })
                });

                alert("Student Updated");
            }

            async function deleteStudent() {
                const roll = document.getElementById("dRoll").value;

                await fetch("/students/" + roll, {
                    method: "DELETE"
                });

                alert("Student Deleted");
            }
        </script>
    `);
});

app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.send(student);
});

app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

app.put("/students/:rollNumber", async (req, res) => {
    const student = await Student.findOneAndUpdate(
        { rollNumber: req.params.rollNumber },
        req.body,
        { new: true }
    );

    res.send(student);
});

app.delete("/students/:rollNumber", async (req, res) => {
    await Student.findOneAndDelete({
        rollNumber: req.params.rollNumber
    });

    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
