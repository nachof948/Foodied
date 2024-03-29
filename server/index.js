const express = require('express');
const cors = require('cors')
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

const GooglePassport = require('./config/config')


app.use(
    cors({
    origin: ['https://foodied-restaurante.vercel.app','http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
    })
);





//Configuración del formulario
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.send('Bienvenido')
})


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

