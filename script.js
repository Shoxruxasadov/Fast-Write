let data = [
  "Apple",
  "Hello",
  "World",
  "Beautiful",
  "Rock",
  "Paper",
  "Scissor",
  "sailboat",
  "plank",
  "hotel",
  "letter",
  "somersault",
  "hovercraft",
  "Advertisement",
  "devious",
  "Darkness",
  "son-in-law",
  "Organization",
  "fad",
  "LOL",
  "Bodring",
  "prank",
  "guitar",
  "Mortified",
  "neutron",
  "Compromise",
  "wish",
  "programmer",
  "IELTS",
];
let words = data[Math.floor(Math.random() * data.length)];
let mirror = document.getElementById("mirror");
mirror.innerText = words;

let count = 60;
const selectInp = document.getElementById("selectInp");
const titleLevels = document.getElementById("titleLevels");
const titleTimes = document.getElementById("titleTimes");
const writeGameInp = document.getElementById("writeGameInp");
function selectFn() {
  clearInterval(x);
  writeGameInp.removeAttribute("onkeyup");
  titleLevels.innerText = selectInp.value;
  if (selectInp.value == "Easy") {
    titleTimes.innerText = 60;
    count = 60;
  } else if (selectInp.value == "Medium") {
    titleTimes.innerText = 30;
    count = 30;
  } else if (selectInp.value == "Hard") {
    titleTimes.innerText = 15;
    count = 15;
  }
}

function counterMinus() {
  if (count === 0) {
    return;
  } else {
    count--;
  }
  titleTimes.innerHTML = count;
}

let x;
function playGame() {
  writeGameInp.value = "";
  x = setInterval(counterMinus, 1000);
  writeGameInp.setAttribute("onkeyup", "writeInp(this)");
}
function ResumeGame() {
  writeGameInp.value = "";
  clearInterval(x)
  writeGameInp.removeAttribute("onkeyup");
}

function writeInp(inp) {
  if (mirror.innerText === inp.value) {
    inp.value = ""
    words = data[Math.floor(Math.random() * data.length)];
    mirror.innerText = words;
  } else {
    return
  }
}

