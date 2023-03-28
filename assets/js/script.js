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
    title: "What's the correct term?",
    optionA: "Java",
    optionB: "JavaScript",
    optionC: "JavaJuice",
    optionD: "JambaScript",
    answer: "B",
  },
  {
    title: "Commonly used data types don't include... ?",
    optionA: "Booleans",
    optionB: "Strings",
    optionC: "Numbers",
    optionD: "Square brackets",
    answer: "D",
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    optionA: "Script",
    optionB: "Header",
    optionC: "Span",
    optionD: "Button",
    answer: "A",
  },
  {
    title: "JavaScript is a __________ language.",
    optionA: "Spanish",
    optionB: "Styling",
    optionC: "Scripting",
    optionD: "None of the above",
    answer: "C",
  },
  {
    title: "What symbol is used to compare if two values are stricly equal?",
    optionA: "==",
    optionB: "=",
    optionC: "===",
    optionD: "====",
    answer: "C",
  },
];
