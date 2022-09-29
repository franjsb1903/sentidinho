const sqlite = require('sqlite3')

const SQLite = sqlite.verbose()
const db = new SQLite.Database('./sentidinho.db')

const query = (command, params = [], method = 'all') => {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

db.serialize(async () => {
  await query(
    'CREATE TABLE IF NOT EXISTS notas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, date TEXT, important BOOLEAN, deleted BOOLEAN)',
    [],
    'run'
  )
})

module.exports = {
  db,
  query,
}
