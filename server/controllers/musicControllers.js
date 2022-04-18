// const Music = require('../models/music');
const Music = require('../models/music');

exports.getMusics = (req, res, next) => {
    res.status(200).json(Music.fetchAll());
}

exports.getMusicById = (req, res, next) => {
    res.status(200).json(Music.findById(req.params.bookId));
}

exports.save = (req, res, next) => {
    const music = req.body;
    const savedMusic = new Music(null, music.title, music.publishedDate, music.author).save();
    res.status(201).json(savedMusic);
}

exports.update = (req, res, next) => {
    const music = req.body;
    const updatedMusic = new Music(req.params.musicId, music.title,  music.publishedDate, music.author).update();
    res.status(200).json(updatedMusic);
}

exports.deleteById = (req, res, next) => {
    Music.deleteById(req.params.musicId);
    res.status(200).end();
}