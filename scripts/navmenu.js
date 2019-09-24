//Creates a navigation menu that is called on page load
navMenu();

//Creates the navMenu function to display a uniform navigation menu on all pages
function navMenu() {
	var navMenuTabs = "<div><a class='nav' href='index.html'>Home</a></div>" +
					  "<div><a class='nav' href='games.html'>Library</a></div>" +
					  "<div><a class='nav' href='randomize.html'>Randomizer</a></div>";
	//Sends the navigation menu content back to the DOM element
	document.getElementById("navigationMenu").innerHTML = navMenuTabs;
}