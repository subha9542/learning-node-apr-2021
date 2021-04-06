const fs = require("fs");
const path = require("path");
const http = require("http");
const { a, createToken } = require("./utils");
const { platform, arch, cpus, totalmem } = require("os");
const chalk = require('chalk');

console.log(process.argv)

console.log(chalk.bgBlue('Hello ' + chalk.green('Hi world!') + ' world!'));



// const employees = [{
//     name : "abc"
// }]

// fs.writeFile("./data/employees.json", JSON.stringify(employees), (error, response)=>{
//     if(error){
//         console.error(error)
//     }
//     console.log("file created successfully")
// });

// const filepath = "data/employees.json"

// console.log(path.isAbsolute(filepath), ` - isAbsolute`);
// console.log(path.dirname(filepath), ` - dirname`);
// console.log(path.extname(filepath), ` - extname`);


// http.createServer((req, res)=>{
//     res.setHeader("content-type", "text/html")
//     res.end("Hello World!!!");
// }).listen(3000);

// console.log(platform(), arch(), cpus(), totalmem())