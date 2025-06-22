import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">🎲 Cube Quest</div>
      <div className="header__stats">
        <span>Player: You</span>
        <span>Turn: 1</span>
      </div>
    </header>
  )
}

export default Header
