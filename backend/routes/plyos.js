var express = require('express');
var router = express.Router();
const applications = require('../mock-data');
const Plyo = require("../models/Plyo");

router.get('/', function(req, res) {
    res.send(applications);
});

router.post('/', function(req, res) {
    Plyo.create({
        ...req.body
    })
});

module.exports = router;