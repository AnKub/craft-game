import './GameTopPanel.scss'

type GameTopPanelProps = {
  rolls: number
  maxRolls: number
  timer: string
}

const GameTopPanel = ({ rolls, maxRolls, timer }: GameTopPanelProps) => (
  <div className="game-top-panel">
    <div className="roll-craft-title">Roll Craft</div>
    <div className="available-rolls">
      <div className="rolls-label">
        Available rolls
        <span className="rolls-count">{rolls}/{maxRolls}</span>
      </div>
      <div className="rolls-bar-bg">
        <div
          className="rolls-bar"
          style={{ width: `${(rolls / maxRolls) * 100}%` }}
        />
      </div>
      <div className="rolls-timer">{timer}</div>
    </div>
  </div>
)

export default GameTopPanel