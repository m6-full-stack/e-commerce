import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { MenuContainer } from './style'

const DropDrown = () => {
  const { setIsModelEdit } = useContext(ModalContext)
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
              <a href="#" onClick={() => setIsModelEdit(true)}>
                Editar Perfil
              </a>
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
