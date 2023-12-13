const Compra = require('../models/Compra')

const compra = async(req,res)=>{
    try{
        const usuarioId = req.user._id;
        const eliminarCarrito = await Compra.findOneAndDelete({usuario: usuarioId});
        res.send(eliminarCarrito)
    }
    catch(err){
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = { 
    compra
}