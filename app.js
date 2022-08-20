const figlet = require('figlet');
const inquirer = require('inquirer');
const db = require('./db/connection');
// main title
figlet('Employee Management', function(err, data) {
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

const prompt = () => {
    return inquirer.prompt([{
        type: 'rawlist',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an employee role', 
            'Exit'
        ],
        loop: false
    }]);
}

const beginApp = () => {
    inquirer.prompt(prompt).then((selections) => {

        
    });

}

prompt();