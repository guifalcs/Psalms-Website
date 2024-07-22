import './NavBar.scss';
import { Home11Icon, ClothesIcon, ContactIcon, SmartPhone01Icon } from '../assets/icons';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <>
    
    <SideNavBar /> 

    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Home11Icon className='icon' /><Link to={'/'}>Home</Link></li>
        <li><ClothesIcon className='icon' /><Link to={'loja'}>Loja</Link></li>
        <li><SmartPhone01Icon className='icon' /><Link to={'midias'}>Mídias</Link></li>
        <li><ContactIcon className='icon' /><Link to={'/contato'}>Contato</Link></li>
      </ul>
      
    </nav>
    </>
  );
};

export default NavBar;