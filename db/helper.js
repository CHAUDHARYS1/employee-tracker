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
}

module.exports = new getEmployeeData(connection);