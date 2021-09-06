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

app.get('/', (req, res) => {
    console.log('Hello');
    res.send("Hello 1");
});




// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// funtion to start server on port 3001
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});