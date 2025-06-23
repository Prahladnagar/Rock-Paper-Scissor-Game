// let player_choice='';
let pscr = 0;
let cscr = 0;
let round = 1;

function start(choice) {
  document.querySelector(".match-round").innerText = `MATCH ROUND:${round}`;
  if (round === 5) {
    if (pscr > cscr) {
      document.querySelector(".popup-text").innerText = "You are the winner!";
    } else {
      document.querySelector(".popup-text").innerText =
        "Computer is the winner!";
    }
    openpopup();
  }
  round++;
  let cchoice = botChoice();
  if (choice === "stone") {
    insertimage("r.png");
    if (cchoice == "scissor") {
      insertimageforbot("s3.png");
      result("won");
    } else if (cchoice === "stone") {
      insertimageforbot("r.png");
      result("tie");
      round--;
    } else {
      insertimageforbot("p.png");
      result("lose");
    }
  } else if (choice === "paper") {
    insertimage("P.png");
    if (cchoice == "stone") {
      insertimageforbot("r.png");
      result("won");
    } else if (cchoice === "paper") {
      insertimageforbot("p.png");
      result("tie");
      round--;
    } else {
      insertimageforbot("s3.png");
      result("lose");
    }
  } else {
    insertimage("s3.png");
    if (cchoice == "paper") {
      insertimageforbot("p.png");
      result("won");
    } else if (cchoice === "scissor") {
      insertimageforbot("s3.png");
      result("tie");
      round--;
    } else {
      insertimageforbot("r.png");
      result("lose");
    }
  }
}

function insertimage(choice) {
  let div = document.querySelector(".ppanel");
  div.style.backgroundImage = `url('${choice}')`;
  div.style.rotate = "90deg";
}
function insertimageforbot(choice) {
  let div = document.querySelector(".cpanel");
  div.style.backgroundImage = `url('${choice}')`;
  div.style.rotate = "270deg";
}
function botChoice() {
  let choice = ["stone", "paper", "scissor"];
  let randomChoice = choice[Math.floor(Math.random() * 3)];
  return randomChoice;
}
function result(res) {
  if (res === "won") {
    pscr++;
    document.querySelector(".pscore").innerText = `PLAYER SCORE: ${pscr}`;
    document.querySelector(".result").innerText = "You won!";
  } else if (res == "lose") {
    cscr++;
    document.querySelector(".cscore").innerText = `COMPUTER SCORE: ${cscr}`;
    document.querySelector(".result").innerText = "You lose!";
  } else {
    document.querySelector(".result").innerText = "Match tie!";
  }
}
function openpopup() {
  let popup = document.querySelector(".popup");
  popup.style.transform = "scale(1)";
  popup.style.visibility = "visible";
  document.querySelector(".popup-container").style.visibility = "visible";
  if (cscr > pscr) {
    document.querySelector(".popup-text").style.innerText = "You are the loser";
    document.querySelector(".popup-image").style.backgroundImage =
      "url('loser.png')";
  } else {
    document.querySelector(".popup-text").style.innerText =
      "You are the Winner";
    document.querySelector(".popup-image").style.backgroundImage =
      "url('winner.png')";
  }
}
function closepopup() {
  cscr = 0;
  pscr = 0;
  round = 1;
  document.querySelector(".pscore").innerText = `PLAYER SCORE: ${pscr}`;
  document.querySelector(".cscore").innerText = `COMPUTER SCORE: ${cscr}`;
  document.querySelector(".match-round").innerText = `MATCH SCORE: ${round}`;
  let popup = document.querySelector(".popup");
  popup.style.transform = "scale(0.05)";
  popup.style.visibility = "hidden";
  document.querySelector(".popup-container").style.visibility = "hidden";
}
