const express = require('express')
const notesRouter = require('./notes/notes.routes')

const router = express.Router()

router.use('/notes', notesRouter)

module.exports = router
