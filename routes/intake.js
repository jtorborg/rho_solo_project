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
            console.log('result rows line 42', result.rows);
            // res.send(result.rows); //!!!@@@send back to AJAX success
            //take result id student id concern id; on the client side you are aware of what the concerns and you reference them off the req body
            var intakeId = result.rows[0].id;
            client.query('INSERT INTO students_concerns (students_id, concerns_id) VALUES($1, $2) returning *', [intakeId, req.body.concerns_id], function(err, result) {
                done();
                if (err) {
                    console.log('err', err);
                    res.sendStatus(500);
                    return;
                } //end of if
                console.log('result rows', result.rows);
                res.sendStatus(201); //!!!@@@send back to AJAX success
                //take result id student id concern id; on the client side you are aware of what the concerns and you reference them off the req body
                //var intakeId = result.rows.id;
            }); //end of client query

        }); //end of client query
    }); //end pool connect

}); //end of router post

router.post('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        console.log("req body", req.body);


    }); //end pool connect

}); //end of router post

router.get('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        client.query('SELECT * FROM students ORDER BY id', function(err, result) {
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
