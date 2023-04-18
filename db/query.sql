-- VIEW ALL DEPARTMENTS
SELECT * FROM department;

-- PRESENT JOB TITLE, ROLE ID, DEPARTMENT OF THAT ROLE, SALARY OF ROLE
SELECT 
    role.title, 
    role.id, 
    department.name AS department,
    role.salary
FROM 
    role 
LEFT JOIN 
    department ON role.department_id = department.id;

-- PRESENT FORMATTED TABLE WITH EMPLOYEE DATA AND CORRESPONDING MANAGERS
SELECT 
employee.id,
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
LEFT JOIN 
    role ON employee.role_id = role.id
LEFT JOIN 
department ON role.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES  (?, ?, ?, ?);

INSERT INTO role (title, salary, department_id) 
    VALUES (?,?,?);

INSERT INTO department (name) 
    VALUES (?);