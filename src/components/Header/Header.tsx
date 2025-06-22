import './Header.scss'
import logo from '../../assets/icons/star-logo.svg' // заміни на свою іконку, якщо треба
import menuIcon from '../../assets/icons/menu.svg'
import backIcon from '../../assets/icons/back.svg'

const Header = () => (
  <header className="game-header">
    <button className="header-btn left">
      <img src={backIcon} alt="Back" />
    </button>
    <div className="header-title">
      <img src={logo} alt="Star" className="header-logo" />
      <span>CRAFT</span>
    </div>
    <button className="header-btn right">
      <img src={menuIcon} alt="Menu" />
    </button>
  </header>
)

export default Header