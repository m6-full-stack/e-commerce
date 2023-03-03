import axios from 'axios'
import { IloginData, IResponseLogin } from '../interfaces/LoginInterface'

export const api = axios.create({
  baseURL: 'https://fullstack-project-qi7p.onrender.com/',
  timeout: 5000,
})
