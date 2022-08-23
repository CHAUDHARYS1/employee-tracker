const {
    prompt
} = require('inquirer');
const {
    exit
} = require('process');
const helper = require('./db/helper');

function init() {
    showPromts();
}
init();

function showPromts() {
    prompt([{
        // initial questions 
        type: "list",
        name: "choice",
        message: "Please choose an option from below:",
        choices: [{
                name: "View All Departments",
                value: "VIEW_DEPARTMENTS",
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLES",
            },
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES",
            },

            {
                name: "Add a Department",
                value: "ADD_DEPARTMENT",
            },
            {
                name: "Add a Role",
                value: "ADD_ROLE",
            },
            {
                name: "Add an Employee",
                value: "ADD_EMPLOYEE",
            },
            {
                name: "Update Employee Role",
                value: "UPDATE_EMPLOYEE_ROLE",
            },
            {
                name: "Quit",
                value: "QUIT",
            },
        ],
    },
]).then((res) => {
    let choice = res.choice;

    // call function based on user selection
    switch(choice){
        case "VIEW_DEPARTMENTS":
            viewAllDepartments();
            break;
          case "VIEW_ROLES":
            viewAllRoles();
            break;
          case "VIEW_EMPLOYEES":
            viewAllEmployees();
            break;
          case "ADD_DEPARTMENT":
            createDepartment();
            break;
          case "ADD_ROLE":
            createRole();
            break;
          case "ADD_EMPLOYEE":
            createEmployee();
            break;
          case "UPDATE_EMPLOYEE_ROLE":
            updateEmployeeRole();
            break;
          default:
            quit();
    }
});
}
// view all departments function
function viewAllDepartments(){
    helper.viewDepartments().then(([result]) =>{
        console.table(result);
        showPromts();
    })
}



function quit(){
    exit();
}