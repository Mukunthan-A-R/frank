const mongoose = require("mongoose");
const { config } = require("./config/config");

let schema = {};

// Function to update the schema dynamically
function createSchema(schemaObj) {
  schema = { ...schemaObj };
  // console.log("Schema updated");

  // Remove the old model from the cache if it exists
  if (mongoose.models["Person"]) {
    delete mongoose.models["Person"];
    // console.log("Old model removed from cache");
  }

  // Recreate the Person model with the updated schema
  const personSchema = new mongoose.Schema(schema);
  return mongoose.model("Person", personSchema); // Return the new model
}

// Connect to the MongoDB database
mongoose
  .connect(`mongodb://localhost/${config.dbName}`)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("Connection failed: " + err));

// CRUD operations
async function createData(person) {
  const Person = createSchema(schema); // Use the updated schema to get the new model
  const data = new Person(person);
  const result = await data.save();
  return result;
}

async function getData() {
  const Person = createSchema(schema); // Use the updated schema to get the new model
  const result = await Person.find();
  return result;
}

async function getOneData(id) {
  const Person = createSchema(schema); // Use the updated schema to get the new model
  const result = await Person.findById(id);
  return result;
}

async function delData(id) {
  const Person = createSchema(schema); // Use the updated schema to get the new model
  const result = await Person.findByIdAndDelete(id);
  return result;
}

async function updateData(id, data) {
  const Person = createSchema(schema); // Use the updated schema to get the new model
  const result = await Person.findByIdAndUpdate(id, data, { new: true });
  return result;
}

module.exports = {
  createData,
  getData,
  delData,
  getOneData,
  updateData,
  config,
  createSchema,
};
