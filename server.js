const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shital10',
    database: 'companytracker'
}, 
    console.log('Connected to the employees database.')
);

app.get