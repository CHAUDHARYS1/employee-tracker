const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// show all empoloyees
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({
                error:err.message
            });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// show a single empoloyee
router.get('/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql,params, (err, row) => {
        if(err) {
            res.status(400).json({
                error:err.message
            });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// add an employee
// missing manager 
router.post('/employee', ({
    body
}, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'roles_id');
    if (errors) {
        res.status(400).json({
            error: errors
        });
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, roles_id)
    VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.roles_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// update employee roles based on employee selection
router.put('/employees/:id', (req, res) => {
    const errors = inputCheck(req.body, 'roles_id');

    if (errors) {
        res.status(400).json({
            error: errors
        });
        return;
    }
    const sql = `UPDATE employees SET roles_id = ? 
                 WHERE id = ?`;
    const params = [req.body.roles_id, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
            // check if a record was found
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

module.exports = router;