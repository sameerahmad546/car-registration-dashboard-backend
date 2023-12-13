const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a445313aad137b',
    pass: 'c77dfd1224fd30' 
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
