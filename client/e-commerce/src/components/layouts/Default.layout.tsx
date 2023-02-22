import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import Navbar from '../Navbar'
import { LayoutContainer } from './style'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
