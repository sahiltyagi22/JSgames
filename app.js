
let userChoiceDisplay = document.getElementById('userchoice')
let computerChoiceDisplay = document.getElementById('computerchoice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')

let userchoice
let computerChoice

possibleChoices.forEach(choice => choice.addEventListener ('click', (e)=>{
    userchoice = e.target.id
    userChoiceDisplay.innerHTML = userchoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissor'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

  function getResult() {
    if (computerChoice === userchoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userchoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userchoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userchoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userchoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userchoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userchoice === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result
  }