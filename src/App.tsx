import { useState } from 'react'
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Dice from './components/Dice/Dice'
import Indicator from './components/Indicator/Indicator'
import RollButton from './components/RollButton/RollButton'
import './App.css'

const BOARD_LENGTH = 20 // perimeterIndexes.length

function App() {
  const [position, setPosition] = useState(0)
  const [rollsLeft, setRollsLeft] = useState(3)
  const [isMoving, setIsMoving] = useState(false)

  const handleRoll = (value: number) => {
    setIsMoving(true)
    setTimeout(() => {
      setPosition((pos) => (pos + value) % BOARD_LENGTH)
      setRollsLeft((r) => Math.max(0, r - 1))
      setIsMoving(false)
    }, 1000)
  }

  const handleReady = () => setRollsLeft(3)

  return (
    <div className="game-wrapper">
      <Header />
      <Indicator rollsLeft={rollsLeft} cooldown={30} onReady={handleReady} />
     <Board
          position={position}
          onCellEffect={() => {}}
          isMoving={isMoving}
          dice={<Dice onRoll={handleRoll} disabled={isMoving || rollsLeft === 0} />}
        />
      <RollButton onClick={() => {}} disabled={isMoving || rollsLeft === 0} />
    </div>
  )
}

export default App