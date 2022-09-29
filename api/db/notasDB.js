const { query } = require('./db')

const notasDBQueries = {
  getAll() {
    return query('SELECT * FROM notas')
  },
  getNotaById(id) {
    return query('SELECT * FROM notas WHERE id = ?', [id], 'run')
  },
  async changeNotaImportance(id) {
    const [nota] = await query(
      'SELECT important FROM notas WHERE id = ?',
      [id],
      'run'
    )

    await query(
      'UPDATE notas SET important = ? WHERE id = ?',
      [!nota.important, id],
      'run'
    )
  },
}

module.exports = {
  notasDBQueries,
}
