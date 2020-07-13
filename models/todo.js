const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    list: String
});

module.exports = mongoose.model('todo', todoSchema);