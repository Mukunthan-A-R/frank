let config = {
  dbName: "",
  cName: "",
  cString: "",

  updateConfig: function (cString, dbName = "playground", cName = "test") {
    this.cString = cString;
    this.dbName = dbName;
    this.cName = cName;
  },
};

module.exports = config;

// const schema = {
//   name: String,
//   email: String,
//   age: Number,
// };

// config.updateConfig("Allo", schema);
// console.log(config);
// console.log(config.schema.name);
