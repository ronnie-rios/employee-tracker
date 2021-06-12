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
    ]).then((result) => {
        switch(result.options) {
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
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } console.table(result);
    });
    initialPrompts();
};

function viewRoles(){
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name FROM roles
                INNER JOIN departments
                ON departments.id = roles.id`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } console.table(result);
    });
    initialPrompts();   
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
//to start prompts
initialPrompts();