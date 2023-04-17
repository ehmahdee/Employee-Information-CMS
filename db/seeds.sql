INSERT INTO department (department_name)
VALUES ('Sales'),
        ('Creative'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Intern', 20000, 001),
        ('Client Manager', 85000, 001),
        ('Creative Lead', 95000, 002),
        ('Jr. Coordinator', 70000, 002),
        ('Jr. Accountant', 75000, 003),
        ('Sr. Accountant', 95000, 003),
        ('Sr. Legal Counsel', 110000, 004),
        ("Other", 000000, 001);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Dua', 'Lipa', 001, 002),
        ('David', 'Attenburough', 002, 003),
        ('Sally', 'Ride', 003, 001),
        ('Lil', 'Nas X', 004, 001),
        ('Beyonce', 'Knowles', 005, 002),
        ('Olivia', 'Pope', 006, null),
        ('Elizabeth', 'Lemon', 007, null),
        ('Patrick', 'Bateman', 008, null);

