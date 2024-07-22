type MovesType = "ROCK" | "PAPER" | "SCISSORS"
const MOVES: MovesType[] = ["ROCK", "PAPER", "SCISSORS"]
const WINNING_AGAINST = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
}

export class RockPaperScissors {
    userScore = 0;
    computerScore = 0;
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
    play(): void {
        const computerMove = this.generateComputerMove()
        const userMove = this.takeUserInput()
        console.log(`USER MOVE: ${userMove} vs COMPUTER MOVE: ${computerMove}`)
        this.decideWinner(computerMove, userMove)
    }
}


const game = new RockPaperScissors()
let numberOfRounds = 3
while(numberOfRounds > 0) {
    game.play()
    console.log(`Current score User vs Computer: ${game.userScore} vs ${game.computerScore}`)
    numberOfRounds -= 1
}