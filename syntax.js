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

var verb_cap = function(verb) {
	var firstLetter = verb[0].toUpperCase();
	var rest = verb.slice(1,verb.length);
	return firstLetter + rest;
}
	
var a_an_noun = function(noun) {
    if (noun[noun.length - 1] == 's') {
	    return '';
    } else if (noun[0] == 'a' || noun[0] == 'e' || noun[0] == 'i' || noun[0] == 'o' || noun[0] == 'u' ||
               noun[0] == 'A' || noun[0] == 'E' || noun[0] == 'I' || noun[0] == 'O' || noun[0] == 'U') {
	    return 'an ';
    } else {
	    return 'a ';
    }
}

var makeQuote = function() {
    var tempUse = templates[Math.floor(Math.random()*templates.length)];
    var quote = "";
    var randomWords = [];
    for (i = 0; i < tempUse[0].length; i++) {
        switch(tempUse[0][i]) {
            case 1: randomWords.push(adjectives[Math.floor(Math.random()*adjectives.length)]); break;
            case 2: randomWords.push(adverbs[Math.floor(Math.random()*adverbs.length)]); break;
            case 3: randomWords.push(nouns[Math.floor(Math.random()*nouns.length)]); break;
            case 4: 
                var verb;
                do {
                    verb = verbs[Math.floor(Math.random()*verbs.length+1)];
                } while (verb[verb.length-1] == 'd' || verb[verb.length-1] == 's' || 
                        (verb[verb.length-3] == 'i' && verb[verb.length-2] == 'n' && verb[verb.length-1] == 'g'))
                randomWords.push(verb);
                break;
            default: console.log("Wrong Expression (Assign)");
        }
    }
    var pointer = 0;
    for (j = 1; j < tempUse.length; j++) {
        switch(tempUse[j]) {
            case 1: case 2: case 3: case 4: quote += randomWords[pointer]; pointer++; break;
            case 5: quote += a_an(randomWords[pointer],randomWords[pointer+1]); break;
            case 6: quote += a_ex(randomWords[pointer]); break;
            case 7: quote += verb_plr(randomWords[pointer],randomWords[pointer+1]); break;
            case 8: quote += verb_cap(randomWords[pointer]); pointer++; break;
            case 9: quote += a_an_noun(randomWords[pointer]); break;
            default: quote += tempUse[j];
        }
    }
    var response = randomWords;
    response.push(quote);
    return response;
}
