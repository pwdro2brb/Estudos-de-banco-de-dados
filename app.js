const express = require('express')
const app = express()

app.get("/", async(req, res) =>{
    res.send("Página inicial se estiver tudo certo")
})

app.listen(8080, () => {
    console.log("Servidor funcionando na porta 8080: http://localhost:8080 BOA!!")
})