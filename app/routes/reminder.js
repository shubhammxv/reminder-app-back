const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const reminderJob = require('../jobs/schedule');
const reminderController = require('../controllers/reminder');

router.get(
  '/status',
  reminderController.getStatus
);

router.get(
  '/getDuration',
  reminderController.getDuration
)

router.post(
  '/setReminder',
  [
    body('remindAt').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
  ],
  reminderJob.postSchedule
)

module.exports = router;
