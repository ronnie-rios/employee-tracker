//dependencies
const inquirer = require('inquirer');
const db = require('./config');
const cTable = require('console.table');

const port = process.env.PORT || 3001;

function initialPrompts() {
    inquirer.createPromptModule([
        {
            type: 'list',
            message: 'Please choose a following option',
            name: 'options',
            choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add department',
            'Add role',
            'Add Employee' ,
            'Update emplyoee']
        }
    ]).then
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