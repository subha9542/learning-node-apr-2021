require("./schema/db")
const config = require("dotenv").config({ path: ".env" })
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")

const PeopleModel = require("./schema/users.model")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));


app.set("view engine", "ejs");

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    const { body } = req;
    console.log(body);
    if (body.email && body.email !== "" && body.email && body.email !== "") {
        try {
            const user = await PeopleModel.findOne({ email: body.email, password: body.password }, "-password")
            const token = jwt.sign({ name: user.name, id: user.id }, process.env.APPLICATION_SECRET_KEY)
            res.json({ accessToken: token })
            return true;
        } catch (error) {
            res.status(401).json({ message: "not authorzied" })
            return false;
        }

    }
    res.status(401).json({ message: "not authorzied" })
})

app.listen(3600, () => {
    console.log("application started");
})