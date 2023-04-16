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
//Clue1
var clueSection1 = document.getElementById("clueSection1");
var clueButton1 = document.getElementById("clueButton1");
var backButton1 = document.getElementById("backButton1");
var submit1=document.getElementById("submitc1");
var answer1=document.getElementById("c1").value;

//dend
var dendSection = document.getElementById("dend");
var deButton1 = document.getElementById("deButton1");
var debackButton1 = document.getElementById("debackButton1");
//Clue2
var clueSection2 = document.getElementById("clueSection2");
var clueButton2= document.getElementById("clueButton2");
var backButton2 = document.getElementById("backButton2");
//Clue3
var clueSection3 = document.getElementById("clueSection3");
var clueButton3= document.getElementById("clueButton3");
var backButton3 = document.getElementById("backButton3");
//Clue4
var clueSection4 = document.getElementById("clueSection4");
var clueButton4= document.getElementById("clueButton4");
var backButton4 = document.getElementById("backButton4");
//Clue5
var clueSection5 = document.getElementById("clueSection5");
var clueButton5= document.getElementById("clueButton5");
var backButton5 = document.getElementById("backButton5");
//hint
var hintSec=document.getElementById("hintSec");
var hintShowButton=document.getElementById("hintShowButton");
var hintCloseButton=document.getElementById("hintCloseButton");

//dend2
var dendSection2 = document.getElementById("dendSec2");
var deButton2 = document.getElementById("deButton2");
var debackButton2 = document.getElementById("debackButton2");


var treasureSection = document.getElementById("treasureSection");
var beginButton = document.getElementById("beginButton");
var currentClueIndex = 1;
var numClues = 4; // Change this to the total number of clues
var dendSection = document.getElementById("dend");
var gif1=document.getElementById("gif1");
// Hide the instructions, clue, and treasure sections
instructionsSection.style.display = "none";
clueSection1.style.display = "none";
clueSection2.style.display = "none";
treasureSection.style.display = "none";
dendSection.style.display = "none";
clueSection3.style.display = "none";
clueSection4.style.display = "none";
clueSection5.style.display = "none";
hintSec.style.display="none";
dendSection2.style.display="none";
gif1.style.display="none";

// Add event listeners to buttons
startButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "block";
});

beginButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display = "block";
 // var clue2 = document.getElementById("clue2");
  //clue2.style.display = "none"; 
 // clueSection.innerHTML = document.getElementById("clue1").innerHTML;
});






clueButton1.addEventListener("click", function() {
    introSection.style.display = "none";
    instructionsSection.style.display = "none";
    clueSection1.style.display = "none";
    dendSection.style.display="block";
});


backButton1.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "block";
  clueSection1.style.display = "none";
});

deButton1.addEventListener("click", function() {
    introSection.style.display = "none";
    instructionsSection.style.display = "none";
    clueSection1.style.display = "none";
    dendSection.style.display="none";
    clueSection2.style.display = "block";
});

debackButton1.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="block";
  dendSection.style.display = "none";
});

clueButton2.addEventListener("click", function() {
    introSection.style.display = "none";
    instructionsSection.style.display = "none";
    clueSection1.style.display = "none";
    dendSection.style.display="none";
    clueSection2.style.display = "none";
    clueSection3.style.display = "block";
});

backButton2.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="none";
  dendSection.style.display="block";
  clueSection2.style.display="none";
});

clueButton3.addEventListener("click", function() {
    introSection.style.display = "none";
    instructionsSection.style.display = "none";
    clueSection1.style.display = "none";
    dendSection.style.display="none";
    clueSection2.style.display = "none";
    clueSection3.style.display = "none";
    clueSection4.style.display = "block";
});

backButton3.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="none";
  dendSection.style.display="none";
  clueSection2.style.display="block";
  clueSection3.style.display="none";
});


clueButton4.addEventListener("click", function() {
    introSection.style.display = "none";
    instructionsSection.style.display = "none";
    clueSection1.style.display = "none";
    dendSection.style.display="none";
    clueSection2.style.display = "none";
    clueSection3.style.display = "none";
    clueSection4.style.display = "none";
    clueSection5.style.display = "block";
});

backButton4.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="none";
  dendSection.style.display="none";
  clueSection3.style.display="block";
  clueSection4.style.display="none";

});

hintShowButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display = "none";
  dendSection.style.display="none";
  clueSection2.style.display = "none";
  clueSection3.style.display = "none";
  clueSection4.style.display = "none";
  clueSection5.style.display = "none";
  hintSec.style.display="block";
});

hintCloseButton.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display = "none";
  dendSection.style.display="none";
  clueSection2.style.display = "none";
  clueSection3.style.display = "none";
  clueSection4.style.display = "none";
  clueSection5.style.display = "block";
  hintSec.style.display="none";
});

clueButton5.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display = "none";
  dendSection.style.display="none";
  clueSection2.style.display = "none";
  clueSection3.style.display = "none";
  clueSection4.style.display = "none";
  clueSection5.style.display = "none";
  hintSec.style.display="none";
  dendSection2.style.display="block";
});
backButton5.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="none";
  dendSection.style.display="none";
  clueSection3.style.display="none";
  clueSection4.style.display="block";
  clueSection5.style.display="none";
  hintSec.style.display="none";
});

deButton2.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display = "none";
  dendSection.style.display="none";
  clueSection2.style.display = "none";
  clueSection3.style.display = "none";
  clueSection4.style.display = "none";
  clueSection5.style.display = "none";
  hintSec.style.display="none";
  dendSection2.style.display="none";
  treasureSection.style.display="block";
});

debackButton2.addEventListener("click", function() {
  introSection.style.display = "none";
  instructionsSection.style.display = "none";
  clueSection1.style.display="none";
  dendSection.style.display="none";
  clueSection3.style.display="none";
  clueSection4.style.display="none";
  clueSection5.style.display="block";
  dendSection2.style.display="none";
  hintSec.style.display="none";
});
/*instructionsButton.addEventListener("click", function() {
    instructionsSection.style.display = "block";
    clueSection.style.display = "none";
    clueSection.innerHTML = document.getElementById("clue1").innerHTML;
  });
*/
/*backButton.addEventListener("click", function() {
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
  /*var clue2 = document.getElementById("clue2");
  clue2.style.display = "block"; 
//}
// Function to hide a clue
/*function hideClue(index) {
  var clue = document.getElementById("clue" + index);
  clue.style.display = "none";
}

// Add code to show the first clue when the page loads
function showFirstClue() {
  showClue(1);
}

// Call the showFirstClue function
showFirstClue();*/
