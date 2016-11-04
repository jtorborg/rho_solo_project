const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const Auth = require('../db/auth');


const GoogleStrategy = require('passport-google-oauth2').Strategy;


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
  User.findByUsername(username).then(function(user){
    if(!user) {
      // did not find a user, not a successful login
      return done(null, false);
    }

    // compare the password
    User.comparePassword(user, password).then(function(isMatch){
      // indicate whether or not it matched
      if (isMatch) {
        done(null, user);
      } else {
        done(null, false);
      }
    });

  }).catch(function(err){
    console.log('Error finding user', err);
    done(err);
  });
}


//~~~~~~~~~~

passport.use('google', new GoogleStrategy({
  // identify ourselves to Google and request Google user data
  clientID: Auth.googleAuth.clientId,
  clientSecret: Auth.googleAuth.clientSecret,
  callbackURL: Auth.googleAuth.callbackUrl,
}, function (token, refreshToken, profile, done) {
  // Google has responded
console.log('token', token);
  // does this user exist in our database already?
return done(null, {token: token, profile: profile.id})


  //
  // UserService.findUserByGoogleId(profile.id, function (err, user) {
  //     if (err) {
  //       return done(err);
  //     }
  //
  //     if (user) { // user does exist!
  //       return done(null, user);
  //     }
  //
  //     // user does not exist in our database, let's create one!
  //     UserService.createGoogleUser(profile.id, token, profile.displayName,
  //       profile.emails[0].value, /* we take first email address */
  //       function (err, user) {
  //         if (err) {
  //           return done(err);
  //         }
  //
  //         return done(null, user);
  //       });
  //   });

}));
