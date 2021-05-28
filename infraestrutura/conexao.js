const mysql = require('mysql'); // importanto o Mysql

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
}); // criando conexão com o servidor

module.exports = conexao; // exportando a conexão