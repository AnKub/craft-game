import './GameTopPanel.scss'
import RollsPanel from '../RollsPanel/RollsPanel'

type GameTopPanelProps = {
  rolls: number
  maxRolls: number
  timer: number
}

const GameTopPanel = ({ rolls, maxRolls, timer }: GameTopPanelProps) => (
  <div className="game-top-panel">
    <div className="roll-craft-title">Roll Craft</div>
    <RollsPanel rolls={rolls} maxRolls={maxRolls} timer={timer} />
  </div>
)

export default GameTopPanel