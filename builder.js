var quoteDestination = document.getElementById("quote");

var update = function() {
    quoteDestination.innerHTML = String(Math.random());
}

setInterval(update,1000);