const { query } = require('./db')

const getAll = () => {
  return query('SELECT * FROM notas')
}

module.exports = {
  getAll,
}
