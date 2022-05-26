const { sign_validation_user } = require("../../Validations/UserValidation");

async function sign(req, res) {
  try {
    let { error } = await sign_validation_user(req.body);
    if (error)
      res.status(404).json({
        status: "failed",
        err: error.details[0],
      });
    res.status(200).json({
      status: "success",
      message: `welcome ${req.body.firstname}`,
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
}

function login(req, res) {
  console.log(req.body);
  res.status(201).send("hey");
}
module.exports = { login, sign };
