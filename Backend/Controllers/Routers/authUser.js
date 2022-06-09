const {
  sign_validation_user,
  login_validation_user,
} = require("../../Validations/UserValidation");
const { hashPassword, compare } = require("../../helps/Bcrypt");
const UserModel = require("../../Model/UserSchema");
const { refreshToken } = require("../../helps/Generate_token");
async function sign(req, res) {
  try {
    let { error } = await sign_validation_user(req.body);
    if (error)
      res.status(404).json({
        status: "failed",
        err: error.details[0],
      });

    let emailchek = await UserModel.findOne({ email: req.body.email }).lean();
    if (emailchek)
      return res
        .status(200)
        .json({ status: "failed", message: "email exist before" });
    let user = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });

    //  await user.save();

    const token =  refreshToken(user);

    res.status(200).json({
      status: "success",
      message: "user created successfully",
      token: token,
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
}

async function login(req, res) {
  try {
    let { error } = await login_validation_user(req.body);
    if (error)
      res.status(404).json({
        status: "failed",
        err: error.details[0],
      });

    let checkemail = await UserModel.findOne({ email: req.body.email });
    if (!checkemail)
      return res
        .status(200)
        .json({ status: "failed", message: "email doesn't exist before" });

    let cmp = await compare(req.body.password, checkemail.password);
    if (!cmp) return res.status(400).send("wrong password");
    //console.log(checkemail);
  } catch (err) {
    res.status(401).send(err.message);
  }
}
module.exports = { login, sign };
