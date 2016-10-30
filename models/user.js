//const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
//const pg = require('pg');
const pool = require('../db/connection');

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

//find by username
function findByUsername(username) {
    return new Promise(function(resolve, reject) {
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                reject(err);
            }
            client.query('SELECT * FROM users WHERE username=$1', [username],
                function(err, result) {
                    done();
                    if (err) {
                        reject(err);
                    }
                    resolve(result.rows[0]);
                });
        });
    });
}
//find by id
function findById(id) {
    return new Promise(function(resolve, reject) {
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                reject(err);
            }
            client.query('SELECT * FROM users WHERE id=$1', [id],
                function(err, result) {
                    //done();
                    if (err) {
                        reject(err);
                    }
                    resolve(result.rows[0]);
                });
        });
    });
}
//create
function create(username, password) {
    return new Promise(function(resolve, reject) {//db stuff should be inside callback function
        bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
            if (err) {
                console.log('Error hashing password', err);
                return reject(err);
            }

    pool.connect(function(err, client, done) {
        if (err) {
            done();
            reject(err);
        }
        client.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hash],
            function(err, result) {
                done();
                if (err) {
                    reject(err);
                }
                resolve(result.rows[0]);
            });
    });
});
});
}
//compare password
//user object 1st parameter (object from db); password to compare 2nd
function comparePassword(user, passwordToCompare) {
    return new Promise(function(resolve) {
        //plain text password
        bcrypt.compare(passwordToCompare, user.password, function(err, match) {
            if (err) {
                console.log('Error comparing password', err);
                return resolve(false);
            }

            resolve(match);
        });
    });
};



module.exports = {
    findByUsername: findByUsername,
    findById: findById,
    create: create,
    comparePassword: comparePassword
};
