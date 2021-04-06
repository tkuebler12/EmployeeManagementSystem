var Department = require("./lib/department");
var Employee = require("./lib/employee");
var Role = require("./lib/role");

var inquirer = require("inquirer");

var path = require("path");
var fs = require("fs");

var newTeamMember = [];
var idArray = [];

function mainMenu() {
    function createDepartment() {
        inquirer.prompt([
            {
            type: "input",
            name: "departmentId",
            message: "Enter your department ID"
            },
            {
                type: "input",
            name: "departmentName",
            message: "Enter your department name"
            }
        ]).then(response => {
            var department = new Department(responses.departmentId, responses.departmentName);
            newTeamMember.push(department);
            idArray.push(responses.departmentId);
            addDepartment();
        });
    }

    function createRole() {
        inquirer.prompt([
            {
                type: "input",
                name: "roleId",
                message: "Enter your role ID"
            },
            {
                type: "input",
                name: "roleTitle",
                message: "Enter your role title"
            },
            {
                type: "input",
                name: "roleSalary",
                message: "Enter your role salary"
            },
            {
                type: "input",
                name: "roledepartmentId",
                message: "Enter your role department ID"
            }
        ]).then(response => {
            var role = new Role(responses.roleId, responses.roleTitle, responses.roleSalary, responses.roledepartmentId);
            newTeamMember.push(role);
            idArray.push(responses.roleId);
            addRole();
        });
    }
    function createEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeId",
                message: "Enter your employee ID"
            },
            {
                type: "input",
                name: "employeeFirst_name",
                message: "Enter your first name"
            },
            {
                type: "input",
                name: "employeeLast_name",
                message: "Enter your last name"
            },
            {
                type: "input",
                name: "employeeRole_id",
                message: "Enter your employee role ID"
            },
            {
                type: "input",
                name: "employeeManager_id",
                message: "Enter your employee's manager ID"
            }
        ]).then(response => {
            var employee = new Employee(responses.employeeId, responses.employeeFirst_name, responses.employeeLast_name, responses.employeeRole_id, responses.employeeManager_id);
            newTeamMember.push(employee);
            idArray.push(responses.employeeId);
            addEmployee();
        });
    }
    function addTeamPosition() {
        inquirer.prompt([
            {
                type: "input",
                name: "addTeamPosition",
                message: "What team position would you like to add?",
                choices: ["department", "role", "employee"] 
            }
        ]).then(responses => {
            switch(responses.addTeamPosition) {
                case "department":
                    createDepartment();
                    break;
                case "role":
                    createRole();
                    break;
                case "employee":
                    createEmployee();
                    break;
                default:
            }
        });
    }
    createDepartment();
}
mainMenu();