const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.DUMMY_EMAIL,
    pass: process.env.DUMMY_EMAIL_PASSWORD,
  }
})

exports.setReminder = (email, origin, destination) => {
  const mailOptions = {
    from: process.env.DUMMY_EMAIL,
    to: email,
    subject: 'Reminder to Leave!',
    html:`<div>
            <div>
              <p>Your <b>origin</b> place: <b>${origin}</b></p>
            </div>
            <div>
              <p>Your <b>destination</b> place: <b>${destination}</b></p>
            </div>
            <div>
              <p><b>It's time to leave now!</b></p>
            </div>
          </div>`
  }

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Error in sending email", error);
    } else {
      console.log("Email sent successfully");
    }
  })
}
