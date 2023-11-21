import axios, { AxiosRequestConfig } from 'axios';

const configApi: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const configMockApi: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_MOCK_API_URL,
};

export const api = axios.create(configApi);

export const mockApi = axios.create(configMockApi);
