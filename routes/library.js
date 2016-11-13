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

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        client.query('SELECT * FROM tests ORDER BY name', function(err, result) {
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
  var testid = req.params.id;
console.log("testid", testid);



  pool.connect(function(err, client, done){
    try {
      if (err) {
        console.log('Error connecting the DB', err);
        res.sendStatus(500);
        return;
      }
      if (req.body.libraryavail === true) {
         req.body.libraryavail = false;
       } else {
         req.body.libraryavail = true;
       }
      client.query('UPDATE tests SET available=$2, comments=$3 WHERE id=$1 RETURNING *;',
      [testid, req.body.libraryavail, req.body.librarycomments],

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
  });
});//end of put function


//~~~~~~~~~~~
module.exports = router;
