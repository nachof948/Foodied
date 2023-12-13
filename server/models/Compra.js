const mongoose = require('mongoose')

const compraSchema = new mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UsuarioGoogle"
    },
    items:[{
        producto:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comidas"
        },
        
        imagen:{
            type: String,
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        },
            
        precio:{
            type: Number,
            required: true
        }
    }]
})


const Compra = mongoose.model('Compra', compraSchema)
module.exports = Compra