exports.login = (req, res, next) => {
    res.json({ msg: 'login' });
}

exports.logout = (req, res, next) => {
    res.json({ msg: 'logout' });
}