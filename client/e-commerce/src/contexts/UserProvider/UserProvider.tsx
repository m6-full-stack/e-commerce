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
  UserRequest,
} from '../../interfaces/LoginInterface'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { decodeToken } from 'react-jwt'

interface UserContextType {
  token: string | null
  isUserLoggedIn: boolean | null
  user: IUser | null // atualizado
  advertiserOrBuyer: boolean | null
  setUser: Dispatch<SetStateAction<IUser | null>>
  tokenRecoverPassword: string | null
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>
  handleLogin: (data: IloginData) => void
  handleLogout: () => void
  handleRegister: (data: IloginData) => void
  navigate: NavigateFunction
  sendMailRecoverPassword: (data: IMail) => void
  changePassword: (token: string, password: string) => void
  setAdvertiserOrBuyer: Dispatch<SetStateAction<boolean>>
  getProfile: () => Promise<UserRequest>
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [advertiserOrBuyer, setAdvertiserOrBuyer] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('@MOTORS-TOKEN')

    if (storedToken) {
      const decodedToken = decodeToken(storedToken) as Record<string, any>
      const userId = decodedToken.id
      localStorage.setItem('@MOTORS-USER-ID', userId)

      getUserProfile(storedToken, userId)
        .then((user) => console.log(user))
        .catch((error) => console.error(error))

      setToken(storedToken)
      setIsUserLoggedIn(true)
    }
  }, [])

  async function handleLogin(data: IloginData): Promise<string> {
    return await api
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

        is_seller: advertiserOrBuyer,
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

  function changePassword(token: string, password: string) {
    api
      .post('users/recoverPassword', { tokenResetPassword: token, password })
      .then((response) => {
        console.log()
        navigate('login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function getUserProfile(token: string, userId: string) {
    return api
      .get(`/users/${userId}`)
      .then((res) => res.data)
      .catch((error) => {
        console.error(error)
        throw error
      })
  }

  async function getProfile() {
    return api
      .get('/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@MOTORS-TOKEN')}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error(error)
        throw error
      })
  }

  return (
    <UserContext.Provider
      value={{
        token,
        tokenRecoverPassword,
        sendMailRecoverPassword,
        user,
        changePassword,
        navigate,
        handleLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLogout,
        handleRegister,
        advertiserOrBuyer,
        setAdvertiserOrBuyer,
        getProfile,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
