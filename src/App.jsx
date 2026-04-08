import './App.css'
import React, { useState } from 'react'

const App = () => {

  const [userMove, setUserMove] = useState("")
  const [computerMove, setComputerMove] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [rounds, setRounds] = useState(0)
  const [result, setResult] = useState("")
  const [history, setHistory] = useState([])
  const [streak, setStreak] = useState(0)

  const handleClick = (userChoice) => {

    let compChoice = ""
    let random = Math.random()

    if (random < 0.33) compChoice = "Rock"
    else if (random < 0.66) compChoice = "Paper"
    else compChoice = "Scissors"

    setUserMove(userChoice)
    setComputerMove(compChoice)

    let newUserScore = userScore
    let newComputerScore = computerScore
    let roundResult = ""

    if (userChoice === compChoice) {
      roundResult = "It's a Tie 🤝"
      setStreak(0)
    } 
    else if (
      (userChoice === "Rock" && compChoice === "Scissors") ||
      (userChoice === "Paper" && compChoice === "Rock") ||
      (userChoice === "Scissors" && compChoice === "Paper")
    ) {
      roundResult = "You Win 🎉"
      newUserScore++
      setStreak(streak + 1)
    } 
    else {
      roundResult = "Computer Wins 💻"
      newComputerScore++
      setStreak(0)
    }

    setUserScore(newUserScore)
    setComputerScore(newComputerScore)
    setResult(roundResult)
    setRounds(rounds + 1)

    // Save history
    setHistory([
      ...history,
      `You: ${userChoice} | Computer: ${compChoice} → ${roundResult}`
    ])
  }

  const resetGame = () => {
    setUserScore(0)
    setComputerScore(0)
    setRounds(0)
    setResult("")
    setHistory([])
    setStreak(0)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Computer : User</h1>
      <h2>{computerScore} : {userScore}</h2>

      <p>Rounds Played: {rounds}</p>
      <p>🔥 Streak: {streak}</p>

      <h3>{result}</h3>

      <button onClick={() => handleClick("Rock")}>🗿</button>
      <button onClick={() => handleClick("Paper")}>📄</button>
      <button onClick={() => handleClick("Scissors")}>✂️</button>

      <br /><br />

      <button onClick={resetGame}>🔄 Reset</button>

      <h3>Move History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App