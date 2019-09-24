buildGamesArray();

function buildGamesArray() {
	var inputFile = "";
	
	var xhrequest = new XMLHttpRequest();
	xhrequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			inputFile = xhrequest.responseText;
			
			var allGameNames = inputFile.split("\n");
			var navLinks = "";
			
				for(var i = 0; i < allGameNames.length; i++)	{
					var currentTag = allGameNames[i];
					console.log(currentTag);
					var tagInfo = currentTag.split("||");
					console.log(i);
					var nameOfTag = tagInfo[0];
					navLinks += '<a href="#' + nameOfTag + '">'+ nameOfTag + '</a> || ';
					console.log(nameOfTag);
				}
				
			document.getElementById("tagNavMenu").innerHTML = navLinks;
			
			var details = "";
			
			for(var i = 0; i < allGameNames.length; i++)	{
					var currentTag = allGameNames[i];
					console.log(currentTag);
					var tagInfo = currentTag.split("||"); 
					console.log(i);
					var gameName = tagInfo[0];
					var minPlayers = tagInfo[1];
					var maxPlayers = tagInfo[2];
					var gameType = tagInfo[3];
					
					details += '<section><a name = "' + gameName + '"/>' + "<h3>"
             					+ gameName + "</h3><br>" + "</a>" + 
								'<p style="padding:0px 60px; margin:0px;">' + 
								'Minium Players: ' + minPlayers + "</p>" + 
								"<br><br>" + '<p style="padding:0px 60px; margin:0px;">'
								+ 'Maximum Players: ' + maxPlayers + "</p>" +
								"<br><br>" + '<p style="padding:0px 60px; margin:0px;">'
								+ gameType + '</p>' + "<hr></section>";
			}
			
			document.getElementById("tagDetails").innerHTML = details;
			
			var gamesArray = [];
			var	gamesObjectArray = [];
			for(var i = 0; i < allGameNames.length; ++i){
				var currentGame = allGameNames[i]
				var values = currentGame.split("||");
				gamesObjectArray[i] = {gameName: values[0], minPlayers: values[1], maxPlayers: values[2], gameType: values[3]};
			}
			
			console.log(gamesObjectArray[0]);
		}
	};
	
	xhrequest.open("GET", "gamedata.txt", true);
	xhrequest.send();
}

/*var lines = filecontent.split('\n');//puts the lines in an array
var gamesArray = [];
for(var i = 0; i < allGameNames.length; ++i){
    var values = gamesArray[i].split(||);//transforms "4 6" into ["4", "6"]
    gamesObjectArray[i] = {gameName: values[0], minPlayers: values[1], maxPlayers: values[2], gameType: values[3]};
    //then into the format you wanted !
}*/