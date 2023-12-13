const Comidas = require('../models/Comidas')
const Compra = require('../models/Compra')

const producto = async (req, res)=>{
    const id = req.params.id
    try{
        const producto = await Comidas.findById(id)
        res.send(producto)
    } catch(err){
        console.log(err)
    }
}
module.exports = {producto}