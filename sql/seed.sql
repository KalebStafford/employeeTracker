USE employeesDB;
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 140000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 240000, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josue", "Paniagua", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adrian", "Castillo", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hailee", "Judson", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Reece", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Isabell", "Chartier", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sydney", "Rosenkrantz", 3, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Caleb", "Bentley", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aimee", "Baldwin", 3, 4);