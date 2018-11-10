var db = require('../models');


exports.getTodosById = (req,res) => {
    db.Todo.findById(req.params.todoId)
    .then(todo => {
        res.json(todo)
    })
    .catch(err => {
        res.send(err)
    })
}

exports.getTodos = (req, res) => {
    db.Todo.find()
    .then(todos => {
        res.json(todos);
    })
    .catch(err => {
        res.send(err)
    })
}

exports.createTodos = (req, res) => {
    const todos = req.body.data;
    db.Todo.create(todos)
    .then(newTodo => {
        res.json(newTodo);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.updateTodos = (req, res) => {
    const todos = req.body.data;
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, todos, { new: true})
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.deleteTodos = (req, res) => {
    db.Todo.remove({_id: req.params.todoId})
    .then(() => {
        res.json({'message': 'success!'})
    })
    .catch(err => {
        res.send(err);
    })
}

module.exports = exports;