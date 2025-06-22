import './Cell.scss'
import Tooltip from '../UI/Tooltip'

import start from '../../assets/icons/start.svg'
import cash from '../../assets/icons/cash.svg'
import vip from '../../assets/icons/vip.svg'
import box from '../../assets/icons/box.svg'
import gold from '../../assets/icons/gold.svg'
import star from '../../assets/icons/star.svg'
import pickaxe from '../../assets/icons/pickaxe.svg'
import truck from '../../assets/icons/truck.svg'
import dice from '../../assets/icons/dice.svg'

type CellProps = {
  type: string
  active?: boolean
  onEffect?: () => void
  children?: React.ReactNode
}

const icons: Record<string, string> = {
  start,
  cash,
  vip,
  box,
  gold,
  star,
  pickaxe,
  truck,
  dice,
}

const Cell = ({ type, active, onEffect, children }: CellProps) => {
  if (!type) return <div className="cell empty">{children}</div>
  return (
    <div
      className={`cell ${type} ${active ? 'active' : ''}`}
      onClick={onEffect}
    >
      <Tooltip text={type}>
        <img src={icons[type]} alt={type} draggable={false} />
      </Tooltip>
      {children}
    </div>
  )
}

export default Cell