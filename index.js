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
function viewEmployeesTask() {
  let database = `
  SELECT x.id, x.first_name, x.last_name, y.title, z.name 
  AS department, y.salary, 
  CONCAT(i.first_name, ' ', i.last_name) 
  AS manager
  FROM employee x
  LEFT JOIN role y
	ON x.role_id = y.id
  LEFT JOIN department z
  ON z.id = y.department_id
  LEFT JOIN employee i
	ON i.id = x.manager_id`;
  connection.query(database, (err, res) => {
    if (err) throw err;
    console.table(res);
    console.log("Viewing Employee Table");
    dataPrompt();
  });
}
function viewEmpByDepoTask() {
  let database = `
  SELECT z.id, z.name, y.salary 
  AS budget
  FROM employee x
  LEFT JOIN role y
	ON x.role_id = y.id
  LEFT JOIN department z
  ON z.id = y.department_id
  GROUP BY z.id, z.name`;
  connection.query(database, (err, res) => {
    if (err) throw err;
    let departmentOptions = res.map((info) => ({
      value: info.id,
      name: info.name,
    }));
    console.table(res);
    console.log("Viewing Employees (by Department)");
    promptDepartment(departmentOptions);
  });
}
function promptDepartment(departmentOptions) {
  inquirer
    .prompt([
      {
        name: "departmentIdentification",
        message: "Choose Department:",
        choices: departmentOptions,
        type: "list",
      },
    ])
    .then((choice) => {
      console.log("choice", choice.departmentIdentification);
      let database = `
      SELECT x.id, x.first_name, x.last_name, y.title, z.name 
      AS department 
      FROM employee x
      JOIN role y
	    ON x.role_id = y.id
      JOIN department z
      ON z.id = y.department_id
      WHERE z.id = ?`;
      connection.query(database, choice.departmentIdentification,(err, res) => {
        if (err) throw err;
        console.log(res.affectedRows + "Viewing employees (by Department)");
        console.table("response", res);
        dataPrompt();
      });
    });
}