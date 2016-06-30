var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {



  var Twitter = require('twitter');
 
  var client = new Twitter({
    consumer_key: 'CagA8KScoiOU55VHINpTxRfL6',
    consumer_secret: 'MJ9DZn0HZ8Oxvy8l3feAz3w9yLe8SczXGDaA9CF5oS7v8tlzld',
    access_token_key: '748257157699756032-jzyQnctXbNhi6R2ZgDJhlrekTtnBPoi',
    access_token_secret: 'yt4LeXR58lj7IgfEly62Hd74tg3X72kgWBsuVoMXh7jMD'
  });
  
  client.stream('statuses/filter', {track: 'trump'},  function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      console.log(error);
    });
  });


  res.render('index', { title: 'Express' });
});

module.exports = router;
