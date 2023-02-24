import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/Default.layout'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Product } from '../pages/Product'
import { ProfileViewAdm } from '../pages/ProfileViewAdmin'
import { ProfileViewUser } from '../pages/ProfileViewUser'
import { Register } from '../pages/Register'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profileview" element={<ProfileViewUser />} />
        <Route path="/profileviewAdm" element={<ProfileViewAdm />} />
      </Route>
    </Routes>
  )
}
