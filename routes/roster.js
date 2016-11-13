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




  router.put('/:id', function(req, res) {
    console.log('req params', req.params);
    console.log('req body', req.body);
    var rosterid = req.params.id;
  console.log("roster", rosterid);
  pool.connect(function(err, client, done){
     try {
       if (err) {
         console.log('Error connecting the DB', err);
         res.sendStatus(500);
         return;
       }



       client.query('UPDATE students SET firstname=$2, lastname=$3, dob=$4, doc=$5, age=$6, insurance=$7, medical=$8, appointment=$9, appointmentcomplete=$10, primarylanguage=$11, notes=$12, nowait=$13 WHERE id=$1 RETURNING *',
       [rosterid, req.body.firstname, req.body.lastname, req.body.dob, req.body.doc, req.body.age, req.body.insurance, req.body.medical, req.body.appointment, req.body.appointmentcomplete, req.body.primarylanguage, req.body.notes, req.body.nowait],


       function(err, result) {
        if (err) {
           console.log('Error querying database', err);
           res.sendStatus(500);
         } else {
           console.log('result rows', result.rows);
           res.send(result.rows);//!!!@@@send back to client side
         }
       });
     } finally {
       done();
     }
   });//end of put function
 });//end of put function

 router.delete('/:id', function(req, res){
   var id = req.params.id;
 console.log("id", id);
   pool.connect(function(err, client, done){
     try {
       if (err) {
         console.log('Error connecting to DB', err);
         res.sendStatus(500);
         return;
       }

       client.query('DELETE FROM students WHERE id = $1', [id], function(err){
         if (err) {
           console.log('Error querying the DB', err);
           res.sendStatus(500);
           return;
         }

         res.sendStatus(204);////!!!@@@send back to AJAX success
       });
     } finally {
       done();
     }
   });
 });//end of delete function


 //~~~~~~~~~~~
 module.exports = router;
