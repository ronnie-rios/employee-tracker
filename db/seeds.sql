CREATE TABLE departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Reception'),
    ('Customer Service');

CREATE TABLE roles (title, salary, department_id)
VALUES
    ('Sales Lead', 75000, 01),
    ('Sales Person', 55000, 01),
    ('Accountant', 60000, 02),
    ('Receptionist', 35000, 03),
    ('Quality Control', 50000, 04),
    ('Customer Consultant', 45000, 04),

CREATE TABLE employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Michael', 'Scott', 1, 001),
    ('Jim', 'Halpert', 2, 002),
    ('Andy', 'Bernard', 2, NULL),
    ('Dwight', 'Schrute', 2, NULL),
    ('Angela', 'Martin', 3, 003),
    ('Oscar', 'Gutierrez', 3, NULL),
    ('Kevin', 'Malone', 3, NULL),
    ('Pam', 'Beasley', 4, NULL),
    ('Erin', 'Hannon', 4, NULL),
    ('Gabe', 'Lewis', ,4, 004)
    ('Creed', 'Bratton', 5, NULL),
    ('Kelly', 'Kapoor', 6, NULL),
    ('Meridith', 'Palmer', 6, NULL),
