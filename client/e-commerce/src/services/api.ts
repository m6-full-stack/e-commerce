import axios, { AxiosResponse } from 'axios'

export const api = axios.create({
  baseURL: 'https://fullstack-project-qi7p.onrender.com/',
  // baseURL: 'http://localhost:3333/',
})
