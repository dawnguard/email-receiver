var express = require("express");
var router = express.Router();
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var smtp = process.env.SMTP_URL;

var transporter = nodemailer.createTransport(smtp);

router.post("", function(req, res) {
  
  var name    = req.sanitize(req.body.message.name),
      email   = req.sanitize(req.body.message.email),
      subject = req.sanitize(req.body.message.subject),
      body    = req.sanitize(req.body.message.body);
      console.log("hulululuullulu");
      console.log(name);

  var mailOptions = {
    from: {
      name: name,
      address: email
    }, // sender address
    to: 'elusivefoxy@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: body + '\n\n....................................................................\n\n' + email
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log("Something went wrong while sending mail!");
      console.log(error);
      return res.render("../views/failure");
    }
    console.log('Message sent: ' + info.response);
    res.render("../views/success");
  });
});





module.exports = router;