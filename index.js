const readlineSync = require("readline-sync");

let score = 0;

const highestScore = 3;
//array of que and ans
const queans =[
    {
        que : "Do you know my name?: ",
        ans : "Akshay"
    },
    {
        que : "where do i live?: ",
        ans : "vasai"
    },
    {
        que : "what is my age? ",
        ans : "19"
    },
    {
        que : "what i am pursuing?: ",
        ans : "BE"
    },
    {
        que : "what is my favourite anime?: ",
        ans : "one piece"
    },
]

function start(){
    const user = readlineSync.question("please enter your name: ");
    console.log(`wlecome ${user}`);
}

function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("right ans");
        score = score + 1;
    } else {
        console.log("wrong ans");
    }

    console.log("score: ", score);
    console.log("-------------")

}

function game() {
    for (var i=0; i<queans.length; i++) {
      var currentQuestion = queans[i];
      play(currentQuestion.que, currentQuestion.ans)
    }
  }

  function showScores() {
    console.log("YAY! You SCORED: ", score);

    if(score>highestScore){
        console.log("congrats,you beat the highest scorer")
    }else {
        console.log("try to beat the highestscore:3")
    }

  }

start();
game();
showScores();