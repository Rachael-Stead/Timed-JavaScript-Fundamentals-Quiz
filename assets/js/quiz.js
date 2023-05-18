
// time starts
function startTimer() { 
}  
alert("You are about to start the timer, continue?")
    timer = setInterval(() => {
      totalTime--;
      document.getElementById('timer').innerText = totalTime;
      
      if (totalTime === 0) {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);

// and then we are presented with a question set
var quizQuestions = [    
  {
    question: "What is console.log used for",
    a:" It helps to develop an animation",
    b:"It Logs data to the console",
    c:"It's gibberish",
    correct: "b",
  },         

  {
  question:"What is  *===* in JavaScript?",
  a: "It's used to create text space",
  b:"It inductates the value is equal",
  c:"It checks if two values are equal and of the same type.",
  correct: "c",
      },
  {
  question:"What is the purpose of the *for* loop in JavaScript?",
  a: " It has no meaning other than text",
  b:" Execute a set of statements repeatedly until a certain condition is met.",
  c:"It creates a loop *for* the webpage",
  correct: "b",
      },
   {
  question:"What is an array in JavaScript?",
  a: "An array is a collection of values stored in a single variable.",
  b:"it is a brilliant display feature",
  c:"It's not punny",
  correct: "a",
   
  }, ];

//get elements by their ID to be shown as inner-text with for loop
var questionElement = document.getElementById("question");
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
  
var totalTime = 60; 
var score = 0; 
var timer;       //for setInterval ^^
var quizOver = 0


  for (var i = 0; i < quizQuestions.length; i++) {

    console.log("question:" + quizQuestions[i].question);
    console.log("a:" + quizQuestions[i].a);
    console.log("b:" + quizQuestions[i].b);
    console.log("c:" + quizQuestions[i].c);


    var correctAnswer = (quizQuestions[i].correct);
    console.log(correctAnswer)

  
questionElement.innerText = quizQuestions[i].question;
btnA.innerText = quizQuestions[i].a;
btnB.innerText = quizQuestions[i].b;
btnC.innerText = quizQuestions[i].c;

// by selecting the correct answer I am presented with another question
var selectedAnswer = addEventListener("click",

function answerQuestion() {
console.log("Button clicked!"); //working
  
  if (selectedAnswer === correctAnswer){ //not working
  score++;

  }else{

    alert("incorrect");

  }
});

}



// but if I answer a question incorrectly time is subtracted from the clock


// all questions are answered or the timer reaches 0 the game is over







/*
SAVE SCORE AND DATA - (modal box popup?)

WHEN the game is over
THEN I can save my initials and my score 
*/
