const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Person {
    id: ID
    firstname: String!
    lastname: String!
    email: String!
    phonenumber:String!
    password:String!
  }
  type Query{
    getusers:[Person]
    getusersemail:[String!]
    getusersid:[Int!]
  }
  type Mutation{
  setuser(firstname:String!,lastname:String!,email:String!,phonenumber:String!,password:String!):Person
  createPerson(name:String,email:String,number:String):Person
  updateuser(id:ID!,firstname:String,lastname:String,email:String,phonenumber:String,password:String):Person
  deleteuser(id:ID!):Person
  }`);
module.exports = schema;
