const DUMMY_EMAIL = 'YOUR_EMAIL';
const DUMMY_EMAIL_PASSWORD = 'YOUR_PASSWORD';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: DUMMY_EMAIL,
    pass: DUMMY_EMAIL_PASSWORD,
  }
})

exports.reminderEmail = (email, origin, destination) => {
  const mailOptions = {
    from: DUMMY_EMAIL,
    to: email,
    subject: 'Reminder to Leave!',
    text: `You should leave now from ${origin} to reach ${destination} in time!`,
  }

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Error in sending email", error);
    } else {
      console.log("Email sent successfully");
    }
  })
}
