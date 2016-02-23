var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

/*****
DREAMS
*****/

router.get('/dreams', function(req, res, next) {
  //Get all data for a single user dreams.
  res.end('End');
});

router.get('/dreams/:dreamID', function(req, res, next) {
  //Get all data for a single dream.
  res.end('End');
});

router.post('/dreams', function(req, res, next) {
  //Build a new dream associated with a user.
  res.end('End');
});

router.delete('/dreams/:dreamID', function(req, res, next) {
  //Delete a dream associated with a user.
  res.end('End');
});

router.post('/dreams/:dreamID', function(req, res, next) {
  //Edit a dream associated with a user.
  res.end('End');
});


module.exports = router;
