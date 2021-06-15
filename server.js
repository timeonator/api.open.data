const express = require('express')
const app = express()

const HOST='localhost'
const PORT=8000

DATA=  [
    {
        "id" : "1", 
        "name" : "datapackage-test-1",
        "title" : "Datapackage Test One",
        "licenses" : [],
        "sources" : [],
        "resources": [],
    }
]
function getDataPackage(name) {
    return(DATA[0]);
}

app.listen(PORT, ()=>{
    console.log('listening on port ', PORT)
})

app.get('/', (req,resp) => {
    resp.send('open dataset: Hello')
})

app.get('/datapackage/:name',(req,res) => {
    console.log(req)
    var dp = getDataPackage(req.params.name)
    res.json(dp)
})