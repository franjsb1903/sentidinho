const winston = require('winston')

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: 'info',
      filename: 'log/info.log',
    }),
    new winston.transports.File({
      level: 'warn',
      filename: 'log/warn.log',
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'log/error.log',
    }),
    new winston.transports.File({
      level: 'debug',
      filename: 'log/debug.log',
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    winston.format.printf(info => {
      const message = info.message.originalUrl
        ? {
            timestamp: info.timestamp,
            ip: info.message.ip,
            originalUrl: info.message.originalUrl,
            method: info.message.method,
            level: info.level,
          }
        : {
            timestamp: info.timestamp,
            message: info.message,
            level: info.level,
          }
      return JSON.stringify(message)
    })
  ),
}

const logger = winston.createLogger(logConfiguration)

module.exports = logger
