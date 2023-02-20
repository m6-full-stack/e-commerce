import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/Default.layout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
