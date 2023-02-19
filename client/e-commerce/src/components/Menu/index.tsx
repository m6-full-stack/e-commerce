import React from 'react'
import { MenuContainer } from './style'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <MenuContainer>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="Link" to="/">
              Carros
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="Link" to="/">
              Motos
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="Link" to="/">
              Leilão
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </MenuContainer>
  )
}
