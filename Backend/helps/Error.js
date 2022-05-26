class HandlErr extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode || 500;
    this.status = `${statuscode}`.startsWith("4") ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}
const strecture_err = (err, res) => {
  res.status(err.statuscode).json({
    statuscode: err.statuscode,
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};
const GlobalErr = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.status = err.status || "error";
  strecture_err(err, res);
};

module.exports = { GlobalErr, HandlErr };
