const mongoose = require("mongoose");
const { config } = require("./config/config");

if (config.schema === null) return "Config setup needed";

mongoose
  .connect(`mongodb://localhost/${config.dbName}`)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("Connection failed" + err));

const tmp = { ...config.schema };

const person = new mongoose.Schema(tmp);

const Person = mongoose.model("Person", person);

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

module.exports = { createData, getData, delData, getOneData, config };
