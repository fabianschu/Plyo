var express = require('express');
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
            // .then(newUser => {
            //     // passport login
            //     req.login(newUser, err => {
            //         if (err) res.status(500).json(err);
            //         else res.json(newUser);
            //     });
            // })
            .catch(err => {
                res.status(500).json(err);
            });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


module.exports = router;