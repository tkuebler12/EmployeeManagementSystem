const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
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
        const query = `INSERT INTO department SET ?`;
        connection.query(query, answer.department)
            console.log(answer.department);
            runSearch();
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
        const query = `INSERT INTO role SET ?`;
        connection.query(query, answer.role) 
            console.log(answer.role);
            runSearch();
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
        const query = `INSERT INTO employee SET ?`;
        connection.query(query, answer.employee)
            console.log(answer.employee);
            runSearch();
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
        const query = `SELECT * FROM department`;
        connection.query(query, function(err, res) {
            if (err) throw err;
                console.log(res);
            });
            runSearch();
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
        const query = `SELECT * FROM role`;
        connection.query(query, function(err, res) {
            if (err) throw err; 
                console.log(res);
            });
            runSearch();
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
        const query = `SELECT * FROM employee`;
        connection.query(query, function(err, res) {
            if (err) throw err; 
                console.log(res);
            });
            runSearch();
        });
};

//Update Employee Role Function

const updateEmployeeRoles = () => {
    connection.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        console.log(data);
        var employees = data.map(e => ({
            name: `${e.first_name} ${e.last_name}`,
            value: `${e.id}`
        }));
        console.log(employees);
    
    connection.query("SELECT * FROM roles", (err, data) => {
        if (err) throw err;
        console.log(data);
        var roles = data.map(r => ({
            name: `${r.title}`,
            value: `${r.id}`
        }));
    
    
    inquirer
    .prompt([
    {
        name: `updatedEmployeeId`,
        type: `list`,
        message: `Which employee's role needs to be updated?`,
        choices: employees
    }, 
    {
        name: `updatedRole`,
        type: `list`,
        message: `What is the new role?`,
        choices: roles
    }
])
    .then(function({updatedEmployeeId, updatedRole}) {
        const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
        connection.query(query, [updatedEmployeeId, updatedRole], function(err, res){
            if (err) throw err;
            console.log("Roles updated");
            runSearch(); 
        })
    })
});
})
}


//Update Employee Manager Function

const updateEmployeeManager = () => {
    connection.query("SELECT * FROM employee manager", (err, data) => {
        if (err) throw err;
        console.log(data);
        var employees = data.map(e => ({
            name: `${e.first_name} ${e.last_name}`,
            value: `${e.id}`
        }));
        console.log(managers);
    
    connection.query("SELECT * FROM manager role", (err, data) => {
        if (err) throw err;
        console.log(data);
        var roles = data.map(r => ({
            name: `${r.title}`,
            value: `${r.id}`
        }));
    
    
    inquirer
    .prompt([
    {
        name: `updatedManager`,
        type: `list`,
        message: `Which manager's role needs to be updated?`,
        choices: managers
    }, 
    {
        name: `updatedRole`,
        type: `list`,
        message: `What is the new role?`,
        choices: roles
    }
])
    .then(function({updatedManager, updatedRole}) {
        const query = `UPDATE manager SET role_id = ? WHERE id = ?`;
        connection.query(query, [updatedManager, updatedRole], function(err, res){
            if (err) throw err;
            console.log("Managers and Roles updated");
            runSearch(); 
        })
    })
});
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