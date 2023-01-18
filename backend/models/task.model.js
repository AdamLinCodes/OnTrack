const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true,
  },
  duration: {// in minutes
    type: Number,
  },
  frequency: {
    type: String,
    required: true
  },
  startTime: {
    hour: {
      type: Number,
      min: [0, 'Hours must be within 0 - 23'],
      max: [23, 'Hours must be within 0 - 23']
    },
    minute: {
      type: Number,
      min: [0, 'Minutes must be within 0 - 59'],
      max: [59, 'Minutes must be within 0 - 59']
    }
  },
  endTime: {  
    hour: {
      type: Number,
      min: [1, 'Hours must be within 1 - 24'],
      max: [24, 'Hours must be within 1 - 24']
    },
    minutes: {
      type: Number,
      min: [0, 'Minutes must be within 0 - 59'],
      max: [59, 'Minutes must be within 0 - 59']
    }
  }
}, {
  timestamps: true,   //will include a field for when it was made/updated
});

const Task = mongoose.model('Tasks', taskSchema);  //instantiate

module.exports = Task;  //export so we can reference it in other files