import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { IResponseLogin, IUser, IAddress, IloginData } from '../../interfaces/LoginInterface'

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
        const token = response.data;
        setToken(token);
        localStorage.setItem('@MOTORS-TOKEN', token);
        setIsUserLoggedIn(true)

        navigate('/', { replace: true })
        
        return token;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/login", { replace: true });
    setToken("");
    setIsUserLoggedIn(false)
  }

  

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        handleLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLogout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
