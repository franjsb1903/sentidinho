const express = require('express')
const controller = require('../../controllers/notas/notas.controller')

const router = express.Router()

router.get('/all', controller.getAllNotas)

module.exports = router
