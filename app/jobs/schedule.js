const schedule = require('node-schedule');
const { validationResult } = require('express-validator');

const emailJob = require('./email');

exports.postSchedule = (req, res, next) => {
  console.log("Schedule Data", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation Failed.')
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const sendTime = req.body.remindAt;
  const email = req.body.email;
  const origin = req.body.origin;
  const destination = req.body.destination;

  res.status(200).json({
    message: 'Email Scheduled',
    remindTime: sendTime,
    email: email,
  });

  schedule.scheduleJob(sendTime, () => {
    console.log("Sending Email at", sendTime, email)
    emailJob.setReminder(email, origin, destination);
  })
}
