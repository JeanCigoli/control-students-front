import axios from 'axios';
import { getToken, transformObjectToQueryParams } from '../../utils';

const api = axios.create({
  baseURL: 'http://localhost:3355/api',
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const auth = {
  authentication: (params: any) => api.post('v1/tokens', params),
};

export const students = {
  listAll: (params?: any) =>
    api.get(`v1/students?${transformObjectToQueryParams(params || {})}`),
  create: (params: any) => api.post('v1/students', params),
  delete: (id: string) => api.delete(`v1/students/${id}`),
};

export const classes = {
  listAll: () => api.get('v1/classes'),
  listType: () => api.get('v1/classes-types'),
  create: (params: any) => api.post('v1/classes', params),
  delete: (id: string) => api.delete(`v1/classes/${id}`),
};

export const period = {
  listAll: () => api.get('v1/periods'),
};

export const graphics = {
  listStudent: () => api.get('v1/graphics/students'),
  listClasses: () => api.get('v1/graphics/classes'),
};
