# Employee Tracker

## Description
A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Installation
To run the application, do the following(in order):  
  1) ```git clone``` the repo to your desired local folder
  2) ```open a``` with the code editor of your choice
  3) open terminal
  4) run the app by typing the following: ```node app.js``` 
  5) Once you run the application, you can fill out the questions when prompted.

## Usage
```AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT  I can organize and plan my business```

```
GIVEN a command-line application that accepts user input

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-up
The following animation shows an example of the application being used from the command line. 
![example](https://user-images.githubusercontent.com/39867916/132262602-690578fc-69fa-4bfa-b312-95856043eb00.gif)


## Database Design
The database schema as shown in the following image:

<img width="500" alt="database" src="https://user-images.githubusercontent.com/39867916/132262606-a114770c-523a-4c53-b348-009b8881ecf3.png">



