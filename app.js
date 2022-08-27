const { response } = require('express');
const {
    prompt
} = require('inquirer');
const {
    exit
} = require('process');
const { help } = require('yargs');
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
            createNewDepartment();
            break;
          case "ADD_ROLE":
            createNewRole();
            break;
          case "ADD_EMPLOYEE":
            createNewEmployee();
            break;
          case "UPDATE_EMPLOYEE_ROLE":
            updateEmployeeInfo();
            break;
          default:
            quit();
    }
});
}
// view list of all departments function
function viewAllDepartments(){
    helper.viewDepartments().then(([result]) =>{
        console.table(result);
        showPromts();
    })
}

// view list of roles function
function viewAllRoles(){
    helper.viewRoles().then(([result]) =>{
        console.table(result);
        showPromts();
    })
}

// view list of employees function
function viewAllEmployees(){
    helper.viewEmployees().then(([result]) => {
        console.table(result);
        showPromts();
    })
}

// create a new department
function createNewDepartment(){
    prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter new department name...",
        },
    ]).then((response) => {
        helper.addNewDepartment(response).then(() => {
            console.log("department ", response, "added to the database ");
            showPromts();
        });
    });
}

// create a new role
function createNewRole(){
    prompt([
        {
        type: "input",
        name: "role_title",
        message: "Give this role a new title...",
    },
    {
        type: "input",
        name: "salary",
        message: "Please enter salary for this role...",
    },
]).then((response) => {
    helper.viewDepartments().then(([result]) => {
        let roleTitle = response.role_title;
        let roleSalary = response.salary;
        console.table(result);
        prompt({
          type: "input",
          name: "department_id",
          message: "what department id will this role come under? ",
        }).then((response) => {
          let newRole = {
            role_title: roleTitle,
            salary: roleSalary,
            department_id: response.department_id,
          };
          helper.addNewRole(newRole).then(() => {
            console.log(`Added "${newRole.role_title}" to the database`);
            showPromts();
          });
        });
      });
})
}


// create a new employee
function createNewEmployee(){
    prompt([
        {
            type: "input",
            name: "first_name",
            message: "Please enter first name of employee...",
        },
        {
            type: "input",
            name: "last_name",
            message: "Please enter last name of employee"
        },
    ]).then((response) => {
        let firstName = response.first_name;
        let lastName = response.last_name;

        helper.viewRoles().then(([result])=>{
            console.table(result);
            prompt({
                type:"input",
                name:"roles_id",
                message: "Assign a ROLE ID for this employee...",
                choices: result,
            }).then((role) => {
                helper.viewEmployees().then(([result]) => {
                    console.table(result);
                    prompt({
                        type: "input",
                        name: "manager_id",
                        message: "Assign a MANAGER ID for this employee...",
                        choise: result,
                    }).then((res) => {
                        let newEmployee = {
                            first_name: firstName,
                            last_name: lastName,
                            roles_id: role.roles_id,
                            manager_id: res.manager_id,
                        };
                        helper.addNewEmployee(newEmployee).then((result) => {
                            console.log(`Added " ${firstName} ${lastName} " to the database`);
                            showPromts();
                        });
                    });
                });
            });
        });

    });
}

// create a function to update employees role 
function updateEmployeeInfo(){
    helper.viewEmployees().then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
          name: `${first_name} ${last_name}`,
          value: id,
        }));
    
        prompt([
          {
            type: "list",
            name: "employeeId",
            message: "Which employee's role do you want to update?",
            choices: employeeChoices,
          },
        ]).then((res) => {
          let employeeId = res.employeeId;
          helper.viewRoles().then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
              name: title,
              value: id,
            }));
    
            prompt([
              {
                type: "list",
                name: "roleId",
                message: "What's the new role of this employee?",
                choices: roleChoices,
              },
            ])
              .then((res) => helper.updateEmployeeRole(employeeId, res.roleId))
              .then(() => console.log("Employee's role is updated"))
              .then(() => showPromts());
          });
        });
      });
    }


function quit(){
    exit();
}