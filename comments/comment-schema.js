const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
  imdbID : String,
  author: String,
  content: String,
}, {collection: 'comments'});
module.exports = movieSchema;