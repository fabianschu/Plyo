var express = require('express');
var router = express.Router();
const applications = require('../mock-data');
const Plyo = require("../models/Plyo");

router.get('/', function(req, res) {
    res.send(applications);
});

router.post('/', function(req, res) {
    console.log(req.body);
    const {company, city, position, applicationDate, channel, email, url} = req.body;
    Plyo.create({
        company, city, position, applicationDate, channel, email, url
    })
});

module.exports = router;