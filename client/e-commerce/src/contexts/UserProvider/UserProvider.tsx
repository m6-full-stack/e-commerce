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
} from '../../interfaces/LoginInterface'

import { useNavigate } from 'react-router-dom'
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
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<IUser | null>(null)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const navigate = useNavigate()

  function handleLogin(data: IloginData): Promise<string> {
    return api
      .post('login', { ...data })
      .then((response) => {
        const token = response.data
        setToken(token)
        localStorage.setItem('@MOTORS-TOKEN', token)
        setIsUserLoggedIn(true)

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
          complement: data.complement
      }
        
      })
      .then(() => {
        navigate('login', { replace: true })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        handleLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLogout,
        handleRegister
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
