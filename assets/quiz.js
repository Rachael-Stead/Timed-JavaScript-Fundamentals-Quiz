
alert('You are about to start the timer, do you wish to continue?');
let totalTime = 15; //  set quiz time
let currentQuestion = 0; // initialize the current question to the first question
let score = 0; // initialize the score to 0
let timer; // variable to store the setInterval function
let quizOver = 0

// function to start the timer 
startTimer();

function startTimer() { //make time left more readable
  timer = setInterval(() => {
    totalTime--;
    document.getElementById('timer').innerText = totalTime;

    if (totalTime === 0) {
      clearInterval(timer);
      quizOver(); //error
    }
  }, 1000);
}
const quizData = [
    {           //quiz questions to be asked
question:"What is the console.log function used for?",
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
 
}, 
      
];

console.log(quizData);

                //fetching options
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl= document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0



loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]


    questionEl.innerText =currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

}

function deselectAnswers(){
    answerEls.forEach (answerEl => answerEl.checked = false)
}
  
function getSelected(){ const answerEls = document.querySelectorAll(".answer");
    var answer;
    for(const answerEl of answerEl){ //error
        if (answerEl.checked) { 
            answer = answerEl.value
            break;
    }

}
}

submit.addEventListener ("click", () => {
    const answer = getSelected() //error
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
            {
            currentQuiz++
console.log(currentQuiz);

        if (currentQuiz < quizData.length) {
                    
            loadQuiz()

                } else {
                
                    quiz.innerHTML = `
                    <h2>You Answered ${score}/${quizData.length} Questions Correctly!</h2>
                    <button onclick"location.reload ()"> 
                    `
                    
                } // not complete
            }
        }
    }
})              