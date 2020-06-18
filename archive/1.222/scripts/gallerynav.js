var lastViewed;

function goToGame (gameID) {

    var gameIDDisplay = window.getComputedStyle(document.getElementById(gameID),                    null).display;
    //var lastGame = window.getComputedStyle(document.getElementById(lastViewed),                null).display;
    console.log(lastViewed);
    console.log(gameID);
    console.log(gameIDDisplay);
    //console.log(lastGame);
    //document.getElementById(gameID).style.display="none";
    //console.log(window.getComputedStyle(gameChoice, null).display);

    /*if (lastViewed != undefined || lastViewed != null) {
        document.getElementById(lastViewed).style.display="none";
        //console.log(document.getElementById(lastViewed).style.display);
        }

    if (gameID==lastViewed && document.getElementById(gameID).style.display=="flex") {
        document.getElementById(gameID).style.display="none"
        } else if (gameID !== null || gameID !== "undefined") {
            document.getElementById(gameID).style.display="flex"
    }
    
    lastViewed = gameID;*/

    //if (lastViewed = undefined)

    if (lastViewed == undefined && gameIDDisplay == "none") {
        openGame(gameID);
        console.log(1);
    } else if (lastViewed === gameID && gameIDDisplay == "none") {
        openGame(gameID);
        console.log(2);
    } else if (lastViewed === gameID && gameIDDisplay == "flex") {
        closeGame(gameID);
        console.log(3);
    } else {
        closeGame(lastViewed);
        openGame(gameID);
        console.log(4);
    };
    console.log(document.getElementById(gameID).style.display);
    lastViewed = gameID;
}

function closeGame(gameID) {
    document.getElementById(gameID).style.display="none";
}

function openGame(gameID) {
    document.getElementById(gameID).style.display="flex";
}