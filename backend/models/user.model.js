const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,     //data type
    required: true,   //cant be empty
    unique: true,     //must be unique
    trim: true,       //gets rid of extra spaces
    minlength: 3      //must be at least 3 characters
  },
  password: {
    type: String,     //data type
    required: true,   //cant be empty
    trim: true,       //gets rid of extra spaces
    minlength: 3      //must be at least 3 characters
  },
  email: {
    type: String,     //data type
    required: true,   //cant be empty
    unique: true,     //must be unique
    trim: true,       //gets rid of extra spaces
    minlength: 4      //must be at least 3 characters
  },
  birthday: {
    type: Date,       //data type
    required: true,   //cant be empty
    min: new Date(1900, 0, 1), // cant be 123 yrs old
    max: new Date() // birthday must be in the past
  }
  
}, {
  timestamps: true,   //will include a field for when it was made/updated
});

const User = mongoose.model('User', userSchema);  //instantiate

module.exports = User;  //export so we can reference it in other files