const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  goalId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  taskName: {
    type: String,
    required: true,
  },
  duration: {// in minutes
    type: Number,
  },
  startTime: { // we'll only check getHours and getMinutes of the Date type
    type: Date,
  },
  endTime: { // we'll only check getHours and getMinutes of the Date type
    type: Date,
  }
}, {
  timestamps: true,   //will include a field for when it was made/updated
});

const Task = mongoose.model('Tasks', taskSchema);  //instantiate

module.exports = Task;  //export so we can reference it in other files