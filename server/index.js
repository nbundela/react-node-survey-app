const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, () => {
    console.log("connected to db")
});

const app = express();

//cookie seesion declaration
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
//paasport use this cookie
app.use(passport.initialize());
app.use(passport.session())

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT)