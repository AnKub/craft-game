import './AvailableRolls.scss'

type AvailableRollsProps = {
  rolls: number
  maxRolls: number
  timer: string
}

const AvailableRolls = ({ rolls, maxRolls, timer }: AvailableRollsProps) => (
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
)

export default AvailableRolls