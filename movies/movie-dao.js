const movieModel = require('./movie-model');

const createMovie = (movie) =>
    movieModel.create(movie);

const updateMovie = (movie) => movieModel.updateOne(
    {_id: movie._id},
    {$set: movie}
);


const findMovieById = (movieId) =>
    movieModel.findById(movieId);

const findMovieByImdbId = ({imdbID}) =>
    movieModel.findOne({imdbID});

const findMovieByImdbId2 = (imdbID) =>
    movieModel.findOne({imdbID : imdbID});

module.exports = {
    createMovie, updateMovie, findMovieById, findMovieByImdbId,findMovieByImdbId2
};
