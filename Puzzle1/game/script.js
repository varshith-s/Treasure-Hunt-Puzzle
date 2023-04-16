// Define variables
/*var startButton = document.getElementById("startButton");
var introSection = document.getElementById("introSection");
var instructionsSection = document.getElementById("instructionsSection");
var instructionsButton = document.getElementById("instructionsButton");
var backButton = document.getElementById("backButton");
var clueSection = document.getElementById("clueSection");
var clueButton = document.getElementById("clueButton");

// Hide the instructions and clue sections
instructionsSection.style.display="none";
clueSection.style.display = "none";

// Add event listeners to buttons
startButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "block";
});

instructionsButton.addEventListener("click", function() {
  instructionsSection.style.display = "none";
  clueSection.style.display = "block";
  // Add code to show the first clue
});

backButton.addEventListener("click", function() {
  instructionsSection.style.display = "none";
  introSection.style.display = "block";
});

clueButton.addEventListener("click", function() {
  // Add code to show the next clue
});

// Add code to show the first clue when the page loads
function showFirstClue() {
  // Add code to show the first clue
}

// Call the showFirstClue function
showFirstClue();
*/



// Define variables
var startButton = document.getElementById("startButton");
var introSection = document.getElementById("introSection");
var instructionsSection = document.getElementById("instructionsSection");
var instructionsButton = document.getElementById("instructionsButton");
var backButton = document.getElementById("backButton");
var clueSection = document.getElementById("clueSection");
var clueButton = document.getElementById("clueButton");
var treasureSection = document.getElementById("treasureSection");
var beginButton = document.getElementById("beginButton");
var currentClueIndex = 1;
var numClues = 4; // Change this to the total number of clues
var dendSection = document.getElementById("dend");

// Hide the instructions, clue, and treasure sections
instructionsSection.style.display = "none";
clueSection.style.display = "none";
treasureSection.style.display = "none";
dendSection.style.display = "none";

// Add event listeners to buttons
startButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "block";
});

beginButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection.style.display = "block";
 // var clue2 = document.getElementById("clue2");
  //clue2.style.display = "none"; 
 // clueSection.innerHTML = document.getElementById("clue1").innerHTML;
});

/*instructionsButton.addEventListener("click", function() {
    instructionsSection.style.display = "block";
    clueSection.style.display = "none";
    clueSection.innerHTML = document.getElementById("clue1").innerHTML;
  });
*/
backButton.addEventListener("click", function() {
  instructionsSection.style.display = "none";
  introSection.style.display = "block";
});

clueButton.addEventListener("click", function() {
  currentClueIndex++;
  if (currentClueIndex > numClues) {
    treasureSection.style.display = "block";
    clueSection.style.display = "block";
  } else {
    hideClue(currentClueIndex );
    showClue(currentClueIndex+1);
  }
});

// Function to show a clue
function showClue(index) {
 /* var clue = document.getElementById("clue" + index);
  clue.style.display = "block";*/
  var clue2 = document.getElementById("clue2");
  clue2.style.display = "block"; 
}

// Function to hide a clue
function hideClue(index) {
  var clue = document.getElementById("clue" + index);
  clue.style.display = "none";
}

// Add code to show the first clue when the page loads
function showFirstClue() {
  showClue(1);
}

// Call the showFirstClue function
showFirstClue();
