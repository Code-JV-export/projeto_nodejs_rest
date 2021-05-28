// esse arquivo serve para subir o servidor no ar
// as configurações do express está no arquivo "customExpress.js"
const customExpress = require("./config/customExpress");
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabela'); // importando a classe tabela

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        
        Tabelas.init(conexao);
        const app = customExpress();

        app.listen(3000, () => console.log("servidor rodando na porta 3000"));
    }
});


// foi se intalado o consign, com o intuito de agrupar as rotas criadas em outros arquivos, e colocar tudo dentro do app


