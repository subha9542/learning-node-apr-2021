const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.get("/add-order", (req, res) => {
    res.render("add-order")
});

app.post("/add-order", (req, res) => {
    console.log(req.body);
    // Create Mongoose Schema, Connection, New DB, New Collection.
    res.render("add-order-success")
})

app.get("/add-order", async (req, res) => {

    // const orders = Await Model Find 

    // orders > map() > order 
    // order.createdOn === currentDate()
    // order.status = "inprogress";
    // const createdOn = new Date("2021-04-11T16:07:48.791Z")
    // const currentDate = new Date()

 
    res.render("orders", orders)
})

app.listen(3000, () => {
    console.log("Application Started Successfully.")
})





