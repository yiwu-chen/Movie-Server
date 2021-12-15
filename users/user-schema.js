const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  favMovies: [],
}, {collection: 'users'});
module.exports = userSchema;