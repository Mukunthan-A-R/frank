const { createData, getData, getOneData, delData, config } = require("./index");

const person = { name: "India", email: "india@gmail.com", age: 30 };

const schema = {
  name: String,
  email: String,
  age: Number,
};

config.updateConfig("Allo", schema);

createData(person)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// getData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// getOneData("675a785cc14849efb3f197a7")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// delData("675a7412300836e97fb7f544")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(config);
// console.log(config.schema);
