const MongoClient = require("mongodb").MongoClient;
const mongourl = "mongodb://127.0.0.1:27017/tacoshop";

let database = null;



function getDBConnection(callback) {
    MongoClient.connect(mongourl, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db("tacoshop");
        if (typeof callback === "function") {
            callback(database)
        }
    });
}


module.exports = {
    database,
    getDBConnection
}