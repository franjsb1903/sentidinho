const logger = require('../../logger/logger')
const {
  getAllNotes,
  getNoteById,
  createNewNote,
  changeNoteImportance,
  changeDeleted,
  deleteNote,
} = require('../../business/notes/notes')

const notesController = {
  async getAllNotes(req, res) {
    try {
      const notes = await getAllNotes()
      res.status(200).send({ notes })
    } catch (error) {
      const msg = `[Error] while trying to get all notes: ${error.message}`
      logger.error(msg)
      res.status(500).send({ message: 'Error while trying to get all notes' })
    }
  },
  async getNote(req, res) {
    const { id } = req.params
    try {
      const note = await getNoteById(id)
      res.status(200).send({ note })
    } catch (error) {
      const msg = `[Error] while trying to get note with id ${id}: ${error.message}`
      logger.error(msg)
      res
        .status(500)
        .send({ message: `Error while trying to get note with id ${id}` })
    }
  },
  async createNote(req, res) {
    try {
      const note = req.body
      console.log({ note })
      await createNewNote(note)
      res.status(200).send({ status: 'OK' })
    } catch (error) {
      const msg = `[Error] while trying to create a new note: ${error.message}`
      logger.error(msg)
      res
        .status(500)
        .send({ message: 'Error while trying to create a new note' })
    }
  },
  async changeImportanceNote(req, res) {
    const { id } = req.params
    try {
      await changeNoteImportance(id)
      res.status(200).send({ status: 'OK' })
    } catch (error) {
      const msg = `[Error] while trying to change importance of note ${id}: ${error.message}`
      logger.error(msg)
      res.status(500).send({
        message: `Error while trying to change importance of note ${id}`,
      })
    }
  },
  async changeDeletedStateNote(req, res) {
    const { id } = req.params
    try {
      await changeDeleted(id)
      res.status(200).send({ status: 'OK' })
    } catch (error) {
      const msg = `[Error] while trying to change deleted of note ${id}: ${error.message}`
      logger.error(msg)
      res.status(500).send({
        message: `Error while trying to change deleted of note ${id}`,
      })
    }
  },
  async deleteNoteForever(req, res) {
    const { id } = req.params
    try {
      await deleteNote(id)
      res.status(200).send({ status: 'OK' })
    } catch (error) {
      const msg = `[Error] while trying to delete note ${id}: ${error.message}`
      logger.error(msg)
      res.status(500).send({
        message: `Error while trying to delete note ${id}`,
      })
    }
  },
}

module.exports = notesController
