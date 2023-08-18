const express = require('express')
const app = express()
const mysql = require('mysql2');
const port = 3000
const bodyParser = require("body-parser")
const moment = require("moment")

app.use(bodyParser.urlencoded({extended : true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'aula_bd',
  password : 'root',
});

app.get('/', (req, res) => {
  res.send(moment().format("YYYY-MM-DD"))
})

app.get('/clientes', (req, res) => {
  connection.query(
    'select * from cliente',
    (err, results, fields) => {
      if(err) console.log(err)
      res.send(results)
    }
  );
})

app.post('/clientes', (req, res) => {
  var nome = req.body.nome
  var sobrenome = req.body.sobrenome
  var sql = 'INSERT INTO cliente' +
            '  (nome, sobrenome, data_cadastro)' +
            '  VALUES ("'+ nome + '","' + sobrenome +'", "'+ moment().format("YYYY-MM-DD") +'");'
  
  var sqlStringInt = `insert into cliente(nome, sobrenome, data_cadastro)` +
      `values("${nome}", "${sobrenome}", "${moment().format("YYYY-MM-DD")}")`            
  console.log("consulta sql", sql)
  connection.query(
    sqlStringInt, (err, results, fields) => {
      if(err) console.log(err)
      res.send(results)
    }
  );


  // res.send("funcionando")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})