import './styles/main.scss'
import Board from './components/Board/Board'
import Player from './components/Player/Player'
import Indicator from './components/Indicator/Indicator'

import { useState } from 'react'

const App = () => {
  const [position, setPosition] = useState(0)
  const [rollsLeft, setRollsLeft] = useState(3)

  const handleMove = (value: number) => {
    const newPos = (position + value) % 20
    setPosition(newPos)
    setRollsLeft((prev) => prev - 1)
  }

  const handleCooldownEnd = () => {
    setRollsLeft(3)
  }

  return (
    <div className="app">
      <div className="game-wrapper">
        <Board
          rollsLeft={rollsLeft}
          onRoll={handleMove}
        />
        <Player position={position} />
        <div className="center-content">
          <Indicator
            rollsLeft={rollsLeft}
            cooldown={30}
            onReady={handleCooldownEnd}
          />
        </div>
      </div>
    </div>
  )
}

export default App
