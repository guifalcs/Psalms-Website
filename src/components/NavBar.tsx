import './NavBar.scss';
import { Home11Icon, MdiClothesHanger, MdiContact, MdiCellphone } from '../assets/icons';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <>
    
    <SideNavBar /> 

    <div className="container">
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Home11Icon className='icon' /><Link to={'/'}>Home</Link></li>
        <li><MdiClothesHanger className='icon' /><Link to={'/loja'}>Loja</Link></li>
        <li><MdiCellphone className='icon' /><Link to={'/galeria'}>Galeria</Link></li>
        <li><MdiContact className='icon' /><Link to={'/contato'}>Contato</Link></li>
      </ul>
      
    </nav>
    </div>
    
    </>
  );
};

export default NavBar;