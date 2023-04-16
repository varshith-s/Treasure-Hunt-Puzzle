/*var expectedAnswer1 = "Victorian"; // set the expected answer
submit1.addEventListener("click", function() {
  const userAnswer1 = answer1;

  if (userAnswer1.toLowerCase() === expectedAnswer1.toLowerCase()) {
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("clueSection2").style.display = "block"; // display the next clue
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});

var submit1=document.getElementById("submitc1");
var answer1=document.getElementById("c1").value;*/
// Initialize the points variable to 0
let points = 0;

// Function to add points for correct clue
function addPoints(pointsToAdd) {
  points += pointsToAdd;
  // Update the points display on the page
//  document.getElementById('points-display').textContent = points;
}
// Get the timer element
const timer = document.getElementById('stopwatch');

// Initialize the timer variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Start the timer
const startTimer = () => {
  // Increment the timer every 10 milliseconds
  setInterval(() => {
    milliseconds += 10;
    if (milliseconds == 1000) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    // Update the timer display
    timer.textContent = `${padZero(minutes)}:${padZero(seconds)}:${padZero(Math.floor(milliseconds / 10))}`;
  }, 10);
};

// Add a zero to the timer when the value is less than 10
const padZero = (value) => {
  return value < 10 ? '0' + value : value;
};

// Stop the timer when the treasure section is reached
const stopTimer = () => {
  clearInterval(timerInterval);
};

// Start the timer when the game starts
startTimer();

// Call the addPoints function whenever the user solves a clue correctly
 // Add 12 points for correct clue

const expectedAnswer1 = "Victorian"; // set the expected answer

document.getElementById("submitc1").addEventListener("click", function(event) {
  const userAnswer1 = document.getElementById("c1").value;
  event.preventDefault();
  if (userAnswer1.toLowerCase() === expectedAnswer1.toLowerCase()) {
    alert("Correct answer! You unlocked the next clue.");
    addPoints(12);
    document.getElementById("dend").style.display = "block"; // display the next clue
    document.getElementById("clueSection1").style.display = "none";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});

const expectedAnswerde1 = "stargates"; // set the expected answer

document.getElementById("submitde1").addEventListener("click", function(event) {
  const userAnswerde1 = document.getElementById("de1").value;
  //event.preventDefault();
  var c=0;
  if (userAnswerde1.toLowerCase() === expectedAnswerde1.toLowerCase()) {
    c=1;
    addPoints(20);
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("gif1").style.display="block";
    document.getElementById("dend").style.display = "block";
    setTimeout(function(){
    document.getElementById("clueSection2").style.display = "block";},4600); // display the next clue
    setTimeout(function(){
        document.getElementById("dend").style.display = "none";},4600); 
  } else {
    alert("Sorry, you've hit a dead end. There's no treasure here.");
    alert("Your game will restart now.");
    document.getElementById("dend").style.display = "none";
    document.getElementById("introSection").style.display="block";
  }
  /*if(c==1){
    document.getElementById("dend").style.display = "none";
    document.getElementById("clueSection2").style.display = "block";
  }*/
});

const expectedAnswer2 = "Fire"; // set the expected answer

document.getElementById("submitc2").addEventListener("click", function(event) {
  const userAnswer2 = document.getElementById("c2").value;
  //event.preventDefault();
  if (userAnswer2.toLowerCase() === expectedAnswer2.toLowerCase()) {
    addPoints(12);
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("clueSection2").style.display = "none"; 
    document.getElementById("clueSection3").style.display = "block"; // display the next clue
    document.getElementById("dend").style.display = "none";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});


const expectedAnswer3 = "America";
const expectedAnswer3_1 = "US";// set the expected answer

document.getElementById("submitc3").addEventListener("click", function(event) {
  const userAnswer3 = document.getElementById("c3").value;
  //event.preventDefault();
  if (userAnswer3.toLowerCase() === expectedAnswer3.toLowerCase()||userAnswer3.toLowerCase() === expectedAnswer3_1.toLowerCase()) {
    addPoints(12);
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("clueSection3").style.display = "none"; 
    document.getElementById("clueSection4").style.display = "block"; // display the next clue
    document.getElementById("dend").style.display = "none";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});

const expectedAnswer4 = "E3"; // set the expected answer

document.getElementById("submitc4").addEventListener("click", function(event) {
  const userAnswer4 = document.getElementById("c4").value;
  //event.preventDefault();
  if (userAnswer4.toLowerCase() === expectedAnswer4.toLowerCase()) {
    addPoints(12);
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("clueSection4").style.display = "none"; 
    document.getElementById("clueSection5").style.display = "block"; // display the next clue
    document.getElementById("dend").style.display = "none";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});

var expectedAnswer5 = "6"; // set the expected answer

document.getElementById("submitc5").addEventListener("click", function(event) {
  const userAnswer5 = document.getElementById("c5").value;
  //event.preventDefault();
  if (userAnswer5 === expectedAnswer5) {
    addPoints(12);
    alert("Correct answer! You unlocked the next clue.");
    document.getElementById("clueSection5").style.display = "none"; 
 // display the next clue
    document.getElementById("dendSec2").style.display="block";
    document.getElementById("dend").style.display = "none";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
});

const expectedAnswerde2 = "BUILD"; // set the expected answer

document.getElementById("submitde2").addEventListener("click", function(event) {
  const userAnswerde2 = document.getElementById("de2").value;
  //event.preventDefault();
  if (userAnswerde2.toLowerCase() === expectedAnswerde2.toLowerCase()) {
    alert("Correct answer! You trasure has been unlocked.");
    document.getElementById("treasureSection").style.display="block"; // display the next clue
    document.getElementById("dendSec2").style.display = "none";
    window.location.href = "treasure.html";
  } else {
    alert("Sorry, you've hit a dead end. There's no treasure here.");
    alert("Your game will restart now.");
    document.getElementById("dendSec2").style.display = "none";
    document.getElementById("introSection").style.display="block";
  }
});
