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
    const sql = `SELECT employees.*, roles.title, roles.salary, departments.name FROM employees
                INNER JOIN roles
                ON roles.id = employees.roles_id
                INNER JOIN departments
                ON roles.departments_id = departments.id`
                ;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } console.table(result);
    });
    initialPrompts();
};


async function addDepartment(){
    let response = await inquirer.prompt([{
        type: 'input',
        name: 'departments',
        message: 'Please enter department name'
        },
    ])
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [response.departments];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } console.log('New Department added')
    });
    initialPrompts();
};

async function addRole(){
    let response = await inquirer.prompt([
        {
            type: 'input',
            name: 'roles',
            message: 'Please enter a role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary.'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Please enter the department'
        }
    ])
    let rolesArr = [];


    db.query(sql, response, (err, results) => {

    })
};

async function addEmployee(){
    let response = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter their first name',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter their last name'
        },
        {
            type: 'input',
            name: 'role',
            message: 'Please enter their role'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Please enter their manager id.'
        }
    ]);
    const sql = `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
                    VALUES (?, ?, ?, ?)`;
    const params = [response.firstName, response.lastName, response.role, response.manager]

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('employee was added');
    });
    initialPrompts();
};

function updateEmployee(){

};
//to start prompts
initialPrompts();