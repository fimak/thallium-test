import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '',
};
const client: AxiosInstance = axios.create(config);

export default client;
