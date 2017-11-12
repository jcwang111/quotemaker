var adjectives, adverbs, nouns, verbs;
var quoteDestination = document.getElementById("quote");

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
        default:
            alert("Error loading " + name + ": Unknown List");
    }
}

var update = function() {
    if (adjectives && adverbs && nouns && verbs) {
        var randAdj = Math.floor(Math.random()*adjectives.length);
        var randN = Math.floor(Math.random()*nouns.length);
        quoteDestination.innerHTML = "What a(n) " + adjectives[randAdj] + " " + nouns[randN] + "!";
    }
    
}

setInterval(update,1000);