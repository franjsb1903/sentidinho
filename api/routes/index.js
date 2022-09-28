const express = require('express')
const notasRouter = require('./notas/notas.routes')

const router = express.Router()

router.use('/notas', notasRouter)

module.exports = router
