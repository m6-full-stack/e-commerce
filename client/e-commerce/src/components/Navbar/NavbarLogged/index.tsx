import React, { useContext, useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { NavbarContainer } from './style'
import Logo from '../../../assets/Logo-header.svg'
import DropDrown from '../../DropDown'
import { UserContext } from '../../../contexts/UserProvider/UserProvider'

const NavbarLogged = () => {
  const { user } = useContext(UserContext)

  const [isMobile, setIsMobile] = useState<boolean>(false)

  return (
    <NavbarContainer>
      <nav className='navbar'>
        <img className='logo' src={Logo} alt='imagem do logo' />
        <div className='teste'>
          <ul
            className={isMobile ? 'nav-links-mobile' : 'nav-links'}
            onClick={() => setIsMobile(false)}
          >
            <Link to='/' className='home'>
              <li>Carros</li>
            </Link>
            <Link to='/' className='about'>
              <li>Motos</li>
            </Link>
            <Link to='/' className='skills'>
              <li>Leilão</li>
            </Link>
            <hr />
            <DropDrown />
          </ul>
        </div>

        <button
          className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </button>
      </nav>
    </NavbarContainer>
  )
}

export default NavbarLogged
