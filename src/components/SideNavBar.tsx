import './SideNavBar.scss';
import { useState } from 'react';
import { Cancel01Icon, Menu01Icon } from '../assets/icons';

const SideNavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>

         {isOpen ? <Cancel01Icon className='sideicon' /> : <Menu01Icon className='sideicon' />}

      </button>

      <nav className={`side-navbar ${isOpen ? 'open' : ''}`}>

      </nav>
    </>
    
)};

export default SideNavBar;