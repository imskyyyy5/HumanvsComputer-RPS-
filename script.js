const choices= ["rock","paper","scissors"];
let humanScore = 0;
let computerScore=0;
function computerChoices()
{
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
}
function play(humanChoice)
{
    const computer = computerChoices();
    console.log("Human:",humanChoice);
    console.log("Computer:",computer);

    if(humanChoice === computer) {
        document.getElementById("result").textContent = "DRAW!";
    }
    else if(
        (humanChoice === "rock" && computer === "scissors") ||
        (humanChoice === "paper" && computer === "rock") ||
        (humanChoice === "scissors" && computer === "paper")
    ) {
        humanScore++;
        

    
    document.getElementById("result").textContent = "Human Wins!";
    document.getElementById("human-score").textContent = humanScore;
    }
else {
    computerScore++;
    document.getElementById("result").textContent = "Computer Wins!";
    document.getElementById("computer-score").textContent = computerScore;

}
document.getElementById("choices").textContent = "Human:" + humanChoice + "|Computer:" + computer;

}
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    document.getElementById("human-score").textContent =0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("result").textContent = "Choose your Weapon!";
    document.getElementById("choices").textContent = "";
}