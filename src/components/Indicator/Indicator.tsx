import { useEffect, useState } from 'react'
import './Indicator.scss'

type Props = {
  rollsLeft: number
  cooldown: number
  onReady: () => void
}

const Indicator = ({ rollsLeft, cooldown, onReady }: Props) => {
  const [timeLeft, setTimeLeft] = useState(cooldown)

  useEffect(() => {
    if (rollsLeft > 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onReady()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [rollsLeft])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="indicator">
      <div className="rolls">🎲 Rolls Left: {rollsLeft}</div>
      {rollsLeft === 0 && <div className="timer">⏳ {formatTime(timeLeft)}</div>}
    </div>
  )
}

export default Indicator
