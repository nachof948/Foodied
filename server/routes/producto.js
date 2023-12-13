const express = require('express');
const router = express.Router()

const {producto} = require('../controllers/producto')

router.post('/producto/:id', producto)

module.exports = router