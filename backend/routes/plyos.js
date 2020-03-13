var express = require('express');
var router = express.Router();
const applications = require('../mock-data');

router.get('/', function(req, res) {
    res.send(applications);
});

router.post('/', function(req, res) {
    res.json('hi')
});

module.exports = router;