import React, { useState } from 'react'
import './styles/main.scss'
import Board from './components/Board/Board'
import Player from './components/Player/Player'

const App = () => {
  const [position, setPosition] = useState(0)

  return (
    <div className="app">
      <div className="game-wrapper">
        <Board />
        <Player position={position} />
      </div>
    </div>
  )
}

export default App
