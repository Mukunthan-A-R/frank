Hello guys, this is an npm package developed for the ease for working with MongoDB using compass.

This package works only if you configure with Mongo compass.

1. Import functions from the package.
2. Create a Schema for mongodb.
3. Call the createSchema function and pass the your schema as the argument.
4. Call the updateCongid function and pass a name for the database.
5. Work with CRUD operations by calling the below functions.
   createData() -> Create the data
   getData() -> Fetch the data
   getOneData() -> Fetch Only one Object
   delData() -> Delete the Data

#Update the schema using the createSchema function
createSchema(schema);

#To set up Data Base Name
config.updateConfig("Plaground");

#To perform CRUD Operations

#Create data by calling createData()
const person = { name: "Mosh", email: "mosh@gmail.com", age: 30 };
createData(person)
.then((res) => console.log(res))
.catch((err) => console.log(err));

#Fetch data by calling getData()
getData()
.then((res) => console.log(res))
.catch((err) => console.log(err));

#Fetch single data by calling getOneData()
getOneData(id)
.then((res) => console.log(res))
.catch((err) => console.log(err));

#Delete data by calling delData()
delData(id)
.then((res) => console.log(res))
.catch((err) => console.log(err));
