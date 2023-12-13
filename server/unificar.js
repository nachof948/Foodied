/* Pullear el json hacia la base de datos */
require('dotenv').config()

/* Conexion a la base de datos */
const connectDB =require('./DB/conexion')

/* Conexion al modelo */
const Comidas = require('./models/Comidas')

/* Lista de los Comidas JSON */
const jsonComidas = require('./comidas.json')

/* Conexion a la base de datos para enviar el JSON */
const iniciar= async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Comidas.deleteMany()
        await Comidas.create(jsonComidas)
        console.log('Los cambios se efectuaron de forma correcta!')
    } catch(error){
        console.log(error)
    }
}
iniciar()