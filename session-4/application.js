const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const mongourl = "mongodb://127.0.0.1:27017/tacoshop";
let database = null;

MongoClient.connect(mongourl, (error, client) => {
    if (error) {
        throw error;
    }

    database = client.db("tacoshop");
    
    app.listen(3000, () => {
        console.log("Application Started Successfully.")
    })
})

app.get("/people", (req, res) => {
    console.log(database);
    database.collection("people").find({}, (error, docs) => {
        docs.toArray((err, response)=>{
            res.json(response)
        })
    })


})

