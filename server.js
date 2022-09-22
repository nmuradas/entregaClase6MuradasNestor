const express =  require('express');
const app = express()
const Contenedor = require('./contenedor')

let productos = []
app.get('/productos', (req, res)=>{
    let instanciaContenedor = new Contenedor('productos.txt')
    productos = instanciaContenedor.getAll()
    console.log(productos)
    res.send(productos)
})


app.get('/productoRandom', (req, res)=>{
    let instanciaContenedor = new Contenedor('productos.txt')
    productos = instanciaContenedor.getAll()
    let random = Math.floor(Math.random()*productos.length);
    let randomValue = productos[random];
    console.log(randomValue)
    res.send(randomValue)
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, ()=> {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error=> console.log(`Error: ${error}`))