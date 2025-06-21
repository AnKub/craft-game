import type { CellType } from '../../types/types'
import './Cell.scss'

import start from '../../assets/icons/start.svg'
import startOn from '../../assets/icons/startOn.svg'
import cash from '../../assets/icons/cash.svg'
import cashOn from '../../assets/icons/cashOn.svg'
import vip from '../../assets/icons/vip.svg'
import vipOn from '../../assets/icons/vipOn.svg'
import box from '../../assets/icons/box.svg'
import boxOn from '../../assets/icons/boxOn.svg'
import gold from '../../assets/icons/gold.svg'
import goldOn from '../../assets/icons/goldOn.svg'
import star from '../../assets/icons/star.svg'
import starOn from '../../assets/icons/starOn.svg'
import pickaxe from '../../assets/icons/pickaxe.svg'
import pickaxeOn from '../../assets/icons/pickaxeOn.svg'
import truck from '../../assets/icons/truck.svg'
import truckOn from '../../assets/icons/truckOn.svg'
import dice from '../../assets/icons/dice.svg'
import diceOn from '../../assets/icons/diceOn.svg'

const icons: Record<string, string> = {
  start,
  startOn,
  cash,
  cashOn,
  vip,
  vipOn,
  box,
  boxOn,
  gold,
  goldOn,
  star,
  starOn,
  pickaxe,
  pickaxeOn,
  truck,
  truckOn,
  dice,
  diceOn,
}

type Props = {
  type: CellType
  active?: boolean
}

const Cell = ({ type, active = false }: Props) => {
  const base = type.toLowerCase()
  const icon = icons[base]
  const iconOn = icons[`${base}On`]

  return (
    <div className={`cell ${base} ${active ? 'active' : ''}`}>
      {icon && <img src={icon} alt={type} className="icon-base" draggable={false} />}
      {active && iconOn && (
        <img src={iconOn} alt={`${type} active`} className="icon-on" draggable={false} />
      )}
    </div>
  )
}

export default Cell
