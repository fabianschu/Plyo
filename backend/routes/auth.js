var express = require('express');
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post('/signup', function(req, res) {

    console.log('bing');
    const { username, password } = req.body;
    console.log(username, password);
    if (!username) {
        return res.status(400).json({
            message: "Please provide a username"
        });
    }
    if (password.length < 7) {
        return res.status(400).json({
            message: "Password should have at least 7 characters "
        });
    }

    User.findOne({
        username: username
    })
        .then(found => {
        if (found) {
            return res.status(400).json({
                message: "Username is already taken"
            });
        }
        return bcrypt
            .genSalt()
            .then(salt => {
                console.log('created salt')
                return bcrypt.hash(password, salt);
            })
            .then(hash => {
                console.log('created user')
                return User.create({
                    username: username,
                    password: hash
                });
            })
            .then(newUser => {
                // passport login
                console.log('logging in')
                req.login(newUser, err => {
                    if (err) res.status(500).json(err);
                    else res.json(newUser);
                });
            })
            .catch(err => {
                res.status(500).json(err);
            });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) {
            return res.status(500).json({
                message: "Error while authenticating"
            });
        }
        if (!user) {
            // no user found with username or password didn't match
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }
      // passport req.login
      // creates the passport session
        req.login(user, err => {
            if (err) res.status(500).json(err);
            res.json(user);
        });
    })(req, res, next);
});

router.delete("/logout", (req, res) => {
    // passport logout function
    req.logout();
    res.json({
        message: "Logout was succesful"
    });
});

// router.get("/google", passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
//     res.redirect('/');
// });

router.get('/linkedin',
passport.authenticate('linkedin', { state: 'SOME STATE'  }),
function(req, res){});

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
}));



module.exports = router;