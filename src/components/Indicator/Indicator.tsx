import { useEffect, useState } from 'react'
import './Indicator.scss'

type IndicatorProps = {
  rollsLeft: number
  cooldown: number // seconds
  onReady: () => void
}

const Indicator = ({ rollsLeft, cooldown, onReady }: IndicatorProps) => {
  const [timer, setTimer] = useState(cooldown)

  useEffect(() => {
    if (rollsLeft > 0) return
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval)
          onReady()
          return cooldown
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [rollsLeft, cooldown, onReady])

  return (
    <div className="indicator">
      <span>🎲 {rollsLeft}</span>
      {rollsLeft === 0 && (
        <span className="timer">
          {new Date(timer * 1000).toISOString().substr(11, 8)}
        </span>
      )}
    </div>
  )
}

export default Indicator