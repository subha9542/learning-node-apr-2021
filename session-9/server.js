const express = require("express");
const app = express();


app.get("/people", (req, res)=>{
    res.json({ list : [{ name : "abc" }], total : 1 })
})

app.listen(4500);
