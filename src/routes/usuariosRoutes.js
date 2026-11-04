const { buscar, criar, editar, deletar } = require("../controllers/usuariosController");
const { usuarioAutenticado } = require("../middlewares/usuarioMiddlewares");
const rotas = require("express").Router();

rotas.get("/", usuarioAutenticado, buscar);
rotas.post("/", criar);
rotas.put("/:id", editar);
rotas.delete("/:id", deletar);



module.exports = rotas;