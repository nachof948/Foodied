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
        res.status(500).send('Error al registrarse')
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
    try {
        const { username, password } = req.body
        const encontrarUsuario = await UsuarioFormulario.findOne({ username })
        
        if (!encontrarUsuario) {
            return res.status(401).send('Este usuario no está registrado o el nombre de usuario es incorrecto')
        }
        
        const validarPassword = await bcrypt.compare(password, encontrarUsuario.password)
        
        if (!validarPassword) {
            return res.status(401).send('Contraseña incorrecta')
        }

        // Verificamos si el usuario tiene un carrito, si no lo tiene, lo creamos
       /*  let carritoUsuario = await Compra.findOne({ usuario: encontrarUsuario._id });
        if (!carritoUsuario) {
            carritoUsuario = await Compra.create({ usuario: encontrarUsuario._id, items: [] });
        } */
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
        console.log(username, token)
        
    } catch (err) {
        res.status(500).send('Error al loguearse')
    }
}

module.exports = {signup, obtenerUsuarios, login}