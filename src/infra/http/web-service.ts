import axios from 'axios';
import { getToken } from '../../utils';

const api = axios.create({
  baseURL: 'http://localhost:3355/api',
});

api.interceptors.request.use(
  (config) => {
    const token =
      'JuCpvV85ypauOihZ0tKcMh0lbAjKYxdlkP2q6221TXMqXv0ajiqVkO6k7/7J58kGyfFnNvySXPBZrYe7x71LBSmC+gotWtUlYo/BX00EZ/FPSgROv3HEjdhQ7P5IG2psES2J606AmElBZzymAqkG8efu0wRtB7Exh1w9pjxFOjRk/e6TLmiAwA8hBlIryNrE5sEtRS7IBlShiCsjYxZB2ZcK2fhlOwXDkohw63M672huCjOOMye9lGBZD5se31P/IY+Gmr+hGRsKgqnFAjoksWLri/ooPx2LhoTAzr8iaQSzMOdjUepHf82GKdG3X+JfrQva7tw53BvlI4IL6jixDU5Ryo9vAHXQvwx3enzHYeVloOGGZtvi33RFE/F3wnU9K90likPPe44uHdHWGFxCIhHBqaXEDPvuWr/HGu+ElTNJ4rFtnRlFjCBCdKFfbe0nLWvXDGwv9luCrSo6I7TBYwPJgZJ/eOUAoTpezPCY1KbJhQVio4gRpF2D6R/F6cZDmpxqkxzTDOz33BarqUSu9w==';

    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const auth = {
  authentication: (params: any) => api.post('v1/authentication', params),
};

export const students = {
  listAll: () => api.get('v1/students'),
};

export const classes = {
  listAll: () => api.get('v1/classes'),
};
