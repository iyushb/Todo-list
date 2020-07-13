const express = require('express');
const router = express.Router();
//require models
const todo = require('../models/todo');
const {
    create
} = require('../models/todo');

router.get('/', function (req, res) {
    todo.find({}, function (err, foundTodo) {
        if (err) {
            console.log("----error finding todo list" + err);
        } else {
            res.render('todo', {
                todo: foundTodo
            });
        }
    });
});

router.post('/', function (req, res) {
    console.log(req.body.text);
    todo.create({
        list: req.body.text
    }, function (err, createdTodo) {
        if (err) {
            console.log("----error creating todo list----" + err);
        } else {
            res.redirect('/todo');
        }
    })
});

module.exports = router;