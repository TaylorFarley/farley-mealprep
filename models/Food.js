const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
  dow: String,
  id: Number,
  imageType: String,
  title: String,
  readyInMinutes: Number,
  servings: Number,
  sourceURL: String
})

module.exports = mongoose.model('Food', foodSchema)