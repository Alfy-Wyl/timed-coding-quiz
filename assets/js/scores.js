// Create Functions to execute printing and clearing highscores

function printHighScores(){
    let = highScores = JSON.parse(localStorage.getItem('highscores')) || [];

    highScores.sort(function(a, b) {
        return b.score - a.score;
    })

    highScores.forEach(function(score) {
        let li = document.createElement('li');
        li.textContent = `${score.initials} - ${score.score}`

        let ol = document.getElementById('highscores');
        ol.appendChild(li);
    })

}


function clearHighScores(){

}


// Set a Variable for the Clear buttton
// Add an Event Listener to execute a specific task when the button is clicked

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);


// Call the function printHighscores
printHighScores()