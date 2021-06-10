CREATE TABLE departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Reception'),
    ('Customer Service');

CREATE TABLE roles (title, salary, department_id)
VALUES
    ('Sales Lead', 75000, 01),
    ('Sales Person', 55000, 02),
    ('Accountant', 60000, 03),
    ('Receptionist', 35000, 04),
    ('Quality Control', 50000, 05),
    ('Customer Consultant', 45000, 06),

CREATE TABLE employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Michael', 'Scott', 1, 001),
    ('Jim', 'Halpert', 1, 002),
    ('Andy', 'Bernard', 2, NULL),
    ('Stanley' 'Hudson', 2, NULL),
    ('Dwight', 'Schrute', 1, NULL),
    ('Meridith' 'Palmer', 2, NULL),
    ('Angela', 'Martin', 3, 003),
    ('Oscar', 'Gutierrez', 3, NULL),
    ('Kevin', 'Malone', 3, NULL),
    ('Pam', 'Beasley', 4, NULL),
    ('Erin', 'Hannon', 4, NULL),
    ('Gabe', 'Lewis', , 5, 004)
    ('Creed', 'Bratton', 5, NULL),
    ('Kelly', 'Kapoor', 6, NULL),
    ('Meridith', 'Palmer', 6, NULL),
