var express = require('express')
var path = require('path')
//  var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var ToDoList = require('./src/router/ToDoList')
var app = express()
// var mongoose = require('mongoose')
// var dns = require('dns')
var MongoClient = require('mongodb').MongoClient

// replace the uri string with your connection string.
var uri = 'mongodb+srv://m001-student:m001-mongobd-basics@cluster0-tvykb.mongodb.net/ToDoList?retryWrites=true'
var client = new MongoClient(uri, {useNewUrlParser: true})

client.connect(err => {
  const collection = client.db('ToDoList').collection('todolist')
// perform actions on the collection object
//  client.close()
})
// client.connect(uri)
// client.connect(err => {
//  const collection = client.db('around_town_db').collection('events')
// perform actions on the collection object
//  client.close()
// })

// mongoose.connect(uri, { useNewUrlParser: true })
//  .then(bd => console.log('Connected to BD'))
//  .catch(err => console.error(err))

// client.connect(uri, function (err, client) {
//  if (err) {
//    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//  }
//  console.log('Connected...')
// })

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': 'false'}))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/ToDoLists', express.static(path.join(__dirname, 'dist')))
app.use('/ToDoList', ToDoList)

// app.engine('html', require('ejs').render)
// app.set('view engine', 'html')

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
