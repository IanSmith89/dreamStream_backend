var express = require('express');
var jsonWebToken = require('jsonwebtoken');
var router = express.Router();
var knex = require('../db/knex');

var secret = 'ChangeThis'; // use dotenv.


/*****
USERS
*****/

router.post('/signup', function(req, res, next) {
  //Build new user.
  // if -->
  /*
  Dream:{
  content: DATA,
  mood: mood,
  durration: durration,
  rating: rating
  dateTime: date,
 }
  */
  res.end('End');
});

router.post('/signin', function(req, res, next) {
  //TODO ADD Hashing auth >>

  var user = {
    id: 1, // >>> Change to USER ID IN Database.
    email: 'bobbymcbobberson@bobmail.com' // >>> Change to EMAIL ID IN Database if AUTH.
  };
  var expires = {
    expiresInMinutes : 1600
  };
  var token = jsonWebToken.sign(user, secret, expires)
  //Auth a user. ->> assign JWT.
  res.json({token : token});
  res.end('End');
});




module.exports = router;
