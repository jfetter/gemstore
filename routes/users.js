var express = require('express');
var router = express.Router();
var api_key = 'key-f5397dbf602dede601c373d0537c6624'; 
var domain = "sandbox058b8b954d5a4d23ba2e398f672c2478.mailgun.org";
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/mailgun', function(req, res){
	console.log(req.body);
	var message = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'jillian.fetter@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
	mailgun.messages().send(message, function (err, body) {
  	if(err){console.log(err); res.status(400).send(err)}
  	console.log(body, "body"); res.status(200).send(body);
	});
})



 

module.exports = router;

//curl -s --user 'api:key-f5397dbf602dede601c373d0537c6624' \
//     https://api.mailgun.net/v3/sandbox058b8b954d5a4d23ba2e398f672c2478.mailgun.org/messages \
//     -F from='Mailgun Sandbox <postmaster@sandbox058b8b954d5a4d23ba2e398f672c2478.mailgun.org>' \
//     -F to='Jillian <jfetster@hotmail.com>' \
//     -F subject='Hello Jillian' \
//     -F text='Congratulations Jillian, you just sent an email with Mailgun!  You are truly awesome!' 

// You can see a record of this email in your logs: https://mailgun.com/cp/log 

// You can send up to 300 emails/day from this sandbox server. Next, you should add your own domain so you can send 10,000 emails/month for free.'
