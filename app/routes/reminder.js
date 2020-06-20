const express = require('express');
const { body } = require('express-validator/check');

const router = express.Router();

const reminderJob = require('../jobs/schedule');

router.get(
  '/status',
  reminderJob.getStatus
);

router.post(
  '/setReminder',
  [
    body('remindAt').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
  ],
  reminderJob.scheduleEmail
)

module.exports = router;
