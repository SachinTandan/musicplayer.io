let musics = [];

module.exports = class Music {

    constructor(id, title, publishedDate, author) {
        this.id = id;
        this.title = title;
       
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = Math.random().toString();
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
        const index = musics.findIndex(p => p.id === musicId);
        if (index > -1) {
            return musics[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(musicId) {
        const index = musics.findIndex(p => p.id === musicId);
        if (index > -1) {
            musics = musics.filter(p => p.id !== musicId);
        } else {
            throw new Error('NOT Found');
        }
    }

}