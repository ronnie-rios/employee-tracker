INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Reception'),
    ('Customer Service');

INSERT INTO roles (title, salary, departments_id)
VALUES
    ('Sales Team', 75000, 1),
    ('Accountant', 60000, 2),
    ('Receptionist', 35000, 3),
    ('Quality Control', 50000, 4);
   

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
    ('Michael', 'Scott', 1, 1),
    ('Jim', 'Halpert', 1, 2),
    ('Andy', 'Bernard', 1, NULL),
    ('Dwight', 'Schrute', 1, 3),
    ('Angela', 'Martin', 2, 4),
    ('Oscar', 'Nunez', 2, NULL),
    ('Kevin', 'Malone', 2, NULL),
    ('Pam', 'Beasley', 3, NULL),
    ('Erin', 'Hannon', 3, NULL),
    ('Ryan', 'Howard', 4, 5),
    ('Kelly', 'Kapoor', 4, NULL);

