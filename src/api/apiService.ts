import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from './apiConfig';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
  });

  export const get = async (endpoint: string): Promise<AxiosResponse> => {
    return apiClient.get(endpoint);
  };
  
  export const getById = async (endpoint: string, id: any): Promise<AxiosResponse> => {
    return apiClient.get(`${endpoint}/${id}/`);
  };
  
  export const post = async (endpoint: string, data: any): Promise<AxiosResponse> => {
    return apiClient.post(endpoint, data);
  };
  
  export const put = async (endpoint: string, id: any, data: any): Promise<AxiosResponse> => {
    return apiClient.put(`${endpoint}/${id}/`, data);
  };
  
  export const deleteRequest = async (endpoint: string, id: any): Promise<AxiosResponse> => {
    return apiClient.delete(`${endpoint}/${id}/`);
  };