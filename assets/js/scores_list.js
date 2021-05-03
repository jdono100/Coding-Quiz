var maxHighScores = 10;
/* Element Selection */
var popup = document.getElementById("pop-up-id");
var popupList = document.getElementById("scores-list");
var openScores = document.getElementById("open-scores");
var closeScores = document.getElementsByClassName("close-box")[0];

// Open scores list on view high scores
openScores.onclick = function() {
    popup.style.display = "flex";
    showScores();
}
// Close scores list on close button
closeScores.onclick = function() {
    popup.style.display = "none";
}

// Function to populate the scores page with highscores retrieved from localStorage
function showScores() {
    // Empty out the list first
    popupList.innerHTML = "";
    // Parse the scores list into an array
    var parsedScoresList = JSON.parse(localStorage.getItem("highScoresList"));
    // For loop to iterate list items over the length of the array
    for (i = 0; i < parsedScoresList.length; i++) {
        var scoreNode = document.createElement("LI");
        var score = parsedScoresList[i];
        scoreNode.textContent = score.name + " scored " + score.score + "!";
        popupList.appendChild(scoreNode);
    }
}