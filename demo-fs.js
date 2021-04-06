const fs = require("fs");

fs.writeFile("./data/employees.json", "", ()=>{});

// fs.open("./data/employees.json", "r+", (error, response)=>{
//     if(error){
//         console.error(error);
//         return false;
//     }
//     console.log("file opened successfully.")
// })

// fs.stat("./data/employees.json", (error, stats) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log(stats.isBlockDevice(), "isBlockDevice");
//     console.log(stats.isDirectory(), "isDirectory");
//     console.log(stats.isSocket(), "isSocket");
//     console.log(stats.isSymbolicLink(), "isSymbolicLink");
//     console.log(stats.isCharacterDevice(), "isCharacterDevice");
//     console.log(stats.size, "size");
//     console.log(stats.mode, "mode");
//     console.log(stats.mtime, "mtime");
// })

// fs.writeFile("./data/employees.json", "Hello world!!!", (error) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log("file write completed.");
// })

// fs.readFile("./data/employees.json", { encoding : "utf-8" } , (error, data) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log(data.toString());
// })

// fs.rename("./data/employees.json", "./data/data.json", (error, data) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log("file rename completed.");
// })

// fs.appendFile("./data/employees.json", "new content for the file", (error, data) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log("file append completed.");
// })

// fs.unlink("./data/employees.json", (error, data) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }
//     console.log("file delete completed.");
// })
