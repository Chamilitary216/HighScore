//defining variables

var score;
var interval;
var answer;

var questionTitle = document.getElementById("question-title")
var startButton = document.getElementById("startBtn");
var submitButton = document.getElementById("submitBtn");
var userScoreEl = document.getElementById("userScore");
var questionsEl = document.getElementById("questions");
var submitScoreEl = document.getElementById("submit-score");
var answerChoices = document.getElementById("choices")
var startScreen = document.getElementById("start-screen")
var timerEl = document.getElementById("timer")
var timeClock = document.getElementById("time");
var secondsLeft = (questions.length);
var questionNumber = 0;

startButton.addEventListener("click", startGame);

function startGame() {
console.log("startGame")
    startTimer();
    switchScreen();
    showQuestion();
    
    // start first question
    // Hide Start Screen
}

//start timer
function startTimer() {   
    interval = setInterval(function() {
        timeClock.textContent--;
        console.log(timeClock.textContent)
        if  (parseInt(timeClock.textContent)===0){
            clearInterval(interval);
        }
        }


    , 1000)
}

function switchScreen() {
    startScreen.className = "hide";
    questionsEl.className = "start";

}

// start first question

function showQuestion(){ 
    //build buttons
    //fill in question for title
    questionTitle.textContent=questions[questionNumber].title;
    makeButtons(questions[questionNumber].choices);

    



}

function makeButtons(make){
    answerChoices.innerHTML="";
    for (var i=0;i<make.length; i++){
        var button = document.createElement("button");
        var text = document.createTextNode(make[i]);
        button.appendChild(text)
        button.id=make[i]
        button.value=make[i]
        button.onclick= answerSheet;
        answerChoices.appendChild(button)

    }

    function answerSheet(){
        
    }

    
}




// submitBtn.addEventListener("click", function (event) {
//     event.stopPropagation();
//     addScore();
//     window.location.href="./highscores.html"
// })