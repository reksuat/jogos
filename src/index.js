const estudioRouters = require("./routers/estudio")
const generoRouters = require("./routers/genero")
const jogoRouters = require("./routers/jogo")
const publicadoraRouters = require("./routers/publicadora")
const port = 5000
const express = require("express");

const app = express();

app.use(express.json())

app.use("/estudio", estudioRouters)
app.use("/genero", generoRouters)
app.use("/jogo", jogoRouters)
app.use("/publicadora", publicadoraRouters)

app.listen (port, ()=> {
    console.log("Server is running..");
})