const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/checkuser').get( (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username, password: password}, (err, user) => {
    if (err) res.status(400).json('Sorry, unable to process the request');

    if (user == null) {
      res.status(200).json(false);
    }else {
      const userExists = (username === user.username) && (password === user.password);
      res.status(200).json(userExists);
    }
  });
});

module.exports = router;