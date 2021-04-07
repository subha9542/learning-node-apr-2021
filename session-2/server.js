const express = require("express");
const app = express(); // application

const employee = {
    name : "xyz",
    age : 45,
    tech : ["angular", "react", "node"],
    talk : function(){}
};

app.get("/", (req, res)=>{
    // res.send("hello world!!!") // HTML or Text
    res.json(employee) // JSON
})

app.listen(3000, ()=>{
    console.log("application server started at 3000.")
})

