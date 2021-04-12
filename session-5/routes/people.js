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

people.post("/", async (req, res) => {
    try {
        const { body } = req;
        const person = new PeopleModel(body)
        const response = await person.save();
        res.json({ record: "saved" })
    } catch (error) {
        res.status(500);
    }
});

people.patch("/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const response = await PeopleModel.findOneAndUpdate({ id: parseInt(params.id) }, { $set: body });
        res.json({ record: "updated" })
    } catch (error) {
        res.status(500);
    }
});

module.exports = people;