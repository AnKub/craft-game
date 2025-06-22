import { useState } from 'react'
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Dice from './components/Dice/Dice'
import Indicator from './components/Indicator/Indicator'
import RollButton from './components/RollButton/RollButton'
import './styles/main.scss'

const BOARD_LENGTH = 20

function App() {
  const [position, setPosition] = useState(0)
  const [rollsLeft, setRollsLeft] = useState(3)
  const [isMoving, setIsMoving] = useState(false)
  const [rollTrigger, setRollTrigger] = useState(0)

  const handleRoll = () => {
    setRollTrigger(t => t + 1)
  }

  const handleDiceResult = (value: number) => {
    setIsMoving(true)
    setTimeout(() => {
      setPosition((pos) => (pos + value) % BOARD_LENGTH)
      setRollsLeft((r) => Math.max(0, r - 1))
      setIsMoving(false)
    }, 1000)
  }

  const handleReady = () => setRollsLeft(3)

  return (
    <div className="app">
   <Header />
<RollCraftTitle />
<AvailableRolls rolls={7} maxRolls={10} timer="00:29:09" />
      <main className="main-content">
        <div className="game-area">
          <Board
            position={position}
            onCellEffect={() => {}}
            isMoving={isMoving}
            dice={
              <Dice
                onRoll={handleDiceResult}
                disabled={isMoving || rollsLeft === 0}
                rollTrigger={rollTrigger}
              />
            }
          />
        </div>
        <div className="controls">
          <Indicator rollsLeft={rollsLeft} cooldown={30} onReady={handleReady} />
          <RollButton
            onClick={handleRoll}
            disabled={isMoving || rollsLeft === 0}
          />
        </div>
      </main>
    </div>
  )
}

export default App