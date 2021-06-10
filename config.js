const mysql = requrie('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker'
    },
    console.log('connected to employee_tracker database')
);
module.exports = db;