import React from 'react'
import { MenuContainer } from './style'

const DropDrown = () => {
  return (
    <MenuContainer>
      <ul>
        <li>
          <div className="content-username">
            <div className="border-name">
              <span>SL</span>
            </div>
            <a href="#">Samuel Leão</a>
          </div>
          <ul className="dropdown">
            <li>
              <a href="#">Editar Perfil</a>
            </li>
            <li>
              <a href="#">Editar endereço</a>
            </li>
            <li>
              <a href="#">Minhas Compras</a>
            </li>
            <li>
              <a href="#">Sair</a>
            </li>
          </ul>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default DropDrown
