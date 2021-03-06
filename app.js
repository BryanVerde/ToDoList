var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var ToDoList = require('./src/router/ToDoList')
var app = express()
var mongoose = require('mongoose')

// replace the uri string with your connection string.
var uri = 'mongodb+srv://Test:' + process.env.Mongo_Atlas_PW + '@cluster0-tvykb.mongodb.net/ToDoList?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

var uril = 'mongodb://Test:' + process.env.Mongo_Atlas_PW + '@cluster0-shard-00-01-tvykb.mongodb.net:27017/ToDoList?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

mongoose.connect(uri, { useNewUrlParser: true })
  .then(db => console.log('DB connected'))
  .catch(err => console.error(err))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': 'false'}))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/ToDoLists', express.static(path.join(__dirname, 'dist')))
app.use('/ToDoList', ToDoList)

app.engine('html', require('ejs').render)
app.set('view engine', 'html')

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
