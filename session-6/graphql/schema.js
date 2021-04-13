const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

const orders = [
    { name: "abc", email: "abc@def.com", address: "abc def" },
    { name: "def", email: "abc@def.com", address: "abc def" },
    { name: "rtg", email: "abc@def.com", address: "abc def" },
    { name: "aws", email: "abc@def.com", address: "abc def" }
]

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})

const Root = new GraphQLObjectType({
    name: "Root",
    fields: {
        order: {
            type: OrderType,
            args : { name : { type : GraphQLString } },
            resolve(context, args) {
                // Mongo
                console.log(args, orders);
                return orders.find((order)=>{
                    return order.name === args.name;
                })
            }
        },
        orders: {
            type: GraphQLList(OrderType),
            resolve() {
                // Mongo
                return orders
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Root
})

// npm install express express-graphql graphql axios lodash
// node index.js
// http://localhost:3000/graphql