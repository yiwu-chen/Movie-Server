const commentModel = require('./comment-model');

const createComment = (comment) =>
    commentModel.create(comment);

const findCommentsByImdbId = (imdbID) =>
    commentModel.findOne({imdbID : imdbID});

const findAllComments = () =>
    commentModel.find();


module.exports = {
    createComment, findCommentsByImdbId, findAllComments
};
