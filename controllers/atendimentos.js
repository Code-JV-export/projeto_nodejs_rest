// este arquivo controla quais são as rotas
const Atendimento = require('../models/atendimentos');

module.exports = app => { // está exportanto está função. Ao ser chamado este module, deve-se passar o app
    app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos e está realizando um GET"));

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento);
        res.send("POST atendimentos");
    });
}


// é necessario instalar o "body-parser", pois ele conseguirar ler o que está sendo enviado, e traduzirar para enterdemos