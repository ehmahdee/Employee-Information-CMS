const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = require('./config/connection');

const queries = require("./lib/queries");

const {
  questions,
  addEmployeeQ,
  addRoleq,
  addDepartmentQ
} = require("./lib/questions");

const sql = new Queries()

const menu = () => {
  inquirer
    .prompt(questions)
  .then((response) => {
    switch (response.menu) {
      case "View all departments":
          viewDepartments();
          break;

        case "Add department":
          addDepartment();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "add role":
          addRole();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add employee":
          addEmployee();
          break;

        default:
          console.log("See you later!");
          connection.end();
    }
  })
  .catch((err) => {
      console.log(err);
    });
}


//DEPARTMENTS CODE

const viewDepartments = () => {
  connection.promise().query(sql.viewDepartments)
  .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    })
};

// ROLES CODE

const viewRoles = () => {
  connection.promise().query(sql.viewRoles)
  .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    })
};

//EMPLOYEES CODE

const viewEmployees = () => {
  connection.promise().query(sql.viewEmployees)
  .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    })
}


//ADD DEPARTMENT CODE

async function addDepartment() {
  await inquirer.prompt(addDepartmentQ)
  .then((response) => {
    connection.promise().query(sql.addDepartment, response.departmentName)
    .then (() => {
      console.log('\n');
                    console.log(`Successfully added ${response.departmentName} to the database.`);
                    console.log('\n');
                    menu();
    })
  })
}

//ADD ROLE CODE

const departments = ['Sales', 'Design', 'Finance', 'Legal'];

async function addRole() {
    await inquirer.prompt(addRoleQ)
        .then((response) => {
            const departmentId = departments.findIndex(department => department === response.department) + 1;
            connection.promise().query(sql.addRole, [response.title, response.salary, departmentId])
                .then(() => {
                    console.log('\n');
                    console.log(`Successfully added ${response.title} to the database.`);
                    console.log('\n');
                    menu();
                })
        })
};

//ADD EMPLOYEE CODE

const roles = [
"Client Manager",
"Creative Lead",
"Jr. Coordinator",
"Jr. Accountant",
"Sr. Accountant",
"Sr. Legal Counsel",
"intern"
];

const managers = ["Elizabeth Lemon", "Patrick Bateman", "Olivia Pope"];

async function addEmployee() {
    await inquirer.prompt(addEmployeeQ)
        .then((response) => {
            const roleId = roles.findIndex(role => role === response.role) + 1;
            const managerId = managers.findIndex(manager => manager === response.manager) + 1;
            connection.promise().query(sql.addEmployee, [response.firstName, response.lastName, roleId, managerId])
                .then(() => {
                    console.log('\n');
                    console.log(`Successfully added ${response.firstName} ${response.lastName} to the database.`);
                    console.log('\n');
                    menu();
                });
        })
};

//ASYNC DEPARTMENTS CODE

const viewAllDepartments = async ()  => {
    const department = new Department();
    const viewDepartments = await department.viewDepartments();

    menu();
}

const addNewDepartment = async ()  => {
    const department = new Department();
    const newDepartments = await department.newDepartments();

    addDepartment();
}

const editAllDepartments = async ()  => {
    const department = new Department();
    
    const viewDepartments = await department.viewDepartments();

    if(viewDepartments !==0) {
        const editDepartments = await department.updateExisting();
        console.log(`${editDepartments.depatmentName} has been successfully updated.`); } else {
            console.log("Must select a department to update.");
        }

        addDepartment();
    }

const deleteDepartment = async () => {
    const department = new Department();
    const viewDepartments = await department.viewDeleteDepartments();

    if(viewDepartments!==0) {
        const deleteDepartments = await department.deleteDepartment();
        console.log(`${deleteDepartments.depatmentName} has been successfully deleted.`); } else {
            console.log("Must select a department to delete.");
        }

        addDepartment();
    }




const addRole = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "addRole",
      message: "Choose one of the options below:",
      choices: [
        "Add role", 
        "Edit roles", 
        "Delete role", 
        "Go back"
    ],
    }.then((answer) => {
      switch (answer.addRole) {
        case "Add role":
          console.log("\n");
          addNewRole();
          break;

        case "Edit roles":
          console.log("\n");
          editAllRoles();
          break;

        case "Delete role":
          console.log("\n");
          deleteRole();
          break;

        default:
          console.log("\n");
          menu();
      }
    }),
  ]);
};

//ASYNC ROLES CODE

const viewAllRoles = async ()  => {
    const role = new Role();
    const addNewRole = await role.newRole();

    menu();
}

const addNewRole = async ()  => {
    const role = new Role();
    const addNewRole = await role.newRole();

    addRole();
}

const editAllRoles = async ()  => {
    const department = new Department();
    
    const viewDepartments = await department.viewDepartments();

    if(viewDepartments !==0) {
        const editDepartments = await department.updateExisting();
        console.log(`${editDepartments.depatmentName} has been successfully updated.`); } else {
            console.log("Must select a department to update.");
        }

        addRole();
    }

const deleteRole = async () => {
    const department = new Department();
    const viewDepartments = await department.viewDeleteDepartments();

    if(viewDepartments!==0) {
        const deleteDepartments = await department.deleteDepartment();
        console.log(`${deleteDepartments.depatmentName} has been successfully deleted.`); } else {
            console.log("Must select a department to delete.");
        }

        addDepartment();
    }


const addEmployee = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Choose one of the options below:",
      choices: [
        "Add employee", 
        "Edit employees", 
        "Delete employee", 
        "Go back"
    ],
    }.then((answer) => {
      switch (answer.addEmployee) {
        case "Add employee":
          console.log("\n");
          addNewEmployee();
          break;

        case "Edit employees":
          console.log("\n");
          editAllEmployees();
          break;

        case "Delete employee":
          console.log("\n");
          deleteEmployee();
          break;

        default:
          console.log("\n");
          menu();
      }
    }),
  ]);
};

//EMPLOYEE ASYNC CODE

const viewAllEmployees = async ()  => {
  const employee = new Employee();
  const addNewEmployee = await employee.newEmployee();

  menu();
}

const addNewEmployee = async ()  => {
  const employee = new Employee();
  const addNewEmployee = await employee.newEmployee();

  addEmployee();
}

const editAllEmployees = async ()  => {
  const employee = new Employee();
  
  const viewEmployees = await employee.viewEmployees();

  if(viewEmployees !==0) {
      const editEmployee = await employee.updateExisting();
      console.log(`${editEmployee.employeeName} has been successfully updated.`); } else {
          console.log("Must select a department to update.");
      }

      addEmployee();
  }

const deleteEmployee = async () => {
  const employee = new Employee();
  const viewEmployee = await employee.viewDeleteEmployees();

  if(viewEmployee!==0) {
      const deleteEmployee = await employee.deleteEmployee();
      console.log(`${deleteEmployee.employeeName} has been successfully deleted.`); } else {
          console.log("Must select a department to delete.");
      }

      addEmployee();
  }

beginQuestions();
