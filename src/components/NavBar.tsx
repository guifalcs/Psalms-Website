import './NavBar.scss';
import { Home11Icon, ClothesIcon, ContactIcon, SmartPhone01Icon } from '../assets/icons';
import SideNavBar from './SideNavBar';


const NavBar = () => {

  return (
    <>
    
    <SideNavBar /> 

    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Home11Icon className='icon' /><a href='#home'>Home</a></li>
        <li><ClothesIcon className='icon' /><a href='#merch'>Loja</a></li>
        <li><SmartPhone01Icon className='icon' /><a href='#medias'>Mídias</a></li>
        <li><ContactIcon className='icon' /><a href='#contact'>Contato</a></li>
      </ul>
      
    </nav>
    </>
  );
};

export default NavBar;