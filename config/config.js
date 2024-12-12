let config = {
  dbName: "",

  updateConfig: function (dbname = "playground") {
    this.dbName = dbname;
  },
};

exports.config = config;

// const schema = {
//   name: String,
//   email: String,
//   age: Number,
// };

// config.updateConfig("Allo", schema);
// console.log(config);
// console.log(config.schema.name);
