const Music = require('./music')

let users = [{ userid: 1, username: 'standan', password: 'tandan', sessionId: '', playlist: [{ songId: 1 }, { songId: 2 }] }
    , { userid: 2, username: 'standana', password: 'tandana', sessionId: '', playlist: [{ songId: 1 }, { songId: 2 }, { songId: 3 }] }];



module.exports = class User {
    constructor(userid, username, password, sessionId, playlist) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.sessionId = sessionId;
        this.playlist = playlist;
    }

    static getPlaylist(sessionId) {
        let user = users.find(u => u.sessionId == sessionId);
        let musicIds = user.playlist.map(x => x.songId);
        return Music.fetchAll().filter(x => musicIds.includes(x.songId));
    }
    //enqueing applications
    static enqueing(songId, sessionId) {
        const user = users.find((user) => user.sessionId == sessionId);
        let songIndex = user.playlist.findIndex(x => x.songId == songId);
        if (songIndex < 0) {
            user.playlist.push({ songId: songId });
        }
        let musicIds = user.playlist.map(x => x.songId);
        return Music.fetchAll().filter(x => musicIds.includes(x.songId));
    }
    //dequeing applications
    static dequeing(songId, sessionId) {
        console.log('boomboom user vitra ko deque');
        let user = users.find(u => u.sessionId == sessionId);
        let songIndex = user.playlist.findIndex(x => x.songId == songId);
        console.log('vitra ko deque'+songIndex);
        if (songIndex == 0) {
            user.playlist = user.playlist.filter(x => x.songId != songId);
        }
        let musicIds = user.playlist.map(x => x.songId);
        return Music.fetchAll().filter(x => musicIds.includes(x.songId));
    }
    static authenticate(username, password) {
        // console.log('boomboom')
        // console.log(users);
        let user = users.filter(u => u.username == username && u.password == password);
        // console.log(user)
        if (user == null || user == undefined) {
            return throws(new Error("NOT FOUND"));
        }
        else {
            let u = User.getUserByUsername(user[0].username);
            u.sessionId = Math.floor(Math.random() * Date.now());
            return u;
        }
    }

    static getUserByUsername(username) {
        const index = users.findIndex(u => u.username === username);
        if (index > -1) {
            return users[index];
        }
        else {
            throw new Error("User not found");
        }
    }

}