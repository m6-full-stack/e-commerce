
import React, { createContext, ReactNode, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { api } from '../../services/api'
import { CommentDataRecive } from '../CommentProvider/CommentProvider'


interface AnnouncementContextProviderProps {
  children: ReactNode
}

interface ImageData {
  id: string
  image_url: string
}


interface AddressAdvertiser {
  id: string
  cep: string
  state: string
  city: string
  street: string
  number: string
  complement: string
}

export interface AdvertiserData {
  created_at: string
  updated_at: string
  id: string
  name: string
  email: string
  phone: string
  cpf: string
  birthdate: string
  description: string
  is_seller: boolean
  address: AddressAdvertiser
}

export interface AnnouncementData {
  createdAt: string
  id: string
  type: string
  title: string
  year: string
  mileage: string
  price: string
  description: string
  vehicle_type: string
  cover_image: string
  is_sold: boolean
  advertiserId: string
  comments: CommentDataRecive[]
  images_list: ImageData[]
  advertiser: AdvertiserData
}
export interface AnnouncementRequest extends FieldValues {
  title?: string
  year?: string
  mileage?: string
  price?: string
  description?: string
  oneImage?: string | undefined
  twoImage?: string | undefined
export interface AnnouncementData {
  createdAt: string;
  id: string;
  type: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicle_type: string;
  cover_image: string;
  is_sold: boolean;
  is_active: boolean;
  advertiser: IUser;
  comments: CommentDataRecive[];
  images_list: ImageData[];
}

interface AnnouncementContextType {
  registerAnnouncement: (data: AnnouncementRequest) => void
  updateAnnouncement: (
    announcementId: string,
    data: AnnouncementRequest
  ) => void
  deleteAnnouncement: (announcementId: string) => void
  getRetriveAnnouncement: (id: string) => void
  announcementData: AnnouncementData[] | null
  setAnnouncementData: React.Dispatch<
    React.SetStateAction<AnnouncementData[] | null>
  >
  announcementInfo: AnnouncementData
  setAnnouncementInfo: React.Dispatch<React.SetStateAction<AnnouncementData>>
  typeAnnouncement: 'venda' | 'leilão'
  setTypeAnnouncement: React.Dispatch<React.SetStateAction<'venda' | 'leilão'>>
  typeVehicle: 'carro' | 'moto'
  setTypeVehicle: React.Dispatch<React.SetStateAction<'carro' | 'moto'>>
  announcementId: string | null
  setAnnouncementId: React.Dispatch<React.SetStateAction<string | null>>
}

export const AnnouncementContext = createContext<AnnouncementContextType>(
  {} as AnnouncementContextType
)

export function AnnouncementContextProvider({
  children,
}: AnnouncementContextProviderProps) {

  const [announcementData, setAnnouncementData] = useState<
    AnnouncementData[] | null
  >(null)
  const [announcementInfo, setAnnouncementInfo] = useState<AnnouncementData>(
    {} as AnnouncementData
  )
  const [typeAnnouncement, setTypeAnnouncement] = useState<'venda' | 'leilão'>(
    'venda'
  )
  const [typeVehicle, setTypeVehicle] = useState<'carro' | 'moto'>('carro')
  const [announcementId, setAnnouncementId] = useState<string | null>(null)

  const token = () => {
    const token = localStorage.getItem('@MOTORS-TOKEN')
    return token
  }
  const registerAnnouncement = (data: AnnouncementRequest) => {
    const validToken: any = token()
    const headers = { Authorization: `Bearer ${validToken}` }
    const newData = {
      ...data,
      type: typeAnnouncement,
      vehicle_type: typeVehicle,
      images_list: data.oneImage
        ? [data.oneImage]
        : [] || data.twoImage
        ? [data.oneImage]
        : [] || (data.oneImage && data.twoImage)
        ? [data.oneImage, data.twoImage]
        : [],
    }
    api
      .post('/announcement', newData, {
        headers,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }
  const updateAnnouncement = (
    announcementId: string,
    data: AnnouncementRequest
  ) => {
    const validToken: any = token()
    const headers = { Authorization: `Bearer ${validToken}` }
    const newData = {
      ...data,
      type: typeAnnouncement,
      vehicle_type: typeVehicle,
      images_list: data.oneImage
        ? [data.oneImage]
        : [] || data.twoImage
        ? [data.twoImage]
        : [] || (data.oneImage && data.twoImage)
        ? [data.oneImage, data.twoImage]
        : null,
    }
    api
      .patch(`/announcement/${announcementId}`, newData, {
        headers,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }
  const deleteAnnouncement = (announcementId: string) => {
    const validToken: any = token()
    const headers = { Authorization: `Bearer ${validToken}` }
    api
      .delete(`/announcement/${announcementId}`, {
        headers,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }

  const getRetriveAnnouncement = (id: string) => {
    api
      .get(`/announcement/${id}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((res) => {
        setAnnouncementInfo(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <AnnouncementContext.Provider
      value={{
        getRetriveAnnouncement,
        announcementData,
        setAnnouncementData,
        announcementInfo,
        setAnnouncementInfo,
        registerAnnouncement,
        typeAnnouncement,
        setTypeAnnouncement,
        typeVehicle,
        setTypeVehicle,
        announcementId,
        setAnnouncementId,
        updateAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  )
}
