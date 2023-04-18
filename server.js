const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = require("./config/connection");

const queries = require("./lib/queries");

const {
  questions,
  addEmployeeQ,
  addRoleQ,
  addDepartmentQ,
} = require("./lib/questions");

const sql = new Queries();

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

        case "Update employee role":
          updateEmployee();
          break;

        default:
          console.log("See you later!");
          connection.end();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//DEPARTMENTS CODE

const viewDepartments = () => {
  connection
    .promise()
    .query(sql.viewDepartments)
    .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    });
};

// ROLES CODE

const viewRoles = () => {
  connection
    .promise()
    .query(sql.viewRoles)
    .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    });
};

//EMPLOYEES CODE

const viewEmployees = () => {
  connection
    .promise()
    .query(sql.viewEmployees)
    .then(([rows, fields]) => {
      console.log("\n");
      console.table(rows);
      console.log("\n");
      menu();
    });
};

//ADD DEPARTMENT CODE

async function addDepartment() {
  await inquirer.prompt(addDepartmentQ).then((response) => {
    connection
      .promise()
      .query(sql.addDepartment, response.departmentName)
      .then(() => {
        console.log("\n");
        console.log(
          `Successfully added ${response.departmentName} to the database.`
        );
        console.log("\n");
        menu();
      });
  });
}

//ADD ROLE CODE

const departments = ["Sales", "Design", "Finance", "Legal"];

async function addRole() {
  await inquirer.prompt(addRoleQ).then((response) => {
    const departmentId =
      departments.findIndex(
        (department) => department === response.department
      ) + 1;
    connection
      .promise()
      .query(sql.addRole, [response.title, response.salary, departmentId])
      .then(() => {
        console.log("\n");
        console.log(`Successfully added ${response.title} to the database.`);
        console.log("\n");
        menu();
      });
  });
}

//ADD EMPLOYEE CODE

const roles = [
  "Client Manager",
  "Creative Lead",
  "Jr. Coordinator",
  "Jr. Accountant",
  "Sr. Accountant",
  "Sr. Legal Counsel",
  "intern",
];

const managers = ["Elizabeth Lemon", "Patrick Bateman", "Olivia Pope"];

async function addEmployee() {
  await inquirer.prompt(addEmployeeQ).then((response) => {
    const roleId = roles.findIndex((role) => role === response.role) + 1;
    const managerId =
      managers.findIndex((manager) => manager === response.manager) + 1;
    connection
      .promise()
      .query(sql.addEmployee, [
        response.firstName,
        response.lastName,
        roleId,
        managerId,
      ])
      .then(() => {
        console.log("\n");
        console.log(
          `Successfully added ${response.firstName} ${response.lastName} to the database.`
        );
        console.log("\n");
        menu();
      });
  });
}

//UPDATE EMPLOYEE ROLE
async function updateEmployeeRole() {
  let employees = [];
  const employeeRoles = [];

  await connection
    .promise()
    .query(sql.getAllEmployeeNames)
    .then(([rows, fields]) => {
      rows.forEach((employee) => {
        employees.push(employee.first_name + " " + employee.last_name);
      });

      inquirer
        .prompt({
          type: "list",
          name: "employeeUpdateQ",
          message: "Which employee's role do you want to update?",
          choices: employees,
        })
        .then((employee) => {
          connection
            .promise()
            .query(sql.getAllTitles)
            .then(([rows, fields]) => {
              rows.forEach((role) => {
                employeeRoles.push(role.title);
              });
              inquirer
                .prompt({
                  type: "list",
                  name: "roleAssignmentQ",
                  message: "Which role do you want to assign to?",
                  choices: employeeRoles,
                })
                .then((role) => {
                  const name = employee.employeeToUpdate.split(" ");
                  const roleId =roles.findIndex((roleEl) => roleEl === role.roleAssignment) + 1;
                  connection.promise().query(sql.updateEmployeeRole, [roleId, name[0], name[1]]);
                  console.log(`${name[0]} ${name[1]} has been sucessfully updated to ${role.roleAssignment}.`);
                  console.log("\n");
                  menu();
                });
            });
        });
    });
}

menu();