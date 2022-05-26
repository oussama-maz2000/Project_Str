const joi = require("joi");

const sign_validation_user = async (Data) => {
  let Schema = joi.object({
    firstname: joi.string().alphanum().required().min(4).max(25),
    lastname: joi.string().alphanum().required().min(4).max(25),
    phonenumber: joi.number().required().min(6),
    email: joi
      .string()
      .email({
        tlds: { allow: ["com", "net", "fr", "org"] },
      })
      .required(),

    password: joi
      .string()
      .required()
      //Minimum eight characters, at least one letter and one number
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,30}$/),
  });
  return Schema.validateAsync(Data);
};

module.exports = { sign_validation_user };
