var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/*****
FILTERS
*****/

router.get('/filters/all', function(req, res, next) {
  //Get all filters associated with a user including defaults.
  res.end('End');
});

router.get('/filters/specific', function(req, res, next) {
  //Get specific filters associated with a user.
  res.end('End');
});

router.post('/filters', function(req, res, next) {
  //Build new filter associated with a user.
  res.end('End');
});

router.delete('/filters/specific/:filterID', function(req, res, next) {
  //Delete a filter associated with a user.
  res.end('End');
});


module.exports = router;
