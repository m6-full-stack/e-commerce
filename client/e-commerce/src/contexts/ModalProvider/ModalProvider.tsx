import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalContextType {
  isModelCreate: boolean
  isModelEdit: boolean
  setIsModelCreate: Dispatch<SetStateAction<boolean>>
  setIsModelEdit: Dispatch<SetStateAction<boolean>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextType>({
  isModelCreate: false,
  isModelEdit: false,
  setIsModelCreate: () => {},
  setIsModelEdit: () => {},
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false)
  const [isModelEdit, setIsModelEdit] = useState(true)

  return (
    <ModalContext.Provider
      value={{ isModelCreate, isModelEdit, setIsModelCreate, setIsModelEdit }}
    >
      {children}
    </ModalContext.Provider>
  )
}
