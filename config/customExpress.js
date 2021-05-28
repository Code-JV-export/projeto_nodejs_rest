// Estamos configurando o APP(servidor), antes de inicialo, que irá ser no "index.js"
// pode configurar qualquer coisa dentro do express
// exclusive, 
const express = require("express"); // importando o express
const consign = require("consign"); // importando o consign
const bodyParser = require("body-parser"); // importando o body-parser para traduzir o corpo da requisições enviada para o servidor

module.exports = () => {
    const app = express(); // dando valor ao app

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
    
    consign().include("controllers").into(app); // está passando o app para todos os arquivos (modulo) da pasta controllers

    return app;
}
