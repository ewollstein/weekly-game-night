function goToGame (gameID) {
    console.log(gameID);
    if (document.getElementById(gameID).style.display==="flex") {
        document.getElementById(gameID).style.display="none";
        } else {
            document.getElementById(gameID).style.display="flex";
        }
    //document.getElementById(gameID).style.display="flex";
}

function closeGame () {

}