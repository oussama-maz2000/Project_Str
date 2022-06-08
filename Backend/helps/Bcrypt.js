const bcrypt = require("bcryptjs");
async function hashPassword(data) {
  let salt = await bcrypt.genSalt(10);
  let hashPass = await bcrypt.hash(data, salt);
  return hashPass;
}

async function compare(password, hashpassowrd) {
  return bcrypt.compare(password, hashPassword);
}
module.exports = { hashPassword,compare };
