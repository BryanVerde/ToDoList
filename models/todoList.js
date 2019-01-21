var client = require('mongoose')
var { Schema } = client

var ListSchema = new Schema({
  Title: String,
  Description: String
},{
  collection: 'todolist'
})

console.log('schema is this one:' + ListSchema)
module.exports = client.model('todolist', ListSchema)
