let config = {
  dbName: "",
  schema: {},

  updateConfig: function (dbname = "playground", schemaObj) {
    this.dbName = dbname;
    this.schema = {
      ...schemaObj,
    };
  },
};

exports.config = config;

const schema = {
  name: String,
  email: String,
  age: Number,
};

config.updateConfig("Allo", schema);
// console.log(config);
// console.log(config.schema.name);
