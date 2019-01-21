var express = require('express')
var router = express.Router()

var Todo = require('../../models/todoList')

// GET home page. 
router.get('/', async (req, res) => {
  var todo = await Todo.find()
  res.json(todo)
})

/*router.get('/', function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err)
    res.json(todos)
  })
})*/

router.post('/', async (req, res) => {
  var todo = new Todo(req.body)
   res.json({
    status: 'todo save'
   })
})

module.exports = router
