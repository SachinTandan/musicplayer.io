let musics = [
    {songId:1, title:"one", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-12", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"},
    {songId:2, title:"two", genre:"raggi", artist:"MIC", releaseDate:"2021-02-01", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/remember%20the%20old%20days.mp3"},
    {songId:3, title:"two", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-21", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/WonderfulLights.mp3"},
    {songId:4, title:"three", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-31", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/FaceBangSonic.mp3"},
    {songId:5, title:"four", genre:"hiphop", artist:"MIC", releaseDate:"2022-01-014", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/YouthRevolver.mp3"},
    {songId:6, title:"five", genre:"hiphop", artist:"MIC", releaseDate:"2022-02-21", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/remember%20the%20old%20days.mp3"},
    {songId:7, title:"six", genre:"hiphop", artist:"MIC", releaseDate:"2021-01-11", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/BloodCity.mp3"},
    {songId:8, title:"seven", genre:"hiphop", artist:"MIC", releaseDate:"2020-11-01", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/Unbeaten.mp3"},
    {songId:9, title:"eight", genre:"hiphop", artist:"MIC", releaseDate:"2021-11-21", url:"https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/HowLovely.mp3"}
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
    static findByTitle(title){
        return musics.filter(p => p.title.toUpperCase().includes(title.toUpperCase()));
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