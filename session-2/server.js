const express = require("express");
const app = express(); // application
const fs = require("fs");

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("/employees", (req, res) => {
    fs.readFile("./session-2/employee.json", (error, response) => {
        if (error) {
            res.sendStatus(503);
            res.json({ status : "error" })
            return false;
        }
        const contentString = response.toString();
        const contentJSON = JSON.parse(contentString)
        res.json(contentJSON) // JSON
        // res.json(JSON.parse(response.toString()))
    })

})

app.post("/employees", (req, res) => {
    fs.readFile("./session-2/employee.json", (error, response) => {
        if (error) {
            res.sendStatus(503);
            res.json({ status : "error" })
            return false;
        }
        const contentString = response.toString();
        const contentJSON = JSON.parse(contentString)
        const lastItem = contentJSON[contentJSON.length - 1]
        const newItemToBeAdded = req.body;
        newItemToBeAdded.id = lastItem.id + 1
        contentJSON.push(newItemToBeAdded);
        fs.writeFile("./session-2/employee.json", JSON.stringify(contentJSON), () => {
            res.json(newItemToBeAdded) // JSON
        })
    })

})

app.listen(3000, () => {
    console.log("application server started at 3000.")
})

