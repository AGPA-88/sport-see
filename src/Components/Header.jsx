import logo from '../logo.svg';
import '../CSS/header.css';
import {Link} from 'react-router-dom';


function Header() {

    return (
      <header className="main-header">
            <div className="navbar-links">
            <Link to="/home">
                <div>
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </Link>
                <div className='links'>
                  Home
                  <br/>
                  <br/>
                  Profile
                  <br/>
                  <br/>
                  Settings
                  <br/>
                  <br/>
                  Community
                </div>
            </div>
      </header>
    )
}

export default Header;