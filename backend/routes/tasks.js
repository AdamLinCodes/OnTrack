const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const birthday = req.body.birthday;

  const userId = req.body.userId;
  // const goalId
  // const taskName
  // const duration
  // const startTime
  // const endTime

  const newTask = new Task({username, password, email, birthday});

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;