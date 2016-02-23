var express = require('express');
var jsonWebToken = require('jsonwebtoken');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


var secret = 'ChangeThis'; // use dotenv.

function checkErr(res, err){
  var fail = false;
  if(err){
    fail = true;
    res.send(err);
  }
  return fail;
}
/*****
USERS
*****/

router.post('/signup', function(req, res, next) {
  // var newUser = {
  //   email: 'check@gmail.com',
  //   password: 'password',
  //   firstName: 'check',
  //   lastName: 'Hohn'
  // };
  var dreamData;
  // var dreamData = {
  //   dateTime: '2016-01-28 20:40:23-07',
  //   content: 'dream content check',
  //   mood: 1,
  //   rating: 1,
  //   duration: 1
  // };

  var user = req.body;
  hashPassword(user, registerUser);

  function registerUser(user){
    knex('users').insert({
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    })
    .then(function(data, err){
      if(!checkErr(res, err)){
        if(dreamData){
          knex('users').where({email: user.email, firstName: user.firstName, lastName: user.lastName})
          .then(function(dataUser, err){
            if(!checkErr(res, err)){
                registerDream(dataUser[0].id, res);
              }
          });
        }
      }
    });
  }
  function hashPassword(user, callback){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, function(err, hash){
        user.password = hash;
        callback(user);
      });
    });
  }
  function registerDream(userID, res){
    knex('dreams').insert({
      user_id: userID,
      dateTime: dreamData.dateTime,
      content: dreamData.content,
      mood: dreamData.mood,
      rating: dreamData.rating,
      duration: dreamData.duration
    })
    .then(function(data, err){
      if(!checkErr(res, err)){
        res.send('success');
      }
    });
  }
});

router.post('/signin', function(req, res, next) {
  //TODO ADD Hashing auth >>
  knex('users').first().where({
    email: req.body.email
  }).then(function(data, err){
    if(!checkErr(res, err)){
      bcrypt.compare(req.body.password, data.password, function(err, match){
        if(match){
          var user = data;
          delete user.password;
          var expires = {
            expiresInMinutes : 1600
          };
          var token = jsonWebToken.sign(user, secret, expires);
          res.json({token : token});
          // res.end('End');
        } else {
          res.send('failed to authenicate');
        }
      });
    }
  });
});




module.exports = router;
