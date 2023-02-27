import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import Navbar from '../Navbar'
import NavbarLogged from '../Navbar/NavbarLogged'
import { LayoutContainer } from './style'

export const DefaultLayout = () => {
  const [loggen, setLoggen] = useState(false)
  return (
    <LayoutContainer>
      { loggen ? <NavbarLogged /> : <Navbar />}
      
      <Outlet />
      {/* <Footer /> */}
    </LayoutContainer>
  )
}
