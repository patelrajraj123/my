const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {
  const currentTime = moment().format("DD-MM-YYYY HH:mm:ss");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World!</h1>");
  res.write("<p>Current Date and Time: " + currentTime + "</p>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});






const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Election Commission</title>

    <style>
        body {
            font-family: Arial;
            margin: 0;
            background: #f2f2f2;
        }

        header {
            background: navy;
            color: white;
            text-align: center;
            padding: 20px;
        }

        nav {
            background: #333;
            text-align: center;
            padding: 15px;
        }

        nav a {
            color: white;
            margin: 15px;
            text-decoration: none;
        }

        .box {
            background: white;
            margin: 20px;
            padding: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        th {
            background: navy;
            color: white;
        }

        button {
            padding: 10px;
            background: navy;
            color: white;
            border: none;
        }
    </style>
</head>

<body>

<header>
    <h1>Election Commission</h1>
    <p>Welcome to Election Commission</p>
</header>

<nav>
    <a href="#home">Home</a>
    <a href="#candidate">Candidate</a>
    <a href="#result">Result</a>
    <a href="#eligibility">Eligibility</a>
</nav>

<div class="box" id="home">
    <h2>Homepage</h2>
    <p>Welcome to Election Commission Website.</p>
</div>

<div class="box" id="candidate">
    <h2>Candidate</h2>

    <ol>
        <li>Rahul Patel</li>
        <li>Amit Shah</li>
        <li>Raj Mehta</li>
        <li>Vijay Kumar</li>
    </ol>

    <ul>
        <li>Party A</li>
        <li>Party B</li>
        <li>Party C</li>
        <li>Party D</li>
    </ul>
</div>

<div class="box" id="result">
    <h2>Election Result</h2>

    <table>
        <tr>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
        </tr>

        <tr>
            <td>Rahul Patel</td>
            <td>Party A</td>
            <td>25000</td>
        </tr>

        <tr>
            <td>Amit Shah</td>
            <td>Party B</td>
            <td>22000</td>
        </tr>

        <tr>
            <td>Raj Mehta</td>
            <td>Party C</td>
            <td>18000</td>
        </tr>
    </table>
</div>

<div class="box" id="eligibility">
    <h2>Eligibility Check</h2>

    <input type="number" id="age" placeholder="Enter Age">

    <button onclick="checkAge()">Check</button>

    <h3 id="resultMessage"></h3>
</div>

<script>
function checkAge() {
    var age = document.getElementById("age").value;

    if (age >= 18) {
        document.getElementById("resultMessage").innerHTML =
        "You are eligible to vote.";
    } else {
        document.getElementById("resultMessage").innerHTML =
        "You are not eligible to vote.";
    }
}
</script>

</body>
</html>
`;

http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/html'});

res.end(html);

}).listen(8080);




