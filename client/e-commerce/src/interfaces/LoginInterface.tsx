import { FieldValues } from "react-hook-form";
import { AnnouncementData } from "../contexts/AnnouncementProvider/AnnouncementProvide";

export interface IloginData extends FieldValues {
  username?: string;
  password?: string;
}

export interface IResponseLogin {
  accessToken: string;
  user: IUser;
  token: string;
  sub: string;
}

export interface IUser {
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
  address: IAddress;
  sub: string;
}

export interface IAddress {
  cep: string;
  street: string;
  state: string;
  city: string;
  number: string;
  complement: string;
}

export interface IMail {
  email: string;
}

export interface UpdateProfileData {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string;
}

export interface UpdateAddresData {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string;
  cep?: string;
  street?: string;
  state?: string;
  city?: string;
  number?: string;
  complement?: string;
}

export interface UserRequest extends IUser {
  announcements: AnnouncementData[];
}
