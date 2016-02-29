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
//***** >> OLD personaility
"username": "fa725cd9-a470-432e-b282-fa39bbac5ce9",
"password": "xfh4qqYyl7k0"
*********************/
var details = {
  "username": "72d72eeb-5160-40dc-af32-f7f481d679a4",
  "password": "OgC54ZMt8D7W"
};


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
ANALYZE
*****/

router.get('/', function(req, res, next) {
  //Get all data for a single user's dreams.
  knex('dreams').where({user_id : req.user.id})
  .then(function(data, err) {
    if(!checkErr(res, err))
    {
      var str = '';
      for(var i=0; i < data.length; i++)
      {
        str = str + ' ' + data[i].content;
      }
      var strArr = str.split(' ');
      for(var j=0; j < strArr.length; j++)
      {
        if( strArr[j] === '')
        {
          strArr.splice(j,1);
          j--;
        }
      }
      console.log(strArr);
      if(strArr.length > 100)
      {

        var personality_insights = watson.personality_insights({
        username: details.username,
        password: details.password,
        url: "https://gateway.watsonplatform.net/personality-insights/api",
        version: 'v2'
        });

        //var my_profile = "This is a string about my dog. My dog is the greatest cat ever! I like cats. Am I crazy? I think that is likely, but what do other people think? What do you think Watson? Am I crazy? First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret. First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret. First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret.";
        var my_profile = str;
        personality_insights.profile({ text: my_profile },
        function (err, profile) {
          if(!checkErr(res, err))
          {
            console.log(profile.tree.children[0].children[0].children);
            res.json(profile.tree.children[0].children[0].children);
          }
        });
      }
      //res.json(data);
    }
  });
});




module.exports = router;
