const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// const department = require('./');
// const employee = require('./');
// const role = require('./');

const beginQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add/update departments",
          "View all roles",
          "add/update roles",
          "View all employees",
          "Add/update employees",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.menu) {
        case "View all departments":
          viewDepartments();
          break;

        case "Add/update departments":
          addDepartment();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "add/update roles":
          addRole();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add/update employees":
          addEmployee();
          break;

        default:
          console.log("See you later!");
          process.exit();
      }
    });
};

//DEPARTMENTS CODE

const viewDepartments = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "viewDepartments",
        message: "Choose one of the options below:",
        choices: [
                "View all departments",  
                "Go Back"
            ],
      },
    ])
    .then((answer) => {
        switch (answer.viewDepartments) {
            case "View all departments":
                console.log("\n");
                viewAllDepartments();
                break;

            default:
                console.log("\n");
                menu();
        }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addDepartment",
        message: "Choose one of the options below:",
        choices: [
          "Add department",
          "Edit departments",
          "Delete department",
          "Go back",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.addDepartment) {
        case "Add department":
          console.log("\n");
          addNewDepartment();
          break;

        case "Edit departments":
          console.log("\n");
          editAllDepartments();
          break;

        case "Delete department":
          console.log("\n");
          deleteDepartment();
          break;

        default:
          console.log("\n");
          menu();
      }
    });
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

// ROLES CODE

const viewRoles = () => {
    inquirer
    .prompt([
        {
          type: "list",
          name: "viewRoles",
          message: "Choose one of the options below:",
          choices: [
            "View all roles",
            "Go back",
          ],
        },
      ])
    .then((answer) => {
        switch (answer.viewRoles) {
          case "View all roles":
            console.log("\n");
            viewAllRoles();
            break;

          default:
            console.log("\n");
            menu();
        }
      });
  };


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


//EMPLOYEES CODE

const viewEmployees = () => {
    inquirer.prompt([
       {
        type: "list",
        name: "viewEmployees",
        message: "Choose one of the options below:",
        choices: [
          "View all employees",
          "Go back"
        ],
       }
       .then((answer) => {
        switch (answer.viewEmployees) {
            case "View all employees":
                console.log("\n");
                viewEmployees();
                break;

            default:
                console.log("\n");
                menu();
            }
       })
    ])
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
          addEmployee();
          break;

        case "Edit employees":
          console.log("\n");
          editEmployee();
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

beginQuestions();
