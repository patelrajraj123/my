const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
const Student = mongoose.model("Student", {
  name: String,
  email: String,
  age: Number,
  course: String
});

app.get("/", async (req, res) => {
  const students = await Student.find();
  let html = `
    <h2>Student Registration</h2>
    <form action="/add" method="POST">
      <input name="name" placeholder="Name" required>
      <input name="email" type="email" placeholder="Email" required>
      <input name="age" type="number" placeholder="Age" required>
      <select name="course" required>
        <option value="">Select Course</option>
        <option>BCA</option>
        <option>BBA</option>
        <option>B.Tech</option>
        <option>MCA</option>
      </select>
      <button type="submit">Register</button>
    </form>
    <h2>Student List</h2>
    <table border="1" cellpadding="10">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
  `;
  students.forEach(student => {
    html += `
      <tr>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>
          <a href="/edit/${student._id}">Edit</a>
          <form action="/delete/${student._id}"
                method="POST"
                style="display:inline">
            <button type="submit">Delete</button>
          </form>
        </td>
      </tr>
    `;
  });
  html += "</table>";
  res.send(html);
});

app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(`
    <h2>Edit Student</h2>
    <form action="/update/${student._id}" method="POST">
      <input name="name" value="${student.name}" required>
      <input name="email" type="email"
             value="${student.email}" required>
      <input name="age" type="number"
             value="${student.age}" required>
      <input name="course" value="${student.course}" required>
      <button type="submit">Update</button>
    </form>
    <a href="/">Back</a>
  `);
});

app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});






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


const express = require("express");
const mongoose = require("mongoose");
const app= express();
app.use(express.urlencoded({extended:true}));
//1. connect Mongodb
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
	.then(()=> console.log("mongodb connected"))
	.catch(err=>console.log(err));
//2. Create student Model
const student=mongoose.model("student",{
	name:String,
	email:String,
	age:Number,
	course:String

});
//3. home page - read students
app.get("/",async(req,res)=>{
	const students = await Student.find();
	let html = `
	<h2>Student Registration</h2>
	<form action="/add" method="post">
	<input name="name" placeholder="Name" required>
	<input name="email" type="email" placeholder="email" required>
	<input name="age" type="number" placeholder="Age" required>
	
	<select name="course" required>
	<option value="">Select Course</option>
	<option>BCA</option>
	<option>MCA</option>
	<option>BBA</option>
	<option>BSC</option>
	</select>
	<button type="submit">Register</button>
	
	</form> 
	<h2>Student List</h2>
	<table border="1" cellpadding="10">
	<tr>
	<th>Name</th>
	<th>Email</th>
	<th>Age</th>
	<th>Course</th>
	<th>Actions</th>
	</tr>
	`;
	student.forEach(student =>{
	html +=	`
	<tr>
	<td>${student.name}</td>
	<td>${student.email}</td>
	<td>${student.age}</td>
	<td>${student.course}</td>
	<td>
	<a href="/edit/${student._id}">Edit</a>
	<form action="/delete/${student._id}"
		method="POST"
		style="display:inline">
		<button type="submit"> Delete</button>
		</form>
	</td>
	
	</tr>`;
	});
	html+="</table>";
	res.send(html);
});
//4. create - add Student
app.post("/add",async (req,res)=>{
	await Student.create(req.body);
	res.redirect("/");
	
});
//5. update - show edit form
app.get("/edit/:id",async (req,res)=>{
	const student = await Student.findById(req.params.id);
	res.end(
	`
	<h2>Edit student</h2>
	<form action="/update/${student._id}" method="POST">
		<input name="name" value="${student.name}" required>
		<input name="email" type="email" value="${student.email}" required>
		<input name="age" type="number" value="${student.age}" required>
		<input name="course"  value="${student.course}" required>
		<button type="submit">Update</button>
	</form>
	<a href="/">back</a>

	`);
	
});
//6. Update - save changes
app.post("/update/:id",async (req,res)=>{
	await Student.findByIdAndUpdate(req.param.id,req.body);
	res.redirect("/");
	
});
//7. Delete - remove Student
app.post("/delete/:id",async (req,res)=>{
	await Student.findByIdAndDelete(req.params.id);
	res.redirect("/");
	
});
//8. start server
app.listen(3000,()=>{
	console.log("server running at http://localhost:3000");
	
});




Q2

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));

// 1. Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 2. Create Student Model
const Student = mongoose.model("Student", {
  name: String,
  email: String,
  age: Number,
  course: String
});

// 3. Home page - Read students
app.get("/", async (req, res) => {
  const students = await Student.find();

  let html = `
    <h2>Student Registration</h2>

    <form action="/add" method="POST">
      <input name="name" placeholder="Name" required>
      <input name="email" type="email" placeholder="Email" required>
      <input name="age" type="number" placeholder="Age" required>

      <select name="course" required>
        <option value="">Select Course</option>
        <option>BCA</option>
        <option>MCA</option>
        <option>BBA</option>
        <option>BSC</option>
      </select>

      <button type="submit">Register</button>
    </form>

    <h2>Student List</h2>

    <table border="1" cellpadding="10">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
  `;

  students.forEach((student) => {
    html += `
      <tr>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>
          <a href="/edit/${student._id}">Edit</a>

          <form action="/delete/${student._id}"
                method="POST"
                style="display:inline">
            <button type="submit">Delete</button>
          </form>
        </td>
      </tr>
    `;
  });

  html += `</table>`;

  res.send(html);
});

// 4. Create - Add student
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});

// 5. Update - Show edit form
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.send(`
    <h2>Edit Student</h2>

    <form action="/update/${student._id}" method="POST">
      <input name="name"
             value="${student.name}"
             required>

      <input name="email"
             type="email"
             value="${student.email}"
             required>

      <input name="age"
             type="number"
             value="${student.age}"
             required>

      <input name="course"
             value="${student.course}"
             required>

      <button type="submit">Update</button>
    </form>

    <a href="/">Back</a>
  `);
});

// 6. Update - Save changes
app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { runValidators: true }
  );

  res.redirect("/");
});

// 7. Delete - Remove student
app.post("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// 8. Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
