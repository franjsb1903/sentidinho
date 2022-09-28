const logger = require('../../logger/logger')
const { getAllNotas } = require('../../business/notas/notas')

const notasController = {
  async getAllNotas(req, res) {
    try {
      const notas = await getAllNotas()
      res.status(200).send({ notas })
    } catch (error) {
      const msg = `[Error] while trying to get all notes: ${error.message}`
      logger.error(msg)
      res.status(500).send({ message: 'Error while trying to get all notes' })
    }
  },
}

module.exports = notasController
