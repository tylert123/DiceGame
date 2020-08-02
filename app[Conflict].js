/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Sets value
document.querySelector("#current-" + activePlayer).textContent;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// Gets value
var x = document.querySelector("#score-0").textContent;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  //diceDOM;
  if (dice > 1) {
    document.querySelector("#current-" + activePlayer).textContent = dice;
    diceDOM.
  }

  // 3. Update the round score IF the rolled number was NOT a 1
});
