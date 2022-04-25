const express = require('express');
const cors = require('cors');

//importing through routes 
const musicRouter = require('./routes/musicRoute');
const userRouter = require('./routes/userRoute');


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());



// app.use(passport.initialize());
// app.use(passport.session())
app.use('/musics', musicRouter);

app.use('/login',userRouter);
app.use('/playlist',userRouter);
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

app.listen(5000, () => console.log('listening to 5000...'));