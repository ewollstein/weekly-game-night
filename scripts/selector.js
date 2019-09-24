//Create individual game objects
	var sentinels = {gameName:"Sentinels of the Multiverse", minPlayers:3,						 maxPlayers:5, gameStyle:"Co-op"};
	var castles = {gameName:"Castles of Mad King Ludwig", minPlayers:3, 					   maxPlayers:4, gameStyle:"Competitive"};
	var pandemic = {gameName:"Pandemic", minPlayers:3, maxPlayers:4, 							gameStyle:"Co-op"};
	var ascension = {gameName:"Ascension", minPlayers:3, maxPlayers:4, 							 gameStyle:"Competitive"};
	var midgard = {gameName:"Champions of Midgard", minPlayers:3, maxPlayers:4, 			   gameStyle:"Competitive"};
	var gizmos = {gameName:"Gizmos", minPlayers:3, maxPlayers:4, 							  gameStyle:"Competitive"};
	var smersh = {gameName:"Agents of SMERSH", minPlayers:3, maxPlayers:4, 					  gameStyle:"Co-op"};
	var darkMoon = {gameName:"Dark Moon", minPlayers:4, maxPlayers:7, 							gameStyle:"Both"};
	var betrayal = {gameName:"Betrayal at the House on the Hill", minPlayers:3, 				maxPlayers:6, gameStyle:"Both"};
	var elderSign = {gameName:"Elder Sign", minPlayers:2, maxPlayers:8, 						 gameStyle:"Co-op"};
	var legendary = {gameName:"Legendary", minPlayers:2, maxPlayers:5, 							 gameStyle:"Co-op"};
	var dcDeckBuilder = {gameName:"DC Deck Building Game", minPlayers:3, 							 maxPlayers:5, gameStyle:"Competitive"};
	var rollForTheGalaxy = {gameName:"Roll for the Galaxy", minPlayers:3, 								maxPlayers:5, gameStyle:"Competitive"};
	var timeStories = {gameName:"Time Stories", minPlayers:3, maxPlayers:4, 					   gameStyle:"Co-op"};
	var zombies = {gameName:"Zombies!", minPlayers:3, maxPlayers:6, 						   gameStyle:"Both"};
	var suburbia = {gameName:"Suburbia", minPlayers:3, maxPlayers:4, 							gameStyle:"Competitive"};
	var sevenWonders = {gameName:"7 Wonders", minPlayers:3, maxPlayers:7, 							gameStyle:"Competitive"};
	var bossMonster = {gameName:"Boss Monster", minPlayers:3, maxPlayers:4, 					   gameStyle:"Competitive"};
	var oregonTrail = {gameName:"The Oregon Trail", minPlayers:3, maxPlayers:6, 				   gameStyle:"Co-op"};
	var smashUp = {gameName:"Smash Up", minPlayers:3, maxPlayers:4, 						   gameStyle:"Competitive"};
	var merchants = {gameName:"Merchants & Marauders", minPlayers:3, 							 maxPlayers:4, gameStyle:"Competitive"};
	var munchkin = {gameName:"Munchkin", minPlayers:3, maxPlayers:6, 							gameStyle:"Competitive"};
	var dungeonRoll = {gameName:"Dungeon Roll", minPlayers:3, maxPlayers:5, 					   gameStyle:"Competitive"};
	var forbiddenIsland = {gameName:"Forbidden Island", minPlayers:3, 								   maxPlayers:4, gameStyle:"Co-op"};
	var forbiddenDesert = {gameName:"Forbidden Desert", minPlayers:3, 								   maxPlayers:4, gameStyle:"Co-op"};
	var firefly = {gameName:"Firefly", minPlayers:3, maxPlayers:4, 							   gameStyle:"Competitive"};
	var rockPaperWizard = {gameName:"Rock, Paper, Wizard", minPlayers:3, 							   maxPlayers:6, gameStyle:"Competitive"};

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
					  rockPaperWizard];
	
	//Write the array objects to the console for verification
	console.log("");
	console.log(gamesArray);

//Create the gameSelector function without params
function gameSelector() {
	//Retrieve input values from the HTML form
	var numPlayers = document.getElementById("numPlayers").value;
	var gameType = document.getElementById("gameType").value;

	//Write inputs to the console
	console.log(numPlayers);
	console.log(gameType);

	/*Checks the objects in the gamesArray & filters out any games that there aren't enough players for or there are too many players for.*/
	for (let i = (gamesArray.length - 1); i <= (gamesArray.length-1) && i >= 0; 	i--) {
		if (numPlayers < gamesArray[i].minPlayers || numPlayers > gamesArray[i].maxPlayers) {
			gamesArray.splice(i,1);
		}
	}
	
	//Displays the filtered array in the console
	console.log("");
	console.log(gamesArray);
	console.log("");

	//Compares the game type in the array to the user input & filters out any styles that don't match
	for (let i = (gamesArray.length - 1); i <= (gamesArray.length-1) && i >= 0;
		 i--) {
			 if(gameType === "either")
				 break
				 else if(gameType.toLowerCase() != gamesArray[i].gameStyle.toLowerCase()) {
					gamesArray.splice(i,1);
			 }
		 }
	
	//Writes the final array to the console to check changes
	console.log("");
	console.log(gamesArray);
	console.log("");

	//Calls the randomizeGames function after the array has been filtered
	randomizeGames();
}

//Creates the randomizeGames function to pick a random index value on the array after it has been filtered based on user inputs
function randomizeGames () {
	var randomGame = gamesArray[Math.floor(Math.random()*gamesArray.length)];
	var gameChoice = 'Time to play ' + randomGame.gameName + '!' + 
	'<br><button type="button" onclick="randomizeGames();">Retry</button>' + 
	'<button type="button" onclick="location.reload();">Close</button>';
	
	document.getElementById("playTime").innerHTML = gameChoice;
	console.log("Time to play: " + randomGame.gameName);
}

//Creates a function to hide yes & no text and display the form
function openPopUp() {
	document.getElementById("playTime").style.display="block";
	document.getElementById("yes").style.display="none";
	document.getElementById("no").style.display="none";
}

//Creates a function to hide the form & display yes & no text again
function closePopUp() {
	document.getElementById("playTime").style.display="none";
	document.getElementById("yes").style.display="block";
	document.getElementById("no").style.display="block";
}