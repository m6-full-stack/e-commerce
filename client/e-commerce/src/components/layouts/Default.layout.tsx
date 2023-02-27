import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { ModalCreate } from '../ModalCreate'
import Navbar from '../Navbar'
import NavbarLogged from '../Navbar/NavbarLogged'
import { LayoutContainer } from './style'

export const DefaultLayout = () => {
  const [loggen, setLoggen] = useState(false)
  const [ isModelCreate, setIsModelCreate ] = useState(false)

  return (
    <LayoutContainer>
      {loggen ? <NavbarLogged /> : <Navbar />}
      {isModelCreate && <ModalCreate /> }
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
