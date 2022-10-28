exports.createPost = (req, res, next) => {
    res.json({ msg: 'post created' });
}

exports.getPosts = (req, res, next) => {
    res.json({ msg: 'posts' });
}

exports.getPost = (req, res, next) => {
    res.json({ msg: 'post' });
}

exports.updatePost = (req, res, next) => {
    res.json({ msg: 'post updated' });
}

exports.deletePost = (req, res, next) => {
    res.json({ msg: 'post deleted' });
}
