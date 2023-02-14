import React from 'react'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
