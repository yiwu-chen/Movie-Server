const commentDao = require('./comment-dao');


module.exports = (app) => {

    const createComment = (req, res) => {
        commentDao.createComment(req.body)
            .then(comment => {
                res.json(comment)
            });
    }

    const findCommentsByImdbId = (req, res) => {
        commentDao.findCommentsByImdbId(req.params.imdbID)
            .then(comments => res.json(comments));
    }

    const findAllComments = (req, res) =>
        commentDao.findAllComments()
            .then(comments => res.json(comments));

    app.post('/api/createComment', createComment);
    app.get('/api/comment/:imdbID', findCommentsByImdbId);
    app.get('/api/comments', findAllComments);
};