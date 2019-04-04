var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Movie = new Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  },
  category: {
    type: String
  }
},{
    collection: 'movie'
});

module.exports = mongoose.model('movie', Movie);
