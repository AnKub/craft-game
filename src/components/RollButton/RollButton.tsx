import './RollButton.scss'

type RollButtonProps = {
  onClick: () => void
  disabled: boolean
}

const RollButton = ({ onClick, disabled }: RollButtonProps) => (
  <button className="roll-btn" onClick={onClick} disabled={disabled}>
    Roll
  </button>
)

export default RollButton