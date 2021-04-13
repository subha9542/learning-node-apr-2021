const graphql = require("graphql");


const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const OrderType = new GraphQLObjectType({
    name : 'Order',
    fields : {
        name : { type : GraphQLString },
        address : { type : GraphQLString },
        email : { type : GraphQLString } 
    }
})

const Root = new GraphQLObjectType({
    name : "Root",
    fields : {
        orders : {
            type : OrderType,
            resolve(){
                // Mongo
                return { name : "abc", email : "abc@def.com", address : "abc def" }
            }

        }
    }
})

module.exports = new GraphQLSchema({
    query : Root
})

// npm install express express-graphql graphql axios lodash