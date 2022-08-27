const { connect } = require('./connection');
const connection = require('./connection');

class getEmployeeData {
    constructor(connection){
        this.connection = connection;
    }

    // view all departments 
    viewDepartments(){
        return connection.promise().query("SELECT * FROM departments");
    }

    // view all roles
    viewRoles(){
        return connection.promise().query("SELECT * FROM roles");
    }

    // view all employees
    viewEmployees(){
        return connection.promise().query("SELECT * FROM employees");
    }

    // create a new department and add that to the database
    addNewDepartment(departments) {
        return connection
          .promise()
          .query("INSERT INTO departments SET ?;", departments)
          .then(() => {});
    }

    // create a new role and add that to the database
    addNewRole(roles){
        return connection.promise().query("INSERT INTO roles SET ?;", roles)
    }

      
    // create a new employee and add that to the database
    addNewEmployee(employee){
        return connection.promise().query("INSERT INTO employees SET ? ;", employee)
    }

    // update the existing employee role's in the database
    updateEmployeeRole(employeeId, roleId){
        return this.connection
            .promise()
            .query("UPDATE employees SET roles_id = ? WHERE id = ?", [
                roleId,
                employeeId,
            ]);
    }

}
//INSERT INTO departments (department_name) VALUES (?)

module.exports = new getEmployeeData(connection);