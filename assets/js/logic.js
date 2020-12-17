//defining variables

var score

var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var userScoreEl = document.getElementById("userScore");
var questionsEl = document.getElementById("questions");
var submitScoreEl = document.getElementById("#submit-score");
var answerChoices = document.getElementById("answers")
var timerEl = document.getElementById("timer")
var secondsLeft = (questions.length)
var answer;
var questioNumber = -1;

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    window.location.href="./highscores.html"
})

