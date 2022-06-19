const { graphqlHTTP } = require("express-graphql");
const UserModel = require("../Model/UserSchema");
let personArray = [{ name: "john", email: "john@gmail.com", number: "1234" }];
const resolvers = {
  getusers: () => {
    return UserModel.find({})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  },

  setuser: (args) => {
    const person = new UserModel(args);
    return person
      .save()
      .then((result) => {
        console.log(result);
        return { ...result._doc };
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  createPerson: (args) => {
    return args;
  },
  updateuser: async (args) => {
    return UserModel.findByIdAndUpdate(args.id, args, { new: true })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  },
  deleteuser: async ({ id }) => {
    return UserModel.findByIdAndDelete(id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  },
};
module.exports = resolvers;
