import './SideNavBar.scss';
import { useState } from 'react';
import { Cancel01Icon, Menu01Icon } from '../../public/assets/icons';
import { Link } from 'react-router-dom';

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
          <li className='side-navbar-li'><Link to={'/'}>Home</Link></li>
            <div className='line'></div>
          <li className='side-navbar-li'><Link to={'/loja'}>Loja</Link></li>
            <div className='line'></div>
          <li className='side-navbar-li'><Link to={'/galeria'}>Galeria</Link></li>
            <div className='line'></div>
          <li className='side-navbar-li'><Link to={'/contato'}>Contato</Link></li>
            <div className='line'></div>   
        </ul>
      </nav>
    </>
    
)};

export default SideNavBar;