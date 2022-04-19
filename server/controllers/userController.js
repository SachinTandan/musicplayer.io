const User = require('../models/user');

exports.getUser = (req, res, next) => {
    let username= req.body.username;
    let password= req.body.password;
    // console.log('boom');
    const check = User.authenticate(username, password);
    if(check.length==0){
        res.status(403);
    }
    res.json(check);
}