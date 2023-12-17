const express = require('express')
const router = express.Router()
const cors = require('cors')
const {home} = require('../controllers/home')

router.get('/home', cors(), home)

module.exports = router