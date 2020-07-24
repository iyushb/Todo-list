const express = require('express');
const user = require('../models/user');
const passport = require('passport');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('homepage');
});

router.get('/register', function (req, res) {
    res.render('register');
});

router.post('/register', function (req, res) {
    user.register(new user({
        username: req.body.username
    }), req.body.password, function (err, user) {
        if (err) {
            console.log("----failed registering user---" + err);
            res.render('register');
        } else {
            passport.authenticate('local')(req, res, function () {
                res.send('successfully registered');
            })
        }
    })
})

module.exports = router;