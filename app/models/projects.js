const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tools: {
    type: String,
    required: true
  },
  materials: {
    type: String,
    required: true
  },
  steps: [String],
  published: {
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Example', projectSchema)
