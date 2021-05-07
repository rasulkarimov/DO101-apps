require('dotenv').config();
var util = require('util');

// The following variables should be defined in the
// secret resource associated with the database.
var db_user = process.env["userRO5"];
var db_pass = process.env["cNv1ABwGcRg72xxk"];
var db_name = process.env["contactsdb"];

const DB_CONFIG = util.format('postgresql://%s:%s@%s:%s/%s', db_user, db_pass, process.env.POSTGRESQL_SERVICE_HOST, process.env.POSTGRESQL_SERVICE_PORT, db_name);

const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

module.exports = { pgconn }
