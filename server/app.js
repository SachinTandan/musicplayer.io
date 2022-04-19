const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
const cors = require('cors');
// const local = require('./strategies/local')

//importing through routes 
const musicRouter = require('./routes/musicRoute');
const userRouter = require('./routes/userRoute');


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



// app.use(passport.initialize());
// app.use(passport.session())
app.use('/musics', musicRouter);
app.use(userRouter);

app.use((req, res, next) => {
    res.status(401).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(4000, () => console.log('listening to 4000...'));