/* eslint-disable no-undef */
const { mockNotes, noteInsertMock } = require('../mocks/mocks')
const notesDB = require('../../db/notesDB')
const { query } = require('../../db/db')

jest.mock('../../db/db', () => ({
  query: jest.fn(),
}))

describe('Test notesDB', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('While call getAll method', () => {
    it('Should return all mocks', async () => {
      query.mockReturnValue(mockNotes)

      const result = await notesDB.getAll()

      expect(result).toBeDefined()
      expect(result.length).toEqual(1)
      expect(result).toStrictEqual(mockNotes)
    })
  })

  describe('While call getNoteById', () => {
    it('Should return one note', async () => {
      query.mockReturnValue(mockNotes[0])

      const result = await notesDB.getNoteById(1)

      expect(result).toBeDefined()
      expect(result).toStrictEqual(mockNotes[0])
    })
  })

  describe('While call createNewNote method', () => {
    it('Should create the note', async () => {
      query.mockReturnValue({})

      const finalNote = {
        ...noteInsertMock,
        date: '2022-01-01T00:00:00+01:00',
        important: false,
        deleted: false,
      }

      await notesDB.createNewNote(finalNote)

      expect(query).toHaveBeenCalledWith(
        'INSERT INTO notes (title, content, date, important, deleted) VALUES (?, ?, ?, ?, ?)',
        Object.values(finalNote).map(v => v),
        'run'
      )
    })
  })

  describe('While call changeNoteImportance method', () => {
    it('Should run correctly', async () => {
      const id = 1
      jest.spyOn(notesDB, 'getNoteById').mockReturnValue(mockNotes[0])
      query.mockReturnValueOnce({})

      await notesDB.changeNoteImportance(id)

      expect(query).toHaveBeenCalledWith(
        'UPDATE notes SET important = ? WHERE id = ?',
        [!mockNotes[0].important, id],
        'run'
      )
    })
  })

  describe('While call changeDeletedStateNote method', () => {
    it('Should run correctly', async () => {
      const id = 1
      jest.spyOn(notesDB, 'getNoteById').mockReturnValue(mockNotes[0])
      query.mockReturnValue({})

      await notesDB.changeDeletedStateNote(id)

      expect(query).toHaveBeenCalledWith(
        'UPDATE notes SET deleted = ? WHERE id = ?',
        [!mockNotes[0].deleted, id],
        'run'
      )
    })
  })
})
