var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ListSchema = new Schema({
  Title: String,
  Description: String
})

module.exports = mongoose.model('todoList', ListSchema)
