import express from 'express'
import config from './utils/config'
import logger from './utils/logger'

const app = express()

app.use(logger.middleware)

app.get('/', (req, res) => {
  logger.log.info('Doing a call')
  res.send({ msg: 'Hello There!' })
})

app.listen(config.port)
