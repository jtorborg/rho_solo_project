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

        client.query('INSERT INTO students (firstname, lastname, dob, doc, age, insurance, medical, appointment, appointmentcomplete, primarylanguage, notes, telephone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *', [req.body.firstname, req.body.lastname, req.body.dob, req.body.doc, req.body.age, req.body.insurance, req.body.medical, req.body.appointment, req.body.appointmentcomplete, req.body.primarylanguage, req.body.notes, req.body.telephone], function(err, result) {
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
            console.log("intake id at row 44", intakeId);
            client.query('INSERT INTO students_concerns (students_id, concerns_id) VALUES($1, $2) returning *', [intakeId, req.body.concerns_id], function(err, result) {
                done();
                if (err) {
                    console.log('err', err);
                    res.sendStatus(500);
                    return;
                } //end of if
                console.log('result rows', result.rows);
                //res.sendStatus(201); //!!!@@@send back to AJAX success
                //take result id student id concern id; on the client side you are aware of what the concerns and you reference them off the req body
                var intakeId = result.rows[0].students_id;
                console.log("intake id at row 56", intakeId);

                client.query('INSERT INTO availability (students_id, mondaymorning, mondayafternoon, mondayevening, tuesdaymorning, tuesdayafternoon, tuesdayevening, wednesdaymorning, wednesdayafternoon, wednesdayevening, thursdaymorning, thursdayafternoon, thursdayevening, fridaymorning, fridayafternoon, fridayevening) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) returning *', [intakeId, req.body.mondaymorning, req.body.mondayafternoon, req.body.mondayevening, req.body.tuesdaymorning, req.body.tuesdayafternoon, req.body.tuesdayevening, req.body.wednesdaymorning, req.body.wednesdayafternoon, req.body.wednesdayevening, req.body.thursdaymorning, req.body.thursdayafternoon, req.body.thursdayevening, req.body.fridaymorning, req.body.fridayafternoon, req.body.fridayevening], function(err, result) {
                    done();
                    if (err) {
                        console.log('err', err);
                        res.sendStatus(500);
                        return;
                    } //end of if
                    console.log('result rows at 62', result.rows);
                    res.sendStatus(201); //!!!@@@send back to AJAX success
                    //take result id student id concern id; on the client side you are aware of what the concerns and you reference them off the req body

            }); //end of client query


            //insert into availability calendar

        }); //end of client query


    }); //end pool connect

}); //end of router post

}); //end of router post


// router.post('/', function(req, res) {
//
//     pool.connect(function(err, client, done) {
//
//         if (err) {
//             console.log('Error connecting the DB', err);
//             res.sendStatus(500);
//             done();
//             return;
//
//         } //end of if statement
//         console.log("req body", req.body);
//
//
//     }); //end pool connect
//
// }); //end of router post




//~~~~~~~~~~~
module.exports = router;
