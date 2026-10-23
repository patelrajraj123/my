//calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
//app.js

const calculator = require("./calculator");
----------------


let a = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let b = Number(prompt("Enter second number:"));

let result;

switch (operator) {
    case "+":
        result = a + b;
        break;

    case "-":
        result = a - b;
        break;

    case "*":
        result = a * b;
        break;

    case "/":
        result = b !== 0 ? a / b : "Cannot divide by zero";
        break;

    default:
        result = "Invalid operator";
}

alert("Result: " + result);

console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(10, 5));
console.log("Division:", calculator.divide(10, 5));


-----
let num = Number(prompt("Enter a number:"));
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(num + " is a Prime Number");
} else {
    alert(num + " is not a Prime Number");
}


---------
let num = Number(prompt("Enter a number:"));
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact * i;
}

alert("Factorial = " + fact);
