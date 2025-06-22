import { useEffect, useRef, useState } from 'react'
import './Dice.scss'

import dice1 from '../../assets/dice/1.svg'
import dice2 from '../../assets/dice/2.svg'
import dice3 from '../../assets/dice/3.svg'
import dice4 from '../../assets/dice/4.svg'
import dice5 from '../../assets/dice/5.svg'
import dice6 from '../../assets/dice/6.svg'

import anim1 from '../../assets/diceanim/1.svg'
import anim2 from '../../assets/diceanim/2.svg'
import anim3 from '../../assets/diceanim/3.svg'

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]
const animImages = [anim1, anim2, anim3]

type DiceProps = {
  onRoll: (value: number) => void
  disabled: boolean
  rollTrigger: number
}

const Dice = ({ onRoll, disabled, rollTrigger }: DiceProps) => {
  const [rolling, setRolling] = useState(false)
  const [value, setValue] = useState(1)
  const [animFrame, setAnimFrame] = useState(0)
  const prevTrigger = useRef(rollTrigger)

  useEffect(() => {
    if (rollTrigger !== prevTrigger.current && !rolling && !disabled) {
      prevTrigger.current = rollTrigger
      setRolling(true)
      setAnimFrame(0)
      let frame = 0
      let ticks = 0
      const animInterval = setInterval(() => {
        setAnimFrame(frame)
        frame = (frame + 1) % 3
        ticks++
        if (ticks > 8) {
          clearInterval(animInterval)
          const newValue = Math.floor(Math.random() * 6) + 1
          setValue(newValue)
          setRolling(false)
          onRoll(newValue)
        }
      }, 80)
    }
  }, [rollTrigger])

  return (
    <div className={`dice${rolling ? ' rolling' : ''}`}>
      <img
        src={rolling ? animImages[animFrame] : diceImages[value - 1]}
        alt="dice"
        draggable={false}
        className="dice-img"
      />
    </div>
  )
}

export default Dice