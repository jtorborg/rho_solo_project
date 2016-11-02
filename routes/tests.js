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


router.get('/', function(req, res) {
console.log("req.query", req.query);
    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        client.query('SELECT * FROM tests WHERE lowerage <= $1 AND upperage >= $1 AND primarylanguage = $2', [req.query.age, req.query.primarylanguage], function(err, result) {
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
