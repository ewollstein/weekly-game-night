var allHeroes = ["Absolute Zero",
                   "Akash'Thriya",
                   "Argent Adept",
                   "Benchmark",
                   "Bunker",
                   "Captain Cosmic",
                   "Chrono-Ranger",
                   "La Comodora",
                   "Expatriette",
                   "Fanatic",
                   "Mr. Fixer",
                   "Guise",
                   "Haka",
                   "The Harpy",
                   "The Idealist",
                   "K.N.Y.F.E.",
                   "Legacy",
                   "Lifeline",
                   "Luminary",
                   "Mainstay",
                   "Dr. Medico",
                   "The Naturalist",
                   "Nightmist",
                   "Omnitron",
                   "Parse",
                   "The Scholar",
                   "The Sentinels",
                   "Setback",
                   "Sky-Scraper",
                   "Stuntman",
                   "Ra",
                   "Tachyon",
                   "Tempest",
                   "Unity",
                   "The Visionary",
                   "The Wraith",
                   "Writhe"];

var environmentArray = ["The Block",
                        "The Celestial Tribunal",
                        "Champion Studios",
                        "The Court of Blood",
                        "Dok'Thorath Capital",
                        "The Enclave of the Endlings",
                        "The Final Wasteland",
                        "Fort Adamant",
                        "Freedom Tower",
                        "Insula Primalis",
                        "Madame Mittermeier's",
                        "Maerynian Refuge",
                        "Magmaria",
                        "Megalopolis",
                        "Mobile Defense Platform",
                        "Mordengrad",
                        "Nexus of the Void",
                        "Omnitron IV",
                        "Pike Industries",
                        "Realm of Discord",
                        "Rook City",
                        "Ruins of Atlantis",
                        "Silver Gulch",
                        "The Temple of Zhu Long",
                        "Time Cataclysm",
                        "Tomb of Anubis",
                        "Wagner Mars Base"];

var villainArray = ["Akash'Bhuta",
                    "Ambuscade",
                    "Apostate",
                    "Baron Blade",
                    "La Capitan",
                    "The Chairman",
                    "Chokepoint",
                    "Citizen Dawn",
                    "Deadline",
                    "The Dreamer",
                    "The Ennead",
                    "Gloomweaver",
                    "Grand Warlord Voss",
                    "Infinitor",
                    "Iron Legacy",
                    "Kaargra Warfang",
                    "Kismet",
                    "The Matriarch",
                    "Miss Information",
                    "Omnitron",
                    "Plague Rat",
                    "Progeny",
                    "Spite",
                    "Wager Master"];

var vengeanceArray = ["Ambuscade",
                      "Baron Blade",
                      "Biomancer",
                      "Bugbear",
                      "La Capitan",
                      "Citizens Hammer & Anvil",
                      "Ermine",
                      "Friction",
                      "Fright Train",
                      "Greazer",
                      "Miss Information",
                      "The Operative",
                      "Plague Rat",
                      "Proletariat",
                      "Sergeant Steel"];

var numPlayers;
var chosenHeroes = [];
var chosenVillains = [];

function playerCount () {
    if (numPlayers == null || numPlayers == undefined) {
        numPlayers = document.getElementById("numPlayers").value;
        console.log(numPlayers);
    };
};
                    
function heroSelector () {
    var heroesArray = allHeroes.slice();
    let heroArrayInt;
    chosenHeroes.length = 0;  

    for (let i = 0; i < numPlayers; i++) {
        heroArrayInt = Math.floor(Math.random()*heroesArray.length);
        chosenHeroes.push(heroesArray.splice(heroArrayInt,1));
    };
};

function vengeanceVillainSelector () {
    var vengeanceEnemyArray = vengeanceArray.slice();
    let villainArrayInt;
    chosenVillains.length = 0;

    for (let i = 0; i < numPlayers; i++) {
        villainArrayInt = Math.floor(Math.random()*vengeanceEnemyArray.length);
        chosenVillains.push(vengeanceEnemyArray.splice(villainArrayInt,1));
    };
};

function villainSelector () {
    return villainArray[Math.floor(Math.random()*villainArray.length)];
};

function environment () {
    return environmentArray[Math.floor(Math.random()*environmentArray.length)];
};

function standardGame () {
    playerCount();
    heroSelector();
    villainSelector();
    var heroChoices = "Hero Team:" + "<br>";

    for (let i = 0; i < chosenHeroes.length; i++) {
        heroChoices += 'Player ' + (i+1) + ': ' + chosenHeroes[i] + "<br>";
    };

    let gameChoice = heroChoices + "<br>" + "VS " + villainSelector() +      "<br><br>" + 'In ' + environment() + "<br>" + '<br><button type="button" onclick="standardGame();">Retry</button>' + '<button type="button" onclick="location.reload();">Close</button>';

    document.getElementById("playTime").innerHTML = gameChoice;
};

function vengeanceGame () {
    playerCount();
    heroSelector();
    vengeanceVillainSelector();
    
    var output = "Vengeance Pairs:" + "<br>";
    
    for (let i = 0; i < numPlayers; i++) {
        output += chosenHeroes[i] + " VS " + chosenVillains[i] + "<br>";
    };

    let gameChoice = output + "<br>" + "In " + environment() + "<br>" + '<br><button type="button" onclick="vengeanceGame();">Retry</button>' + '<button type="button" onclick="location.reload();">Close</button>';

    document.getElementById("playTime").innerHTML = gameChoice;
};