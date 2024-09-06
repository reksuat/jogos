const model = require("../models/estudio")

const db = []

const index = () => db

const show = id => db.find(el => el.id == id)

function create(body) {
    const novo = model(body, parseInt(id))
    if (body) {
        db.push(novo)
        return 200
    }
    return 400
}

function update(body, id) {
    const novo = model(body, parseInt(id))
    const index = id => db.findIndex(el => el.id == id)

    if (novo && index !=-1) {
        db[index] = novo
        return 200
    }
    return 400
}

function destroy(id) {
    const index = db.findIndex(el => el.id == id)
    if (index !=-1) {
        db.splice(index, 1)
        return 200
    }
    return 400
}

module.exports = {
    show,
    index,
    create,
    update,
    destroy
}