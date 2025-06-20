
import './RollButton.scss'

type Props = {
  onClick: () => void
  disabled: boolean
}

const RollButton = ({ onClick, disabled }: Props) => {
  return (
    <button className="roll-button" onClick={onClick} disabled={disabled}>
      Roll
    </button>
  )
}

export default RollButton
