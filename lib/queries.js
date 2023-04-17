class Queries {
    constructor() {
    this.viewAllDepartments = "SELECT * FROM department";

    this.viewAllRoles = 
    `SELECT
    role.title, 
    role.id, 
    department.name AS department,
    role.salary
    FROM 
    role 
    LEFT JOIN 
    department ON role.department_id = department.id;`;

    this.viewAllEmployees =
    `SELECT 
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
    LEFT JOIN employee manager ON manager.id = employee.manager_id;`

    this.addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES  (?, ?, ?, ?);`

    this.addRole = `INSERT INTO role (title, salary, department_id) 
    VALUES (?,?,?);`

    this.addDepartment = `INSERT INTO department (name) 
    VALUES (?);`

    
    this.getAllEmployeeNames = `SELECT first_name, last_name FROM employee;`

    this.getAllTitles = `SELECT title FROM role;`

    this.updateEmployeeRole = `UPDATE employee SET role_id =? WHERE first_name =? AND last_name =?;`
}
}
module.exports = Queries;