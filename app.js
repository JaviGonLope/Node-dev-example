const express = require('express')

const app = express()
const port = 3005

console.log(process.env.NODE_ENV)

app.get('/', (req,res, next)=>{
    res.send('Hello from /')
})

app.get('/ruta1', (req,res, next)=>{
    res.send('Hello from /rutaOne')
})

app.get('/ruta2', (req,res, next)=>{
    res.send('Hello from /ruta2')
})

app.listen(port, (req, res)=>{
    console.log('Servidor escuchando')
})