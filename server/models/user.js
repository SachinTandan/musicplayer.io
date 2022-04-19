let users=[{userid:1, username:'standan',password:'tandan',sessionId:'',music:[]}
,{userid:1, username:'standan',password:'tandan',sessionId:'',music:[]}];
module.export= class User{
constructor(userid,username,password,sessionId,music){
    this.userid=userid;
    this.username=username;
    this.password=password;
    this.sessionId = sessionId;
    this.music=music;
}
 static authenticate(username, password){
     
    let usser = users.filter.find(u=>s.username==username&& u.password==password);
if(user==null || user==undefined){
return throws(new Error("NOT FOUND"));
}
else{
    this.sessionId= Math.random();

}
}


}