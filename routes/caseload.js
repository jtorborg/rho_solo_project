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



//~~~~~~~~~~~


router.get('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        client.query('SELECT * FROM students LEFT JOIN students_concerns ON students.id = students_concerns.students_id LEFT JOIN availability ON students.id = availability.students_id ORDER BY doc;', function(err, result) {
            done();
            if (err) {
                console.log('err', err);
                res.sendStatus(500);
                return;
            } //end of if

            res.send(result.rows); //!!!@@@send back to AJAX success
        }); //end of client query
    }); //end pool connect
  }); //end of router get
  //~~~~~~~~~~~
  module.exports = router;
