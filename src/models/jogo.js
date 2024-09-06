module.exports = model;
const generoControllers = require("../controllers/genero")
const estudioControllers = require("../controllers/estudio")
const publicadoraControllers = require("../controllers/publicadora")
let newID = 1
function model(body, id = newID++) {
    if (body.nome!= "" &&
        body.nome!= undefined &&
        generoControllers.show(body.generoId) &&
        estudioControllers.show(body.estudioId) &&
        publicadoraControllers.show(body.publicadoraId)
    ) {
        return {
            id,
            nome: body.nome,
            generoId: body.generoId,
            estudioId: body.estudioId,
            publicadoraId: body.publicadoraId,
            lancadoEm: body.lancadoEm,
            criadoEm: body.criadoEm,
            atualizadoEm: body.atualizadoEm
        }
        
    }
}