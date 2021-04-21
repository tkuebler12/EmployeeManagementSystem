USE employee_management_system_DB;

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Advisor", 100, 1), ("Accountant", 75, 2), ("Sales Associate", 50, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tim", "Kuebler", 1, 5), ("Bob", "Smith", 2, 10), ("Rob", "Smiths", 3, 15);