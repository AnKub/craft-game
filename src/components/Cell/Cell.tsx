import React from 'react'
import './Cell.scss'

type Props = {
  type: string
  index: number
}

const Cell = ({ type, index }: Props) => {
  const isEmpty = type === ''
  return (
    <div className={`cell ${isEmpty ? 'empty' : 'active'}`}>
      {!isEmpty && <span className="label">{type}</span>}
    </div>
  )
}

export default Cell
