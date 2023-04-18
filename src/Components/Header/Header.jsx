import logo from '../../logo.svg';
import './header.css';
import {Link} from 'react-router-dom';


function Header() {

    return (
      <header className="main-header">
            <div className="navbar-links">
              <div className='header-logo'>
                <Link to="/">
                  <img src={logo} className="app-logo" alt="logo" />
                </Link>
              </div>
                <div className='links'>
                  <a href='/'>
                    Home
                  </a>
                  <a href='/'>
                    Profile
                  </a>
                  <a href='/'>
                    Settings
                  </a>
                  <a href='/'>
                    Community
                  </a>
                </div>
            </div>
      </header>
    )
}

export default Header;