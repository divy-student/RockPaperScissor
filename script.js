let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const paraUserScore = document.querySelector(".user-score");
const paraCompScore = document.querySelector(".comp-score");

const genCompChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
    userScore++;
    paraUserScore.innerText = (userScore);
    console.log("You win!");
    msg.innerText = (`You win! your ${userChoice} beats ${compChoice}`);
    msg.style.backgroundColor = "green";
    }else {
        compScore++;
        paraCompScore.innerText = (compScore);
        console.log("You lose!");
        msg.innerText = (`You lost! ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true ;
        if(userChoice === "Rock") {
            //papar,scissor
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            // rock , scissor
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);       
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});