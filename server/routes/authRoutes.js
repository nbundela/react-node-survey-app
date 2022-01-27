const passport = require('passport');

module.exports = (app) => {
//route handler for auth req
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);
//route handler for auth res
app.get('/auth/google/callback', 
passport.authenticate('google'),
(req, res) => {
    res.redirect('/surveys')
}
);

//logout
app.get('/api/logout', (req, res) => {
    req.logout();
  //  res.send(req.user)
    res.redirect('/')
})

//user
app.get('/api/current_user', (req, res) => {
    res.send(req.user)
});
}

