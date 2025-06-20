import { useState } from 'react'
import './styles/main.scss'
import Board from './components/Board/Board'
import Player from './components/Player/Player'
import Dice from './components/Dice/Dice'
import RollButton from './components/RollButton/RollButton'
import Indicator from './components/Indicator/Indicator'

const App = () => {
  const [position, setPosition] = useState(0)
  const [canRoll, setCanRoll] = useState(true)
  const [diceValue, setDiceValue] = useState(1)
  const [rollsLeft, setRollsLeft] = useState(3)

  const handleRoll = () => {
    if (!canRoll || rollsLeft === 0) return
    setCanRoll(false)
    const newValue = Math.floor(Math.random() * 6) + 1
    setDiceValue(newValue)

    setTimeout(() => {
      const newPos = (position + newValue) % 20
      setPosition(newPos)
      setCanRoll(true)
      setRollsLeft((prev) => prev - 1)
    }, 1200)
  }

  const handleCooldownEnd = () => {
    setRollsLeft(3)
  }

  return (
    <div className="app">
      <div className="game-wrapper">
        <Board />
        <Player position={position} />
        <Dice onRoll={() => {}} disabled={true} />
        <RollButton onClick={handleRoll} disabled={!canRoll || rollsLeft === 0} />
        <Indicator rollsLeft={rollsLeft} cooldown={30} onReady={handleCooldownEnd} />
      </div>
    </div>
  )
}

export default App
