import './Header.scss'
import logo from '../../assets/icons/star-logo.svg' 


const Header = () => (
  <header className="game-header">
    <button className="header-btn left">
     <p> close </p>
    </button>
    <div className="header-title">
      <img src={logo} alt="Star" className="header-logo" />
    </div>
    <button className="header-btn right">
     <p>...</p>
    </button>
  </header>
)

export default Header