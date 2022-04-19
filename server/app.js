const express = require('express');
// const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const local = require('./strategies/local')

//importing through routes 
const musicRouter = require('./routes/musicRoute');
const authRouter = require('./routes/auth');


const app = express();


// app.use(session({

//     secret:'some secret',
//     cookie:{maxAge:3000},
//     saveUninitialized:false,
//     store


// }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());



app.use(passport.initialize());
// app.use(passport.session())
app.use('/musics', musicRouter);
app.use('/auth',authRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(3000, () => console.log('listening to 3000...'));