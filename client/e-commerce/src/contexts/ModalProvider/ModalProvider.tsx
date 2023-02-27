import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalContextType {
  isModelCreate: boolean
  isModelEdit: boolean
  isModelEditAddress: boolean
  isModelDelete: boolean
  setIsModelCreate: Dispatch<SetStateAction<boolean>>
  setIsModelEdit: Dispatch<SetStateAction<boolean>>
  setIsModelEditAddress: Dispatch<SetStateAction<boolean>>
  setIsModelDelete: Dispatch<SetStateAction<boolean>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextType>({
  isModelCreate: false,
  isModelEdit: false,
  isModelEditAddress: false,
  isModelDelete: false,
  setIsModelCreate: () => {},
  setIsModelEdit: () => {},
  setIsModelEditAddress: () => {},
  setIsModelDelete: () => {},
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false)
  const [isModelEdit, setIsModelEdit] = useState(false)
  const [isModelEditAddress, setIsModelEditAddress] = useState(false)
  const [isModelDelete, setIsModelDelete] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isModelCreate,
        isModelEdit,
        isModelDelete,
        setIsModelCreate,
        setIsModelEdit,
        isModelEditAddress,
        setIsModelEditAddress,
        setIsModelDelete,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
