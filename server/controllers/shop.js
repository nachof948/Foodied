const Comidas = require('../models/Comidas')
const Compra = require('../models/Compra')

/* Todas las comidas */
const obtenerTodasLasComidas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Carnes */
const obtenerTodasLasCarnes = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'carnes'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Ensaladas */
const obtenerTodasLasEnsaladas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'ensaladas'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Sushi */
const obtenerTodosLosSushi = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'sushi'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Pastas */
const obtenerTodasLasPastas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'pastas'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Pizzas */
const obtenerTodasLasPizzas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'pizzas'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Veganos */
const obtenerTodosLosVeganos = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({vegano:'true'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Pizzas */
const obtenerTodasLasSopas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'sopas'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

/* Hamburguesas */
const obtenerTodasLasHamburguesas = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'hamburguesas'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}
/* Dulces */
const obtenerTodosLosDulces = async(req, res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({categoria:'dulces'})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}

module.exports ={
    obtenerTodasLasComidas,
    obtenerTodasLasCarnes,
    obtenerTodasLasEnsaladas,
    obtenerTodosLosSushi,
    obtenerTodasLasPastas,
    obtenerTodasLasPizzas,
    obtenerTodosLosVeganos,
    obtenerTodasLasSopas,
    obtenerTodosLosDulces,
    obtenerTodasLasHamburguesas
}