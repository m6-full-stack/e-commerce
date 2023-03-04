import { AxiosResponse } from 'axios'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UpdateAddresData, UpdateProfileData } from '../../interfaces/LoginInterface'
import { api } from '../../services/api'

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
  updateProfile: (data: UpdateProfileData) => void
  updateAddress: (data: UpdateAddresData) => void
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
  updateProfile: () => {},
  updateAddress: () => {}
})

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false)
  const [isModelEdit, setIsModelEdit] = useState(false)
  const [isModelEditAddress, setIsModelEditAddress] = useState(false)
  const [isModelEditAnnouncement, setIsModelEditAnnouncement] = useState(false)
  const [isModelDelete, setIsModelDelete] = useState(false)

  const [announcementType, setAnnouncementType] = useState('sale')
  const [typeOfVehicle, setTypeOfVehicle] = useState('car')

  const updateProfile = async (data: UpdateProfileData): Promise<void> => {
    const storedUserId = localStorage.getItem('@MOTORS-USER-ID')
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }

    try {
      const response: AxiosResponse = await api.patch(
        `users/${storedUserId}`,
        data,
        {
          headers,
        }
      )
      setIsModelEdit(false)
    } catch (error) {
      console.error(error)
    }
  }


  const updateAddress = async (data: UpdateAddresData): Promise<void> => {
    const storedUserId = localStorage.getItem('@MOTORS-USER-ID')
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }
  
    
  
    try {
      const response: AxiosResponse = await api.patch(
        `users/address/${storedUserId}`,
        data,
        {
          headers,
        }
      )
      console.log(storedUserId)
      setIsModelEdit(false)
      setIsModelEditAddress(false)

    } catch (error) {
      console.error(error)
    }
  }
  

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
        updateProfile,
        updateAddress
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
