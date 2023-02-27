const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const streakSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,   //cant be empty
  },
  taskId: {
    type: Schema.Types.ObjectId,
    required: true,   //cant be empty
  },
  goalId: {
    type: Schema.Types.ObjectId,
    required: true,   //cant be empty
  },
  startDate: {
    type: Date,       //data type
    required: true,   //cant be empty
    min: new Date(1900, 0, 1), // cant be 123 yrs old
  },
  endDate: {
    type: Date,       //data type
    min: new Date(1900, 0, 1), // cant be 123 yrs old
  },
}, {
  timestamps: true,   //will include a field for when it was made/updated
});

const Streaks = mongoose.model('Streaks', streakSchema);  //instantiate

module.exports = Streaks;  //export so we can reference it in other files