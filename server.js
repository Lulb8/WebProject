/**
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
app.use(session({
  secret: 'blablabla', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

const users = [{
  username: 'admin',
  password: 'mypassword'
}]

app.get('/', (req, res) => {
  console.log('ceci est un message de log')
  res.json({
    message: 'vous êtes à la racine de mon serveur'
  })
})

app.get('/api/test', (req, res) => {
  console.log('ce console.log est appelé au bon moment')
  res.json([
    {
      title: 'truc',
      content: 'machin'
    }
  ])
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  console.log('req.body.username', req.body.username)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.status(401)
      res.json({
        message: 'did not find any user with these credentials'
      })
    } else {
      // connect the user
      req.session.userId = user.id // connect the user, and change the id
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send('Welcome back, ' + req.session.username + '!')
  } else {
    res.send('Please login to view this page!')
  }
  res.end()
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
