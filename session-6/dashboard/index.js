// npm install @babel/preset-env --save-dev

import express from "express";
import db from "./db"
const app = express();
import path from "path"

import PeopleModel from "./people.model"


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static( __dirname + "/public" ))

app.get("/", async (req, res)=>{

    try {
        const people = await PeopleModel.find();
        res.render("dashboard", { people });
    } catch (error) {
        console.log(error)
        res.status(500);
    }
    
})

app.listen(3300, ()=>{
    console.log("application started")
})

