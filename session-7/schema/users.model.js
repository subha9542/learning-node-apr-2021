const mongoose = require("mongoose");
const { Schema } = mongoose

const PeopleSchema = new Schema({
    "id": Number,
    "name": String,
    "username": { type : String, require : true },
    "email": { type : String, require : true },
    "password" : { type : String, require : true },
    "address": {
        "street": String,
        "suite": String,
        "city": String,
        "zipcode": String,
        "geo": {
            "lat": String,
            "lng": String
        }
    },
    "phone": String,
    "website": String,
    "company": {
        "name": String,
        "catchPhrase": String,
        "bs": String
    },
    "createdOn" : { default : new Date(), type : Date }
})

const Model = mongoose.model("people", PeopleSchema, "people")

module.exports = Model;