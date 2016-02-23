'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function checkErr(res, err) {
  var fail = false;
  if(err) {
    fail = true;
    res.send(err);
  }
  return fail;
}

/*****
FILTERS
*****/

router.get('/all', function(req, res, next) {
  //Get all filters associated with a user including defaults.
  knex('filters').where({user_id : -1}).orWhere({user_id : req.user.id})
  .then(function(data, err) {
    if(!checkErr(res, err)) {
      res.json(data);
    }
  });
});

router.get('/specific', function(req, res, next) {
  //Get specific filters associated with a user.
  knex('filters').where({user_id : req.user.id})
  .then(function(data, err) {
    if(!checkErr(res, err)) {
      res.json(data);
    }
  });
});

router.post('/', function(req, res, next) {
  //Build new filter associated with a user.
  knex('filters').insert({
    user_id: req.user.id,
    phrase: req.body.content
  })
  .then(function(data, err) {
    if(!checkErr(res, err)) {
      res.send('success');
    }
  });
});

router.delete('/specific/:filterID', function(req, res, next) {
  //Delete a filter associated with a user.
  knex('filters').where({id : req.params.filterID}).del()
  .then(function(data, err) {
    if(!checkErr(res, err)) {
      res.send('success');
    }
  });
});


module.exports = router;
