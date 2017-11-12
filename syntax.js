var templates = [
    [[1,3],"What ",5,1," ",3,"!"],
    [[1,3,4],"The journey to becoming ",5,1," ",3," begins with having the will to ",4,"."],
    [[4],4,"!  What do you have to lose!"],
    [[3],"A journey of a thousand miles begins with a single ",3,"."],
    [[3],"Change ",8," ",3," and you can change the world!"],
    [[4],"What we ",4,", we become."],
    [[1],"Success is the direct result of ",1,"."],
    [[4,4],"A champion is someone who can ",4," whilst being unable to ",4,"."],
    [[4], "People who ",4," are the ones who succeed."],
    [[3,3], "You are always free to change your mind and chooose a different ",3," or a different ",3,"."],
    [[4], "We ",4," by our very presence."],
    [[2], "Every moment of your life should be spent ",2,"."],
    [[3,4], "Your heart is full of ",3,", ready to ",4,"."],
    [[3,3], "Give god your ",3,", and he will give you his ",3,"."],
    [[3], "Getting over ",3," is the key to success in your life."],
    [[4], "If you can ",4,", you can do it!"],
    [[4,3], "Believe you can ",4," and you're halfway to ",3,"."],
    [[1], "Today is a ",1," day; yesterday is gone."],
    [[3,4], "Every human is powered by their ",3," and their desire to ",4,"."],
    [[3], "Thinking: the talking of the soul with ",3,"."],
    [[3], "If you put your ",3," to something, it is impossible to fail."],
    [[3], "It is always the ",3," that produces the marvelous."],
    [[1], "The only journey is ",1,"."],
    [[3,3], "From a small ",3," a mighty ",3," may grow."],
    [[3], "A #2 pencil and ",8,3," can take you anywhere."]
];

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

var a_an_req = function(noun) { 	//returns the indefinite article using the next word as noun
    if (noun[0] == 'a' || noun[0] == 'e' || noun[0] == 'i' || noun[0] == 'o' || noun[0] == 'u' ||
               noun[0] == 'A' || noun[0] == 'E' || noun[0] == 'I' || noun[0] == 'O' || noun[0] == 'U') {
	    return 'an ';
    } else {
	    return 'a ';
    }
}

var makeQuote = function() {
    var tempUse = templates[Math.floor(Math.random()*templates.length)];
    var response = "";
    var randomWords = [];
    for (i = 0; i < tempUse[0].length; i++) {
        switch(tempUse[0][i]) {
            case 1: randomWords.push(adjectives[Math.floor(Math.random()*adjectives.length)]); break;
            case 2: randomWords.push(adverbs[Math.floor(Math.random()*adverbs.length)]); break;
            case 3: randomWords.push(nouns[Math.floor(Math.random()*nouns.length)]); break;
            case 4: randomWords.push(verbs[Math.floor(Math.random()*verbs.length)]); break;
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
            case 8: response += a_an_req(randomWords[pointer]); break;
            default: response += tempUse[j];
        }
    }
    return response;
}