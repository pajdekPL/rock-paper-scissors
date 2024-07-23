type MovesType = "ROCK" | "PAPER" | "SCISSORS"
const MOVES: MovesType[] = ["ROCK", "PAPER", "SCISSORS"]
const WINNING_AGAINST = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
}
type Result = "Computer" | "User" | "Tie"

export class RockPaperScissors {
    userScore = 0;
    computerScore = 0;
    winningScore = 5;
    scissorsButton = document.querySelector("#scissors")
    rockButton = document.querySelector("#rock")
    paperButton = document.querySelector("#paper")
    scoreDiv = document.querySelector("#score")

    generateComputerMove(): MovesType {
        return MOVES[~~(Math.random() * MOVES.length)]
    }
    takeUserInput(): MovesType {
        let userInput = prompt("Please type your choice: ROCK PAPER SCISSORS: ") as MovesType
        while(!MOVES.includes(userInput)) {
            userInput = prompt("Please type your choice from ROCK PAPER SCISSORS: ") as MovesType
        }
        return userInput
    }
    decideWinner(computerMove: MovesType, playerMove: MovesType): void {
        if (computerMove === playerMove) {
            console.log(`It is a tie!`)
        } else if (WINNING_AGAINST[computerMove] === playerMove) {
            console.log(`Computer win!`)
            this.computerScore += 1
        } else {
            console.log(`You win!`)
            this.userScore += 1
        }
    }
    addButtonsListeners() {
        this.scissorsButton.addEventListener("click", () => this.playRound("SCISSORS"))
        this.rockButton.addEventListener("click", () => this.playRound("ROCK"))
        this.paperButton.addEventListener("click", () => this.playRound("PAPER"))

    }
    playRound(userMove: MovesType): void {
        const computerMove = this.generateComputerMove()
        const winner = this.getWinner(userMove, computerMove)
        if (winner === "Computer") this.computerScore += 1
        if (winner === "User") this.userScore += 1
        this.displayScore()
        console.log(`Computer: ${this.computerScore} vs User ${this.userScore}`)
    }
    displayScore(){
        if(this.computerScore < this.winningScore && this.userScore < this.winningScore) {
            this.scoreDiv.textContent = `User score: ${this.userScore} vs Computer score: ${this.computerScore}`
        }
        else if(this.computerScore >= this.winningScore){
            alert("Computer win!")
            this.resetGame()
        } else{
            alert("User win!")
            this.resetGame()
        }
    }

    resetGame(){
        this.computerScore = 0;
        this.userScore = 0;
        this.scoreDiv.textContent = ""
    }

    getWinner(userMove: MovesType, computerMove: MovesType): Result {
        if (computerMove === userMove) {
            return "Tie"
        } else if (WINNING_AGAINST[computerMove] === userMove) {
            return "Computer"
        } else {
            return "User"
        }
    }
}


const game = new RockPaperScissors()
game.addButtonsListeners()
console.log(`Current score User vs Computer: ${game.userScore} vs ${game.computerScore}`)