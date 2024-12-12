const {
  createData,
  getData,
  getOneData,
  delData,
  config,
  createSchema,
} = require("./index");

const person = { name: "Madurai", email: "madurai@gmail.com", age: 30 };

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

createData(person)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

getData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// getOneData("675aa7981a398c3e400568ed")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// delData("675aa78013257371527ab226")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(config);
// console.log(config.schema);
