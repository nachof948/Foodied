const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, restarProductos, eliminarProductos, sumarProductos} = require('../controllers/carrito-compras');

router.get('/', mostrarCarrito)

router.post('/agregar', agregarProductos);

router.post('/sumar', sumarProductos)

router.post('/restar', restarProductos);

router.delete('/eliminar/:id', eliminarProductos);


module.exports = router;