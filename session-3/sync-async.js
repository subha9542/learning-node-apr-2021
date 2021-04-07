const fs = require("fs");

console.log("In File.");

console.log("Before Readfile sync.")
const contentSync = fs.readFileSync("./session-3/hello.txt");
console.log(contentSync.toString())
console.log("After Readfile sync.")


console.log("Before Readfile async.")
const contentAsync = fs.readFile("./session-3/hello.txt", ()=>{
    console.log("Inside callback Readfile async.")
});
console.log("After Readfile async.")