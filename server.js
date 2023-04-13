const inquirer = require('inquirer');

const department = require('./');
const employee = require('./');
const role = require('./');

beginQuestions();

const beginQuestions = () => {
    inquirer.prompt([
    {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: [
        'View all departments',
        'Add/update departments',
        'View all roles',
        'add/update roles',
        'View all employees',
        'Add/update employees',
        'Additional reports',
        'Exit'
    ]
}
])
.then((answer) => {
    switch (answer.menu) {
        case 'View all departments':
            departments();
            break;

        case 'Add/update departments':
            addDepartment();
            break;

        case 'View all roles':
            roles();
            break;

        case 'add/update roles':
            addRole();
            break;

        case 'View all employees':
            employees();
            break;

        case 'Add/update employees':
            addEmployee();
            break;

        case 'Additional reports':
            additionalReports();
            break;

        default:
            console.log('See you later!');
            process.exit();
            break;
    }

})
}