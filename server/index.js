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

const GooglePassport = require('./config/config')




//Configuración del formulario
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://foodied-restaurante.vercel.app/"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });

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

