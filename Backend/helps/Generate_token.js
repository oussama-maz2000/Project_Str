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
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    SECRET,
    {
      expiresIn: 1000,
    }
  );
  return token;
}

async function verifyToken(token) {
  const verify = jwt.verify(token, SECRET);
  return verify;
}
module.exports = { refreshToken, verifyToken };
