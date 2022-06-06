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