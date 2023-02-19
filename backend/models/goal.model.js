const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,   //will include a field for when it was made/updated
});

const Goals = mongoose.model('Goals', goalSchema);  //instantiate

module.exports = Goals;  //export so we can reference it in other files