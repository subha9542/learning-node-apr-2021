require("./models/db")
const express = require("express");
const app = express();
const People = require("./routes/people")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use("/people", People);

// app.get("/isadmin", (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     database.collection("people").find({ isAdmin: { $exists: true } }).toArray((err, docs) => {
//         res.json(docs);
//     })
// })

app.listen(3000, () => {
    console.log("Application Started Successfully.")
})





