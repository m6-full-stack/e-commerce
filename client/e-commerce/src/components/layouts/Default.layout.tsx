import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export const DefaultLayout = () => {
  const [clicked, isClicked] = useState<boolean>(false)
  return (
    <div>
      <Navbar clicked={clicked} isClicked={isClicked} />
      <Outlet />
      <Footer />
    </div>
  )
}
