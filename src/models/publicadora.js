module.exports = model;
let newID = 1
function model(body, id = newID++) {
    if (body.nome!= "" &&
        body.nome!= undefined
    ) {
        return {
            id,
            nome: body.nome,
            criadoEm: body.criadoEm,
            atualizadoEm: body.atualizadoEm
        }
        
    }
}