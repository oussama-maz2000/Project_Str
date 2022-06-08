const express = require("express");
const connection = require("./helps/connection");
const router = require("./Generate/UserGenerate");
const bodyparser = require("body-parser");
const { GlobalErr } = require("./helps/Error");
const app = express();
connection;
app.use(bodyparser.text());
app.use(express.json());
app.use("/user", router);

app.get("/", (req, res) => {
  res.status(200).send("welcome in BackEnd store 😎");
});

app.post("/setname", (req, res) => {
  console.log(req.body);
});
app.listen(3001, (req, res) => {
  console.log("server run on 3001 😎");
});
app.use(GlobalErr);
