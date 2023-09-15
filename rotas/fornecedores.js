const express = require("express")
const connection = require("../config/database")

module.exports = (app) => {
    const rotas = express.Router()

    rotas.get("/fornecedores", (req, res) => {
        res.send("fornecedores")
    })
    app.use("/", rotas)
}