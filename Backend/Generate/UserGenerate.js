const express = require("express");
const router = express.Router();
const {  sign,login ,test} = require("../Controllers/Routers/authUser");
router.route("/sign").post(sign);
router.route("/login").post(login);
router.route('/test').post(test)

module.exports = router;
