let mysql = require("mysql");
let inquirer = require("inquirer");
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Big1Fat1Pup1",
  database: "employeesDB",
});
connection.connect((err) => {
  if (err) throw err;
  dataPrompt();
});