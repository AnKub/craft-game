// import './RollsPanel.scss'

// type RollsPanelProps = {
//   rolls: number
//   maxRolls: number
//   timer: number // у секундах
// }

// const formatTime = (sec: number) => {
//   const m = Math.floor(sec / 60).toString().padStart(2, '0')
//   const s = (sec % 60).toString().padStart(2, '0')
//   return `${m}:${s}`
// }

// const RollsPanel = ({ rolls, maxRolls, timer }: RollsPanelProps) => (
//   <div className="rolls-panel">
//     <div className="rolls-label">
//       Available rolls
//       <span className="rolls-count">{rolls}/{maxRolls}</span>
//     </div>
//     <div className="rolls-bar-bg">
//       {Array.from({ length: maxRolls }).map((_, i) => (
//         <div
//           key={i}
//           className={`rolls-bar-section${i < rolls ? '' : ' empty'}`}
//         />
//       ))}
//     </div>
//     {rolls < maxRolls && (
//       <div className="rolls-timer">{formatTime(timer)}</div>
//     )}
//   </div>
// )

// export default RollsPanel