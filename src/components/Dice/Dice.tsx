import { useState } from 'react'
import './Dice.scss'

import Face1 from '../../assets/dice/1.svg'
import Face2 from '../../assets/dice/2.svg'
import Face3 from '../../assets/dice/3.svg'
import Face4 from '../../assets/dice/4.svg'
import Face5 from '../../assets/dice/5.svg'
import Face6 from '../../assets/dice/6.svg'

type Props = {
  onRoll: (value: number) => void
  disabled: boolean
}

const diceFaces = [Face1, Face2, Face3, Face4, Face5, Face6]

const Dice = ({ onRoll, disabled }: Props) => {
  const [rolling, setRolling] = useState(false)
  const [value, setValue] = useState(1)

  const handleRoll = () => {
    if (rolling || disabled) return

    setRolling(true)
    const newValue = Math.floor(Math.random() * 6) + 1

    setTimeout(() => {
      setValue(newValue)
      onRoll(newValue)
      setRolling(false)
    }, 1000)
  }

  return (
    <div
      className={`dice ${rolling ? 'rolling' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleRoll}
    >
      <img
        src={diceFaces[value - 1]}
        alt={`Dice face ${value}`}
        className="face"
        draggable={false}
      />
    </div>
  )
}

export default Dice
