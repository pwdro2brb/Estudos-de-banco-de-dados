const express = require('express')
const app = express()
const User = require('./models/User')

app.use(express.json())

app.get("/", async(req, res) =>{
    res.send("Página inicial se estiver tudo certo")
})

app.post("/cadastrar", async (req, res) =>{
    console.log(req.body)

    await User.create(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso"
        })
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro, usuário não cadastrado com sucesso"
        })
    })

    //res.send("Página cadastrada :)")
})

app.listen(8080, () => {
    console.log("Servidor funcionando na porta 8080: http://localhost:8080 BOA!!")
})