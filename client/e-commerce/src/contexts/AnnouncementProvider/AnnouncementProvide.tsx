import React, { createContext, ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import { IUser } from "../../interfaces/LoginInterface";
import { api } from "../../services/api";
import { CommentDataRecive } from "../CommentProvider/CommentProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

interface AnnouncementContextProviderProps {
  children: ReactNode;
}

interface ImageData {
  id: string;
  image_url: string;
}

interface AddressAdvertiser {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface AdvertiserData {
  created_at: string;
  updated_at: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  birthdate: string;
  description: string;
  is_seller: boolean;
  address: AddressAdvertiser;
}

export interface AnnouncementRequest extends FieldValues {
  title?: string;
  year?: string;
  mileage?: string;
  price?: string;
  description?: string;
  oneImage?: string | undefined;
  twoImage?: string | undefined;
}
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
  advertiserId: string;
  advertiser: AdvertiserData;
  comments: CommentDataRecive[];
  images_list: ImageData[];
}

export interface AnnouncementDataResponse {
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
  registerAnnouncement: (data: AnnouncementRequest) => void;
  updateAnnouncement: (
    announcementId: string,
    data: AnnouncementRequest
  ) => void;
  deleteAnnouncement: (announcementId: string) => void;
  getRetriveAnnouncement: (id: string) => void;
  announcementData: AnnouncementData[] | null;
  setAnnouncementData: React.Dispatch<
    React.SetStateAction<AnnouncementData[] | null>
  >;
  announcementInfo: AnnouncementData;
  setAnnouncementInfo: React.Dispatch<React.SetStateAction<AnnouncementData>>;
  typeAnnouncement: "Venda" | "Leil??o";
  setTypeAnnouncement: React.Dispatch<React.SetStateAction<"Venda" | "Leil??o">>;
  typeVehicle: "Carro" | "Moto";
  setTypeVehicle: React.Dispatch<React.SetStateAction<"Carro" | "Moto">>;
  announcementId: string | null;
  setAnnouncementId: React.Dispatch<React.SetStateAction<string | null>>;
  advertiser: IUser;
}

export const AnnouncementContext = createContext<AnnouncementContextType>(
  {} as AnnouncementContextType
);

export function AnnouncementContextProvider({
  children,
}: AnnouncementContextProviderProps) {
  const [announcementData, setAnnouncementData] = useState<
    AnnouncementData[] | null
  >(null);
  const [announcementInfo, setAnnouncementInfo] = useState<AnnouncementData>(
    {} as AnnouncementData
  );
  const [typeAnnouncement, setTypeAnnouncement] = useState<"Venda" | "Leil??o">(
    "Venda"
  );
  const [typeVehicle, setTypeVehicle] = useState<"Carro" | "Moto">("Carro");
  const [announcementId, setAnnouncementId] = useState<string | null>(null);
  const [advertiser, setAdvertiser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const token = () => {
    const token = localStorage.getItem("@MOTORS-TOKEN");
    return token;
  };
  const registerAnnouncement = (data: AnnouncementRequest) => {
    const validToken: any = token();
    const headers = { Authorization: `Bearer ${validToken}` };
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
    };
    api
      .post("/announcement", newData, {
        headers,
      })
      .then(response => {
        toast.success("Anunciado criado com sucesso");
        console.log(response);
      })
      .catch(err => {
        toast.error("Ops algo deu errado!");
        console.log(err);
      });
  };
  const updateAnnouncement = (
    announcementId: string,
    data: AnnouncementRequest
  ) => {
    const validToken: any = token();
    const headers = { Authorization: `Bearer ${validToken}` };
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
    };
    api
      .patch(`/announcement/${announcementId}`, newData, {
        headers,
      })
      .then(response => {
        toast.success("Anuncio atualizado com sucesso");
        console.log(response);
      })
      .catch(err => {
        toast.error("Ops algo deu errado!");
        console.log(err);
      });
  };
  const deleteAnnouncement = (announcementId: string) => {
    const validToken: any = token();
    const headers = { Authorization: `Bearer ${validToken}` };
    api
      .delete(`/announcement/${announcementId}`, {
        headers,
      })
      .then(response => {
        toast.success("Anuncio removido com sucesso");
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  const retrieveAdvertise = async (userId: string) => {
    await api
      .get(`/users/${userId}`)
      .then(res => {
        setAdvertiser(res.data);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  const getRetriveAnnouncement = async (id: string) => {
    await api
      .get(`/announcement/${id}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        retrieveAdvertise(res.data.advertiserId);
        setAnnouncementInfo(res.data);
      })
      .catch(err => {
        console.log(err);
        navigate("/error");
      });
  };

  return (
    <AnnouncementContext.Provider
      value={{
        advertiser,
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
  );
}
