# mongo-frank

Ease for working with [MongoDB](https://www.mongodb.com/products/tools/compass), minimalist web framework for [Node.js](<(https://nodejs.org/en)>).
mongo-frank is a tool that helps develop Node.js based applications by automatically connecting with mongodb.
This is a minimalist franework for working with Database. You can directly perfrorm CRUD operations without worrying about DataBase connection,establishment or maintainance issues.

## Installation

This is a Node.js module available through the npm registry. Before installing, download and install [Node.js](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/products/tools/compass) using compass or use Mongo Atlas.

Before installing, download and install Node.js and MongoDB using compass or connect to MongoDB Atlas.

If this is a brand new project, make sure to create a package.json first with the [npm init command.](https://docs.npmjs.com/creating-a-package-json-file)

```javascript
$ npm install mongo-frank
```

## Features

- Ease of working Mongo-DB
- Database Query Optimization
- Async/Await for MongoDB Operations
- Mongoose Schema and Model Abstraction
- Error Handling and Logging

## Quick Start

The quickest way to get started with mongo-frank is to utilize the frank exports to generate an application as shown below:

Install the executable.

```javascript
$ npm install -g mongo-frank
```

Install dependencies:

```javascript
$ npm install nodemon
$ npm install
```

Start the server:

```javascript
$ nodemon
```

## Guidelines

1. Import functions from the package.
2. Create a Schema for mongodb.
3. Call the createSchema function and pass the your schema as the argument.
4. Call the updateConfig function and pass connection string, DataBase name and cluster name for the database.
   updateConfig(connection string, DataBase name, Cluster Name)
5. Call the connectDB() to establish a connection to MongoDB.
6. Work with CRUD operations by calling the below functions.
   - createData() -> Create the data
   - getData() -> Fetch the data
   - getOneData() -> Fetch Only one Object
   - updateData() -> Update the Existing Data
   - delData() -> Delete the Data

_**Note:** updateConfig should be called before making a connection to the Databse_

## Docs

```javascript
// Require mongo-frank
const frank = require("mongo-frank");
// Create your Data Object or pass from external resource
const person = {
  name: "Jack",
  email: "jack@gmail.com",
  age: 30,
  country: "USA",
};

// Your Desired Schema
const schema = {
  name: String,
  email: String,
  age: Number,
  country: String,
};

// Update the Config
frank.config.updateConfig("mongodb://localhost", "Person", "Account");

// Create a connection with the MongoDB
frank.connectDB();

// Create the schema
frank.createSchema(schema);

// Create Data
frank
  .createData(person)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Fetch multiple Data items
frank
  .getData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Fetch a single Data item
let id = "675aa7981a398c3e400568ed";
frank
  .getOneData(id)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Update a single Data item
id = "675d4c4c793ef0c47e56a277";
let newData = {
  name: "Jack",
  email: "jack@gmail.com",
  age: 30,
  country: "USA",
};
frank
  .updateData("675d4c4c793ef0c47e56a277", newData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Delete Single Data item
id = "675aa7981a398c3e400568ed";
frank
  .delData(id)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

## Philosophy

The Mongo-Frank philosophy offers simple, efficient tools for working with MongoDB Atlas and Compass, simplifying database management by handling connections, CRUD operations, and instances seamlessly.

## People

The author of mongo-frank is [Mukunthan A R](https://www.npmjs.com/~mukunthan2004)

## Lisence

ISC
