import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3031',
};
const client: AxiosInstance = axios.create(config);

export default client;
