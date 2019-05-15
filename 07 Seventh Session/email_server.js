var nodemailer = require('nodemailer');
var fs = require('fs');
var credentialsPath = './credentials.json';
var parsedCredentials = JSON.parse(fs.readFileSync(credentialsPath, 'UTF-8'));

var transporter = nodemailer.createTransport({
  pool: parsedCredentials.pool,
  host: parsedCredentials.host,
  port: parsedCredentials.port,
  secure: parsedCredentials.secure, 
  auth: {
    user : parsedCredentials.auth.user,
    pass : parsedCredentials.auth.pass
  }
});

var mailOptions = {
  from: parsedCredentials.mailOptions.from,
  to: parsedCredentials.mailOptions.to,
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