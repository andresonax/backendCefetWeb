const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aula_bd',
    password : 'root',
  });

  module.exports = connection