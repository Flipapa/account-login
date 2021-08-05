const express = require('express')
const router = express.Router()
const users = require('../../models/seeds/users.json')

router.get('/login', (req, res) => {
  const { email, password } = req.signedCookies
  if (email && password) {
    const loginUser = users.find(user => (user.email === email) && (user.password === password))
    if (loginUser) return res.render('msg', { loginUser })
  }
  res.render('login')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const loginUser = users.find(user => user.email === email)

  if (!loginUser) {
    noAccount = true
    res.render('login', { email, password, noAccount })
  } else {
    if (loginUser.password === password) {
      res.cookie('email', email, {path: '/', signed: true, maxAge: 600000})
        .cookie('password', password, {path: '/', signed: true, maxAge: 600000})
      res.render('msg', { loginUser })
    } else {
      res.render('login', { email, password, loginUser })
    }
  }
})

router.post('/logout', (req, res) => {
  res.clearCookie('email', {path: '/'}).clearCookie('password', {path: '/'})
  res.redirect('/user/login')
})

module.exports = router