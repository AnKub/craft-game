import React from 'react'
import './Player.scss'

type Props = {
  position: number
}

const Player = ({ position }: Props) => {
  const getCoordinates = (index: number) => {
    const gridSize = 5
    const mapping: Record<number, [number, number]> = {
      0: [0, 0], 1: [0, 1], 2: [0, 2], 3: [0, 3], 4: [0, 4],
      5: [1, 4], 6: [2, 4], 7: [3, 4], 8: [4, 4],
      9: [4, 3], 10: [4, 2], 11: [4, 1], 12: [4, 0],
      13: [3, 0], 14: [2, 0], 15: [1, 0],
      16: [1, 1], 17: [1, 2], 18: [1, 3],
      19: [2, 3]
    }

    return mapping[index] || [0, 0]
  }

  const [row, col] = getCoordinates(position)

  const style = {
    top: `${row * 20}%`,
    left: `${col * 20}%`,
  }

  return <div className="player" style={style}></div>
}

export default Player
