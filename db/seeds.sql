INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Reception'),
    ('Customer Service');

INSERT INTO roles (title, salary, departments_id)
VALUES
    ('Sales Lead', 75000, 1),
    ('Sales Person', 55000, 1),
    ('Accountant', 60000, 2),
    ('Receptionist', 35000, 3),
    ('Quality Control', 50000, 4),
    ('Customer Consultant', 45000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
    ('Michael', 'Scott', 1, 1),
    ('Jim', 'Halpert', 1, 2),
    ('Andy', 'Bernard', 2, NULL),
    ('Stanley', 'Hudson', 2, NULL),
    ('Dwight', 'Schrute', 1, NULL),
    ('Meridith', 'Palmer', 2, NULL),
    ('Angela', 'Martin', 3, 3),
    ('Oscar', 'Gutierrez', 3, NULL),
    ('Kevin', 'Malone', 3, NULL),
    ('Pam', 'Beasley', 4, NULL),
    ('Erin', 'Hannon', 4, NULL),
    ('Gabe', 'Lewis', 5, 4),
    ('Creed', 'Bratton', 5, NULL),
    ('Kelly', 'Kapoor', 6, NULL),
    ('Meridith', 'Palmer', 6, NULL);
