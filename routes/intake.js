const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('express').Router();
const pg = require('pg');

var config = {
    database: 'rho'
};

// initialize the database connection pool
var pool = new pg.Pool(config);


console.log('inside intake.js');

//~~~~~~~~~~~


router.post('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        console.log("req body", req.body);
        client.query('INSERT INTO students (firstname, lastname, dob, age, insurance, medical, appointment, primarylanguage) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning *', [req.body.firstname, req.body.lastname, req.body.dob, req.body.age, req.body.insurance, req.body.medical, req.body.appointment, req.body.primarylanguage], function(err, result) {
            done();
            if (err) {
                console.log('err', err);
                res.sendStatus(500);
                return;
            } //end of if

            res.send(result.rows); //!!!@@@send back to AJAX success
        }); //end of client query
    }); //end pool connect

}); //end of router post




//~~~~~~~~~~~
module.exports = router;
