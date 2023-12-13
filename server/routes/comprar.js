const express = require('express');
const router = express.Router();


const { compra } = require('../controllers/comprar');

router.post('/compra-realizada', compra)

module.exports = router;
