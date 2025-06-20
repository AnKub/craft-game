// src/components/Player/Player.tsx
import './Player.scss'

type Props = {
  position: number
}

const coords = [
  [0,0], [0,1], [0,2], [0,3], [0,4],
  [1,4], [2,4], [3,4], [4,4], [4,3],
  [4,2], [4,1], [4,0], [3,0], [2,0],
  [1,0], [1,1], [1,2], [1,3], [1,4]
]

const Player = ({ position }: Props) => {
  const [r, c] = coords[position]
  return (
    <div className="player" style={{ top: `${(r * 100) / 5}%`, left: `${(c * 100) / 5}%` }} />
  )
}

export default Player
