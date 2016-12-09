require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const login = require('./routes/login');
const logout = require('./routes/logout');

const register = require('./routes/register');


const calendar = require('./routes/calendar');
const intake = require('./routes/intake');
const library = require('./routes/library');
const tests = require('./routes/tests');
const roster = require('./routes/roster');
const caseload = require('./routes/caseload');





const auth = require('./auth/setup');
const passport = require('passport');
const session = require('express-session');


auth.setup();


const sessionConfig = {
  secret: 'super secret key goes here', // TODO this should be read from ENV
  key: 'user',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60 * 1000,
    secure: false
  }
};


const app = express();


app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', login);
app.use('/login', logout);

app.use('/register', register);
app.use('/calendar', calendar);
app.use('/intake', intake);
app.use('/library', library);
app.use('/tests', tests);
app.use('/roster', roster);
app.use('/caseload', caseload);




app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// everything beyond this point must be authenticated
app.use(ensureAuthenticated);

app.get('/supersecret', function(req, res){
  res.send('the password is banana');
});

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}



// server connection
const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  console.log('Listening on port', port);
});
