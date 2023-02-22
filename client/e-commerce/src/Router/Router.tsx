import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/Default.layout'
import { Product } from '../pages/Product'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  )
}
