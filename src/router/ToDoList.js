var express = require('express')
var router = express.Router()

var Todo = require('../../models/todoList')

/* GET home page. */
router.get('/', async (req, res) => {
  var todo = await Todo.find()

  res.json(todo)
})

module.exports = router
