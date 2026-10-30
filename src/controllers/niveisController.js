const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.niveis.findMany();
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function criar(req, res){
    try {
        const dados = req.body;
        const resposta = await PRISMA.niveis.create({
            data: dados
        });

        if(resposta){
            res.json({
                type: "success",
                description: "Registro criado com sucesso"
            })
        }else{
            res.json({
                type: "warning",
                description: "Falha ao criar registro"
            })
        }
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const {id} = req.params
        const dados = req.body;

        const resposta = await PRISMA.niveis.update({
            data: dados,
            where: {
                id
            }
        });

        if(resposta){
            res.json({
                type: "success",
                description: "Registro atualizado com sucesso"
            })
        }else{
            res.json({
                type: "warning",
                description: "Falha ao atualizar registro"
            })
        }
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const {id} = req.params

        const resposta = await PRISMA.niveis.delete({
            where: {
                id
            }
        });

        if(resposta){
            res.json({
                type: "success",
                description: "Registro deletado com sucesso"
            })
        }else{
            res.json({
                type: "warning",
                description: "Falha ao deletar registro"
            })
        }
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}


module.exports = {
    buscar,
    criar,
    editar,
    deletar
}