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
}

module.exports = new getEmployeeData(connection);