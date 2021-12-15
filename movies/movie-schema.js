const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
  imdbID : String,
  Title: String,
  likedBy: [],
}, {collection: 'movies'});
module.exports = movieSchema;