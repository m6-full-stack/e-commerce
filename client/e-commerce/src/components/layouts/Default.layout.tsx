import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { Footer } from '../Footer'
import { ModalCreate } from '../ModalCreate'
import Navbar from '../Navbar'
import NavbarLogged from '../Navbar/NavbarLogged'
import { LayoutContainer } from './style'


export const DefaultLayout = () => {
  const { isModel } = useContext(ModalContext);
  const [loggen, setLoggen] = useState(false)
 

  return (
    <LayoutContainer>
      {loggen ? <NavbarLogged /> : <Navbar />}
      {isModel && <ModalCreate />}
      
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
