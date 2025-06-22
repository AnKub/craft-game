import './Player.scss'

type PlayerProps = {
  isMoving: boolean
}

const Player = ({ isMoving }: PlayerProps) => (
  <div className={`player-token${isMoving ? ' moving' : ''}`}></div>
)

export default Player