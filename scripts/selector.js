//Create individual game objects
	var sentinels = {gameName:"Sentinels of the Multiverse", minPlayers:3,			maxPlayers:5, gameStyle:"Co-op", image:"sentinels_box.jpg",            		linkID:"sentinels"};
	var castles = {gameName:"Castles of Mad King Ludwig", minPlayers:3, 			maxPlayers:4, gameStyle:"Competitive", image:"castles.jpg",    				linkID:"castles"};
	var pandemic = {gameName:"Pandemic", minPlayers:3, maxPlayers:4, 				gameStyle:"Co-op", image:"pandemic.jpg", linkID:"pandemic"};
	var ascension = {gameName:"Ascension", minPlayers:3, maxPlayers:4, 				gameStyle:"Competitive", image:"ascension.jpg", linkID:"ascension"};
	var midgard = {gameName:"Champions of Midgard", minPlayers:3, maxPlayers:4, 	gameStyle:"Competitive", image:"champions.jpg", linkID:"midgard"};
	var gizmos = {gameName:"Gizmos", minPlayers:3, maxPlayers:4,               		gameStyle:"Competitive", image:"gizmos.jpg", linkID:"gizmos"};
	var smersh = {gameName:"Agents of SMERSH", minPlayers:3, maxPlayers:4, 			gameStyle:"Co-op", image:"smersh.jpg", linkID:"smersh"};
	var darkMoon = {gameName:"Dark Moon", minPlayers:4, maxPlayers:7, 				gameStyle:"Both", image:"darkmoon.jpg", linkID:"darkmoon"};
	var betrayal = {gameName:"Betrayal at the House on the Hill", minPlayers:3, 	maxPlayers:6, gameStyle:"Both", image:"betrayal.jpg", linkID:"betrayal"};
	var elderSign = {gameName:"Elder Sign", minPlayers:2, maxPlayers:8, 			gameStyle:"Co-op", image:"eldersign.jpg", linkID:"eldersign"};
	var legendary = {gameName:"Legendary", minPlayers:2, maxPlayers:5, 				gameStyle:"Co-op", image:"legendary.jpg", linkID:"legendary"};
	var dcDeckBuilder = {gameName:"DC Deck Building Game", minPlayers:3,       		maxPlayers:5, gameStyle:"Competitive", image:"dcdeckbuilder.jpg", 			linkID:"dcdeckbuilder"};
	var rollForTheGalaxy = {gameName:"Roll for the Galaxy", minPlayers:3, 			maxPlayers:5, gameStyle:"Competitive", image:"rollforthegalaxy.jpg", 		linkID:"rollforthegalaxy"};
	var timeStories = {gameName:"Time Stories", minPlayers:3, maxPlayers:4, 		gameStyle:"Co-op", image:"timestories.jpg", linkID:"timestories"};
	var zombies = {gameName:"Zombies!", minPlayers:3, maxPlayers:6, 				gameStyle:"Both", image:"zombies.jpg", linkID:"zombies"};
	var suburbia = {gameName:"Suburbia", minPlayers:3, maxPlayers:4,				gameStyle:"Competitive", image:"suburbia.jpg", linkID:"suburbia"};
	var sevenWonders = {gameName:"7 Wonders", minPlayers:3, maxPlayers:7, 			gameStyle:"Competitive", image:"sevenwonders.jpg", 							linkID:"sevenwonders"};
	var bossMonster = {gameName:"Boss Monster", minPlayers:3, maxPlayers:4,    		gameStyle:"Competitive", image:"bossmonster.jpg", linkID:"bossmonster"};
	var oregonTrail = {gameName:"The Oregon Trail", minPlayers:3, maxPlayers:6, 	gameStyle:"Co-op", image:"oregontrail.jpg", linkID:"oregontrail"};
	var smashUp = {gameName:"Smash Up", minPlayers:3, maxPlayers:4, 				gameStyle:"Competitive", image:"smashup.jpg", linkID:"smashup"};
	var merchants = {gameName:"Merchants & Marauders", minPlayers:3, 				maxPlayers:4, gameStyle:"Competitive", image:"merchants.jpg", 				linkID:"merchants"};
	var munchkin = {gameName:"Munchkin", minPlayers:3, maxPlayers:6, 				gameStyle:"Competitive", image:"munchkin.jpg", linkID:"munchkin"};
	var dungeonRoll = {gameName:"Dungeon Roll", minPlayers:3, maxPlayers:5,    		gameStyle:"Competitive", image:"dungeonroll.jpg", linkID:"dungeonroll"};
	var forbiddenIsland = {gameName:"Forbidden Island", minPlayers:3, 				maxPlayers:4, gameStyle:"Co-op", image:"forbiddenisland.jpg", 		   		linkID:"forbiddenisland"};
	var forbiddenDesert = {gameName:"Forbidden Desert", minPlayers:3, 				maxPlayers:4, gameStyle:"Co-op", image:"forbiddendesert.jpg", 				linkID:"forbiddendesert"};
	var firefly = {gameName:"Firefly", minPlayers:3, maxPlayers:4, 					gameStyle:"Competitive", image:"firefly.jpg", linkID:"firefly"};
	var rockPaperWizard = {gameName:"Rock, Paper, Wizard", minPlayers:3, 			maxPlayers:6, gameStyle:"Competitive", image:"rockpaperwizard.jpg", 		linkID:"rockpaperwizard"};
	var waterdeep = {gameName:"Lords of Waterdeep", minPlayers: 3, 					maxPlayers: 5, gameStyle:"Competitive", image:"waterdeep.jpg", 				linkID:"waterdeep"};
	var marvelchampions = {gameName:"Marvel Champions", minPlayers:1, 				maxPlayers:4, gameStyle:"Co-op", image:"marvelchampions.jpg", 				linkID:"marvelchampions"};
	var deathmaydie = {gameName:"Cthulhu: Death May Die", minPlayers:1, 	   		maxPlayers:5, gameStyle:"Co-op", image:"deathmaydie.jpg", 					linkID:"deathmaydie"};
	var reckoners ={gameName:"The Reckoners", minPlayers:3, maxPlayers:6, 
		gameStyle: "Co-op", image:"reckoners.jpg", linkID:"reckoners"};
	var obscurio = {gameName: "Obscurio", minPlayers:2, maxPlayers:8, 				gameStyle: "Both", image:"obscurio.jpg", linkID:"obscurio"};

	//Add game objects to an array
	var gamesArray = [sentinels, 
					  castles, 
					  pandemic, 
					  ascension, 
					  midgard, 
					  gizmos, 
					  smersh, 
					  darkMoon, 
					  betrayal, 
					  elderSign, 
					  legendary, 
					  dcDeckBuilder,
					  rollForTheGalaxy,
					  timeStories,
					  zombies,
					  suburbia,
					  sevenWonders,
					  bossMonster,
					  oregonTrail,
					  smashUp,
					  merchants,
					  munchkin,
					  dungeonRoll,
					  forbiddenDesert,
					  forbiddenIsland,
					  firefly,
					  rockPaperWizard,
					  waterdeep,
					  marvelchampions,
					  deathmaydie,
					  reckoners,
					  obscurio];
	
	//Write the array objects to the console for verification
	console.log("");
	console.log(gamesArray);

