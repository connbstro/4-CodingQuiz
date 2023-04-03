// JavaScript global Variables
const rate = document.querySelector("#rate");
const highScoreLink = document.querySelector("#highScoreLink");
const timer = document.querySelector("#timer");
const introSect = document.querySelector("#intro");
const startBtn = document.querySelector("#start");
const questionSelect = document.querySelector("#questionSelect");
const gameOver = document.querySelector("#gameOver");
const submitBtn = document.querySelector("#submitBtn");
const highScorePage = document.querySelector("#highScorePage");
const highScores = document.querySelector("#highScores");
const mainBtn = document.querySelector("#main");
const clearBtn = document.querySelector("#clear");

// Questions array
const questions = [
  {
    prompt: "What's the correct term?",
    optionA: "Java",
    optionB: "JavaScript",
    optionC: "JavaJuice",
    optionD: "JambaScript",
    answer: "B",
  },
  {
    prompt: "Commonly used data types don't include... ?",
    optionA: "Booleans",
    optionB: "Strings",
    optionC: "Numbers",
    optionD: "Square brackets",
    answer: "D",
  },
  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    optionA: "Script",
    optionB: "Header",
    optionC: "Span",
    optionD: "Button",
    answer: "A",
  },
  {
    prompt: "JavaScript is a __________ language.",
    optionA: "Spanish",
    optionB: "Styling",
    optionC: "Scripting",
    optionD: "None of the above",
    answer: "C",
  },
  {
    prompt: "What symbol is used to compare if two values are stricly equal?",
    optionA: "==",
    optionB: "=",
    optionC: "===",
    optionD: "====",
    answer: "C",
  },
];

// Variables
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let secondsLeft = 60;
let score = 0;
let interval;

// Hide section
function hide(y) {
  y.style.display = "none";
}

// Show section
function show(z) {
  z.style.display = "block";
}

// Function to start quiz
startBtn.addEventListener("click", function () {
  hide(introSect);
  show(questionSelect);
  getQuestions();
  countdown();
  timer.textContent = "Timer: " + secondsLeft + " second(s)";
});

// Countdown function
function countdown() {
  show(timer);
  interval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft + " second(s)";
    if (secondsLeft <= 0) {
      stopTimer();
      finalizeQuiz();
    }
  }, 1000);
}

// Stop timer function
function stopTimer() {
  clearInterval(interval);
  hide(timer);
}

// Get questions from the array
function getQuestions() {
  const questionPrompt = document.querySelector("#question");
  const optionA = document.querySelector("#A");
  const optionB = document.querySelector("#B");
  const optionC = document.querySelector("#C");
  const optionD = document.querySelector("#D");

  questionPrompt.textContent = questions[currentQuestion].prompt;
  optionA.textContent = questions[currentQuestion].optionA;
  optionB.textContent = questions[currentQuestion].optionB;
  optionC.textContent = questions[currentQuestion].optionC;
  optionD.textContent = questions[currentQuestion].optionD;
}

// Show if answer is correct or incorrect
function validateAnswer(x) {
  show(rate);
  if (x == questions[currentQuestion].answer) {
    score++;
    rate.textContent = "Correct!";
  } else {
    secondsLeft = secondsLeft - 10;
    rate.textContent = "Incorrect";
  }
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    getQuestions();
  } else {
    stopTimer();
    finishQuiz();
  }
}

// Function to stop quiz and save user's initials and score
function finishQuiz() {
  hide(timer);
  hide(questionSelect);
  show(gameOver);
  const showScore = document.querySelector("#score");
  showScore.textContent = "Your final score is " + score + ".";
}

//Function to render high scores
function renderHighScores() {
  //Gets scores array from local storage
  const allScores = JSON.parse(localStorage.getItem("scores")) || [];
  allScores.sort((a, b) => b.score - a.score);
  for (let i = 0; i < allScores.length; i++) {
    const savedScores = document.createElement("p");
    savedScores.textContent =
      i +
      1 +
      ". " +
      allScores[i].user +
      " - " +
      allScores[i].score +
      " point(s)";
    highScores.appendChild(savedScores);
  }
}

// Function to save user's initials and score in local storage
submitBtn.addEventListener("click", function () {
  let initials = document.querySelector("#initials").value;
  if (initials === "") {
    alert("Enter your initials");
  } else {
    hide(highScoreLink);
    hide(rate);
    hide(gameOver);
    show(highScorePage);
    const newPlayer = {
      user: initials,
      score,
    };

    // Gets scores array from local storage
    const allScores = JSON.parse(localStorage.getItem("scores")) || [];
    // Pushes newPlayer's onjects in an array
    allScores.push(newPlayer);
    // Saves pushed initials and scores into local storage
    localStorage.setItem("scores", JSON.stringify(allScores));
    renderHighScores();
  }
});

// Function to show high scores
highScoreLink.addEventListener("click", function () {
  show(highScorePage);
  hide(introSect);
  hide(highScoreLink);
  hide(questionSelect);
  hide(gameOver);
  hide(rate);
  hide(timer);
  stopTimer();
  renderHighScores();
});

// Function to go back to main page
mainBtn.addEventListener("click", function () {
  reset();
  show(introSect);
  show(highScoreLink);
  hide(highScorePage);
  initials.value = "";
});

// Function to clear high scores
clearBtn.addEventListener("click", function () {
  removeChild();
  localStorage.removeItem("scores");
});

//Function to reset variables for a new game
function reset() {
  score = 0;
  currentQuestion = 0;
  secondsLeft = 60;
  removeChild();
}

// Remove child function
function removeChild() {
  const parent = document.querySelector("#highScores");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
