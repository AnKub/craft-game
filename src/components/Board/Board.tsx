import { useState } from 'react'
import type { CellType } from '../../types/types'
import Cell from '../Cell/Cell'
import Dice from '../Dice/Dice'
import RollButton from '../RollButton/RollButton'
import './Board.scss'

type Props = {
  rollsLeft: number
  onRoll: (value: number) => void
  position: number
}

const cellTypes: CellType[] = [
  'start', 'cash', 'vip', 'box', 'gold', 'pickaxe',
  'star', '', '', '', '', 'truck',
  'dice', '', '', '', '', 'star',
  'vip', '', '', '', '', 'cash',
  'truck', '', '', '', '', 'gold',
  'box', '', '', '', '', 'pickaxe',
  'dice', 'cash', 'vip', 'box', 'gold', 'start'
]

const perimeterIndexes = [
  0, 1, 2, 3, 4, 5,
  11,
  17,
  23,
  29,
  35, 34, 33, 32, 31, 30,
  24,
  18,
  12,
  6
]

const centerIndexes = [14, 15, 20, 21]

const Board = ({ rollsLeft, onRoll, position }: Props) => {
  const [isRolling, setIsRolling] = useState(false)
  const [diceValue, setDiceValue] = useState(1)

  const handleDiceRoll = (val: number) => {
    setDiceValue(val)
    setTimeout(() => {
      onRoll(val)
      setIsRolling(false)
    }, 1000)
  }

  const handleRollClick = () => {
    if (isRolling || rollsLeft <= 0) return
    setIsRolling(true)
  }

  return (
    <div className="board-container">
      <div className="board">
       {Array.from({ length: 36 }).map((_, i) => {
  const perimeterIndex = perimeterIndexes.indexOf(i)

  if (perimeterIndex !== -1) {
    const type = cellTypes[perimeterIndex] 
  const isActive = i === position
    return <Cell key={i} type={type} active={isActive} />
  }

  const isCenter = centerIndexes.includes(i)

  return (
    <div key={i} className="empty-cell">
      {isCenter && i === 14 && (
        <Dice onRoll={handleDiceRoll} disabled={!isRolling} />
      )}
      {isCenter && i === 15 && (
        <div className="dice-value-display">
          {isRolling ? 'Rolling...' : `🎲 ${diceValue}`}
        </div>
      )}
    </div>
  )
})}

      </div>

      <div className="bottom-ui">
        <RollButton
          onClick={handleRollClick}
          disabled={isRolling || rollsLeft <= 0}
        />
      </div>
    </div>
  )
}

export default Board
