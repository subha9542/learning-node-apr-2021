const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const mongourl = "mongodb://127.0.0.1:27017/tacoshop";
let database = null;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


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
    database.collection("people").find({}, (error, docs) => {
        docs.toArray((err, response) => {
            res.json(response)
        })
    })
});

app.get("/people/:id", (req, res) => {
    const { id } = req.params;

    database.collection("people").findOne({ id: parseInt(id, 10) }, (error, doc) => {
        console.log(doc);
        res.json(doc)
    })
})

app.get("/top", (req, res) => {
    const { id } = req.params;
    database.collection("people").find().limit(3).sort({ id: -1 }).toArray((err, docs) => {
        console.log(docs)
        res.send(docs)
    })
})

app.patch("/people/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    // database.collection("people").findOne({ id : parseInt(id, 10) }, (error, doc) => {
    //      res.json(doc)
    // })

    // database.collection("people").update({ id: parseInt(id, 10) }, { $set: { name: body.name } }, (error, response) => {
    //     console.log(response)
    //     res.json({ status : "Updated" })
    // })

    database.collection("people").findOne({ id: parseInt(id, 10) }, (error, doc)=>{
        const currentDocument = doc;
        currentDocument.name = body.name;
        database.collection("people").save(currentDocument, (err, doc)=>{
            res.json({ status : "Updated" })
        });
    })

})

app.delete("/people/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    // database.collection("people").findOne({ id : parseInt(id, 10) }, (error, doc) => {
    //      res.json(doc)
    // })

    database.collection("people").remove({ id: parseInt(id, 10) }, (error, response) => {
        if(error) throw error;
        res.json({ status : "Deleted" })
    })
})




