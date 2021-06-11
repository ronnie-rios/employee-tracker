//dependencies
const inquirer = require('inquirer');
const db = require('./config');
const cTable = require('console.table');

const port = process.env.PORT || 3001;

function initialPrompts() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose an option',
            name: 'options',
            choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee' ,
            'Update emplyoee']
        }
    ]).then((start) => {
        switch(start.options) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update employee":
                updateEmployee();
                break;
        }
    })
}

function viewDepartments(){

};

function viewRoles(){

};

function viewEmployees(){

};


function addDepartment(){

};

function addRole(){

};

function addEmployee(){

};

function updateEmployee(){

};