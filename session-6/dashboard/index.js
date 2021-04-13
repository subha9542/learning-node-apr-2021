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

        const peopleWithHigh = people.map((person)=>{
            const newPerson = person.toObject();
            const createdOn = new Date(newPerson.createdOn);
            const current = new Date()
            const diff = current - createdOn;
            const millInDay = 86400000
            if(diff > 86400000 * 3 )
                {
                    newPerson.highlight = true;
                }
                newPerson.daysPassed = Math.floor(diff / 86400000);
            return newPerson;
        })

        console.log(peopleWithHigh)

        res.render("dashboard", { people : peopleWithHigh });
    } catch (error) {
        console.log(error)
        res.status(500);
    }
    
})

app.listen(3300, ()=>{
    console.log("application started")
})

