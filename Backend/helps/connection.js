require("dotenv").config();
const mongoose = require("mongoose");
let DB = process.env.DB;
const connection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((rev) => console.log("connected 💥"))
  .catch((err) => console.log("inconnected ⛔️"));
module.exports = connection;
