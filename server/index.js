const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
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
app.use(express.json())
//paasport use this cookie
app.use(passport.initialize());
app.use(passport.session())

//route
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// run only on server 
if (process.env.NODE_ENV === 'production') {
    //express serve prod asset - main.js and main.css
    app.use(express.static('client/build'))
    //express serve index.html if doesnt understand route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT)