const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

exports.setup = function () {
  // passport configuration

  // when someone asks for the 'local' strategy,
  // use the following information from the request
  // and the findAndComparePassword function to validate
  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, findAndComparePassword));

  // converts a user to a user id
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  // converts a user id to a user
  passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
      done(null, user);
    }).catch(function(err){
      done(err);
    });
  });

};

function findAndComparePassword(username, password, done){
  // look up the user by their username
  User.findOne({ username: username}).then(function(user){
    if(!user) {
      // did not find a user, not a successful login
      return done(null, false);
    }

    // compare the password
    if (password === user.password) {
      // matched, woohoo!
      console.log('Passwords matched! Success!');
      return done(null, user);
    }

    // didn't match, not a successful login
    done(null, false);

  }).catch(function(err){
    console.log('Error finding user', err);
    done(err);
  });


  // indicate whether or not it matched
}
