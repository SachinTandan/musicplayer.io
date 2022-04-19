

module.exports=function getUser( username, password )
{
    //loops through each user in the array and checks the stored username and password against the one you're looking for
    return users.find( eachUser => {
        return eachUser.username === username && eachUser.password === password;
    });
}

var users = [

{'standan':'passtandan'},
{'spageni':'passpageni'},
{'gsayal':'passsayal'}

];