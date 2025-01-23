const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require('@apollo/server/standalone');
const { default: axios } = require("axios");

let schema = `
    type Query {
        temperature: Float,
        stockPrice(symbol: String): Float,
        capital(country: String): String
    }
`;

let resolvers = {
    Query: {
        temperature: async () => {
            let result = await axios.get('http://localhost:8000/temperature')
            return parseFloat(result.data);
            //return Math.random() * 100;
        },
        stockPrice: async (src, args) => {
            let result = await axios.get('http://localhost:8000/cmp')
            return parseFloat(result.data);
            //return Math.random() * 10000;
        },
        capital: async (src, args)  => {
            let result = await axios.get(`http://localhost:8000/capital/${args.country}`);
            return result.data;
            // if(args.country === "India") {
            //     return "New Delhi";
            // } else if(args.country === "USA") {
            //     return "Washington DC";
            // } else if(args.country === "France") {
            //     return "Paris";
            // } else {
            //     return "NA in DB";
            // }
        }
    }
};

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000
})
.then(response => console.log("GraphQL server started at 9000"));



