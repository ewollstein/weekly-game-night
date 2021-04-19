//Load library page from array dynamically
libraryload();

//Function to read contents of the game array & display on the library page
function libraryload() {
    var gameLibrary = gamesArray.slice().sort();
    gameLibrary.sort((a, b) => a.gameName.localeCompare(b.gameName));
    console.log(gameLibrary);
    var gameLoad = ""
    for (let i=0; i < gameLibrary.length; i++) {
        gameLoad += "<div class='games_library'> <section class='games_left'>  <a href='./gamepages/" + gameLibrary[i].linkID + ".html'><img class='games' src='./images/" + gameLibrary[i].image + "' alt='" + gameLibrary[i].gameName + " box' /></a> </section> <section class='games_right'> <h1 class='games'>" + gameLibrary[i].gameName + "</h1> <h2>Style: " + gameLibrary[i].gameStyle + "</h2> <h2>Players: " + gameLibrary[i].minPlayers + "-" + gameLibrary[i].maxPlayers + "</h2> </section> </div>";
    };
    document.getElementById("mainDiv").innerHTML=gameLoad;
};