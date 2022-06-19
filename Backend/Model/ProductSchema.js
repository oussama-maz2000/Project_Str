const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  nameprd: {
    type: String,
    required: true,
  },
  typeprd: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  
});
let prdmodel = mongoose.model("prduct", productschema);
module.exports = prdmodel;
