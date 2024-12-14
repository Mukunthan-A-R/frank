# mongo-frank

Ease for working with [MongoDB](https://www.mongodb.com/products/tools/compass) using compass,minimalist web framework for [Node.js](<(https://nodejs.org/en)>).
mongo-frank is a tool that helps develop Node.js based applications by automatically connecting with mongodb using compass.
This is a minimalist franework. You can directly perfrorm CRUD operations without worrying about DataBase connection.

## Installation

This is a Node.js module available through the npm registry.Before installing, download and install [Node.js](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/products/tools/compass) using compass.

Before installing, download and install Node.js and MongoDB using compass.

This package works only if you configure with Mongo compass.

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
4. Call the updateCongid function and pass a name for the database.
5. Work with CRUD operations by calling the below functions.
   - createData() -> Create the data
   - getData() -> Fetch the data
   - getOneData() -> Fetch Only one Object
   - delData() -> Delete the Data

## Docs

```javascript
// Require mongo-frank
const frank = require("mongo-frank");
// Create your Data Object
const person = { name: "Mosh", email: "mosh@gmail.com", age: 30 };

// Your Desired Schema
const schema = {
  name: String,
  email: String,
  age: Number,
  country: String,
};

// Update the schema
frank.createSchema(schema);

// Database Name
frank.config.updateConfig("playground");

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

// Delete Single Data item
let id = "675aa7981a398c3e400568ed";
frank
  .delData(id)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

## Philosophy

The Mongo-Frank philosophy offers simple, efficient tools for working with MongoDB Compass, simplifying database management by handling connections, CRUD operations, and instances seamlessly.

## People

The author of mongo-frank is [Mukunthan A R](https://www.npmjs.com/~mukunthan2004)

## Lisence

ISC
