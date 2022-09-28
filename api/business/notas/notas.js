const { getAll } = require('../../db/notasDB')

const getAllNotas = () => {
  return getAll()
}

module.exports = {
  getAllNotas,
}
