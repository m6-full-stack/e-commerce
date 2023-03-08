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
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/product" element={<Product />}>
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path='/productfinal' element={<ProductFinal />} />
            <Route path="/profileview" element={<ProfileViewUser />} />
            <Route path="/profileviewAdm" element={<ProfileViewAdm />} />
          </Route>
        </Route>

      </Routes>
  )
}