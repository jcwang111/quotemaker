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
        var randAdj = Math.floor(Math.random()*adjectives.length);
        var randN = Math.floor(Math.random()*nouns.length);
        var ind_art = a_an(adjectives[randAdj], nouns[randN]);
	var randP = Math.floor(Math.random()*people.length);
	quoteDestination.innerHTML = "What " + ind_art + adjectives[randAdj] + " " + nouns[randN] + "!";
	authorDestination.innerHTML = "-" + "people[randP]";
    }
    
}
var a_an = function(string, noun){ 	//returns the indefinite article using the next word as string and noun as noun
    if (noun[noun.length - 1] == 's') {
	    return '';
    } else if (string[0] == 'a' || string[0] == 'e' || string[0] == 'i' || string[0] == 'o' || string[0] == 'u' ||
               string[0] == 'A' || string[0] == 'B' || string[0] == 'C' || string[0] == 'D' || string[0] == 'E') {
	    return 'an ';
    } else {
	    return 'a ';
    }
}
var a_ex = function(noun){ 	//returns an indefinite article depending on the plurality of the noun
    if (noun[noun.length - 1] == 's') {
	    return '';
    } 
    else {
	return 'a ';
    }
}
var verb_plr = function(verb, noun){ //returns the verb with an s after it if the subject is singular
	if (noun[noun.length-1] != 's'){
		return verb + 's';
	}
	else{
		return verb;
	}
}
setInterval(update,5000);
