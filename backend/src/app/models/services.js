const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  service: String,
  company: String,
  description: String,
  value: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }
});

module.exports = mongoose.model('Service', ServiceSchema);