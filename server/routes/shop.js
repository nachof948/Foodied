const express = require('express');
const router = express.Router();

const {obtenerTodasLasComidas,
    obtenerTodasLasCarnes,
    obtenerTodasLasEnsaladas,
    obtenerTodosLosSushi,
    obtenerTodasLasPastas,
    obtenerTodasLasPizzas,
    obtenerTodosLosVeganos,
    obtenerTodasLasSopas,
    obtenerTodosLosDulces,
    obtenerTodasLasHamburguesas}= require('../controllers/shop')

/* /comidas/all */
router.get('/all', obtenerTodasLasComidas)
/* /comidas/carnes */
router.get('/carnes', obtenerTodasLasCarnes)
/* /comidas/ensaladas */
router.get('/ensaladas', obtenerTodasLasEnsaladas)
/* /comidas/sushi */
router.get('/sushi', obtenerTodosLosSushi)
/* /comidas/pastas */
router.get('/pastas', obtenerTodasLasPastas)
/* /comidas/pizzas */
router.get('/pizzas', obtenerTodasLasPizzas)
/* /comidas/veganos */
router.get('/veganos', obtenerTodosLosVeganos)
/* /comidas/sopas */
router.get('/sopas', obtenerTodasLasSopas)
/* /comidas/dulces */
router.get('/dulces', obtenerTodosLosDulces)
/* /comidas/hamburguesas */
router.get('/hamburguesas', obtenerTodasLasHamburguesas)

module.exports = router