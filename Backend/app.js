const express = require("express");
const connection = require("./helps/connection");
const router = require("./Generate/UserGenerate");
const bodyparser = require("body-parser");
const { GlobalErr } = require("./helps/Error");
const {graphqlHTTP}=require('express-graphql')
const resolvers=require("./GraphQl/Root");
const schema=require("./GraphQl/Schema");
const app = express();
connection;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3001, (req, res) => {
  console.log("server run on 3001 😎");
});
//app.use(GlobalErr);
