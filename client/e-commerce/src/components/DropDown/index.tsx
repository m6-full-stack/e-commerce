import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { MenuContainer } from './style'

const DropDrown = () => {
  const { setIsModelEdit, setIsModelEditAddress } = useContext(ModalContext)
  const { handleLogout, getProfile, navigate } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [seller, setSeller] = useState(false)

  useEffect(() => {
    getProfile()
      .then((user) => {
        setUsername(user.name)
        setSeller(user.is_seller)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <MenuContainer>
      <ul>
        <li>
          <div className='content-username'>
            <div className='border-name'>
              <span>{username.substring(0, 2).toUpperCase()}</span>
              
            </div>
            <a href='#'>{username}</a>
          </div>
          {seller ? (
            <ul className='dropdown'>
              <li>
                <a href='#' onClick={() => setIsModelEdit(true)}>
                  Editar Perfil
                </a>
              </li>
              <li>
                <a href='#' onClick={() => setIsModelEditAddress(true)}>
                  Editar Endereço
                </a>
              </li>
              <li>
                <a href='#' onClick={() => navigate('/profileviewAdm')}>
                  Meus Anúncios
                </a>
              </li>
              <li>
                <a href='#'>Minhas Compras</a>
              </li>
              <li>
                <a href='#' onClick={handleLogout}>
                  Sair
                </a>
              </li>
            </ul>
          ) : (
            <ul className='dropdown'>
              <li>
                <a href='#' onClick={() => setIsModelEdit(true)}>
                  Editar Perfil
                </a>
              </li>
              <li>
                <a href='#' onClick={() => setIsModelEditAddress(true)}>
                  Editar Endereço
                </a>
              </li>
              <li>
                <a href='#'>Minhas Compras</a>
              </li>
              <li>
                <a href='#' onClick={handleLogout}>
                  Sair
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </MenuContainer>
  )
}

export default DropDrown
