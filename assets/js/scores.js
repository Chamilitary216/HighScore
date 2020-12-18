var clearScore = document.querySelector("#clear");
var theHighScore = document.querySelector("#highscore");



function printScore(){
    let theHighScore = localStorage.getItem("score");
    let score = document.createElement('li');
    let userName = localStorage.getItem("user");


}

function wipeHighScore() {
    theHighScore.textContent = ""
    localStorage.clear();
    console.log(wipeHighScore)
}

clearScore.addEventListener("click", wipeHighScore)

printScore();