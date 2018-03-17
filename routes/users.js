var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Register
router.get('/register', function(req, res){
  res.render('register');
});

// Login
router.get('/login', function(req, res){
  res.render('login');
});

// Dashboard
router.get('/dashboard', function(req, res){
  res.render('dashboard');
});

// Marketplace
router.get('/marketplace', function(req, res){
  res.render('marketplace');
});


// Register User
router.post('/register', function(req, res){
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  console.log(email);
});


// Authenticate

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err,user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        return done(null,user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

/*
passport.serializeUser(function(user,done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user){
    done(err,user);
  });
});

//*** compilation
router.post('/login',
  passport.autheticate('local', {successRedirect:'/', failureRedirect:'/users/login',
  function(req, res){
    res.redirect('/');
  }));
*/

module.exports = router;
