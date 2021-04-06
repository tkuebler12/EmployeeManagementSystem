const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: `root`,
    password: `root`,
    database: "employee_management_system_DB"
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});

//Run Search function

const runSearch = () => {
    inquirer
    .prompt({
        name: `action`,
        type: `rawlist`,
        message: `What would you like to do?`,
        choices: [
            `Add a department`,
            `Add a role`,
            `Add an employee`,
            `View a department`,
            `View a role`,
            `View an employee`,
            `Update employee roles`,
            `Update employee manager`,
            `View employees by manager`,
            `Delete a department`,
            `Delete a role`,
            `Delete an employee`,
            `View total utilized budget of a department`
        ],
    })
    .then((answer) => {
        switch(answer.action) {
            case `Add a department`:
                addDepartment();
                break;
            case `Add a role`:
                addRole();
                break;
            case `Add an employee`:
                addEmployee();
                break;
            case `View a department`:
                viewDepartment();
                break;
            case `View a role`:
                viewRole();
                break;
            case `View an employee`:
                viewEmployee();
                break;
            case `Update employee roles`:
                updateEmployeeRoles();
                break;
            case `Update employee manager`:
                updateEmployeeManager();
                break;
            case `View employees by manager`:
                viewEmployeeByManager();
                break;
            case `Delete a department`:
                deleteDepartment();
                break;
            case `Delete a role`:
                deleteRole();
                break;
            case `Delete an employee`:
                deleteEmployee();
                break;
            case `View total utilized budget of a department`:
                viewBudget();
                break;

            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    });
};

//Add Department Function

const addDepartment = () => {
    inquirer
    .prompt({
        name: `department`,
        type: `input`,
        message: `What department would you like to add?`,
    })
    .then((answer) => {
        const query = `SELECT id or name`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, name }) => {
                console.log(
                    `ID: ${id} || NAME: ${name}`
                );
            });
            runSearch();
        });
    });
};

//Add Role Function

const addRole = () => {
    inquirer
    .prompt({
        name: `role`,
        type: `input`,
        message: `What role would you like to add?`,
    })
    .then((answer) => {
        const query = `SELECT id, title, salary or department_id`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, title, salary, department_id }) => {
                console.log(
                    `ID: ${id} || Title: ${title} || Salary: ${salary} || Department ID: ${department_id}`
                );
            });
            runSearch();
        });
    });
};

//Add Employee Function

const addEmployee = () => {
    inquirer
    .prompt({
        name: `employee`,
        type: `input`,
        message: `What employee would you like to add?`,
    })
    .then((answer) => {
        const query = `SELECT id, first_name, last_name, role_id or manager_id`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
                console.log(
                    `ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role ID: ${role_id} || Manager ID: ${manager_id}`
                );
            });
            runSearch();
        });
    });
};

//View Department Function

const viewDepartment = () => {
    inquirer
    .prompt({
        name: `department`,
        type: `input`,
        message: `What department would you like to view?`,
    })
    .then((answer) => {
        const query = `SELECT id or name`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, name}) => {
                console.log(
                    `ID: ${id} || Name: ${name}`
                );
            });
            runSearch();
        });
    });
};

//View Role Function

const viewRole = () => {
    inquirer
    .prompt({
        name: `role`,
        type: `input`,
        message: `What role would you like to view?`,
    })
    .then((answer) => {
        const query = `SELECT id, title, salary or department_id`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, title, salary, department_id }) => {
                console.log(
                    `ID: ${id} || Title: ${title} || Salary: ${salary} || Department ID: ${department_id}`
                );
            });
            runSearch();
        });
    });
};

//View Employee Function

const viewEmployee = () => {
    inquirer
    .prompt({
        name: `employee`,
        type: `input`,
        message: `What employee would you like to view?`,
    })
    .then((answer) => {
        const query = `SELECT id, first_name, last_name, role_id or manager_id`;
        connection.query(query, { id: answer.id }, (err, res) => {
            res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
                console.log(
                    `ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role ID: ${role_id} || Manager ID: ${manager_id}`
                );
            });
            runSearch();
        });
    });
};

//Update Employee Role Function

const updateEmployeeRoles = () => {
    inquirer
    .prompt({
        name: `updated employee role`,
        type: `input`,
        message: `What employee role would you like to update?`,
    })
    .then((answer) => {

    })
}

//Update Employee Manager Function

const updateEmployeeManager = () => {
    inquirer
    .prompt({
        name: `updated employee manager`,
        type: `input`,
        message: `What employee manager would you like to update?`,
    })
    .then((answer) => {

    })
}

//View Employee by Manager Function

const viewEmployeeByManager = () => {
    inquirer
    .prompt({
        name: `view employee by manager`,
        type: `input`,
        message: `View employee by manager`,
    })
    .then((answer) => {

    })
}

//Delete Department Function

const deleteDepartment = () => {
    inquirer
    .prompt({
        name: `department`,
        type: `input`,
        message: `Which department would you like to delete?`,
    })
    .then((answer) => {

    })
}

//Delete Role Function

const deleteRole = () => {
    inquirer
    .prompt({
        name: `role`,
        type: `input`,
        message: `Which role would you like to delete?`,
    })
    .then((answer) => {

    })
}

//Delete Employee Function

const deleteEmployee = () => {
    inquirer
    .prompt({
        name: `employee`,
        type: `input`,
        message: `Which employee would you like to delete?`,
    })
}

//View Total Utilized Budget Function

const viewBudget = () => {
    inquirer
    .prompt({
        name: `view the total utilized budget of a department`,
        type: `input`,
        message: `view the total utilized budget of a department`,
    })
    .then((answer) => {

    })
}