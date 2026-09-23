
const moment = require("moment");

console.log("Current Date:", moment().format("DD-MM-YYYY"));
console.log("Current Time:", moment().format("HH:mm:ss"));

console.log("Day:", moment().format("dddd"));
console.log("Month:", moment().format("MMMM"));
console.log("Year:", moment().format("YYYY"));

console.log("After 5 Days:", moment().add(5, "days").format("DD-MM-YYYY"));
console.log("Before 5 Days:", moment().subtract(5, "days").format("DD-MM-YYYY"));
```
