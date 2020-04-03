const Sequelize = require("sequelize");

const sequelize = new Sequelize("shopping_server", "syed", "syed", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();  

module.exports = { sequelize };