
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: String,
  location: String,
  size: {
    type: String,
    enum: ['1-10', '11-50', '51-200', '201-500', '500+']
  },
  industry: String,
  logo: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);
