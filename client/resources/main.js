//1.to check if the sessionId status and display accordingly.. 
initialize();

function initialize() {
  if (sessionStorage.getItem("sessionId") == null) {
    document.getElementById("spider").style.display = "none";
    document.getElementById("someform").style.display = "block";
    document.getElementById("search-panel").style.display = "none";
    document.getElementById("myPlayList").style.display = "none";
  }
  else {
    document.getElementById("spider").style.display = "block";
    document.getElementById("someform").style.display = "none";
    document.getElementById("search-panel").style.display = "block";
    document.getElementById("myPlayList").style.display = "block";
    fetchAllSongs();
    
    fetchAllPlaylist();

  }
}
//for playList
function fetchAllPlaylist() {
  fetch('http://localhost:5000/playlist/' + sessionStorage.getItem("sessionId"), {
    method: 'GET',
  }).then(res => res.json())
    .then(res => {

      let htmlString = "";
      res.forEach(element => {
        htmlString += `<tr><td>${element.songId}</td>
                    <td >${element.title}</td>
                    <td>${element.artist}</td>
                    <td>${element.genre}</td>
                    <td>${element.releaseDate}</td>
                    <td><button  i tag="${element.songId}" class="fa-solid fa-minus  deque" ></button>
                        <button  id="addToplaylist"  class="fa-solid fa-play" ></button></td></tr>`;
      });
      htmlString += "";
      document.getElementById("playList").innerHTML = htmlString;
    });
}
// add action listner for search
document.getElementById("btnSearch").addEventListener("click", (e) => {
  fetch(
    "http://localhost:5000/musics/search?title=" +
    document.getElementById("txtSearch").value
  )
    .then((res) => res.json())
    .then((res) => {
      showDataInSongListTable(res);
      refreshSongListEvent();
    });
});
//function to refresh the data in the playlist
const showDataInSongListTable = function (data) {
  let htmlString = "";
  data.forEach((element) => {
    htmlString += " <tr>";
    htmlString += `<td>${element.songId}</td>`;
    htmlString += `<td >${element.title}</td>`;
    htmlString += `<td>${element.artist}</td>`;
    htmlString += `<td>${element.genre}</td>`;
    htmlString += `<td>${element.releaseDate}</td>`;
    htmlString += ` <td style="text-align:center;"><span><i tag="${element.songId}" class="fa fa-plus queue"></i></span></td>`;
    htmlString += "</tr>";
  });
  document.getElementById("musicList").innerHTML = htmlString;
};
//for songs..
function fetchAllSongs() {
  fetch('http://localhost:5000/musics', {
    method: 'GET',
  }).then(res => res.json())
    .then(res => {
      showDataInSongListTable(res);
      refreshSongListEvent();
    });
}
//enqueing the plus button from songs song list
//function to refresh the event binding of song list
function refreshSongListEvent() {
  let btns = document.getElementsByClassName("queue");
  console.log(btns);
  Array.prototype.forEach.call(btns, function addClickListener(btn) {
   
    btn.addEventListener("click", function (event) {
      console.log('test');
      enqueue(this.getAttribute("tag"));
    });
  });
  let btnss = document.getElementsByClassName("deque");
  console.log(btnss);
  Array.prototype.forEach.call(btnss, function addClickListener(btn) {
   
    btn.addEventListener("click", function (event) {
      console.log('test');
      dequeue(this.getAttribute("tag"));
    });
  });
}
//function to enqueue the songs
const enqueue = function (songId) {
  fetch("http://localhost:5000/playlist/enqueueSong", {
    method: "POST",
    body: JSON.stringify({
      sessionId: sessionStorage.getItem("sessionId"),
      songId: parseInt(songId),
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then(res => {
      let htmlString = "";
      res.forEach(element => {
        htmlString += `<tr><td>${element.songId}</td>
                <td >${element.title}</td>
                <td>${element.artist}</td>
                <td>${element.genre}</td>
                <td>${element.releaseDate}</td>
                <td><button  id="addToplaylist"  class="fa-solid fa-minus" ></button>
                    <button  id="addToplaylist"  class="fa-solid fa-play" ></button></td></tr>`;
      });
      htmlString += "";
      document.getElementById("playList").innerHTML = htmlString;
    })
}

//function to dequeue the songs
const dequeue = function (songId) {
  fetch("http://localhost:5000/playlist/dequeueSong", {
    method: "POST",
    body: JSON.stringify({
      sessionId: sessionStorage.getItem("sessionId"),
      songId: parseInt(songId),
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then(res => {

      let htmlString = "";
      res.forEach(element => {
        htmlString += `<tr><td>${element.songId}</td>
                <td >${element.title}</td>
                <td>${element.artist}</td>
                <td>${element.genre}</td>
                <td>${element.releaseDate}</td>
                <td><button  id="addToplaylist"  class="fa-solid fa-minus" ></button>
                    <button  id="addToplaylist"  class="fa-solid fa-play" ></button></td></tr>`;
      });
      htmlString += "";
      document.getElementById("playList").innerHTML = htmlString;
    })
};

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
      }
    })
});

document.getElementById("logout").addEventListener('click', () => {
  sessionStorage.removeItem("sessionId");
  initialize();
});