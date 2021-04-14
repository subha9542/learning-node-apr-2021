require("./schema/db")
require("dotenv").config({ path: ".env" })

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")

// Fix for CORS issue.
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// Fix for CORS issue.
app.use(cors())


const PeopleModel = require("./schema/users.model")


app.set("view engine", "ejs");

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    const { body } = req;
    console.log(body);
    if (body.email && body.email !== "" && body.password && body.password !== "") {
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

app.get("/whoami", async (req, res)=>{
    const token = req.headers.authorization || null;
    if(!token) {
        res.status(401).json({ message: "not authorzied" })
        return false;
    }
    // refer line > jwt.sign({ 
    try {
        const decoded = jwt.verify(token, process.env.APPLICATION_SECRET_KEY);
        const user = await PeopleModel.findOne({ id: decoded.id }, "-password -_id -address -company")
        res.json(user)
        return true;
    } catch (error) {
        res.status(401).json({ message: "not authorzied" })
        return false;
    }
})

app.listen(3600, () => {
    console.log("application started");
})