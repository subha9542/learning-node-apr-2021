const { Router } = require("express");
const people = Router();
const PeopleModel = require("../models/people.model")


// /people/
people.get("/", async (req, res) => {
    try {
        const docs = await PeopleModel.find();
        res.json(docs);
    } catch (error) {
        res.status(500);
    }
});

// /people/super
// people.get("/super", (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     database.collection("people").find({ "address.city": { $in: ["Wisokyburgh", "Aliyaview"] } }, (error, docs) => {
//         docs.toArray((error, array) => {
//             console.log(array)
//             res.json(array)
//         })
//     })
// })

// // /people/top
// people.get("/top", (req, res) => {
//     const { id } = req.params;
//     database.collection("people").find().limit(3).sort({ id: -1 }).toArray((err, docs) => {
//         console.log(docs)
//         res.send(docs)
//     })
// })

// people.get("/:id", (req, res) => {
//     const { id } = req.params;
//     database.collection("people").findOne({ id: parseInt(id, 10) }, (error, doc) => {
//         console.log(doc);
//         res.json(doc)
//     })
// })

// people.patch("/:id", (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     // database.collection("people").findOne({ id : parseInt(id, 10) }, (error, doc) => {
//     //      res.json(doc)
//     // })

//     // database.collection("people").update({ id: parseInt(id, 10) }, { $set: { name: body.name } }, (error, response) => {
//     //     console.log(response)
//     //     res.json({ status : "Updated" })
//     // })

//     database.collection("people").findOne({ id: parseInt(id, 10) }, (error, doc) => {
//         const currentDocument = doc;
//         currentDocument.name = body.name;
//         database.collection("people").save(currentDocument, (err, doc) => {
//             res.json({ status: "Updated" })
//         });
//     })

// })

// people.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     // database.collection("people").findOne({ id : parseInt(id, 10) }, (error, doc) => {
//     //      res.json(doc)
//     // })

//     database.collection("people").remove({ id: parseInt(id, 10) }, (error, response) => {
//         if (error) throw error;
//         res.json({ status: "Deleted" })
//     })
// })

// people.post("/:id", (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     database.collection("people").save(body, (err, doc) => {
//         res.json({ status: "Updated" })
//     });
// })

module.exports = people;