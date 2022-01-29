//Scoreboard

// variable declaration
var score1 = 0,
  score2 = 0;
var teamA = document.querySelector("#t1score");
var teamB = document.querySelector("#t2score");

//To increase the score of TeamA by 1
var btnA = document.querySelector("#btn1");
btnA.addEventListener("click", function () {
  score1++;
  teamA.textContent = score1;
})

//To increase the score of TeamB by 1
var btnB = document.querySelector("#btn2");
btnB.addEventListener("click", function () {
  score2++;
  teamB.textContent = score2;
})

//To reset the scores
var reset = document.querySelector("#rst-btn");
reset.addEventListener("click", function () {
  score1 = 0;
  teamA.textContent = score1;
  score2 = 0;
  teamB.textContent = score2;
})