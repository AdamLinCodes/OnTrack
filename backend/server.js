const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected MongoDb");
})

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');
const streaksRouter = require('./routes/streaks');


app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/goals', goalsRouter);
app.use('/streaks', streaksRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});