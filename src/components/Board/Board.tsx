
import Cell from '../Cell/Cell'
import Player from '../Player/Player'
import Dice from '../Dice/Dice'
import './Board.scss'

const cellTypes = [
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

type BoardProps = {
  position: number
  onCellEffect: (index: number) => void
  isMoving: boolean
  dice: React.ReactNode
}

const Board = ({ position, onCellEffect, isMoving, dice}: BoardProps) => {
  return (
    <div className="board">
      {Array.from({ length: 36 }).map((_, i) => {
        const perimeterIndex = perimeterIndexes.indexOf(i)
        const type = perimeterIndex !== -1 ? cellTypes[perimeterIndex] : ''
        const isActive = perimeterIndex === position

        return (
          <div key={i} className="board-cell">
            <Cell
              type={type}
              active={isActive}
              onEffect={() => onCellEffect(perimeterIndex)}
            >
              {isActive && <Player isMoving={isMoving} />}
            </Cell>
          </div>
        )
      })}
       <div className="board-dice-center">{dice}</div>
    </div>
  )
}

export default Board