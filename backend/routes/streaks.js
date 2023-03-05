const router = require('express').Router();
let Streak = require('../models/streak.model');

router.route('/').get((req, res) => {
  Streak.find()
    .then(streaks => res.json(streaks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const taskId = req.body.taskId;
  const goalId = req.body.goalId;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate ?? null;

  const newStreak = new Task({userId, taskId, goalId, startDate, endDate});

  newStreak.save()
    .then(() => res.json('Streak added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;