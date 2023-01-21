// Create Variables to handle status of the quiz
let currentQuestionIndex = 0;
let time = questions.length * 30;
let timerID;


// Create Selectors using Single Element Selector to target HTML Elements
let questionsElement = document.getElementById('questions');
let timerElement = document.getElementById('time');
let optionsElement = document.getElementById('options');
let startButton = document.getElementById('start');
let submitButton = document.getElementById('submit');
let initialElement = document.getElementById('initials');
let feedBackElement = document.getElementById('feedback');

// Add wav files to handle Right and Wrong answers
let sfxCorrect = new Audio('assets/sfx/correct.wav');
let sfxInCorrect = new Audio('assets/sfx/incorrect.wav');


// Create Function to handle Question Click by User
function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 30;

        if(time < 0) {
            time = 0;
        }

        timerElement.textContent = time;

        feedBackElement.textContent = 'Wrong'
        sfxInCorrect.play();
    }   else {
        feedBackElement.textContent = 'Correct!';
        sfxCorrect.play();
    }

    feedBackElement.setAttribute('class', 'feedback');

    setTimeout(function(){
        feedBackElement.setAttribute('class', 'feedback hide');
    }, 1000);





}
  

// Create Function to grab the Questions
function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionElement = document.getElementById('question-title');

    questionElement.textContent = currentQuestion.title;

    optionsElement.innerHTML = '';

    // Create a For Each Loop to loop through the Array of options
    currentQuestion.options.forEach(function(option, index) {
        let optionButton = document.createElement('button');
        
        optionButton.setAttribute('class', 'option');
        optionButton.setAttribute('value',  option);

        optionButton.textContent = `${index + 1}. ${option}`

        optionButton.addEventListener('click', questionClick);

        optionsElement.append(optionButton);
    })

}

// Create Function to handle End Quiz
function endQuiz(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById('end-screen');
    endScreenElement.removeAttribute('class');

    let finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = time;

    questionsElement.setAttribute('class', 'hide');

}


// Create Function to handle Timer Countdown
function timerCountDown(){
    time--;
    timerElement.textContent = time;

    // Create an If Statement to handle interactivity when quiz ends
    if(time <= 0){
        endQuiz();
    }



}


// Create Function to handle Quiz Start by User
function startQuiz(){
    let startScreenElement = document.getElementById('start-screen');
    startScreenElement.setAttribute('class', 'hide');

    questionsElement.removeAttribute('class');

    timerID = setInterval(timerCountDown, 1000)

    timerElement.textContent = time;

    getQuestion();

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
 