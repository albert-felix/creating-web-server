const sequelize = require("sequelize");

const ClassDB = new sequelize(process.env.dbUrl);

ClassDB.authenticate()
.then(() => {
  console.log("Conection Successful");
})
.catch((err) => {
  console.log("Connection failed");
  console.error(err)
});

module.exports = ClassDB;