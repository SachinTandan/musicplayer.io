//1.to check if the sessionId status and display accordingly.. 
initialize();

function initialize() {
    if (sessionStorage.getItem("sessionId") == null) {
        document.getElementById("spider").style.display = "none";
        document.getElementById("someform").style.display = "block";
        document.getElementById("search-panel").style.display = "none";
        // document.getElementById("playlist").style.display = "none";
    }
    else {
        document.getElementById("spider").style.display = "block";
        document.getElementById("someform").style.display = "none";
        document.getElementById("search-panel").style.display = "block";
        // document.getElementById("playlist").style.display = "block";
        fetchAllSongs();
        
    }
}
// function fetchAllPlaylist(username, password) {
//     fetch('http://localhost:4000/playlist', {
//         method: 'GET',
//     });
function fetchAllSongs() {
    fetch('http://localhost:5000/musics', {
        method: 'GET',
    }).then(res => res.json())
        .then(res => {
            
            let htmlString="";
            res.forEach(element => {
                htmlString+=`<tr><td>${element.songId}</td>
                <td >${element.title}</td>
                <td>${element.artist}</td>
                <td>${element.genre}</td>
                <td>${element.releaseDate}</td>
                <td><button  id="addToplaylist"  class="fa-solid fa-plus" ></button></td></tr>`;
            });
            htmlString+="";
            console.log(htmlString);
            document.getElementById("musicList").innerHTML=htmlString;
        });
}
//2.login part- flows from here.
document.getElementById('someform').addEventListener('submit', e => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })

    }).then(res => res.json())
        .then(res => {
            if (res.error == "Something is wrong! Try later") {
                alert(res.error);
            }
            else {
                alert("Login Successful.");
                sessionStorage.setItem("sessionId", res.sessionId);
                initialize();
                //enable disable
                // fetAllPlaylist(document.getElementById('username').value,document.getElementById('password').value);
            }
        })
});

document.getElementById("logout").addEventListener('click', () => {
    sessionStorage.removeItem("sessionId");
    initialize();
});