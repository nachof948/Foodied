const Comidas = require('../models/Comidas')
const Compra = require('../models/Compra')

const home = async (req,res)=>{
    try{
        const compra = await Compra.find({})
        const comidas = await Comidas.find({})
        res.send({compra, comidas})
    }catch(error){
        res.status(500).send('No se encontraron las comidas')
    }
}
module.exports = {home}