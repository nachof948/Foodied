const Compra = require('../models/Compra')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const compra = async(req,res)=>{
    const authorization = req.get('authorization'); //Recupera la cabecera
         let token = null
         if(authorization && authorization.toLowerCase().startsWith('bearer')){
             token = authorization.substring(7)
         }
         
         const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
         if(!token || !decodedToken.id){
             return res.status(401).json({error:'Token invalido'})
         } 
         const usuarioId = decodedToken.id;
    try{
         /* Tomamos el ID del usuario */
         
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