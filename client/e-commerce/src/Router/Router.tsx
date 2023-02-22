import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/Default.layout'

import { Product } from '../pages/Product'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
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
      </Route>
    </Routes>
  )
}
