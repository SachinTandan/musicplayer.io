const User = require('../models/user');

exports.getUser = (req, res, next) => {
    let username= req.body.username;
    let password= req.body.password;
    res.status(200).json(User.authenticate(username, password));
}