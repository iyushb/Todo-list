const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: []
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);