import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalContextType {
  isModelCreate: boolean
  isModelEdit: boolean
  isModelEditAddress: boolean
  isModelEditAnnouncement: boolean
  isModelDelete: boolean
  announcementType: string
  typeOfVehicle: string
  setIsModelCreate: Dispatch<SetStateAction<boolean>>
  setIsModelEdit: Dispatch<SetStateAction<boolean>>
  setIsModelEditAddress: Dispatch<SetStateAction<boolean>>
  setIsModelEditAnnouncement: Dispatch<SetStateAction<boolean>>
  setIsModelDelete: Dispatch<SetStateAction<boolean>>
  setAnnouncementType: Dispatch<SetStateAction<string>>
  setTypeOfVehicle: Dispatch<SetStateAction<string>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextType>({
  isModelCreate: false,
  isModelEdit: false,
  isModelEditAddress: false,
  isModelEditAnnouncement: false,
  isModelDelete: false,
  announcementType: 'sale',
  typeOfVehicle: 'car',
  setIsModelCreate: () => {},
  setIsModelEdit: () => {},
  setIsModelEditAddress: () => {},
  setIsModelEditAnnouncement: () => {},
  setIsModelDelete: () => {},
  setAnnouncementType: () => {},
  setTypeOfVehicle: () => {},
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false)
  const [isModelEdit, setIsModelEdit] = useState(false)
  const [isModelEditAddress, setIsModelEditAddress] = useState(false)
  const [isModelEditAnnouncement, setIsModelEditAnnouncement] = useState(false)
  const [isModelDelete, setIsModelDelete] = useState(false)

  const [announcementType, setAnnouncementType] = useState('sale')
  const [typeOfVehicle, setTypeOfVehicle] = useState('car')

  return (
    <ModalContext.Provider
      value={{
        isModelCreate,
        isModelEdit,
        isModelEditAddress,
        isModelEditAnnouncement,
        isModelDelete,
        announcementType,
        typeOfVehicle,
        setIsModelCreate,
        setIsModelEdit,
        setIsModelEditAddress,
        setIsModelEditAnnouncement,
        setIsModelDelete,
        setAnnouncementType,
        setTypeOfVehicle,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
