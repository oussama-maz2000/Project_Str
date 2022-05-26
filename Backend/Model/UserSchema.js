const mongoose = require("mongoose");

const UserScema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [4, "your firstname should be great then 4 please"],
    maxlength: [25, "your firstname should be less then 25 please"],
  },
  lastname: {
    type: String,
    required: true,
    minlength: [4, "your lastname should be great then 4 please"],
    maxlength: [25, "your lastname should be less then 25 please"],
  },
  phonenumber: {
    type: Number,
    required: true,
    maxlength: 10,
    minlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isactive: {
    type: Boolean,
    default: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["client", "user"],
    default: "user",
  },
  passwordRestToken: String,
  passwordRestExpires: Date,
});

const UserModel = mongoose.model("users", UserScema);
module.exports = UserModel;
