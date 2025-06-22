import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import GameTopPanel from './components/GameTopPanel/GameTopPanel'
import Board from './components/Board/Board'
import Dice from './components/Dice/Dice'
import Indicator from './components/Indicator/Indicator'
import RollButton from './components/RollButton/RollButton'
import './styles/main.scss'

const BOARD_LENGTH = 20
const MAX_ROLLS = 3
const RESTORE_TIME_SEC = 20 * 60 // це від повідає за час кожні 20 хвилин буде оновлюватися поділка над полем, це якщо захочеш перевіряти логіку

function App() {
  const [position, setPosition] = useState(0)
  const [rolls, setRolls] = useState(MAX_ROLLS)
  const [timer, setTimer] = useState(0)
  const [isMoving, setIsMoving] = useState(false)
  const [rollTrigger, setRollTrigger] = useState(0)

  
  useEffect(() => {
    if (rolls < MAX_ROLLS && timer === 0) {
      setTimer(RESTORE_TIME_SEC)
    }
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(t => {
          if (t <= 1) {
            setRolls(r => Math.min(MAX_ROLLS, r + 1))
            return 0
          }
          return t - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [rolls, timer])

  const handleRoll = () => {
    if (rolls > 0 && !isMoving) {
      setRollTrigger(t => t + 1)
      setRolls(r => r - 1)
    }
  }

  const handleDiceResult = (value: number) => {
    setIsMoving(true)
    setTimeout(() => {
      setPosition((pos) => (pos + value) % BOARD_LENGTH)
      setIsMoving(false)
    }, 1000)
  }

  const handleReady = () => setRolls(MAX_ROLLS)
return (
    <div className="app">
      <Header />
      <GameTopPanel rolls={rolls} maxRolls={MAX_ROLLS} timer={timer} />
      <main className="main-content">
        <div className="game-area">
          <Board
            position={position}
            onCellEffect={() => {}}
            isMoving={isMoving}
            dice={
              <Dice
                onRoll={handleDiceResult}
                disabled={isMoving || rolls === 0}
                rollTrigger={rollTrigger}
              />
            }
          />
        </div>
        <div className="controls">
          <Indicator rollsLeft={rolls} cooldown={30} onReady={handleReady} />
          <RollButton
            onClick={handleRoll}
            disabled={isMoving || rolls === 0}
          />
        </div>
      </main>
    </div>
  )
}

export default App