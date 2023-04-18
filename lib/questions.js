const questions = [
    {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add department",
          "View all roles",
          "Add role",
          "View all employees",
          "Add employee",
          "Update employee",
          "Exit",
        ],
      },
]

const addEmployeeQ = [
    {
        type: "input",
        name: "empFirstName",
        message: "what is the employee's first name?",
    },
    {
        type: "input",
        name: "empLastName",
        message: "what is the employee's last name?",
    },
    {
        type: "list",
        name: "employeeRole",
        message: "what is the employee's job title?",
        choices: [
          "Client Manager",
          "Creative Lead",
          "Jr. Coordinator",
          "Jr. Accountant",
          "Sr. Accountant",
          "Sr. Legal Counsel",
          "intern"
        ]
    }, {
        type: "list",
        name: "employeeManager",
        message: "what is the employee's manager's name?",
        choices: [
          "Elizabeth Lemon", "Patrick Bateman", "Olivia Pope"
        ]
    }
]

const addRoleQ = [ 
    {
    type: "input",
    name: "roleTitle",
    message: "what is the title of the new role?",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "what is the salary of the new role?",
  }, 
  {
    type: "list",
    name: "roleDepartment",
    message: "what is the department of the new role?",
    choices: [
      "Sales",
      "Design",
      "Finance",
      "Legal",
    ]
  },
]
    

const addDepartmentQ = [
    {
        type: "input",
        name: "departmentTitle",
        message: "please enter the title of the new department:",
      },
]

module.exports = {
    questions,
    addEmployeeQ,
    addRoleQ,
    addDepartmentQ
}

