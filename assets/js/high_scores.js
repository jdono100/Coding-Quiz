var maxHighScores = 10;
/* Element Selection */
var playerName = document.getElementById("playername");
var saveBtn = document.getElementById("save-score-btn");
var finalScore = document.getElementById("finalscore");

// Use local storage and JSON.parse to make an array of high scores
var highScoresList =  JSON.parse(localStorage.getItem("highScoresList")) || [];
// Use localStorage to call and update the most recent score on the final screen
var lastScore = localStorage.getItem("lastScore");
finalScore.innerText = lastScore;

// Make a function for disabling/enabling names from being saved
playerName.addEventListener("keyup", () => {
    saveBtn.disabled = !playerName.value;
})

// Make a function for the save button being clicked
function saveHighScore(event) {
    event.preventDefault();
    // Make an object with properties referencing the score and playerName
    var score = {
        score: JSON.parse(lastScore),
        name: playerName.value
    };
    // Push the score to the highScoresList
    highScoresList.push(score);
    // Sort the list using the sort js function
    highScoresList.sort( (a, b) => {
        // Sorts the parameters by checking if the new score is higher than an old one
        return b.score - a.score;
    })
    // Deletes scores that go past the maximum amount
    highScoresList.splice(10);
    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));
    playerName.value = "";
}