import './Cell.scss'
import type { CellType } from '../../types/types'

type Props = {
  type: CellType
  active?: boolean
}

const Cell = ({ type, active = false }: Props) => {
  const base = type.toLowerCase()
  const icon = `/assets/icons/${base}.svg`
  const iconOn = `/assets/icons/${base}On.svg`

  return (
    <div className={`cell ${base} ${active ? 'active' : ''}`}>
      <img src={icon} alt={type} className="icon-base" draggable={false} />
      {active && (
        <img src={iconOn} alt={`${type} active`} className="icon-on" draggable={false} />
      )}
    </div>
  )
}

export default Cell
