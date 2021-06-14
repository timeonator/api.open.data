const express = require('express')
const app = express()

const HOST='localhost'
const PORT=8000

app.listen(PORT, ()=>{
    console.log('listening on port ', PORT)
})

app.get('/', (req,resp) => {
    resp.send('open dataset: Hello')
})