const express = require("express");
const connection = require("./helps/connection");
const router = require("./Generate/UserGenerate");
const app = express();
connection;

app.use("/user",router);

app.get("/", (req, res) => {
  res.status(200).send("welcome in BackEnd store 😎");
});
app.listen(3000, (req, res) => {
  console.log("server run on 3001 😎");
});
