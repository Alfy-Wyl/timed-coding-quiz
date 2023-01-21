// Create Variables to handle status of the quiz
let currentQuestionIndex = 0;
let time = questions.length * 30;
let timerID;


// Create Selectors using Single Element Selector to target HTML Elements
let questionsElement = document.getElementById('questions');
let timerEelement = document.getElementById('time');
let optionsElement = document.getElementById('options');
let startButton = document.getElementById('start');
let submitButton = document.getElementById('submit');
let initialElement = document.getElementById('initials');
let feedBackElement = document.getElementById('feedback');

// Add wav files to handle Right and Wrong answers
let sfxCorrect = new Audio('assets/sfx/correct.wav');
let sfxInCorrect = new Audio('assets/sfx/incorrect.wav');

// Create Function to grab the Questions
function getQuestion(){

}


// Create Function to handle Question Click by User
function questionClick(){

}


// Create Function to handle Quiz Start by User
function startQuiz(){

}


// Create Function to handle End Quiz
function endQuiz(){

}


// Create Function to handle Timer Countdown
function timerCountDown(){

}


// Create Function to handle Saving Highscore
function saveHighscore(){

}


// Create Function to check when user enters initials
function checkForEnter(event){

}


// Create an Event Listener to handle the start button when it is clicked
startButton.addEventListener("click", startQuiz);



// Create an Event Listener to handle the submit button when it is clicked
submitButton.addEventListener("click", saveHighscore);



// Create an Event Listener to handle the user initials input
initialElement.addEventListener("click", checkForEnter);
 