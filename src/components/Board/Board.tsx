// src/components/Board/Board.tsx
import { useState } from 'react'
import type { CellType } from '../../types/types'
import Cell from '../Cell/Cell'
import Dice from '../Dice/Dice'
import './Board.scss'

const cellTypes: CellType[] = [
  'Start', 'Cash', 'VIP', 'Box', 'Gold',
  'Pickaxe', 'Star', 'Truck', 'Dice',
  'Cash', 'VIP', 'Gold', 'Box', 'Pickaxe',
  'Truck', 'Star', 'Gold', 'VIP', 'Cash', 'Start'
]

// Індекси по периметру у порядку за годинниковою стрілкою, старт зліва вгорі
const perimeterIndexes = [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]

const Board = () => {
  const [position, setPosition] = useState(0)
  const [rollsLeft, setRollsLeft] = useState(3)
  const [isCooldown, setIsCooldown] = useState(false)

  const handleRoll = (val: number) => {
    const next = (position + val) % perimeterIndexes.length
    setPosition(next)
    setRollsLeft(prev => {
      const rem = prev - 1
      if (rem <= 0) setIsCooldown(true)
      return rem
    })
  }

  return (
    <div className="game-wrapper">
      <div className="board">
        {[...Array(25)].map((_, idx) => {
          const perIdx = perimeterIndexes.indexOf(idx)
          if (perIdx === -1) {
            return (
              <div key={idx} className="cell center">
                {idx === 12 && (
                  <Dice onRoll={handleRoll} disabled={rollsLeft === 0 || isCooldown} />
                )}
              </div>
            )
          }
          const type = cellTypes[perIdx]
          return (
            <Cell key={idx} type={type} active={perIdx === position} />
          )
        })}
      </div>
    </div>
  )
}

export default Board
