
import axios from 'axios'
import { IloginData, IResponseLogin } from '../interfaces/LoginInterface';

export const api = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 5000,
});
