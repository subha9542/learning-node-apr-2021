require("./db");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql")
const axions = require("axios");
const lodash = require("lodash");

const Root = require("./schema");

const app = express();

app.use("/graphql", graphqlHTTP({
    graphiql : true,
    schema : Root
}))

app.listen(3000, ()=>{
    console.log("Application Started.")
})