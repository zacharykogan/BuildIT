const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: [String],
  image: [String],
  tools: [String],
  materials: [String],
  steps: [String],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Example', projectSchema)
