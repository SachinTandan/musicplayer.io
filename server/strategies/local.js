const LocalStrategy = require('passport-local');
const passport = require('passport');
const db = require('../database');

passport.use(new LocalStrategy(
async (username,password,done)=>{
    const result = await db.getUser(username, password);
    console.log(result);
}


))
