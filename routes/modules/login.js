const express = require('express')
const router = express.Router()
const users = require('../../models/seeds/users.json')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  const loginUser = users.find(user => user.email === email)

  if (!loginUser) {
    noAccount = true
    res.render('login', { email, password, noAccount })
  } else {
    if (loginUser.password === password) {
      res.render('msg', { loginUser })
    } else {
      res.render('login', { email, password, loginUser })
    }
  }
})

module.exports = router