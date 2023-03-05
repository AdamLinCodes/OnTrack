const router = require('express').Router();
let Goal = require('../models/goal.model');

router.route('/').get((req, res) => {
  Goal.find()
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;

  const newGoal = new Goal({userId, title});

  newGoal.save()
    .then(() => res.json('Goal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;