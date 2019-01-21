var mongoose = require('mongoose')
var { Schema } = mongoose

var ListSchema = new Schema({
  Title: String,
  Description: String
})

// console.log(ListSchema)
module.exports = mongoose.model('todolist', ListSchema)
