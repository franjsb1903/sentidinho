const { query } = require('./db')

const notesDBQueries = {
  getAll() {
    return query('SELECT * FROM notes ORDER BY date DESC')
  },
  getNoteById(id) {
    return query('select * from notes where id = ?', [id], 'get')
  },
  createNewNote(note) {
    return query(
      'INSERT INTO notes (title, content, date, important, deleted) VALUES (?, ?, ?, ?, ?)',
      Object.values(note).map(v => v),
      'run'
    )
  },
  async changeNoteImportance(id) {
    const note = await this.getNoteById(id)

    await query(
      'UPDATE notes SET important = ? WHERE id = ?',
      [!note.important, id],
      'run'
    )
  },
  async changeDeletedStateNote(id) {
    const note = await this.getNoteById(id)

    await query(
      'UPDATE notes SET deleted = ? WHERE id = ?',
      [!note.deleted, id],
      'run'
    )
  },
}

module.exports = notesDBQueries
