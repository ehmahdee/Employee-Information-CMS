INSERT INTO department (department_name)
VALUES ('Accounting'),
        ('Finance'),
        ('Marketing'),
        ('R&D');

INSERT INTO roles (title, salary, department_id)
VALUES ('employee', 15.00, 001),
        ('employee', 15.00, 002),
        ('employee', 15.00, 003),
        ('employee', 15.00, 004),
        ('manager', 30.00, 005);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Dua', 'Lipa', 001),
        ('David', 'Attenburough', 002),
        ('Sally', 'Ride', 003),
        ('Lil', 'Nas X', 004),
        ('Beyonce', 'Knowles', 005, 001);

