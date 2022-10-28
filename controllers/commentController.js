exports.createComment = (req, res, next) => {
    res.json({ msg: 'Comment created' });
}

exports.getComments = (req, res, next) => {
    res.json({ msg: 'Comments' });
}

exports.getComment = (req, res, next) => {
    res.json({ msg: 'Comment' });
}

exports.updateComment = (req, res, next) => {
    res.json({ msg: 'Comment updated' });
}

exports.deleteComment = (req, res, next) => {
    res.json({ msg: 'Comment deleted' });
}