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
// app.use(cors())

/*
const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))
*/
const users = [{
  name: 'admin',
  password: 'L&J',
  favorites: [
    { nameRecipe: 'Chocolate Gateau' },
    { nameRecipe: 'Apple Frangipan Tart' }
  ]
}]

app.get('/', (req, res) => {
  console.log('ceci est un message de log')
  res.json({
    message: 'vous êtes à la racine de mon serveur'
  })
})

app.post('/api/register', (req, res) => {
  const user = users.find(u => u.name === req.body.name && u.password === req.body.password)
  if (!user) {
    users.push({
      name: req.body.name,
      password: req.body.password,
      favorites: []
    })
    res.status(200)
    res.json({
      message: 'New user created'
    })
    console.log('Users after sign up : ', users)
    console.log('User after sign up : ', req.body.name)
    return users
  } else {
    res.json({
      message: 'The user already exist, please enter a new name'
    })
  }
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log(req.session.userId)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.name === req.body.name && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.status(401)
      res.json({
        message: 'did not find any user with these credentials'
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: 'connected',
        userName: user.name
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
  console.log('Users after login : ', users)
  console.log('User after login : ', req.body.name)
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

app.put('/api/favorite', (req, res) => {
  const user = users.find(u => u.username === req.body.username)
  user.favorites.push({
    nameRecipe: req.body.nameRecipe
  })
  res.json({
    message: 'favorite added'
    // favorites: user.favorites
  })
  console.log('favorites : ', user.favorites)
})

app.get('/api/getFavorites', (req, res) => {
  const user = users.find(u => u.username === req.body.username)
  console.log('dedae', user.favorites)
  res.json({
    message: 'Getting favorites',
    favorites: user.favorites
  })
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
