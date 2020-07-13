const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require routes
const todoRoutes = require('./routes/todo');
const indexRoutes = require('./routes/index');
//require method-override
const methodOverride = require('method-override');

//server public folder
app.use(express.static('public'));

//use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//database connection
mongoose.connect('mongodb://localhost/todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => console.log("----Database Connected----")).catch(err => console.log("DB connection error" + err.message));

//setting view engine as ejs
app.set("view engine", "ejs");

//use method-override
app.use(methodOverride("_method"));

//route setup
app.use(indexRoutes);
app.use('/todo', todoRoutes);


app.listen(3000, function () {
    console.log('----server started----');
})