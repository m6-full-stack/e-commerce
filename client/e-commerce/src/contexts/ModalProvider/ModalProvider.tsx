import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalContextType {
  isModel: boolean,
  setIsModel: Dispatch<SetStateAction<boolean>>
}

interface ModalProviderProps {
  children: React.ReactNode
}


export const ModalContext = createContext<ModalContextType>({
  isModel: false,
  setIsModel: () => {}
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModel, setIsModel] = useState(false)

  return (
    <ModalContext.Provider value={{ isModel, setIsModel }}>
      {children}
    </ModalContext.Provider>
  )
}
