const express = require('express');
const router = express.Router();


const { compra } = require('../controllers/comprar');

router.delete('/compra-realizada', compra)

module.exports = router;
