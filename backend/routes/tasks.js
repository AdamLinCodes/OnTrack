const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const goalId = req.body.goalId;
  const taskName = req.body.taskName;
  const frequency = req.body.frequency;
  const duration = req.body.duration ?? null;
  const startTime = req.body.startTime ?? null;
  const endTime = req.body.endTime ?? null;

  const newTask = new Task({userId, goalId, taskName, frequency, duration, startTime, endTime});

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tasksbyuser/:userId').get((req, res) => {
  const userId = req.params.userId;

  Task.find({userId: userId})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;