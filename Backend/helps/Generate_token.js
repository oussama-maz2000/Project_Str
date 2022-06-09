require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const generate_token = (user, res) => {
  const token = refreshToken(user);
  res.status(200).json({
    id: user._id,
    token: token,
  });
};

function refreshToken(user) {
  var tkn;
  jwt.sign(
    { id: user._id, firstname: user.firstname, role: user.role, exp: 500 },
    SECRET,
    (err, token) => {
      if (err) return err;
      tkn = token;
    }
  );
  console.log(tkn);
}
module.exports = { refreshToken };
