
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['candidate', 'employer', 'admin'],
    default: 'candidate'
  },
  profile: {
    phone: String,
    location: String,
    bio: String,
    skills: [String],
    experience: String,
    education: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
