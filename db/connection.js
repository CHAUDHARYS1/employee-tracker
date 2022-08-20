const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your mysql username
    user: 'root',
    // Your mysql password
    password: 'Shital10',
    database: 'STAFF'
}, 
    console.log('Connected to the STAFF database.')
);


module.exports = db;