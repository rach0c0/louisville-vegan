import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from './LVTitle.png'

const Navbar = () => {
    return (
      <div className="header">
        <nav className="navbar">
        <img className="logo" src={logo} alt="Louisville Vegan" />
        <ul className="nav-links">
          <li className='nav-link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Eateries'>Local Eateries</Link>
          </li>
          <li className='nav-link'>
            <Link to='/contact'>Contact Me</Link>                      
          </li>
        </ul>
      </nav>

      </div>
      
    );
  };
  
  export default Navbar;

