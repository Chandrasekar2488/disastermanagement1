// server/models/user.js
const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  emergencyNumbers: String,
  location: String,
  emergencyType: String,
});

const Emergency = mongoose.model('Emergency', emergencySchema);

module.exports = Emergency;
