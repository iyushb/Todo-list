const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    list: String
});

module.exports = mongoose.model('todo', todoSchema);