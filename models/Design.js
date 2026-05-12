const mongoose = require('mongoose');
 
const designSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  region: { type: String },
  patternType: { type: String },
  imageUrl: { type: String, required: true },
  userEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Design', designSchema);
 
