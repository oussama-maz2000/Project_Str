require("dotenv").config();
const token = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const generate_token = (user, res) => {
  const token = signToken(user);
};

const signToken = (user) => {
  const token = jwt.sign(
    { firstname: user.firstname, role: user.role },
    SECRET
  );
  return token;
};
