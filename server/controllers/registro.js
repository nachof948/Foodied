const UsuarioFormulario = require ('../models/Usuario-form')
const Compra = require('../models/Compra')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = async (req, res) =>{
    try{
        const {email, username, password} = req.body
        const HashedPassword = await bcrypt.hash(password, 10)
        const nuevoUsuario = new UsuarioFormulario({email, username, password : HashedPassword})
        await nuevoUsuario.save()
        res.status(201).send('Te has registardo correctamente')
    } catch(err){
        console.log(err)
        res.status(500).send('Error al registrarse',err)
    }
}

const obtenerUsuarios = async (req, res) =>{
    try{
        const usuarios = await UsuarioFormulario.find({})
        res.status(200).send(usuarios)
    } catch(err){
        res.status(500).send('Usuario no registrado')
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const encontrarUsuario = await UsuarioFormulario.findOne({email})
        
        if (!encontrarUsuario) {
            return res.status(401).send('Este email no está registrado o el mismo es incorrecto')
        }
        
        const validarPassword = await bcrypt.compare(password, encontrarUsuario.password)
        
        if (!validarPassword) {
            return res.status(401).send('Contraseña incorrecta')
        }

        const userForToken={
            id: encontrarUsuario._id,
            username: encontrarUsuario.username
        }
        const token = jwt.sign(userForToken,process.env.SECRET_KEY)
        res.send({
            id:encontrarUsuario._id,
            username:encontrarUsuario.username,
            token
        })
        
    } catch (err) {
        res.status(500).send('Error al loguearse',err)
    }
}

module.exports = {signup, obtenerUsuarios, login}