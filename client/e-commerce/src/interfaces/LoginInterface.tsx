import { FieldValues } from "react-hook-form";

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
  created_at: string,
  updated_at: string,
  id: string,
  name: string,
  email: string,
  phone: string,
  cpf: string,
  birthdate: string,
  description: string,
  is_buyer: boolean,
  address: IAddress,
  sub: string
  }

  export interface IAddress {
    cep: string;
    street: string;
    state: string;
    city: string;
    number: string;
    complement: string;
  }




