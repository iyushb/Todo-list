const express = require('express');
const app = express();
const mongoose = require('mongoose');
//require routes
const todoRoutes = require('./routes/todo');
const indexRoutes = require('./routes/index');

//database connection
mongoose.connect('mongodb://localhost/todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("----Database Connected----")).catch(err => console.log("DB connection error" + err.message));

//setting view engine as ejs
app.set("view engine", "ejs");

app.use(indexRoutes);
app.use('/todo', todoRoutes);


app.listen(3000, function () {
    console.log('----server started----');
})