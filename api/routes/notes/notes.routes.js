const express = require('express')
const controller = require('../../controllers/notes/notes.controller')

const router = express.Router()

router.get('/all', controller.getAllNotes)
router.get('/note/:id', controller.getNote)
router.post('/create', controller.createNote)
router.put('/importance/:id', controller.changeImportanceNote)
router.delete('/delete/:id', controller.changeDeletedStateNote)
router.delete('/delete/forever/:id', controller.deleteNoteForever)

module.exports = router
