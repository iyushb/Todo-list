const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');


var todoSchema = new mongoose.Schema({
    list: String
});

var Todo = mongoose.model("Todo", todoSchema);

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: [todoSchema]
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);
module.exports = User;