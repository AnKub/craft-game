import React from 'react'
import './Board.scss'
import Cell from '../Cell/Cell'

const cellTypes = [
  'Start', 'Cash', 'VIP', 'Box', 'Gold',
  'Pickaxe', '', 'Star', '', 'Truck',
  'Dice', '', '', '', 'Cash',
  'VIP', '', 'Gold', '', 'Finish'
]

const Board = () => {
  return (
    <div className="board">
      {cellTypes.map((type, index) => (
        <Cell key={index} type={type} index={index} />
      ))}
    </div>
  )
}

export default Board
