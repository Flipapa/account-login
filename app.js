const express = require('express')
const ephbs = require('express-handlebars')
const users = require('./models/seeds/users.json')
const PORT = 3000

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const { email, password } = req.body
  const loginUser = users.find(user => user.email === email)

  if (!loginUser) {
    noAccount = true
    res.render('login', { email, password, noAccount })
  } else {
    if (loginUser.password === password) {
      res.render('index', { loginUser })
    } else {
      res.render('login', { email, password, loginUser})
    }
  }
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})