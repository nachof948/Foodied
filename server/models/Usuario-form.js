const mongoose = require('mongoose');

const usuarioFormularioSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const UsuarioFormulario = mongoose.model('UsuarioFormulario', usuarioFormularioSchema) 
module.exports = UsuarioFormulario