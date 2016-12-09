const pg = require('pg');


// var config = {
//
//   database: 'rho'
// };

const url = require('url');

const params = url.parse(process.env.DATABASE_URL);

const auth = params.auth ? params.auth.split(':') : [null, null];


config = {
      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: true //must be false to work on localhost
    }
//must go after config object
const pool = new pg.Pool(config);

module.exports = pool;
