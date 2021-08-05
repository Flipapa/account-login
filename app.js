const express = require('express')
const ephbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const PORT = 3000

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('nysmnyd777'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})