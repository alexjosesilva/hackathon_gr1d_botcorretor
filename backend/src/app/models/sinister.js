const mongoose = require('mongoose');

const SinisterSchema = new mongoose.Schema({
  case: String,
  description: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Sinister', SinisterSchema);