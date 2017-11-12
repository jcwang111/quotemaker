var adjectives, adverbs, nouns, verbs, people;
var quoteDestination = document.getElementById("quote");
var authorDestination = document.getElementById("author");

var loadFile = function(name) {
    var file = document.getElementById(name);
    var data = file.contentWindow.document.body.childNodes[0].innerHTML;
    while (data.indexOf("\r") >= 0)
        data = data.replace("\r", "");
    var list = data.split("\n");
    quoteDestination.innerHTML += String(list.length) + " " + name + "... ";
    
    //alert("There are " + list.length + " " + name);
    /*
    for (var i = 0; i < list.length; i++) {
        alert("Line #" + (i + 1) + " is: '" + list[i] + "'");
    }
    */
    
    switch(name) {
        case "Adjectives":
            adjectives = list; break;
        case "Adverbs":
            adverbs = list; break;
        case "Nouns":
            nouns = list; break;
        case "Verbs":
            verbs = list; break;
	case "People":
            people = list; break;
        default:
            alert("Error loading " + name + ": Unknown List");
    }
}

var update = function() {
    if (adjectives && adverbs && nouns && verbs) {
        quoteDestination.innerHTML = makeQuote();
        var randP = Math.floor(Math.random()*people.length);
        authorDestination.innerHTML = "-" + people[randP];
        
        /*
        var randAdj = Math.floor(Math.random()*adjectives.length);
        var randN = Math.floor(Math.random()*nouns.length);
        var ind_art = a_an(adjectives[randAdj], nouns[randN]);
        quoteDestination.innerHTML = "What " + ind_art + adjectives[randAdj] + " " + nouns[randN] + "!";
        */
    }
    
}

setInterval(update,5000);
