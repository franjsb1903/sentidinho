const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const logger = require('./logger/logger')

const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, _, next) => {
  logger.info(req)
  next()
})

app.get('/status', async (_, res) => {
  res.status(200).send('I am alive!')
})

app.use('/sentidinho/v1/api', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`)
})
