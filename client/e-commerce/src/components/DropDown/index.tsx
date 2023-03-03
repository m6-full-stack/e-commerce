import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { getUserProfile } from '../../services/api'
import { MenuContainer } from './style'

const DropDrown = () => {
  const { setIsModelEdit, setIsModelEditAddress } = useContext(ModalContext)
  const { token, handleLogout } = useContext(UserContext)
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (token) {
      const storedUserId = localStorage.getItem('@MOTORS-USER-ID')
      if (storedUserId) {
        getUserProfile(token, storedUserId)
          .then((user) => setUsername(user.name))
          .catch((error) => console.error(error))
      }
    }
  }, [token])

  return (
    <MenuContainer>
      <ul>
        <li>
          <div className="content-username">
            <div className="border-name">
              <span>{username.substring(0, 2).toUpperCase()}</span>
            </div>
            <a href="#">{username}</a>
          </div>
          <ul className="dropdown">
            <li>
              <a href="#" onClick={() => setIsModelEdit(true)}>
                Editar Perfil
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsModelEditAddress(true)}>
                Editar endereço
              </a>
            </li>
            <li>
              <a href="#">Minhas Compras</a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>Sair</a>
            </li>
          </ul>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default DropDrown
