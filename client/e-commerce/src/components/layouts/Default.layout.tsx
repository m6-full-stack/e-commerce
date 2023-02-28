import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { Footer } from '../Footer'

import { ModalCreate } from '../ModalCreate'
import { ModalDelete } from '../ModalDelete'
import { ModalEdit } from '../ModalEdit'
import { ModalEditAddress } from '../ModalEditAddress'
import { ModalEditAnnouncement } from '../ModalEditAnnouncement'
import Navbar from '../Navbar'
import NavbarLogged from '../Navbar/NavbarLogged'
import { LayoutContainer } from './style'

export const DefaultLayout = () => {
  const {
    isModelCreate,
    isModelEdit,
    isModelEditAddress,
    isModelEditAnnouncement,
    isModelDelete,
  } = useContext(ModalContext)
  const [loggen, setLoggen] = useState(true)

  return (
    <LayoutContainer>
      {loggen ? <NavbarLogged /> : <Navbar />}
      {isModelCreate && <ModalCreate />}
      {isModelEdit && <ModalEdit />}
      {isModelEditAddress && <ModalEditAddress />}
      {isModelEditAnnouncement && <ModalEditAnnouncement />}
      {isModelDelete && <ModalDelete />}

      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
