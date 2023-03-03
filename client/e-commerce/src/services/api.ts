import axios, { AxiosResponse } from 'axios'
import { IloginData, IResponseLogin, IUser, UpdateProfileData } from '../interfaces/LoginInterface'

export const api = axios.create({
  baseURL: 'https://fullstack-project-qi7p.onrender.com/',
  timeout: 5000,
})

export function getUserProfile(token: string, userId: string): Promise<IUser> {
  const headers = { Authorization: `Bearer ${token}` }
  return api
    .get(`/users/${userId}`, { headers })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error)
      throw error
    })
}


