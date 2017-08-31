let generateRandomNumber = function(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum

}
var GemGame = {
    matchThisNumber: 0,
    wins: 0,
    losses: 0,
    gems: [0, 0, 0, 0],
    score: 0,
    generateRandomNumber: generateRandomNumber
}

// sets random values for the gems
function setValueForGems() {
    for (var i = 0; i < GemGame.gems.length; i++) {
        console.log(GemGame.gems[i] = generateRandomNumber(1, 12));
    }
}

// Generates random numbers for the magic number and the gems
function startTheGame() {
    GemGame.matchThisNumber = generateRandomNumber(19, 120);
    GemGame.score = 0;
    setValueForGems()
    updateUI()
}

// Adds gem values to GemGame score and checks for wins or losses
function AddingGems(gems) {

    var addingToScore = GemGame.score;
    var returnScore = addingToScore + gems;
    GemGame.score = returnScore;
    console.log(GemGame.score + " give back a sum");

    // the user has got the magic number
    if (GemGame.matchThisNumber === GemGame.score) {
        GemGame.wins++;
        startTheGame();
    }

    // the user has gone over the magic number, game over
    else if (GemGame.matchThisNumber < GemGame.score) {
        GemGame.losses++;
        startTheGame();
    } 

    else {
        // empty, game continues
    }
    updateUI();
}

 // Updates the UI with whatever is the GemGame object
function updateUI() {

    $("#adding").text(GemGame.score);
    $("#matchNumb").text(GemGame.matchThisNumber);
    $("#wins").text(GemGame.wins);
    $("#losses").text(GemGame.losses)
}


// is called when the page loads
$(function() {

    startTheGame();

    $("#gem1").on("click", function() {
        var firstGem = GemGame.gems[0];
        console.log(firstGem);
        AddingGems(firstGem);

    });

    $("#gem2").on("click", function() {
        var secondGem = GemGame.gems[1];
        console.log(secondGem);
        AddingGems(secondGem);
    });

    $("#gem3").on("click", function() {
        var thirdGem = GemGame.gems[2];
        console.log(thirdGem);
        AddingGems(thirdGem);
    });

    $("#gem4").on("click", function() {
        var fourthGem = GemGame.gems[3];
        console.log(fourthGem);
        AddingGems(fourthGem);
    });

});