const sign = (req, res) => {
  res.status(200).send(req.query);
};
const login = async (req, res) => {
  res.status(200).send("hello world");
};
module.exports = { sign, login };
