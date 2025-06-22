import { useState } from 'react'
import './Dice.scss'



import dice1 from '../../assets/dice/1.svg'
import dice2 from '../../assets/dice/2.svg'
import dice3 from '../../assets/dice/3.svg'
import dice4 from '../../assets/dice/4.svg'
import dice5 from '../../assets/dice/5.svg'
import dice6 from '../../assets/dice/6.svg'

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]
type DiceProps = {
  onRoll: (value: number) => void
  disabled: boolean
}

const Dice = ({ onRoll, disabled }: DiceProps) => {
  const [rolling, setRolling] = useState(false)
  const [value, setValue] = useState(1)

  const handleRoll = () => {
    if (disabled || rolling) return
    setRolling(true)
    const newValue = Math.floor(Math.random() * 6) + 1
    setTimeout(() => {
      setValue(newValue)
      setRolling(false)
      onRoll(newValue)
    }, 700)
  }

  return (
    <div className={`dice${rolling ? ' rolling' : ''}`} onClick={handleRoll}>
    <img src={diceImages[value - 1]} alt={`dice-${value}`} />
    </div>
  )
}

export default Dice