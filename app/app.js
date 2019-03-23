// framework de graphql 
const { GraphQLServer } = require ("graphql-yoga");
//para reconocer la sintaxis de graphql
const { importSchema } = require ("graphql-import");
const { makeExecutableSchema } = require ("graphql-tools");
const mongoose = require("mongoose");

// conecta a los modelos de mongoose
const resolvers = require("./resolvers");
const typeDefs = importSchema('./app/schema.graphql');
const { db } = require ("./config");

mongoose.connect(db.url, {
    useCreateIndex: true,
    useNewUrlParser: true
});

const mongo = mongoose.connection;
mongo
    .on("error", (error) => console.log("fallo en conectar a mongo", error))
    .once("open", () => console.log("Conectado a mongo"));

const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
});

const server = new GraphQLServer({
    schema,
    context: req => ({ ...req })
});

const options = {
    port: process.env.PORT || 8000,
    endpoint: "/graphql",
    playground: "/playground"
};

server.start(options, ({port}) => {
    console.log(`Magic start in port ${port}`);
});

module.exports = {schema};

