const express = require("express");
const cors = require("cors");
const niveisRoutes = require("./src/routes/niveisRoutes");
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes");
const usuariosRoutes = require("./src/routes/usuariosRoutes");

const app = express();

app.use(cors()); //permite que requisições externas acessem as rotas
app.use(express.json()); //transforma o JSON do corpo da requisição em JS

app.get("/", (req, res) => {
    res.send("Olá mundo");
});

app.use("/niveis", niveisRoutes);
app.use("/imoveis-tipo", imoveisTipoRoutes);
app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
});