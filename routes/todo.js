const express = require('express');
const router = express.Router();
//require models
const todo = require('../models/todo');
const user = require('../models/user');

//create route
router.get('/', isLoggedIn, function (req, res) {
    user.findById(req.user._id, function (err, user) {
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
    user.findById(req.user._id, function (err, loggedUser) {
        if (err) {
            console.log("error finding logged user" + err);
        } else {
            loggedUser.todos.push(req.body.todo);
            loggedUser.save(function (err, user) {
                if (err) {
                    console.log("----error while saving todo to user----" + err);
                } else {
                    console.log(user);
                    res.redirect('/todo');
                }
            })
        }
    })
});

// delete route
router.delete('/:id', function (req, res) {
    user.findByIdAndUpdate({
        _id: req.user._id
    }, {
        $pull: {
            todos: {
                _id: req.params.id
            }
        }
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.redirect("/todo");
        }
    })
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}

module.exports = router;