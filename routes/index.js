const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('homepage');
});

router.get('/register', function (req, res) {
    res.render('register');
});

module.exports = router;