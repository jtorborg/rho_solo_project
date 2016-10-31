const express = require('express');
const bodyParser = require('body-parser');
//const connection = require('./db/connection');
const path = require('path');
const login = require('./routes/login');
const register = require('./routes/register');


const calendar = require('./routes/calendar');
const intake = require('./routes/intake');
const library = require('./routes/library');
const tests = require('./routes/tests');


const auth = require('./auth/setup');
const passport = require('passport');
const session = require('express-session');

//const user = require('./models/user');

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

// connection.connect();

const app = express();


app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', login);
app.use('/register', register);
app.use('/calendar', calendar);
app.use('/intake', intake);
app.use('/library', library);
app.use('/tests', tests);


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

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
