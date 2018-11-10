var mongoose = require('mongoose');
mongoose.set('debug', true); 
mongoose.connect('mongodb://localhost/TodoList', { useNewUrlParser: true });


mongoose.Promise = Promise;

module.exports.Todo = require('./todo');