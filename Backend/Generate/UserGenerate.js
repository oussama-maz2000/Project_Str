const express = require("express");
const router = express.Router();
const {  sign,login } = require("../Controllers/Routers/authUser");
router.route("/sign").post(sign);
router.route("/login").post(login);

module.exports = router;
