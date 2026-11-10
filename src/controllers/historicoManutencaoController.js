const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.historico_manutencoes.findMany();
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
        const { descricao, valor, data, imovel_id } = req.body;

        await PRISMA.historico_manutencoes.create({
            data: {
                descricao,
                valor,
                data,
                imovel_id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const dados = req.body;
        const { id } = req.params;
        
        await PRISMA.historico_manutencoes.update({
            where: {
                id
            },
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro atualizado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const { id } = req.params;
        
        await PRISMA.historico_manutencoes.delete({
            where: {
                id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro deletado com sucesso."
        })
        
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