const express = require('express');
const app = express();
const home = require('./routes/home')
const shop = require('./routes/shop')
const producto = require ('./routes/producto')
const registrarse = require('./routes/registrarse')
const carrito = require('./routes/carrito-compras')
const compra = require('./routes/comprar')
require('dotenv').config()
const connectDB = require('./DB/conexion')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
const GooglePassport = require('./config/config')



app.use(
    cors({
    origin: 'https://foodied-restaurante.vercel.app',
    credentials: true
    })
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://foodied-restaurante.vercel.app');
    next();
  });

//Configuración del formulario
app.use(express.json())
app.use(express.urlencoded({extended:false}))


/* UTILIZAR COOKIES */
app.use(cookieSession({
    keys:[process.env.KEY_COOKIE],
    maxAge:24 * 60 * 60 * 100 /* Un dia */
}))

/* INICIALIZACION DE PASSPORT */
app.use(passport.initialize())
app.use(passport.session({
    secret:'secreto',
    resave:false,
    saveUninitialized:true
}))


/* PUERTO */
const PUERTO = process.env.PUERTO

/* RUTA */
app.use('/',home)
app.use('/comidas',shop)
app.use('/', producto)
app.use('/auth', registrarse)
app.use('/compras', carrito)
app.use('/', compra)


/* CONEXION A LA BASE DE DATOS */
const iniciar = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PUERTO, ()=>{console.log(`Se inicio el servidor en el http://localhost:${PUERTO}/`)})
    }
    catch(error){
        console.log(error)
    }
}
iniciar()

