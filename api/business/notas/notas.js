const notasDBQueries = require('../../db/notasDB')

const getAllNotas = () => {
  return notasDBQueries.getAll()
}

module.exports = {
  getAllNotas,
}
