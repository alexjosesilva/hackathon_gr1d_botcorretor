const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: String,
  identity: String,
  description: String,
  value: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Client', ClientSchema);