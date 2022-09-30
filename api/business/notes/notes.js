const moment = require('moment')
const notesDBQueries = require('../../db/notesDB')

const getAllNotes = () => {
  return notesDBQueries.getAll()
}

const getNoteById = id => {
  return notesDBQueries.getNoteById(id)
}

const createNewNote = note => {
  const noteToInsert = {
    ...note,
    date: moment().format(),
    important: false,
    deleted: false,
  }
  return notesDBQueries.createNewNote(noteToInsert)
}

const changeNoteImportance = id => {
  return notesDBQueries.changeNoteImportance(id)
}

const changeDeleted = id => {
  return notesDBQueries.changeDeletedStateNote(id)
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNewNote,
  changeNoteImportance,
  changeDeleted,
}
