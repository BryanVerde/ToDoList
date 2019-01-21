var express = require('express')
var router = express.Router()

var Todo = require('../../models/todoList')

/* GET home page. */
router.get('/', async (req, res) => {
  console.log('it got in')
  Todo.find()
  var todo = await Todo.find()
  console.log(todo + 'nothing')
  res.json(todo)
})

router.post('/', async (req, res) => {
  var todo = new Todo(req.body)
  console.log(todo)
  await todo.save(function (err, result) {
    if (err) throw err
    if (result) {
      res.json(result)
    }
  })
  /*.then(item => {
    res.send("item saved to database")
    })
  .catch(err => {
    res.status(400).send("unable to save to database")
  })*/
  // console.log('2')
  // res.json({
  //  status: 'todo save'
  // })
})

module.exports = router
