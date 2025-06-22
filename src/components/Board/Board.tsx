import Cell from '../Cell/Cell'
import Player from '../Player/Player'
import './Board.scss'

const perimeterTypes = [
  'start', 'cash', 'vip', 'box', 'gold', 'pickaxe',
  'star', 'vip', 'box', 'gold', 'pickaxe', 'star',
  'vip', 'box', 'gold', 'pickaxe', 'star', 'vip',
  'box', 'gold', 'pickaxe', 'star', 'vip', 'box'
  
]


function generateBoardGrid(size = 6, types: string[]) {
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(''))
  let idx = 0
 
  for (let i = 0; i < size; i++) grid[0][i] = types[idx++]

  for (let i = 1; i < size - 1; i++) grid[i][size - 1] = types[idx++]

  for (let i = size - 1; i >= 0; i--) grid[size - 1][i] = types[idx++]

  for (let i = size - 2; i > 0; i--) grid[i][0] = types[idx++]
  return grid
}

const boardGrid = generateBoardGrid(6, perimeterTypes)

type BoardProps = {
  position: number
  onCellEffect: (index: number) => void
  isMoving: boolean
  dice: React.ReactNode
}

const Board = ({ position, onCellEffect, isMoving, dice }: BoardProps) => {

  let perimeterPositions: [number, number][] = []
  for (let i = 0; i < 6; i++) perimeterPositions.push([0, i])
  for (let i = 1; i < 5; i++) perimeterPositions.push([i, 5])
  for (let i = 5; i >= 0; i--) perimeterPositions.push([5, i])
  for (let i = 4; i > 0; i--) perimeterPositions.push([i, 0])

  return (
    <div className="board">
      {boardGrid.map((row, rowIdx) =>
        row.map((type, colIdx) => {
        
          const perimeterIndex = perimeterPositions.findIndex(
            ([r, c]) => r === rowIdx && c === colIdx
          )
          const isActive = perimeterIndex === position
          return (
            <div key={`${rowIdx}-${colIdx}`} className="board-cell">
              <Cell
                type={type}
                active={isActive}
                onEffect={() => onCellEffect(perimeterIndex)}
              >
                {isActive && <Player isMoving={isMoving} />}
              </Cell>
            </div>
          )
        })
      )}
      <div className="board-dice-center"> <div className="dice-bg" />
  {dice}
</div>
    </div>
  )
}

export default Board