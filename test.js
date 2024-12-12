const {
  createData,
  getData,
  getOneData,
  delData,
  config,
  createSchema,
} = require("./index");

const person = { name: "Chennai", email: "chennai@gmail.com", age: 30 };

// Dynamically update the schema
const schema = {
  name: String,
  email: String,
  age: Number,
  country: String, // Add a new field as part of schema update
};

// Update the schema using the createSchema function
createSchema(schema);

config.updateConfig("Allo");

// createData(person)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

getData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// getOneData("675aa1f9e86804d37a37c928")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// delData("675aa1f9e86804d37a37c928")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(config);
// console.log(config.schema);
