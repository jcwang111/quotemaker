var a_an = function(string, noun){ 	//returns the indefinite article using the next word as string and noun as noun
    if (noun[noun.length - 1] == 's') {
	    return '';
    } else if (string[0] == 'a' || string[0] == 'e' || string[0] == 'i' || string[0] == 'o' || string[0] == 'u' ||
               string[0] == 'A' || string[0] == 'E' || string[0] == 'I' || string[0] == 'O' || string[0] == 'U') {
	    return 'an ';
    } else {
	    return 'a ';
    }
}

var a_ex = function(noun){ 	//returns an indefinite article depending on the plurality of the noun
    if (noun[noun.length - 1] == 's') {
	    return '';
    } else {
	return 'a ';
    }
}

var verb_plr = function(verb, noun) { //returns the verb with an s after it if the subject is singular
	if (noun[noun.length-1] != 's') {
		return verb + 's';
	} else {
		return verb;
	}
}

var makeQuote = function() {
    var tempUse = [[1,3],"What ",5,1," ",3,"!"]; //Math.floor(Math.random()*tempUse.length);
    var response = "";
    var randomWords = [];
    for (i = 0; i < tempUse[0].length; i++) {
        switch(tempUse[0][i]) {
            case 1: randomWords.push(adjectives[Math.floor(Math.random()*adjectives.length)]); break;
            case 2: randomWords.push(adverbs[Math.floor(Math.random()*adverbs.length)]); break;
            case 3: randomWords.push(nouns[Math.floor(Math.random()*nouns.length)]); break;
            case 4: randomWords.push(verbs[Math.floor(Math.random()*verbs.length)]); break;
            case 5: case 6: case 7: break;
            default: console.log("Wrong Expression (Assign)");
        }
    }
    var pointer = 0;
    console.log(randomWords);
    for (j = 1; j < tempUse.length; j++) {
        switch(tempUse[j]) {
            case 1: case 2: case 3: case 4: response += randomWords[pointer]; pointer++; break;
            case 5: response += a_an(randomWords[pointer],randomWords[pointer+1]); break;
            case 6: response += a_ex(randomWords[pointer]); break;
            case 7: response += verb_plr(randomWords[pointer],randomWords[pointer+1]); break;
            default: response += tempUse[j];
        }
    }
    return response;
}