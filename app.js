const express = require('express')
const ephbs = require('express-handlebars')
const PORT = 3000

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const { email, password } = req.body
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})