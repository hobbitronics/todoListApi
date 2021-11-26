const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const Task = require('./api/models/todoListModel') //created model loading here
const bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use((req, res) => {
//   res.status(404).send({ url: req.originalUrl + ' not found' })
// })
app.use(cors())

const routes = require('./api/routes/todoListRoutes') //importing route
routes(app) //register the route

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)
