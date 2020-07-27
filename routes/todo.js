const express = require('express');
const router = express.Router();
//require models
const todo = require('../models/todo');
const user = require('../models/user');

//create route
router.get('/', isLoggedIn, function (req, res) {
    user.findById(req.user._id).populate('todos').exec(function (err, user) {
        if (err) {
            console.log("----error finding user----" + err);
        } else {
            res.render('todo', {
                todo: user
            })
        }
    })
});

router.post('/', function (req, res) {
    todo.create(req.body.todo, function (err, createdTodo) {
        if (err) {
            console.log(err);
        } else {
            console.log(createdTodo);
        }
    })
    // user.findById(req.user._id, function (err, foundUser) {
    //     if (err) {
    //         console.log('---error finding user while creating todo---' + err);
    //     } else {
    //         todo.create(req.body.todo, function (err, createdTodo) {
    //             if (err) {
    //                 console.log("---error creating todo---" + err);
    //             } else {
    //                 console.log(createdTodo);
    //             }
    //         });
    // foundUser.todos.push({
    //     todos: req.body.text
    // });
    // foundUser.save();
    // }
    // })
});

//delete route
// router.delete('/:id', function (req, res) {
//     todo.findByIdAndRemove(req.params.id, function (err, deleted) {
//         if (err) {
//             console.log('----error deleting the todo----' + err)
//         } else {
//             res.redirect('/todo');
//         }
//     })
// });

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}

module.exports = router;