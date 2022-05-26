const { sign_validation_user } = require("../../Validations/UserValidation");
const { hashPassword } = require("../../helps/Bcrypt");
const UserModel = require("../../Model/UserSchema");
async function sign(req, res) {
  try {
    let { error } = await sign_validation_user(req.body);
    if (error)
      res.status(404).json({
        status: "failed",
        err: error.details[0],
      });

    let emailchek = await UserModel.findOne({ email: req.body.email });
    if (emailchek)
      return res
        .status(200)
        .json({ status: "failed", message: "email exist before" });
    let user = await UserModel.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });
    console.log(user);
    await user.save();
  } catch (err) {
    res.status(401).send(err.message);
  }
}

function login(req, res) {
  console.log(req.body);
  res.status(201).send("hey");
}
module.exports = { login, sign };
