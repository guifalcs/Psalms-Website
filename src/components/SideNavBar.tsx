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
        <ul className='side-navbar-ul'>
          <li className='side-navbar-li'><a href='#home'>Home</a></li>
            <div className='line'></div>
          <li className='side-navbar-li'><a href='#merch'>Loja</a></li>
            <div className='line'></div>
          <li className='side-navbar-li'><a href='#galeria'>Galeria</a></li>
            <div className='line'></div>
          <li className='side-navbar-li'><a href='#contact'>Contato</a></li>
            <div className='line'></div>
          <li className='side-navbar-li'><a href='#about'>Sobre</a></li>
            <div className='line'></div>
          <li className='side-navbar-li'><a href='#restrict'>Restrito</a></li>
            <div className='line'></div>
          

        </ul>
      </nav>
    </>
    
)};

export default SideNavBar;