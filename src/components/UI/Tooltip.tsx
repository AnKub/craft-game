import './Tooltip.scss'

type TooltipProps = {
  text: string
  children: React.ReactNode
}

const Tooltip = ({ text, children }: TooltipProps) => (
  <div className="tooltip-wrapper">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
)

export default Tooltip