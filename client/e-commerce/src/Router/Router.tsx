import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Product } from '../pages/Product'
import { ProfileViewAdm } from '../pages/ProfileViewAdmin'
import { ProfileViewUser } from '../pages/ProfileViewUser'
import { DefaultLayout } from '../components/layouts/Default.layout'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../pages/Register'
import { RecoverPassword } from '../pages/RecoverPassword'
import { ProductFinal } from '../pages/ProductFinal'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import FallBack from '../pages/Error'

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<FallBack />} />
      <Route path='/error' element={<FallBack />} />
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recoverPassword' element={<RecoverPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/product' element={<ProductFinal />}>
            <Route path=':id' element={<ProductFinal />} />
          </Route>

          <Route path='/profileview' element={<ProfileViewUser />}>
            <Route path=':id' element={<ProfileViewUser />} />
          </Route>
          <Route path='/profileviewAdm' element={<ProfileViewAdm />} />
        </Route>
      </Route>
    </Routes>
  )
}
