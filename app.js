const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require routes
const todoRoutes = require('./routes/todo');
const indexRoutes = require('./routes/index');
//require method-override
const methodOverride = require('method-override');
//require authentication dependencies
const User = require('./models/user.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

//server public folder
app.use(express.static('public'));

//use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//database connection
mongoose.connect('mongodb+srv://<username>:<password>@hsuyaa@cluster0.03pcw.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => console.log("----Database Connected----")).catch(err => console.log("DB connection error" + err.message));

//setting up passport and express session
app.use(require('express-session')({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//setting view engine as ejs
app.set("view engine", "ejs");

//use method-override
app.use(methodOverride("_method"));

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})
//route setup
app.use(indexRoutes);
app.use('/todo', todoRoutes);


app.listen(process.env.PORT || 5000, '0.0.0.0', function () {
    console.log('----server started----');
});
