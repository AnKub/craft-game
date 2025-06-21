// src/components/Player/Player.tsx
import './Player.scss'

type Props = {
  position: number
}

// Координати периметру 6x6
const coords = [
  [0,0], [0,1], [0,2], [0,3], [0,4], [0,5],
  [1,5], [2,5], [3,5], [4,5], [5,5],
  [5,4], [5,3], [5,2], [5,1], [5,0],
  [4,0], [3,0], [2,0], [1,0]
]

const Player = ({ position }: Props) => {
  const [r, c] = coords[position]
  return (
    <div
      className="player"
      style={{
        top: `${(r * 100) / 6}%`,
        left: `${(c * 100) / 6}%`,
      }}
    />
  )
}

export default Player
