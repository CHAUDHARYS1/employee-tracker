const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection.js');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// use apiRoutes
// app.get('/', (req, res) => {
//     res.send("Hello");
// });

//
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connected successfully
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    });
});