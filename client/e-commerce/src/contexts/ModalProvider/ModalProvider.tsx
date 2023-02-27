import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalContextType {
  isModelCreate: boolean
  isModelEdit: boolean
  isModelEditAddress: boolean
  setIsModelCreate: Dispatch<SetStateAction<boolean>>
  setIsModelEdit: Dispatch<SetStateAction<boolean>>
  setIsModelEditAddress: Dispatch<SetStateAction<boolean>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextType>({
  isModelCreate: false,
  isModelEdit: false,
  isModelEditAddress: false,
  setIsModelCreate: () => {},
  setIsModelEdit: () => {},
  setIsModelEditAddress: () => {},
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false)
  const [isModelEdit, setIsModelEdit] = useState(false)
  const [isModelEditAddress, setIsModelEditAddress] = useState(true)

  return (
    <ModalContext.Provider
      value={{ isModelCreate, isModelEdit, setIsModelCreate, setIsModelEdit, isModelEditAddress, setIsModelEditAddress }}
    >
      {children}
    </ModalContext.Provider>
  )
}
