//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var carmexScore = 0;
var burtsbeesScore = 0;
var vaselineScore = 0;
var eosScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var reset = document.getElementById("reset");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", carmex);
q1a2.addEventListener("click", eos);
q1a3.addEventListener("click", burtsbees);
q1a4.addEventListener("click", vaseline);

q2a1.addEventListener("click", eos);
q2a2.addEventListener("click", carmex);
q2a3.addEventListener("click", burtsbees);
q2a4.addEventListener("click", vaseline);

q3a1.addEventListener("click", eos);
q3a2.addEventListener("click", vaseline);
q3a3.addEventListener("click", carmex);
q3a4.addEventListener("click", burtsbees);

reset.addEventListener("click", reset);

//#TODO: Define quiz functions here
function carmex() {
  carmexScore += 1;
  questionCount += 1;
  //alert("One Point to carmex!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function eos() {
  eosScore += 1;
  questionCount += 1;
  //alert("One Point to eos!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function burtsbees() {
  burtsbeesScore += 1;
  questionCount += 1;
  //alert("One Point to burtsbees!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function vaseline() {
  vaselineScore += 1;
  questionCount += 1;
  //alert("One Point to vaseline!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (carmexScore >= 2) {
    result.innerHTML = "carmex!";
  } else if (eosScore >= 2) {
    result.innerHTML = "eos!";
  } else if (burtsbeesScore >= 2) {
    result.innerHTML = "burtsbees!";
  } else if (vaselineScore >= 2) {
    result.innerHTML = "vaseline!";
  } else {
    result.innerHTML = "Hmm.. The Sorting Hat is confused. Try again later.";
  }
}
var reset = document.getElementById("reset");
reset.addEventListener("click", resetQuiz);

function resetQuiz() {
  result.innerHTML = "";
  carmexScore = 0;
  burtsbeesScore = 0;
  eosScore = 0;
  vaselineScore = 0;
  enableQuestions();
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}
