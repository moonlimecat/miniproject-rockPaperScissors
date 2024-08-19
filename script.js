const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
const comPlay = document.getElementById("comPlay");
const youPlay = document.getElementById("youPlay");
const computer = document.querySelector(".computer");

let rock;
let paper;
let scissors;

rock = `<img src="./rock.png" />`;
paper = `<img src="./paper.png" />`;
scissors = `<img src="./scissors.png" />`;

function getRandomNum() {
  return Math.floor(Math.random() * 3) + 1;
}

function rockPaperScissors(result) {
  if (result === 1) return `${rock}`;
  if (result === 2) return `${paper}`;
  return `${scissors}`;
}

function playRps() {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();

  comPlay.innerHTML = rockPaperScissors(randomNum1);
  youPlay.innerHTML = rockPaperScissors(randomNum2);
}

function toPlay() {
  playBtn.style.display = "block";
  resetBtn.style.display = "none";
}

function toReset() {
  playBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function toClear() {
  comPlay.innerHTML = "";
  youPlay.innerHTML = "";
}

playBtn.onclick = function () {
  toReset();
  playRps();
};

resetBtn.onclick = function () {
  toPlay();
  toClear();
};
