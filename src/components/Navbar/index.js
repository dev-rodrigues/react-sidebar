// import de libs externas
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import de componentes internos
import Dropdown from '../Dropdown/index';
import Button from '../Button/index';
import './index.css';
import { Menu } from '../Item';

function Navbar(props) {
  // estados
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // acoes
  const handClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }
  
  return (
    <>
      <nav className='navbar'>

        <Link to='/' className='navbar-logo'>
          EPIC <i className='fab fa-firstdraft'/>
        </Link>

        <div className='menu-icon' onClick={handClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          {Menu.map((item, index) => {
            const possui_submenu = item.items.length > 0

            if (possui_submenu) {

              return (
                <li
                  key={index}
                  className='nav-item'
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}>

                  <Link 
                    to='/services' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>

                    {item.titulo} <i className='fa fa-caret-down'/>
                  </Link>
                  { dropdown && <Dropdown itens={item.items}/> }
                </li>
              )            
            } else {              
              return (              
                <li
                  key={index}
                  className='nav-item'>

                  <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
                    {item.titulo}
                  </Link>

                </li>
              )
            }
          })}

        </ul>


      </nav>
    </>
  )
}

export default Navbar;
