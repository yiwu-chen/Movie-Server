const movieDao = require('./movie-dao');

module.exports = (app) => {

    const createMovie = (req, res) => {
        movieDao.findMovieByImdbId(req.body)
            .then(movie => {
                if (movie) {
                    // res.sendStatus(404);
                    return;
                }
                movieDao.createMovie(req.body)
                    .then(movie => {
                        res.json(movie)
                    });
            })
    }

    const updateMovie = (req, res) => {
        movieDao.findMovieByImdbId(req.body)
            .then(movie => {
                if(movie.likedBy.indexOf(req.body.likedBy[0]) == -1) {
                    movie.likedBy.push(req.body.likedBy[0]);
                }
                movieDao.updateMovie(movie).then(status => res.send(status));
            });
    }


    const findMovieById = (req, res) => {
        movieDao.findMovieByImdbId2(req.params.imdbID)
            .then(movie => res.json(movie));
    }

    app.post('/api/createMovie', createMovie);
    app.get('/api/movies/:imdbID', findMovieById);
    app.put('/api/updateMovie', updateMovie);
}
;