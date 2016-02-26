var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var knex = require('../db/knex');
/********************
WATSON DETAILS
// var details = { // This is Watson -Text to Speech details
//     "username": "df7a2f77-b70e-4f29-8b5f-560bf0db4677",
//     "password": "xrIrOf7FZOOp"
// };

var details = {
  "username": "fa725cd9-a470-432e-b282-fa39bbac5ce9",
  "password": "xfh4qqYyl7k0"
};
*********************/

function checkErr(res, err)
{
  var fail = false;
  if(err)
  {
    fail = true;
    res.send(err);
  }
  return fail;
}

/*****
DREAMS
*****/

router.get('/', function(req, res, next) {
  //Get all data for a single user's dreams.
  knex('dreams').where({user_id : req.user.id})
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      res.json(data);
    }
  });
});

router.get('/:dreamID', function(req, res, next) {
  //Get all data for a single dream.
  knex('dreams').where({user_id : req.user.id, id : req.params.dreamID})
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      res.json(data);
    }
  });
});

router.post('/', function(req, res, next) {
  //Build a new dream associated with a user.
  var date = new Date();
  knex('dreams').insert(
    {
      user_id: req.user.id,
      dateTime: date,
      content: req.body.content,
      mood: req.body.mood,
      rating: req.body.rating,
      duration: req.body.duration
    })
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      res.send('success');
    }
  });
});

router.delete('/:dreamID', function(req, res, next) {
  //Delete a dream associated with a user.
  knex('dreams').where({user_id : req.params.dreamID}).del()
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      res.send('success');
    }
  });
});

router.post('/:dreamID', function(req, res, next) {
  //Edit a dream associated with a user.
  knex('dreams').update(
    {
      user_id: req.user.id,
      content: req.body.content,
      mood: req.body.mood,
      rating: req.body.rating,
      duration: req.body.duration
    })
  .where({id : req.params.dreamID})
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      res.send('success');
    }
  });
});


module.exports = router;
