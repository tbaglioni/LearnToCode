var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trbaglioni@gmail.com',
    pass: 'PierinaRiboldi0801'
  }
});

var mailOptions = {
  from: 'trbaglioni@gmail.com',
  to: 'brianmanden@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});