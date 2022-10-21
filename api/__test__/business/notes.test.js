/* eslint-disable no-undef */
const { mockNotes, noteInsertMock } = require('../mocks/mocks')
const notesDB = require('../../db/notesDB')
const {
  getAllNotes,
  getNoteById,
  createNewNote,
  changeNoteImportance,
  changeDeleted,
  deleteNote,
} = require('../../business/notes/notes')

jest.mock('../../db/notesDB', () => ({
  getAll: jest.fn(),
  getNoteById: jest.fn(),
  createNewNote: jest.fn(),
  changeNoteImportance: jest.fn(),
  changeDeletedStateNote: jest.fn(),
  deleteNote: jest.fn(),
}))
Date.now = jest.fn(() => new Date('1-1-2022'))

describe('Test notes business', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('While call getAllNotes method', () => {
    it('Should return all the notes', async () => {
      notesDB.getAll.mockReturnValue(mockNotes)

      const result = await getAllNotes()

      expect(result).toBeDefined()
      expect(result.length).toEqual(1)
      expect(result).toStrictEqual(mockNotes)
    })
  })

  describe('While call getNoteById method', () => {
    it('Should return one note', async () => {
      notesDB.getNoteById.mockReturnValue(mockNotes[0])

      const result = await getNoteById(1)

      expect(result).toBeDefined()
      expect(result).toStrictEqual(mockNotes[0])
    })
  })

  describe('While call createNewNote method', () => {
    it('Should create the note', async () => {
      await createNewNote(noteInsertMock)

      const finalNote = {
        ...noteInsertMock,
        date: '2022-01-01T00:00:00+01:00',
        important: false,
        deleted: false,
      }

      expect(notesDB.createNewNote).toHaveBeenCalledWith(finalNote)
    })
  })

  describe('While call changeNoteImportance method', () => {
    it('Should run correctly', async () => {
      const id = 1

      await changeNoteImportance(id)

      expect(notesDB.changeNoteImportance).toHaveBeenCalledWith(id)
    })
  })

  describe('While call changeDeleted method', () => {
    it('Should run correctly', async () => {
      const id = 1
      await changeDeleted(id)

      expect(notesDB.changeDeletedStateNote).toHaveBeenCalledWith(id)
    })
  })

  describe('While call deleteNote method', () => {
    it('Should run correctly', async () => {
      const id = 1

      await deleteNote(id)

      expect(notesDB.deleteNote).toHaveBeenCalledWith(id)
    })
  })
})
