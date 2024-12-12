const mongoose = require("mongoose");
const { config } = require("./config/config");

let schema = {
  name: String,
  email: String,
  age: Number,
};

// Function to update the schema dynamically
function createSchema(schemaObj) {
  schema = {
    ...schemaObj,
  };
  // console.log("Schema updated");
}

// Connect to the MongoDB database
mongoose
  .connect(`mongodb://localhost/${config.dbName}`)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("Connection failed: " + err));

// Create a schema based on the current schema object
const personSchema = new mongoose.Schema(schema);

// Define the Person model (compile it once)
const Person = mongoose.model("Person", personSchema);

// CRUD operations
async function createData(person) {
  const data = new Person(person);
  const result = await data.save();
  return result;
}

async function getData() {
  const result = await Person.find();
  return result;
}

async function getOneData(id) {
  const result = await Person.findById(id);
  return result;
}

async function delData(id) {
  const result = await Person.findByIdAndDelete(id);
  return result;
}

module.exports = {
  createData,
  getData,
  delData,
  getOneData,
  config,
  createSchema,
};
