let users = [{ userid: 1, username: 'standan', password: 'tandan', sessionId: '', music: [] }
    , { userid: 2, username: 'standana', password: 'tandana', sessionId: '', music: [] }];



module.exports = class User {
    constructor(userid, username, password, sessionId, music) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.sessionId = sessionId;
        this.music = music;
    }
    static authenticate(username, password) {
console.log('boomboom')
// console.log(users);
        let user = users.filter(u => u.username == username && u.password == password);
        // console.log(user)
        if (user == null || user == undefined) {
            return throws(new Error("NOT FOUND"));
        }
        else {
            let u = User.getUserByUsername(user[0].username);
            u.sessionId = Math.random() * Date.now();
            return u;
        }
    }

    static getUserByUsername(username){
        const index = users.findIndex(u => u.username === username);
        if(index >-1){
            return users[index];
        }
        else {
            throw new Error("User not found");
        }
    }

}