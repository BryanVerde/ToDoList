var express = require('express')
var router = express.Router()

var Todo = require('../../models/todoList')

// GET home page. 
router.get('/', async (req, res) => {
  var todo = await Todo.find()
    .then(post => console.log(post))
    .catch(err => console.error(err))
  res.json({
    status: "found"
  })
})

router.post('/', async (req, res) => {
  var todo = new Todo(req.body)
  await todo.save()
    .then(post => console.log(post))
    .catch(err => console.error(err))
   res.json({
    status: 'todo saved'
   })
})

router.put('/:id', async (req, res) => {
  console.log({ _id: req.params.id })
  await Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(post => console.log(post))
    .catch(err => console.error(err))
  res.json({
    status: 'todo updated'
  })
})

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id, req.body)
    .then(post => console.log(post))
    .catch(err => console.error(err))
  res.json({
    status: 'todo Deleted'
  })
})

module.exports = router
