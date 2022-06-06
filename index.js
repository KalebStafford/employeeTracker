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
function dataPrompt() {
  inquirer
    .prompt({
      message: "What do you plan to do?",
      choices: [
        "View Employees",
        "View Employees (by Department)",
        "Add Employees",
        "Remove Employees",
        "Update Employees Role",
        "Add Roles",
        "Exit",
      ],
      name: "task",
      type: "list",
    })
    .then(({ task }) => {
      switch (task) {
        case "View Employees":
          viewEmployeesTask();
          break;
        case "View Employees (by Department)":
          viewEmpByDepoTask();
          break;
        case "Add Employees":
          addEmployees();
          break;
        case "Remove Employees":
          removeEmployees();
          break;
        case "Update Employees Role":
          updateEmpRole();
          break;
        case "Add Roles":
          addRoles();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}