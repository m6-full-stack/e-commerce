import axios, { AxiosResponse } from 'axios'
import {
  IUser,
} from '../interfaces/LoginInterface'

export const api = axios.create({
  // baseURL: 'https://fullstack-project-qi7p.onrender.com/',
  baseURL: 'http://localhost:3333/',
  timeout: 5000,
})