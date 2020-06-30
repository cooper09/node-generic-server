
var nodemailer = require('nodemailer');
//var express = require('express')

module.exports = function(req, res){

  var body = req.body;

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

console.log("let's see if this mail thing works: " , body )

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sonyaincmarketing@gmail.com',
    pass: 'wehrmacht'
  }
});

const msg = {
  to: 'cooperatkmba@gmail.com',
  from: 'test@example.com',
  subject: 'Sending this from my Node server',
  text: 'text - and easy to do anywhere, even with Node.js',
  html: '<strong>html - '+body.data+'</strong>',
};

transporter.sendMail(msg, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 var JSONObj = {
    "data" : body
    
 }

 res.json(body);


}//end module