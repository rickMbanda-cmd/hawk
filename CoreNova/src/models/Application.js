
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'interview', 'rejected', 'accepted'],
    default: 'pending'
  },
  coverLetter: String,
  resume: String,
  notes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