var numPlayers; // = document.getElementById("numPlayers").value;

function playerCount () {
    if (numPlayers == null || numPlayers == undefined) {
        numPlayers = document.getElementById("numPlayers").value;
        console.log(numPlayers);
    };
};

//Create the gameSelector function without params
function gameSelector() {
	//Retrieve input values from the HTML form
	playerCount();
	var gameType = document.getElementById("gameType").value;

	//Write inputs to the console
	console.log(numPlayers);
	console.log(gameType);

	/*Checks the objects in the gamesArray & filters out any games that there aren't enough players for or there are too many players for.*/
	for (let i = (gamesArray.length - 1); i <= (gamesArray.length-1) && i >= 0; 	i--) {
		if (numPlayers < gamesArray[i].minPlayers || numPlayers > gamesArray[i].maxPlayers) {
			gamesArray.splice(i,1);
		}
	};
	
	//Displays the filtered array in the console
	console.log("");
	console.log(gamesArray);
	console.log("");

	//Compares the game type in the array to the user input & filters out any styles that don't match
	for (let i = (gamesArray.length - 1); i <= (gamesArray.length-1) && i >= 0;
		 i--) {
			 if(gameType === "either")
				 randomizeGames()
				 else if(gameType === "sentinelsSTD")
				   {standardGame();}
				 else if (gameType === "vengeance")
				   {vengeanceGame();}
				 else if(gameType.toLowerCase() != gamesArray[i].gameStyle.toLowerCase()) {
					gamesArray.splice(i,1);
					randomizeGames();
			 }
		 };
	
	//Writes the final array to the console to check changes
	console.log("");
	console.log(gamesArray);
	console.log("");
};

//Creates the randomizeGames function to pick a random index value on the array after it has been filtered based on user inputs
/*function randomizeGames () {
	var randomGame = gamesArray[Math.floor(Math.random()*gamesArray.length)];
	var gameChoice = 'Time to play ' + randomGame.gameName + '!' + '<br>' + 	
	'<img class="randomgame" src="images/' + randomGame.image + '">' + '<br>' + 
	'<br><button type="button" onclick="randomizeGames();">Retry</button>' + 
	'<button type="button" onclick="location.reload();">Close</button>';
	
	document.getElementById("playTime").innerHTML = gameChoice;
	console.log("Time to play: " + randomGame.gameName);
};*/

function randomizeGames () {
	var randomGame = gamesArray[Math.floor(Math.random()*gamesArray.length)];
	console.log(randomGame);
	let gameChoice;
	if (randomGame == sentinels) {
		gameChoice = `Time to play ${randomGame.gameName}!<br><a href="./gamepages/${randomGame.linkID}.html"><img class="randomgame" src="images/${randomGame.image}"></a><br><button type="button" onclick="standardGame();">Standard</button><button type="button" onclick="vengeanceGame();">Vengeance</button><br><button type="button" onclick="randomizeGames();">Retry</button><button type="button" onclick="location.reload();">Close</button>`;
	} else {
		gameChoice = "Time to play " + randomGame.gameName + "!<br><a href='./gamepages/" + randomGame.linkID + ".html'><img class='randomgame' src='images/" + randomGame.image + "'></a><br><br><button type='button' onclick='randomizeGames();'>Retry</button><button type='button' onclick='location.reload();'>Close</button>";
	};

	document.getElementById("playTime").innerHTML = gameChoice;
	console.log("Time to play: " + randomGame.gameName);
};

//Creates a function to hide yes & no text and display the form
function openPopUp() {
	document.getElementById("playTime").style.display="block";
	document.getElementById("yesno").style.display="none";
};

//Creates a function to hide the form & display yes & no text again
function closePopUp() {
	document.getElementById("playTime").style.display="none";
	document.getElementById("yesno").style.display="block";
};