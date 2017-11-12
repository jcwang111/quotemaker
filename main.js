var adjectives, adverbs, nouns, verbs, people;
var quoteDestinations = [document.getElementById("quote1"), document.getElementById("quote2"), document.getElementById("quote3")];
var authorDestinations = [document.getElementById("author1"), document.getElementById("author2"), document.getElementById("author3")];
var defineDestinations = [document.getElementById("definitions1"), document.getElementById("definitions2"), document.getElementById("definitions3")];
var loadWrapper = document.getElementById("loadwrapper");
var contentWrapper = document.getElementById("contentwrapper");
var NUM_OF_BACKGROUNDS = 25;

var loadFile = function(name) {
    var file = document.getElementById(name);
    var data = file.contentWindow.document.body.childNodes[0].innerHTML;
    while (data.indexOf("\r") >= 0)
        data = data.replace("\r", "");
    var list = data.split("\n");
    
    //alert("There are " + list.length + " " + name);
    /*
    for (var i = 0; i < list.length; i++) {
        alert("Line #" + (i + 1) + " is: '" + list[i] + "'");
    }
    */
    
    var flavorText;
    
    switch(name) {
        case "Adjectives":
            adjectives = list; flavorText = "Adjusting"; break;
        case "Adverbs":
            adverbs = list; flavorText = "Accumulating"; break;
        case "Nouns":
            nouns = list; flavorText = "Naming"; break;
        case "Verbs":
            verbs = list; flavorText = "Validating"; break;
	case "People":
            people = list; flavorText = "Greeting"; break;
        default:
            alert("Error loading " + name + ": Unknown List");
    }
    
    loadWrapper.childNodes[5].innerHTML += "<br/>" + flavorText + " " + String(list.length) + " " + name + "...";
}

var update = function() {
    if (adjectives && adverbs && nouns && verbs) {
        
        $(document.body).fadeOut(200,function(){
            
            loadWrapper.style.display = "none";
            contentWrapper.style.display = "block";
            var randBG = Math.floor(Math.random()*NUM_OF_BACKGROUNDS+1);

            var k = 1;//for (k = 0; k < 3; k++) {
                var info = makeQuote();
                console.log(info);
                quoteDestinations[k].innerHTML = info[info.length-1];
                var randP = Math.floor(Math.random()*people.length);
                authorDestinations[k].innerHTML = "- " + people[randP];
                defineDestinations[k].innerHTML = "Definitions";
                for (j = 0; j < info.length-1; j++) {
                    defineDestinations[k].innerHTML += " | <a href='https://www.google.com/search?q=" + info[j] + "+definition' target='_blank'>" + info[j] + "</a>";
                }
                /*
                var randAdj = Math.floor(Math.random()*adjectives.length);
                var randN = Math.floor(Math.random()*nouns.length);
                var ind_art = a_an(adjectives[randAdj], nouns[randN]);
                quoteDestination.innerHTML = "What " + ind_art + adjectives[randAdj] + " " + nouns[randN] + "!";
                */
            //}
                document.body.style.backgroundImage = "url('background_pics/pic" + randBG + ".png')";
                $(document.body).fadeIn(200);
        });
    }
    
}

setInterval(update,10000);
