let musics = [
    {songId:1, title:"one", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:"https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"},
    {songId:2, title:"two", genre:"raggi", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:3, title:"two", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:4, title:"three", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:5, title:"four", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:6, title:"five", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:7, title:"six", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:8, title:"seven", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""},
    {songId:9, title:"eight", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-01", url:""}
];

module.exports = class Music {
    constructor(id, title, genre, artist,releaseDate) {
        this.songId = id;
        this.title = title;
       this.genre= genre;
        this.artist = artist;
        this.releaseDate = releaseDate;
    }

    save() {
        this.songId = Math.random().toString();
        musics.push(this);
        return this;
    }

    update() {
        const index = musics.findIndex(p => p.id === this.id);
        if (index > -1) {
            musics.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return musics;
    }

    static findById(musicId) {
        const index = musics.findIndex(p => p.songId == musicId);
        if (index > -1) {
            return musics[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(musicId) {
        const index = musics.findIndex(p => p.songId === musicId);
        if (index > -1) {
            musics = musics.filter(p => p.songid !== musicId);
        } else {
            throw new Error('NOT Found');
        }
    }

}