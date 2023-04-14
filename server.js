const inquirer = require("inquirer");

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
          "Additional reports",
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

        case "Additional reports":
          additionalReports();
          break;

        default:
          console.log("See you later!");
          process.exit();
          break;
      }
    });
};

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
                viewDepartments();
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
          addDepartment();
          break;

        case "Edit departments":
          console.log("\n");
          editDepartment();
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
            viewRoles();
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
          addRole();
          break;

        case "Edit roles":
          console.log("\n");
          editRole();
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
