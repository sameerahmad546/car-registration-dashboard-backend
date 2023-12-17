const nodemailer = require('nodemailer');
const config = require('../config')

const transporter = nodemailer.createTransport({
  host: config.host,
  port: 2525,
  auth: {
    user: config.emailUsername,
    pass: config.emailPassword 
  }
});


const  sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'sameerah546@gmail.com', 
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
  });
};

module.exports = {sendEmail};
