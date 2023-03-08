import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import {
  IResponseLogin,
  IUser,
  IAddress,
  IloginData,
  IMail,
} from '../../interfaces/LoginInterface'

import { NavigateFunction, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { decodeToken } from 'react-jwt'

interface UserContextType {
  token: string | null
  isUserLoggedIn: boolean | null
  user: IUser | null // atualizado
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>
  handleLogin: (data: IloginData) => void
  handleLogout: () => void
  handleRegister: (data: IloginData) => void
  navigate: NavigateFunction
  sendMailRecoverPassword: (data: IMail) => void
  tokenRecoverPassword: string | null
  changePassword: (password: string) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [tokenRecoverPassword, setTokenRecoverPassword] = useState<
    string | null
  >(null)
  const [user, setUser] = useState<IUser | null>(null)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('@MOTORS-TOKEN')
    if (storedToken) {
      setToken(storedToken)
      setIsUserLoggedIn(true)
      const decodedToken = decodeToken(storedToken) as Record<string, any>
      const userId = decodedToken.id
      localStorage.setItem('@MOTORS-USER-ID', userId)
    }
  }, [])

  function handleLogin(data: IloginData): Promise<string> {
    return api
      .post('login', { ...data })
      .then((response) => {
        const token = response.data
        setToken(token)
        localStorage.setItem('@MOTORS-TOKEN', token)
        setIsUserLoggedIn(true)

        const decodedToken = decodeToken(token) as Record<string, any>
        const userId = decodedToken.id
        localStorage.setItem('@MOTORS-USER-ID', userId)

        navigate('/', { replace: true })

        return token
      })
      .catch((error) => {
        console.log(error)
        throw error
      })
  }

  function handleLogout() {
    localStorage.clear()
    navigate('/login', { replace: true })
    setToken('')
    setIsUserLoggedIn(false)
  }

  function handleRegister(data: IloginData) {
    console.log(data)
    api
      .post('users', {
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        description: data.description,
        birthdate: data.birthdate,
        cpf: data.cpf,
        address: {
          cep: data.cep,
          state: data.state,
          city: data.city,
          district: data.district,
          street: data.street,
          number: data.number,
          complement: data.complement,
        },
      })
      .then(() => {
        navigate('login', { replace: true })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function sendMailRecoverPassword(data: IMail) {
    api
      .post('users/sendTokenPassword', data)
      .then((response) => {
        setTokenRecoverPassword(response.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function changePassword(password: string) {
    api
      .post(`users/recoverPassword/${tokenRecoverPassword}`, { password })
      .then((response) => {
        navigate('login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <UserContext.Provider
      value={{
        token,
        tokenRecoverPassword,
        user,
        changePassword,
        navigate,
        handleLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLogout,
        handleRegister,
        sendMailRecoverPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
