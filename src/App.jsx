import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1 className="title">Tunisian Salary Calculator 2025</h1>
      <div className="card">
        <p className="welcome-text">
          Welcome to your salary calculator
        </p>
        <button className="counter-button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
