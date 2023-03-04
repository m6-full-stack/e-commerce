import axios, { AxiosResponse } from "axios";
import {
  IloginData,
  IResponseLogin,
  IUser,
  UpdateProfileData,
} from "../interfaces/LoginInterface";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 5000,
});

export function getUserProfile(token: string, userId: string): Promise<IUser> {
  const headers = { Authorization: `Bearer ${token}` };
  return api
    .get(`/users/${userId}`, { headers })
    .then(res => res.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export async function getProfile() {
  return await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@MOTORS-TOKEN")}`,
    },
  });
}
